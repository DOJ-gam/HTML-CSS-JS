let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");

btn.addEventListener("click", () => {
  btn.classList.add("active");
  clip.classList.add("active");
});
