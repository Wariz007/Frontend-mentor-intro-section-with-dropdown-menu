"use strict";
//MOBILE
const burgerBtn = document.getElementById('burger');
const burgerSlide = document.querySelector('.burger-slide');
const burgerSlideCloseBtn = document.querySelector('.close-btn');
const navAndContentsContainer = document.querySelector('.navigation-and-contents-container');
const featuresBtn = document.getElementById('features-btn');
const featuresDropDown = document.querySelector('.features-drop-down div');
const companyBtn = document.querySelector('.company-dropdown');
const companyDropdown = document.querySelector('.company-dropdown div');
burgerBtn === null || burgerBtn === void 0 ? void 0 : burgerBtn.addEventListener('click', () => {
    burgerSlide.style.display = 'flex';
    navAndContentsContainer === null || navAndContentsContainer === void 0 ? void 0 : navAndContentsContainer.classList.add('shadow');
});
burgerSlideCloseBtn.addEventListener('click', () => {
    burgerSlide.style.display = 'none';
    navAndContentsContainer === null || navAndContentsContainer === void 0 ? void 0 : navAndContentsContainer.classList.remove('shadow');
});
featuresBtn === null || featuresBtn === void 0 ? void 0 : featuresBtn.addEventListener('click', () => {
    featuresDropDown.classList.toggle('show');
});
companyBtn === null || companyBtn === void 0 ? void 0 : companyBtn.addEventListener('click', () => {
    companyDropdown.classList.toggle('show');
});
