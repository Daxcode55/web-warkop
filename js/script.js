const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".wraper-content");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeAbout", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeAbout";
}



const searchBtn = document.querySelector("#search");
const searchform = document.querySelector(".search-form");
const inputSearch = document.querySelector("#inputSearch");
searchBtn.onclick = (e) => {
  console.log("rifki")
  searchform.classList.toggle("active");
  inputSearch.focus();
  e.preventDefault()
};

document.addEventListener("click", (e) => {
  if (!searchBtn.contains(e.target) && !navbarNav.contains(e.target)) {
    searchform.classList.remove("active");
  }
});
