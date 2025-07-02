const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,
  effect: "slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-next",
  },
});

// Получаем элементы для модалок
const swiperWrapper = document.querySelector(".swiper-wrapper");
const modalContainer = document.querySelector("body");

swiperWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-btn")) {
    const card = e.target.closest(".swiper-slide");
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    modal.style.display = "flex";
    document.body.classList.add("no-scroll");
  }
});

// Закрытие модалки по крестику
modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    const modal = e.target.closest(".modal");
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});
