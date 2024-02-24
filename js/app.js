//Бургер меню
const burgerMenu = document.querySelector(".burger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".mobile-menu__close");

//Модалка для новостей
const popupNews = document.querySelector(".news__pop-up");
const popupWindow = document.querySelector(".pop-up__inner");
const popupClose = document.querySelectorAll(".pop-up__close-btn");
const readMore = document.querySelectorAll(".news__item-footer__inner");

//Модалка для смены пароля
const changePass = document.querySelector(".change-pass");
const changePassPopup = document.querySelector(".change-pass__pop-up");
const changePassPopupWindow = document.querySelector(".change-pass__inner");

//Модалка для редактирования данных
const editSettings = document.querySelector(".edit-settings");
const editSettingsPopup = document.querySelector(".edit-settings__pop-up");
const editSettingsPopupWindow = document.querySelector(".edit-settings__inner");

//Модалка для редактирования сохраненных данных
const editSavedData = document.querySelectorAll(".saved-data__edit");
const editSavedDataPopup = document.querySelector(".edit-saved-data");
const editSavedDataPopupWindow = document.querySelector(".saved-data__pop-up");

//Модалка для добавления новых данных
const addNewData = document.querySelector(".add-data");
const addNewDataPopup = document.querySelector(".add-new-data");
const addNewDataPopupWindwow = document.querySelector(".new-data__pop-up");

//Модалка для использования сохраненных данных
const useSavedData = document.querySelector(".use-saved-data");
const useDataPopup = document.querySelector(".use-data__pop-up");
const useDataWindow = document.querySelector(".use-data__inner");

//Модалка для перемещения товара
const sendProduct = document.querySelectorAll(".send-product");
const sendPopup = document.querySelector(".send__pop-up");
const sendWindow = document.querySelector(".send__inner");

//Модалка для добавления и редактирования товара и груза
const addMoreProduct = document.querySelector(".add-more-product");
const editProduct = document.querySelector(".edit-product");
const addCargoBtn = document.querySelector(".add-cargo__btn");
const searchBtn = document.querySelector(".search-btn");
const addPopup = document.querySelector(".add__pop-up");
const addInner = document.querySelector(".add__inner");

// Модалка подтверждения и отмены заказа оператору
const sendToReview = document.querySelector(".send-to-review");
const deleteProduct = document.querySelector(".delete-product")
const reviewPopup = document.querySelector(".review__pop-up");
const reviewInner = document.querySelector(".review__inner");

//Табы
const tabs = document.querySelector(".personal-acount");
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsContent = document.querySelectorAll(".tabs__content");

//Анимация при скролле
const whyChooseUsItem = document.querySelectorAll(".why-choose-us__item");
const stagesItem = document.querySelectorAll(".stages-item");
const ourSpecialistsItem = document.querySelectorAll(".our-specialists__item");
const servicesItem = document.querySelectorAll(".services__item");
const newsItem = document.querySelectorAll(".news__item");

//Анимация при скролле
const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  whyChooseUsItem.forEach((item) => {
    if (windowCenter >= 1070) {
      item.classList.add("animation-class");
    }
  });
  stagesItem.forEach((item) => {
    if (windowCenter >= 2050) {
      item.classList.add("animation-class");
    }
  });
  ourSpecialistsItem.forEach((item) => {
    if (windowCenter >= 2820) {
      item.classList.add("animation-class");
    }
  });
  servicesItem.forEach((item) => {
    if (windowCenter >= 4400) {
      item.classList.add("animation-class");
    }
  });
  newsItem.forEach((item) => {
    if (windowCenter >= 5150) {
      item.classList.add("animation-class");
    }
  });
};
scrollAnimation();
window.addEventListener("scroll", () => {
  scrollAnimation();
});

// Табы
if (tabs) {
  tabs.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("tabs__btn")) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    }
  });
}

const tabsHandler = (path) => {
  tabsBtn.forEach((el) => {
    el.classList.remove("tabs__btn--active");
  });
  document
    .querySelector(`[data-tabs-path="${path}"]`)
    .classList.add("tabs__btn--active");

  tabsContent.forEach((el) => {
    el.classList.remove("tabs__content--active");
  });
  document
    .querySelector(`[data-tabs-target="${path}"]`)
    .classList.add("tabs__content--active");
};

