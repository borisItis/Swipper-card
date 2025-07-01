const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,
  effect: "slider",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Работа с модальными окнами
const modalTriggers = document.querySelectorAll(".swiper-slide");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

// Открытие модального окна
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Запрет прокрутки фона
  });
});

// Закрытие модального окна
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".modal").style.display = "none";
    document.body.style.overflow = "auto"; // Возврат прокрутки
  });
});

// Закрытие при клике вне модального окна
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Закрытие по ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }
});
