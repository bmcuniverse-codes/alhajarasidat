/*
  ==========================================================
  LIVE STREAM SETUP
  ==========================================================
  Paste the actual YouTube/Facebook/streaming URL below.

  Example:
  const WATCH_URL = "https://www.youtube.com/watch?v=YOUR_ID";

  The Watch Now button will remain locked until:
  Saturday, 26 September 2026 at 1:00 PM GMT+1.
*/
const WATCH_URL = "PASTE_YOUR_LIVE_STREAM_LINK_HERE";

const EVENT_TIME = new Date("2026-09-26T13:00:00+01:00").getTime();

const els = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  button: document.getElementById("watchButton"),
  label: document.getElementById("watchLabel"),
  note: document.getElementById("watchNote"),
  modal: document.getElementById("streamModal"),
  message: document.getElementById("modalMessage"),
  streamLink: document.getElementById("streamLink")
};

let eventLive = false;

function pad(value) {
  return String(value).padStart(2, "0");
}

function setLiveState() {
  eventLive = true;
  els.days.textContent = "00";
  els.hours.textContent = "00";
  els.minutes.textContent = "00";
  els.seconds.textContent = "00";

  els.button.disabled = false;
  els.button.classList.add("is-live");
  els.label.textContent = "Watch Now — Live";
  els.note.textContent = "The celebration is now live. Tap Watch Now to join the stream.";
}

function updateCountdown() {
  const remaining = EVENT_TIME - Date.now();

  if (remaining <= 0) {
    if (!eventLive) setLiveState();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.minutes.textContent = pad(minutes);
  els.seconds.textContent = pad(seconds);
}

function openModal() {
  els.modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  els.modal.hidden = true;
  document.body.style.overflow = "";
}

els.button.addEventListener("click", () => {
  if (!eventLive) return;

  const configured =
    WATCH_URL &&
    WATCH_URL.trim() &&
    !WATCH_URL.includes("PASTE_YOUR_LIVE_STREAM_LINK_HERE");

  if (configured) {
    window.open(WATCH_URL, "_blank", "noopener,noreferrer");
    return;
  }

  els.message.innerHTML =
    'The event is live, but the streaming link has not been added yet. Open <code>script.js</code> and replace <code>WATCH_URL</code> with the YouTube or Facebook live link.';
  els.streamLink.hidden = true;
  openModal();
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.modal.hidden) closeModal();
});

updateCountdown();
setInterval(updateCountdown, 1000);
