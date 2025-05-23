//MOBILE
const burgerBtn = document.getElementById('burger');
const burgerSlide = document.querySelector('.burger-slide') as HTMLElement;
const burgerSlideCloseBtn = document.querySelector('.close-btn') as HTMLElement;

burgerBtn?.addEventListener('click', () => {
    burgerSlide.style.display = 'flex';
})
burgerSlideCloseBtn.addEventListener('click', () => {
    burgerSlide.style.display = 'none';
})

