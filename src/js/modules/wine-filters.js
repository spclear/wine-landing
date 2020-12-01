import { toggleActiveClass } from "../common/slider";

export function filterItems() {
  const filtersList = document.querySelectorAll('.futured__filters-item');
  const itemsList = document.querySelectorAll('.futured__item');
  
  // magic line & active link: initial state
  toggleActiveClass(filtersList, 0);
  magicLine(filtersList[0]);

  filtersList.forEach((filter, index) => {
    filter.addEventListener('click', (e) => {
      const wineType = e.target.getAttribute('data-wine-type');
      
      if (!e.target || !wineType) {
        return;
      }

      toggleActiveClass(filtersList, index);
      magicLine(filtersList[index]);
      
      if (wineType == 'all') {
        filterContent(null, itemsList);
        return;
      }
      
      filterContent(wineType, itemsList);
    });
  })
}

function filterContent(filterValue, contentItems) {
  contentItems.forEach(item => {
    if (filterValue && item.getAttribute('data-wine-type') != filterValue) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
      fade(item);
    }
  })
}

function fade(item) {
  item.classList.add('fade');
  setTimeout(() => {
    item.classList.remove('fade');
  }, 400)
}

function magicLine(item) {
  const magicLine = document.querySelector('.magic-line__indicator');
  
  magicLine.style.cssText = `
    transform: translateX(${item.offsetLeft}px);
    width: ${item.clientWidth}px;
  `
}
