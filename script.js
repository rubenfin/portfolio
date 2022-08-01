console.log("script");


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