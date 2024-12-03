"use strict";
// navbar-toogle class active
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");
menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggleBtn.classList.remove("active");
  });
}

// header sticky back to top
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.onscroll = () => {
  if (window.scrollY >= 300) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

// search box toggle
const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");
const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];
// looping element
for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
// move cycle on scrool!
const deliveryBoy = document.querySelector("[data-delivery-boy]");
let deliveryBoyMove = -80;
let lastScrollPos = 0;
// bergerak dari kiri ke kanan!
window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
  if (deliveryBoyTopPos < 400 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;
    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }
    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

// const isDeliveryPos = [
//   {
//     id: 1,
//     name: "deliveryBoyMove",
//     value: 50,
//     lastScrollPos: 150,
//   },
//   {
//     id: 2,
//     name: "searchContainer",
//     lastScrollPos: 160,
//     value: 12,
//     status: true,
//   },
//   {
//     id: 3,
//     name: "searchBoxElems",
//     value: 10,
//     lastScrollPos: 100,
//     status: false,
//     value: 13,
//   },
//   {
//     id: 4,
//     name: "ScroolPos",
//     value: 0,
//     status: "False",
//   },
// ];

// const users = isDeliveryPos.filter((user) => user.status === true);
// console.log(users);

// function deliveryBoyMove(memoize) {
//   const memoize = () => {
//     let cache = {};
//     return function (user) {
//       if (cache[user.id]) {
//         return cache[user.id];
//       } else if (cache <= user[user.id]) {
//         cache[user.id] = user.value;
//       } else {
//         return (memoize.length === user[users.id]) === null;
//       }
//     };
//   };
// }

// deliveryBoyMove();

// document.addEventListener("DOMContentLoaded", function () {
//   const deliveryBoyMove = document.getElementById("deliveryBoyMove");
//   deliveryBoyMove.appendChild(deliveryBoyMove);
//   deliveryBoyMove.addEventListener("keydown", () => {
//     if (deliveryBoyMove.appendChild(deliveryBoyMove) === undefined) {
//       deliveryBoyMove.parentElement = menuToggleBtn.parentElement(deliveryBoy[this.parentElement.firstChild.id]);
//     } else if (deliveryBoyMove <= this.parentElement[this.firstChild.deliveryBoy]) {
//       deliveryBoyMove.removeAttribute(this.parentElement[id]);
//     } else if (deliveryBoyMove.removeAttribute[this.parentElement[id]] === 'undefined') {
//     }else {
//       deliveryBoyMove.appendChild((this.parentElement !== null) = (deliveryBoyMove) => {
//         deliveryBoyMove.appendChild(deliveryBoyMove).addEventListener((this) => this.parentElement)
//       })
//       return deliveryBoyMove.filter((parentElement) => {
//         return deliveryBoyMove === parentElement;
//       })
//     }
//   });
//   return null;
// });

// return deliveryBoyMove;

// deliveryBoyMove((activeScrollPos) => {parent}) === parseInt;
