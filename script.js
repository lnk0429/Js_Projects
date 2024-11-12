function playMusic(e) {
  const audioNum = this.document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  );
  const keyUnit = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audioNum) return;
  audioNum.currentTime = 0; //start playing music at the head
  audioNum.play();
  keyUnit.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keyUnits = this.document.querySelectorAll(".key");
keyUnits.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", playMusic);
