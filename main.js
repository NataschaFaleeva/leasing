const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__contetn-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});
function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item-activ");
  });

  tabTarget.classList.add("tabs__btn-item-activ");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__contetn-item-activ");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__contetn-item-activ");
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
