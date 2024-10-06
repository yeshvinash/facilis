// NAVBAR TOGGLE
document.getElementById("hamburger-1").addEventListener("click", () => {
  document.getElementsByTagName("html")[0].classList.toggle("show-menu");
});

// MENU CLOSE ON LINK CLICK
document.querySelectorAll(".header-wrap").forEach((ele) => {
  ele.addEventListener("click", () => {
    document.getElementsByTagName("html")[0].classList.remove("show-menu");
  });
});

// SCROLL DOWN
function scrollWin() {
  window.scrollBy(0, 300);
}

// HEADER COLOR CHANGE ON SCROLL
let className = "bgWhite";
let scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

// SCROLLSPY
(function () {
  const scrollspys = document.querySelectorAll(".scrollspy");
  const links = document.querySelector(".header");
  const linksHeight = links.offsetHeight;
  const allLinks = links.querySelectorAll("a");
  function scrollspy() {
    scrollspys.forEach((current) => {
      var _ = current;
      let currentElementOffset = _.offsetTop;
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentElementOffset <= scrollPosition + linksHeight) {
        allLinks.forEach((currentLink) => {
          currentLink.classList.remove("active");
        });
        const currentID = current.getAttribute("id");
        document.querySelector(`a[href="#${currentID}"]`).classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", scrollspy);
})();
