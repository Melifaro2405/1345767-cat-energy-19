var navButton = document.querySelector(".page-header__button");
var navigation = document.querySelector(".main-nav");

// если JS загрузился, сворачиваем навигацию .main-nav
navigation.classList.remove("main-nav--visible");
navigation.classList.add("main-nav--hidden");

// высвечиваем кнопку .main-nav__button, т.к.
// класс .main-nav__button--nojs скрывал кнопку, когда JS не загрузился
navButton.classList.remove("page-header__button--nojs");
// и удаляем с кнопки .main-nav__button значок крестика
navButton.classList.remove("page-header__button--cross");

// открываем/закрываем .main-nav, меняя одновременно значок креста на бургер
navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navigation.classList.contains("main-nav--visible")) {
    navigation.classList.remove("main-nav--visible");
    navigation.classList.add("main-nav--hidden");
    navButton.classList.remove("page-header__button--cross");
  } else {
    navigation.classList.add("main-nav--visible");
    navigation.classList.remove("main-nav--hidden");
    navButton.classList.add("page-header__button--cross");
  }
});
