export function configureBurger() {
  const openButton = document.querySelector('#burger');
  const closeButton = document.querySelector('.header__nav #close');
  const menuBlock = document.querySelector('.header__nav');

  openButton.addEventListener('click', () => {
    menuBlock.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    menuBlock.classList.remove('active');
  })
}

export default configureBurger;