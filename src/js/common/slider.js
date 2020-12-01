export function toggleActiveClass(array, itemIndex, activeClass = 'active') {
  array.forEach((item, index) => {
    if (itemIndex === index) {
      item.classList.add(activeClass);
    } else {
      item.classList.remove(activeClass);
    }
  })
}