import { configureBurger } from './modules/burger-menu';
import { configureCarousel } from './modules/carousel-slider';
import { configureFadeSlider } from './modules/fade-slider';
import { filterItems } from './modules/wine-filters';

document.addEventListener('DOMContentLoaded', () => {

  // burger menu
  configureBurger();

  // New Wine slider 
  const newWineContentSelectors = [
    '.new-wine__item-info',
    '.new-wine__preview-slider .slider__content-image',
  ];
  configureFadeSlider(newWineContentSelectors, '.new-wine .prev', '.new-wine .next');

  // Featured Events slider 
  configureFadeSlider(['.featured .slider__item'], '.featured .prev', '.featured .next');

  // Client Review slider
  configureCarousel('.review__slider-content', '.review .slider__nav-item');

  // Futured Products filters
  filterItems();
});