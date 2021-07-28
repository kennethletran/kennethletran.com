import './scss/main.scss';

// TODO: refactor into modules if code gets cluttered
// DOM elements
const menu = document.querySelector('.menu__button');
const menuModalInner = document.querySelector('.menu__modal--inner');
const menuModalOuter = document.querySelector('.menu__modal--outer');
const heroBtn = document.querySelector('.hero__button');
const body = document.body;

// GSAP Animations

// Landing Timeline
let headline = CSSRulePlugin.getRule('.headline-reveal::after');
let landingAnim = gsap.timeline();
landingAnim.to('.preloader', {opacity: 0, ease: 'power4.in'}, 4)
.from('.hero__picture', {opacity: 0, yPercent: 30, scale: 1.3, duration: 1.75})
.to(headline, {cssRule: {scaleY: 0}, duration: 1.2}, '-=1.25')
.from('.menu__button', {opacity: 0, xPercent: 25, ease: 'slow', duration: 1.5}, '-=0.5')
.from('.hero__introduction', {opacity: 0, yPercent: 25, stagger: 0.3, duration: 1.25}, '-=0.75')
.from('.hero__button', {opacity: 0, duration: 1.25, yPercent: 10}, '-=0.75');

// Project Timeline
// TODO: wrap the card elem in div block with overflow hidden to create effect similar to headline -- current effect shows blurriness from box-shadow
let projectSection = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: 'power4.inOut'
  },
  scrollTrigger: {
    trigger: '.projects',
    start: 'top 70%',
    end: 'center top',
    toggleActions: 'play pause resume pause'
  }
});
projectSection.from('.projects__headline', {
  yPercent: 20,
  duration: 1
})
.from('.projects__subheadline', {
  yPercent: 20,
  duration: 0.9
}, '-=0.5')
.from('.em__card', {
  scaleX: 0,
  duration: .75
}, '-=1')
.from('.em__card__screenshot', {
  scale: 1.3,
  xPercent: -10,
  duration: 1,
}, '-=0.5')
.from('.em__card__title', {
  yPercent: 20,
  duration: 1
}, '-=0.2')
.from('.em__card__info', {
  yPercent: 10,
  duration: 1.25,
}, '-=0.5')
.from('.em__card__links', {
  yPercent: 10,
  duration: 0.75
}, '-=0.25')
.from('.hch__card', {
  scaleX: 0,
  duration: 0.75
})
.from('.hch__card__screenshot', {
  scale: 1.3,
  xPercent: -10,
  duration: 1,
}, '-=0.5')
.from('.hch__card__title', {
  yPercent: 20,
  duration: 1
}, '-=0.2')
.from('.hch__card__info', {
  yPercent: 10,
  duration: 1.25,
}, '-=0.5')
.from('.hch__card__links', {
  yPercent: 10,
  duration: 0.75
}, '-=0.25')

// let skillContainers = gsap.utils.toArray('.skills__container');
// skillContainers.forEach((el) => {
//   gsap.from(el, {
//     scaleY: 0,
//     duration: 1.5,
//     ease: 'power4.in'
//   });
// });

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

// Prevent scroll during preloader
window.addEventListener('load', () => {
  body.classList.add('prevent-scroll');
  setTimeout(() => {
    body.classList.remove('prevent-scroll');
  }, 4500)
});

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
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
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