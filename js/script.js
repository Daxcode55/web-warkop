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
  console.log("rifki");
  searchform.classList.toggle("active");
  inputSearch.focus();
  e.preventDefault();
};

document.addEventListener("click", (e) => {
  if (!searchBtn.contains(e.target) && !navbarNav.contains(e.target)) {
    searchform.classList.remove("active");
  }
});

const wrapArr = document.querySelector(".wraper-arrow");
const wrapContent = document.querySelector(".content-produk");
const containPrduct = document.querySelector(".produk");

wrapArr.onclick = () => {
  wrapContent.style.display = "block";
  wrapArr.style.display = "none";
  containPrduct.style.marginBottom = "0";
};

document.querySelector(".btn-resize-produk").onclick = () => {
  wrapContent.style.display = "none";
  wrapArr.style.display = "flex";
  containPrduct.style.marginBottom = "7rem";
};

// modal box
let modalBox = document.querySelector(".modal");
let eyes = document.querySelectorAll("#eye");

eyes.forEach((eye) => {
  eye.addEventListener("click", () => {
    modalBox.style.display = "block";
  });
});

document.querySelector(".close-modal").onclick = () => {
  modalBox.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modalBox) {
    modalBox.style.display = "none";
  }
};
