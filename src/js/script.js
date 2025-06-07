document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".header__burger-btn");
  const headerSection = document.querySelector(".header-section");
  const body = document.querySelector("body");
  const filterMobileBtnArea = document.querySelector('.catalog-tools__filter');
  const filterHeaderBtnArea = document.querySelector(' .catalog-filter__header-btn');
    const asideCatalog = document.querySelector('.catalog-filter');

  if (burgerBtn && headerSection) {
    burgerBtn.addEventListener("click", () => {
      headerSection.classList.toggle("is-shown");
      body.classList.toggle("not-scrolled");
      burgerBtn.classList.toggle("is-open");
    });
  }
  if (filterMobileBtnArea && asideCatalog) {
    filterMobileBtnArea.addEventListener("click", () => {
      filterMobileBtnArea.classList.toggle("is-chosen");
      asideCatalog.classList.toggle("is-shown");
      body.classList.toggle("not-scrolled");
    });
  }
    if (filterHeaderBtnArea && asideCatalog) {
    filterHeaderBtnArea.addEventListener("click", () => {
      filterHeaderBtnArea.classList.toggle("is-chosen");
      asideCatalog.classList.toggle("is-shown");
      body.classList.toggle("not-scrolled");
    });
  }
});
