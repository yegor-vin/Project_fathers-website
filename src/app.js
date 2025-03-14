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

panelImage.onclick = function () {
  panelModal.style.display = 'block';
  panelModalImage.src = this.src;
  panelCaptionText.innerHTML = this.alt;
};

const panelModalCloseBtn = document.querySelector('.panel__modal-close');

panelModalCloseBtn.onclick = function () {
  panelModal.style.display = 'none';
};

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slideshow__img-container');
  // set all slides display to none
  /* for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  } */

  slides.forEach((slide) =>
    slide.classList.remove('slideshow__img-container--visible')
  );

  // increase slide number
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add('slideshow__img-container--visible');
  setTimeout(showSlides, 3300);
}

const batteriesGallery = document.querySelector('.batteries__image-container');

const mainImg = batteriesGallery.querySelector('.batteries__main-img');

const itemImages = batteriesGallery.querySelectorAll('.slider__item');

batteriesGallery.addEventListener('click', (event) => {
  event.preventDefault();
  const parent = event.target.parentNode;
  const imageLink = parent.getAttribute('href');
  if (imageLink === null) {
    return;
  }

  mainImg.src = imageLink;
});

const burgerMenuBtn = document.querySelector('.header__burger-menu-btn');
const burgerMenu = document.querySelector('.header__burger-menu');

const closeBtn = document.querySelector('.header__close-btn');
const navLinks = document.querySelectorAll('.nav__link');

// Function to close the burger menu
function closeBurgerMenu() {
  burgerMenu.classList.remove('burger-menu--is-active');
}

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', closeBurgerMenu);
});

burgerMenuBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu--is-active');
});

closeBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu--is-active');
});
