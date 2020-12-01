import { toggleActiveClass } from "../common/slider";

export function configureFadeSlider(contentSelectors, prev, next) {
  const prevButton = document.querySelector(prev);
  const nextButton = document.querySelector(next);
  const itemsArr = createMultiselectorsArray(contentSelectors);
  const numberOfElems = itemsArr[0].length;
  
  let currIndex = 0;

  // init 
  itemsArr.forEach(arr => toggleActiveClass(arr, currIndex));

  if (!isSameArrLength(itemsArr)) {
    console.log('Number of items of each selector is not the same!');
    return;
  }

  prevButton.addEventListener('click', () => {
    currIndex--;
    
    if (currIndex < 0) {
      currIndex = numberOfElems - 1;
    }

    itemsArr.forEach(arr => toggleActiveClass(arr, currIndex));
  });

  nextButton.addEventListener('click', () => {
    currIndex++;
    
    if (currIndex === numberOfElems) {
      currIndex = 0;
    }

    itemsArr.forEach(arr => toggleActiveClass(arr, currIndex));
  });
}

function createMultiselectorsArray(contentSelectors) {
  const result = [];

  contentSelectors.forEach(selector => {
    let items = document.querySelectorAll(selector);
    result.push(items);
  });

  return result;
}

// Check if all the inner arrays have the same length
function isSameArrLength(arr) {
  const length = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (!Array.isArray(arr) || arr[i].length !== length) {
      return false;
    }
  }

  return true;
}

export default configureFadeSlider;
