let lastScrollTop = 0;
const element = document.getElementById("myNavbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling Down -> Play forward class
    element.classList.remove("isactive");
    element.classList.add("nonactive");
  } else {
    // Scrolling Up -> Play reverse class
    element.classList.remove("nonactive");
    element.classList.add("isactive");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
