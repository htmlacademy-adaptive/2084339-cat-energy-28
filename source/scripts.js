const menuButton = document.querySelector(`.header__menu-button`);
const menu = document.querySelector(`.header__nav-list`);
const header = document.querySelector(`.header`);

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault()

  if (menu.classList.contains('header__nav-list--open')) {
    menu.classList.remove('header__nav-list--open')
    menu.classList.add('header__nav-list--close')
    menuButton.classList.add('header__menu-button--burger')

    setTimeout(() => {
      header.classList.remove('header--mobile-menu')
    }, 1000)
  } else {
    menuButton.classList.remove('header__menu-button--burger')
    menu.classList.add('header__nav-list--open')
    menu.classList.remove('header__nav-list--close')
    header.classList.add('header--mobile-menu')
  }

})

console.log(menuButton)
