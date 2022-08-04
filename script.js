console.log("script");

// REVEAL ON SROLL
// Standard reveal options to create revealon scroll animation
ScrollReveal({
  reset: false,
  distance: '75px',
  duration: 1500,
  delay: 300
})

// Target elements and specify options to create reveal animation
ScrollReveal().reveal('.nav-right li, .navbar',  {delay : 0, origin: 'top', interval: 100})
ScrollReveal().reveal('.container',  {delay : 600})
ScrollReveal().reveal('.card1', {delay : 0, origin: 'left'})
ScrollReveal().reveal('.card2', {delay: 450, origin: 'bottom'})
ScrollReveal().reveal('.card3', {delay: 900, origin: 'right'})

// PARRALAX ON MOUSEMOVE
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 800;
    const y = (window.innerHeight - e.pageY * speed) / 800;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
} 

// PRELOADER
var loader = document.getElementById("preloader");

// if page is loaded, change display style to "none", so the loader goes away 
window.addEventListener("load", function(){
  loader.style.display = "none"
})