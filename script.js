'use strict';
// Global settings
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModalBtns = document.querySelectorAll('.show-modal');

// Functions
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Event Listeners to open or close modal
for (let i = 0; i < openModalBtns.length; i++) {
  openModalBtns[i].addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

// Event Listener to close modal if user pressed esc key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
