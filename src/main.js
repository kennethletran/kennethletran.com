import './scss/main.scss';

// TODO: refactor into modules if code gets cluttered
// DOM elements
const menu = document.querySelector('.menu__button');
const menuModalInner = document.querySelector('.menu__modal--inner');
const menuModalOuter = document.querySelector('.menu__modal--outer');
const heroBtn = document.querySelector('.hero__button');
const body = document.body;

// GSAP Animations
var headline = CSSRulePlugin.getRule(".headline-reveal::after");
var landingAnim = gsap.timeline();

landingAnim.to('.preloader', {opacity: 0, ease: 'power4.in'}, 4)
.from('.hero__picture', {duration: 1, scaleX: .95, scaleY: .95, opacity: 0, ease: "slow"})
.to(headline, {duration: 1.2, cssRule: {scaleY: 0}}, "-=1")
.from('.menu__button', {duration: .75, opacity: 0, y: 5, ease: "slow"}, "-=0.5")
.from('.hero__introduction', {duration: 1, opacity: 0, y: 50, stagger: .2}, "-=.75");



// Modal
function modalFadeIn() {
  gsap.to('.menu__modal--outer, .menu__modal--inner', { duration: .15, opacity: 1, ease: 'power4.in'});
}
function modalFadeOut() {
  gsap.to('.menu__modal--outer, .menu__modal--inner', { duration: .8, opacity: 0, ease: 'power4.out'});
}

// Store scroll position when menu is clicked
function keepScrollPosition() {
  body.classList.add('prevent-scroll');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

// Return to scroll position when modal is closed
function returnToScrollPosition() {
  body.classList.remove('prevent-scroll');
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}


function handleMenuClick() {
  if(menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    menuModalOuter.classList.remove('modal--open');
    menuModalInner.classList.remove('modal--open');
    modalFadeOut();
    returnToScrollPosition();
  } else {
    menu.classList.add('menu--open');
    menuModalOuter.classList.add('modal--open');
    menuModalInner.classList.add('modal--open');
    modalFadeIn();
    keepScrollPosition();
  }
}

// Open/close modal when menu is clicked
menu.addEventListener('click', handleMenuClick);
heroBtn.addEventListener('click', handleMenuClick);

// Allow users to close modal by clicking outside of modal or by pressing ESC key
menuModalOuter.addEventListener('click', function (e) {
  const clickOutside = !e.target.closest('.menu__modal--inner');
  if (clickOutside) {
    menu.classList.remove('menu--open');
    menuModalOuter.classList.remove('modal--open');
    menuModalInner.classList.remove('modal--open');
    gsap.to('.menu__modal--outer', { duration: .8, opacity: 0, ease: 'power4.out'});
    gsap.to('.menu__modal--inner', { duration: .8, opacity: 0, ease: 'power4.out'});
    returnToScrollPosition();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove('menu--open');
    menuModalOuter.classList.remove('modal--open');
    menuModalInner.classList.remove('modal--open');
    gsap.to('.menu__modal--outer', { duration: .8, opacity: 0, ease: 'power4.out'});
    gsap.to('.menu__modal--inner', { duration: .8, opacity: 0, ease: 'power4.out'});
    returnToScrollPosition();
  }
});

// Keep track of window scroll position
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

