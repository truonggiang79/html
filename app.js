import timeFormat from "./timeFormat.js";
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const progressCurrent = document.querySelector(".progress-current");
const progressDot = document.querySelector(".progress-dot");
const progressTimeCurrent = document.querySelector(".progress-time-current");
const progressTimeDuration = document.querySelector(".progress-time-duration");
let mySong = new Audio("mySong.mp3");

playBtn.onclick = () => {
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  mySong.play();
};

pauseBtn.onclick = () => {
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
  mySong.pause();
};

progressDot.onclick = () => {
  mySong.currentTime = (progressDot.value / 100) * mySong.duration;
  progressCurrent.style.width = `${progressDot.value / 100}%`;
  progressTimeCurrent.innerHTML = timeFormat(mySong.currentTime);
};

mySong.onplay = () => {
  progressTimeDuration.innerHTML = timeFormat(mySong.duration);
};

mySong.ontimeupdate = () => {
  let offSet = (mySong.currentTime / mySong.duration) * 100;
  progressDot.value = offSet;
  progressCurrent.style.width = `${offSet}%`;
  progressTimeCurrent.innerHTML = timeFormat(mySong.currentTime);
};

mySong.onended = () => {
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
};
