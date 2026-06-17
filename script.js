let lastScrollTop = 0;
const navbar = document.getElementById("myNavbar"); // Grab your HTML navbar

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling Down -> Hide the navbar
    navbar.style.top = "-60px"; 
  } else {
    // Scrolling Up -> Show the navbar
    navbar.style.top = "0";  
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
