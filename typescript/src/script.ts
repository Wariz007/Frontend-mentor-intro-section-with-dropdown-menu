//MOBILE
const burgerBtn = document.getElementById('burger');
const burgerSlide = document.querySelector('.burger-slide') as HTMLElement;
const burgerSlideCloseBtn = document.querySelector('.close-btn') as HTMLElement;
const navAndContentsContainer = document.querySelector('.navigation-and-contents-container');
const featuresBtn = document.getElementById('features-btn');
const featuresDropDown = document.querySelector('.features-drop-down div') as HTMLElement;
const companyBtn = document.querySelector('.company-dropdown');
const companyDropdown = document.querySelector('.company-dropdown div') as HTMLElement;

burgerBtn?.addEventListener('click', () => {
    burgerSlide.style.display = 'flex';
    navAndContentsContainer?.classList.add('shadow');
})
burgerSlideCloseBtn.addEventListener('click', () => {
    burgerSlide.style.display = 'none';
    navAndContentsContainer?.classList.remove('shadow');
})

featuresBtn?.addEventListener('click', () => {
    featuresDropDown.classList.toggle('show');
})
companyBtn?.addEventListener('click', () => {
    companyDropdown.classList.toggle('show');
})

//DESKTOP
const featuresDropdownForDesktop = document.querySelector('.features-dropdown-for-desktop') as HTMLElement;
const featuresBtnForDesktop = document.getElementById('features');
const companyBtnForDesktop = document.getElementById('company');
const companyDropDownForDesktop = document.querySelector('.company-dropdown-for-desktop') as HTMLElement;
console.log(companyBtnForDesktop);
console.log(companyDropDownForDesktop);

featuresBtnForDesktop?.addEventListener('click', () => {
    featuresDropdownForDesktop.classList.toggle('show');
})
companyBtnForDesktop?.addEventListener('click', () => {
    companyDropDownForDesktop.classList.toggle('show');
})