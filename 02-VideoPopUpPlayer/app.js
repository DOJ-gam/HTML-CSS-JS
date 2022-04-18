let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");

btn.addEventListener("click", () => {
  btn.classList.add("active");
  clip.classList.add("active");
});

close.addEventListener("click", () => {
  btn.classList.remove("active");
  clip.classList.remove("active");
});
