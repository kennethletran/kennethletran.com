// Menu
const menuBtn = document.querySelector('.menu__button');
const menuModal = document.querySelector('.menu__modal');


function handleMenuClick() {
  if(menuBtn.classList.contains('menu--open')) {
    menuBtn.classList.remove('menu--open');
    menuModal.classList.remove('modal--open');
    document.body.classList.remove('prevent-scroll');
  } else {
    menuBtn.classList.add('menu--open');
    menuModal.classList.add('modal--open');
    document.body.classList.add('prevent-scroll');
  }
}

menuBtn.addEventListener('click', handleMenuClick);