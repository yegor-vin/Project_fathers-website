'use strict';

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function () {
    this.classList.toggle('active');

    const panel = this.nextElementSibling;

    if (panel.style.display === 'block' && panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.display = 'block';
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });

const modal = document.querySelector('.modal');

const img = document.querySelector('.certificate__img-1');
const img1 = document.querySelector('.certificate__img-2');
const modalImg = document.querySelector('.modal__content');

img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
};

img1.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
};

const span = document.getElementsByClassName('modal__close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};

const panelModal = document.querySelector('.panel__modal');

const panelImage = document.querySelector('.panel__table-img');
const panelModalImage = document.querySelector('.panel__modal-content');
const panelCaptionText = document.querySelector('.panel__caption');

panelImage.onclick = function() {
  panelModal.style.display = 'block';
  panelModalImage.src = this.src;
  panelCaptionText.innerHTML = this.alt;
};

const panelModalCloseBtn = document.querySelector('.panel__modal-close')

panelModalCloseBtn.onclick = function() {
panelModal.style.display = 'none'
}




