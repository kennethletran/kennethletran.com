// TODO: refactor into modules if too much

// Menu
const menuBtn = document.querySelector('.menu__button');
const menuModal = document.querySelector('.menu__modal');


function handleMenuClick() {
  const body = document.body;

  if(menuBtn.classList.contains('menu--open')) {
    menuBtn.classList.remove('menu--open');
    menuModal.classList.remove('modal--open');

    const returnToScrollPosition = () => {
      body.classList.remove('prevent-scroll');
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    returnToScrollPosition();
    
  } else {
    menuBtn.classList.add('menu--open');
    menuModal.classList.add('modal--open');
    
    const keepScrollPosition = () => {
      body.classList.add('prevent-scroll');
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    };
    keepScrollPosition();
  }
}

menuBtn.addEventListener('click', handleMenuClick);

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});