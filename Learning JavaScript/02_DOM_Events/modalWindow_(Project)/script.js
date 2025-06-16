"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // modal.style.display = "block";  // alternative
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(
    "click",
    openModal
    //     function(){
    //     console.log("Button Clicked");
    //     modal.classList.remove("hidden");
    //     overlay.classList.remove("hidden");
    //     // modal.style.display = "block";  // alternative
    // }
  );
}
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// Now to get the Cross button work we will add event listner and will just add the hidden classes back
btnCloseModal.addEventListener("click", closeModal);

//by clicking outside of modal window , window should get closed
overlay.addEventListener("click", closeModal);

///Handling keypress event
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {// case sensitive
    closeModal();
  }
});
