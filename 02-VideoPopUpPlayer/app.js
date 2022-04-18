let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector("video");

btn.addEventListener("click", () => {
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
  video.currentTime = 0;
});

close.addEventListener("click", () => {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
});
