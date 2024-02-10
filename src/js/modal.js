const refs = {
  modalBackdrop: document.querySelector('[data-backdrop]'),
  modalOpenBtn: document.querySelector('[data-open-modal]'),
  modalCloseBtn: document.querySelector('[data-close-modal]'),
};

refs.modalOpenBtn.addEventListener('click', onModalOpen);
refs.modalCloseBtn.addEventListener('click', onModalClose);
refs.modalBackdrop.addEventListener('click', onBackDropClick);

function onModalOpen() {
  window.addEventListener('keydown', onEscapeKeypress);
  refs.modalBackdrop.classList.remove('is-hidden');
}

function onModalClose() {
  window.removeEventListener('keydown', onEscapeKeypress);
  refs.modalBackdrop.classList.add('is-hidden');
}

function onBackDropClick(evt) {
  if (evt.target === evt.currentTarget) {
    onModalClose();
  }
}

function onEscapeKeypress(evt) {
  if (evt.code === 'Escape') {
    onModalClose();
  }
}