//Закрытие-открытие модалки новости
if (readMore) {
  readMore.forEach((item) => {
    item.addEventListener("click", () => {
      popupNews.classList.add("active_shadow");
      popupWindow.classList.add("active_window");
      document.body.style.overflow = "hidden";
    });
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (popupNews) {
        popupNews.classList.remove("active_shadow");
      }
      if (popupWindow) {
        popupWindow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки смены пароля
if (changePass) {
  changePass.addEventListener("click", () => {
    changePassPopup.classList.add("active_shadow");
    changePassPopupWindow.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (changePassPopup) {
        changePassPopup.classList.remove("active_shadow");
      }
      if (changePassPopupWindow) {
        changePassPopupWindow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки редкатирования личных данных

if (editSettings) {
  editSettings.addEventListener("click", () => {
    editSettingsPopup.classList.add("active_shadow");
    editSettingsPopupWindow.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (editSettingsPopup) {
        editSettingsPopup.classList.remove("active_shadow");
      }
      if (editSettingsPopupWindow) {
        editSettingsPopupWindow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки редкатирования сохраненных данных

if (editSavedData) {
  editSavedData.forEach((item) => {
    item.addEventListener("click", () => {
      editSavedDataPopup.classList.add("active_shadow");
      editSavedDataPopupWindow.classList.add("active_window");
      document.body.style.overflow = "hidden";
    });
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (editSavedDataPopup) {
        editSavedDataPopup.classList.remove("active_shadow");
      }
      if (editSavedDataPopupWindow) {
        editSavedDataPopupWindow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки добавления новых данных

if (addNewData) {
  addNewData.addEventListener("click", () => {
    addNewDataPopup.classList.add("active_shadow");
    addNewDataPopupWindwow.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (addNewDataPopup) {
        addNewDataPopup.classList.remove("active_shadow");
      }
      if (addNewDataPopupWindwow) {
        addNewDataPopupWindwow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки использования сохраненных данных

if (useSavedData) {
  useSavedData.addEventListener("click", () => {
    useDataPopup.classList.add("active_shadow");
    useDataWindow.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (useDataPopup) {
        useDataPopup.classList.remove("active_shadow");
      }
      if (useDataWindow) {
        useDataWindow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки перемещения товара
if (sendProduct) {
  sendProduct.forEach((item) => {
    item.addEventListener("click", () => {
      sendPopup.classList.add("active_shadow");
      sendWindow.classList.add("active_window");
      document.body.style.overflow = "hidden";
    });
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (sendPopup) {
        sendPopup.classList.remove("active_shadow");
      }
      if (sendWindow) {
        sendWindow.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

// Модалка подтверждения и отмены заказа оператору
if (sendToReview) {
  sendToReview.addEventListener("click", () => {
    reviewPopup.classList.add("active_shadow");
    reviewInner.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if(deleteProduct) {
  deleteProduct.addEventListener("click", ()=> {
    reviewPopup.classList.add("active_shadow");
    reviewInner.classList.add("active_window");
    document.body.style.overflow = "hidden";
  })
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (reviewPopup) {
        reviewPopup.classList.remove("active_shadow");
      }
      if (reviewInner) {
        reviewInner.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие модалки добавления и редактирования товара и груза
if (addMoreProduct) {
  addMoreProduct.addEventListener("click", () => {
    addPopup.classList.add("active_shadow");
    addInner.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (editProduct) {
  editProduct.addEventListener("click", () => {
    addPopup.classList.add("active_shadow");
    addInner.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (addCargoBtn) {
  addCargoBtn.addEventListener("click", () => {
    addPopup.classList.add("active_shadow");
    addInner.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (searchBtn) {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addPopup.classList.add("active_shadow");
    addInner.classList.add("active_window");
    document.body.style.overflow = "hidden";
  });
}

if (popupClose) {
  popupClose.forEach((item) => {
    item.addEventListener("click", () => {
      if (addPopup) {
        addPopup.classList.remove("active_shadow");
      }
      if (addInner) {
        addInner.classList.remove("active_window");
      }
      document.body.style.overflow = "inherit";
    });
  });
}

//Закрытие-открытие бургер-меню

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open-menu");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open-menu");
  document.body.style.overflow = "inherit";
});

//Слайдер

const testimonialsSwiper = new Swiper(".testimonials-slider", {
  loop: true,
  slidesPerView: 1.6,
  spaceBetween: 24,
  breakpoints: {
    745: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

//Кастомное выпадающее меню

const element = document.querySelector(".js-choice");
if(element) {
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    chart: {
      width: 189,
      height: 126,
    },
    tooltip: { enabled: false },
    credits: { enabled: false },
    title: {
      text: "",
    },
    yAxis: {
      labels: {
          align: 'left',
          x: 0,
          y: -2
      },
      title: {
          text: ''
      }
  },
    plotOptions: {
      series: {
        lineWidth: 1,
        marker: {
          fillColor: "rgb(54, 106, 220)",
          lineColor: "rgb(54, 106, 220)",
          radius: 1,
        },
      },
    },

    series: [
      {
        name: "John",
        data: [0, 10, 15, 5, 15, 3, 18],
        color: "rgb(159, 164, 175)",
        enableMouseTracking: false,
      },
    ],

  });
});
