window.onscroll = () => {
  let top = document.body.scrollTop;
  let top2 = document.documentElement.scrollTop;
  let navbar = document.querySelector(".navbar");

  if (top > 80 || top2 > 80) {
    navbar.style.backgroundColor = "rgba(1, 1, 1, 0.8)";
  } else {
    navbar.style.backgroundColor = "rgba(1, 1, 1, 0)";
    navbar.style.borderBottom = "none";
  }
};

const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const searchBtn = document.querySelector("#search");
const searchform = document.querySelector(".search-form");
const inputSearch = document.querySelector("#inputSearch");
searchBtn.onclick = (e) => {
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

// open page menu
function openPageMenu(pageName, elmnt, color) {
  let i;
  const wrapMenuContent = document.querySelectorAll(".wraper-menu-content");
  let btnLink = document.querySelectorAll(".link-btn");

  for (i = 0; i < wrapMenuContent.length; i++) {
    wrapMenuContent[i].style.display = "none";
  }

  for (i = 0; i < btnLink.length; i++) {
    btnLink[i].style.background = "";
    btnLink[i].style.color = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.background = color;
  elmnt.style.color = "white";
}

document.getElementById("defaultOpen").click();
