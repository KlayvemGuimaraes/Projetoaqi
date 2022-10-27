import app from "./firebase.js";

import {
  getFirestore,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const db = getFirestore(app);

function showConfet(id) {
  const element = document.getElementById(id);
  party.confetti(element);
}

function updateScore(id, br, other) {
  const element = document.getElementById(id);
  element.innerText = `${br} x ${other}`;
}

function throwGalvao() {
  const audio = new Audio("assets/audio/gol.mp3");
  audio.playbackRate = 2
  audio.play();
}

function showEmoji() {
    const emoji = document.getElementById('emoji-gol')
    emoji.classList.add('show')

    setTimeout(() => {
      emoji.classList.remove('show')
    }, 4000);
}

onSnapshot(doc(db, "matches", "br-01"), (doc) => {
  const { br, other } = doc.data();

  updateScore("br-01", br, other);

  if (br > 0) {
    throwGalvao();
    showConfet("br-01");
    showEmoji();
  }
});
