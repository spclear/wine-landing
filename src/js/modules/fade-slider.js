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
    console.log('Number of items for each selector is different!');
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
  const contentArr = [];

  contentSelectors.forEach(selector => {
    let items = document.querySelectorAll(selector);
    contentArr.push(items);
  });

  return contentArr;
}

// Check if all the inner arrays have the same length
function isSameArrLength(arr) {
  const length = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length !== length) {
      return false;
    }
  }

  return true;
}

export default configureFadeSlider;
