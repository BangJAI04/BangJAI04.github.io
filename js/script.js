/*=====toggle icon navbar=======*/
let menuIcons = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcons.onclick = () => {
  menuIcons.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};

/*=====scrol section active link=======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  /*=====sticky navbar=======*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*=====remove toggle icon and navbar when clic navbar link (scrol)=======*/
  menuIcons.classList.remove('fa-x');
  navbar.classList.remove('active');
};

/*=====scroll reveal=======*/
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=====typed text=======*/
// var typed = new Typed('#auto-type', {
//   Strings: ['Frontend Developer', 'Hockey Player', 'Activist', 'Vidio Editor'],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });
