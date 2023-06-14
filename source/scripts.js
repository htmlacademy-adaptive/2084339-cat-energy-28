const menuButton = document.querySelector(`.header__menu-button`);
const menu = document.querySelector(`.header__nav-list`);

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault()

  if (menu.classList.contains('header__nav-list--open')) {
    menu.classList.remove('header__nav-list--open')
    menu.classList.add('header__nav-list--close')
  } else {
    menu.classList.add('header__nav-list--open')
    menu.classList.remove('header__nav-list--close')
  }
  
})

console.log(menuButton)
