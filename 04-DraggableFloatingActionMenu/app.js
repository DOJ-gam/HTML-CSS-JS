const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", (event) => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(navigation);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  navigation.style.left = `${leftVal + movementX}px`;
  navigation.style.top = `${topVal + movementY}px`;
  //   console.log("X", movementX);
  //   console.log("Y", movementY);
}

navigation.addEventListener("mousedown", () => {
  navigation.addEventListener("mousemove", onDrag);
});

// navigation.addEventListener("mouseover", () => {
//   navigation.addEventListener("mousemove", onDrag);
// });

document.addEventListener("mouseup", () => {
  navigation.removeEventListener("mousemove", onDrag);
});
