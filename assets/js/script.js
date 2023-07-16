// Menu Toggle
const navbarNav = document.querySelector(".navbar-nav"),
  hamburger = document.querySelector("#hamburger-menu"),
  searchBtn = document.querySelector(".search-form"),
  searchIcon = document.querySelector("#search-button"),
  searchBox = document.querySelector("#search-box"),
  shoppingBtn = document.querySelector(".shopping-cart"),
  shoppingCart = document.querySelector("#shopping-cart-button"),
  itemDetailModal = document.querySelector("#item-detail-modal"),
  itemDetailBtn = document.querySelector(".item-detail-button"),
  itemDetailBtns = document.querySelectorAll(".item-detail-button");

// Hamburger Menu Click
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Click the sidebar to remove the navbar menu
document.addEventListener("click", function (r) {
  if (!hamburger.contains(r.target) && !navbarNav.contains(r.target)) {
    navbarNav.classList.remove("active");
  }

  // Click the sidebar to remove the Search Box
  if (!searchIcon.contains(r.target) && !searchBtn.contains(r.target)) {
    searchBtn.classList.remove("active");
  }

  // Click the Sidebar to remove the Shopping Cart
  if (!shoppingBtn.contains(r.target) && !shoppingCart.contains(r.target)) {
    shoppingBtn.classList.remove("active");
  }
});

// Search Box Click
document.querySelector("#search-button").onclick = (e) => {
  searchBtn.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Shopping Btn Click
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingBtn.classList.toggle("active");
  e.preventDefault();
};

// Modal Box
itemDetailBtns.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// Click the Close to remove Modal
document.querySelector(".modal .modal-container .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Click the Sidebar to remove Modal
itemDetailBtns.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

/*============= scroll section active link ==============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar .navbar-nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar .navbar-nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
