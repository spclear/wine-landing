export function toggleActiveClass(array, itemIndex) {
  array.forEach((item, index) => {
    if (itemIndex === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}