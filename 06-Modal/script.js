'use strict';

//listing out all the elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//openModal function
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

//closeModal function
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//loop for open modal function
for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal)};

//close modal - either by clicking closeBtn or overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//keyboard close event
document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden"))  {
            closeModal();
    }
});
