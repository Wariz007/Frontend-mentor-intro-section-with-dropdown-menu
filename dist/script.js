"use strict";
//MOBILE
const burgerBtn = document.getElementById('burger');
const burgerSlide = document.querySelector('.burger-slide');
const burgerSlideCloseBtn = document.querySelector('.close-btn');
burgerBtn === null || burgerBtn === void 0 ? void 0 : burgerBtn.addEventListener('click', () => {
    burgerSlide.style.display = 'flex';
});
burgerSlideCloseBtn.addEventListener('click', () => {
    burgerSlide.style.display = 'none';
});
