import { toggleActiveClass } from "../common/slider";

export function configureCarousel(containerSelector, navItemSelector) {
  const sliderContent = document.querySelector(containerSelector);
  const navItems = document.querySelectorAll(navItemSelector);

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      toggleActiveClass(navItems, index);
      sliderContent.style.transform = `translateX(-${100 * (index)}%)`;
    })
  })
}

export default configureCarousel;