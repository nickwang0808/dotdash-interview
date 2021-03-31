const buttonOne = document.querySelector("#b-1");
const buttonTwo = document.querySelector("#b-2");
const popupOne = document.querySelector("#p-1");
const popupTwo = document.querySelector("#p-2");

buttonOne.addEventListener("click", () => {
  // un-hide popopOne
  popupTwo.classList.toggle("on-screen");
  popupOne.classList.remove("on-screen");
});
buttonTwo.addEventListener("click", () => {
  // toggle p-2
  popupOne.classList.toggle("on-screen");
  popupTwo.classList.remove("on-screen");
});
