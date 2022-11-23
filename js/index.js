let page = document.querySelector('.page');
page.classList.remove('loaded')
let tl = gsap.timeline();

tl.from('.header-mail',{y: -200, opacity: 0,});
tl.from('.header-phone', { y: -200, opacity: 0, }, "-=0.5");
tl.from('.title-logo', { width: 0, opacity: 0, });
tl.from('.title-text', { x: 110, opacity: 0, });
tl.from('.img-1', { y: 100, opacity: 0,});
tl.from('.img-2', { x: 100, y: -200, opacity: 0,});
tl.from('.img-3', { x: -100, opacity: 0,});
tl.from('.img-4', { y: 200, opacity: 0,});
tl.from('.about-item', { x: -200, opacity: 0, } ,'-=2.5');
tl.from('.soon', { x: -200, opacity: 0, }, '-=1');
tl.from('.anim',{x: 200, opacity: 0});