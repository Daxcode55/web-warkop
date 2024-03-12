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

// data menu
const menu = [
  {
    name: 'Expresso',
    img: 'assets/express-menu.png'
  },

  {
    name: 'Americano Coffe',
    img: 'assets/produk-kopi.jpg'
  }
]


// render modal box
let modalParent = document.querySelector(".modal");

function renderModalBox(m) {
  let modalContent = `
  <div class="modal-content">
      <i class="fa-solid fa-x close-modal" onclick="closeModal()"></i>
      <div class="main-content-modal">
        <img src="${m.img}" alt="" />
        <div class="desc-modal">
        <h3>${m.name}</h3>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
        accusantium tempora officiis porro libero quo aliquid odit? Omnis
        culpa veritatis aliquid eveniet veniam adipisci error ipsam eum
        atque, magni facilis!
        </p>
        <button>Pesan Sekarang</button>
      </div>
    </div>
  </div>
  `;
  modalParent.innerHTML = modalContent;
}

let cardsMenu = document.querySelectorAll(".card-menu");
cardsMenu.forEach(card => {
  card.addEventListener("click", () => {
    renderModalBox(menu[0]);
    modalParent.style.display = "block";
  });
});

function closeModal() {
  modalParent.style.display = "none";
}

window.onclick = (e) => {
  if (e.target == modalParent) {
    modalParent.style.display = "none";
  }
};

// open page menu
function openPageMenu(pageName, elmnt, color) {
  let i;
  let wrapMenuContent = document.querySelectorAll(".wraper-menu-content");
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
