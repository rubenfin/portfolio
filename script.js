console.log("script");

//reveal on scroll
ScrollReveal({
  reset: false,
  distance: '75px',
  duration: 1500,
  delay: 300
})

ScrollReveal().reveal('.nav-right li, .navbar',  {delay : 0, origin: 'top', interval: 100})
ScrollReveal().reveal('.container',  {delay : 600})
ScrollReveal().reveal('.card1', {delay : 0, origin: 'left'})
ScrollReveal().reveal('.card2', {delay: 500, origin: 'bottom'})
ScrollReveal().reveal('.card3', {delay: 1000, origin: 'right'})

//parralax on mousemove
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 800;
    const y = (window.innerHeight - e.pageY * speed) / 800;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
} 

// preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none"
})