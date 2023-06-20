'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

//openModal function
const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

//closeModal function
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

//open modal
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", openModal);
};

//close modal
btnCloseModal.addEventListener("click", closeModal);
//overlay to close modal
overlay.addEventListener("click", closeModal);

//esc key to close modal
document.addEventListener("keydown", function(event){
    console.log(event.key);

    if(event.key === "Escape" && !modal.classList.contains("hidden")) {
         closeModal();
    };
});