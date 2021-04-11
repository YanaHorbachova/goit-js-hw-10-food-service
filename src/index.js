import './styles.css';
import menuItems from './menu.json';
import itemsTemplate from './templates/menu-items.hbs';

const markup = itemsTemplate(menuItems);
const menuGalleryRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  menuGalleryRef.insertAdjacentHTML('beforeend', markup);

  checkTheme();

  toggleRef.addEventListener('change', changeTheme);
  function changeTheme() {
    if (!bodyRef.hasAttribute('class')) {
      createClass();
      updateLocalStorage (Theme.DARK);
    } else if (bodyRef.getAttribute('class') === Theme.DARK) {
      updateBodyClass (Theme.DARK, Theme.LIGHT);
      updateLocalStorage (Theme.LIGHT);
    } else {
      updateBodyClass (Theme.LIGHT, Theme.DARK);
      updateLocalStorage (Theme.DARK);
    }
  }

function updateLocalStorage (theme) {
    localStorage.setItem('Theme', theme);
}

function updateBodyClass (carrentClass, newClass) {
  bodyRef.classList.replace(carrentClass, newClass);
}

function createClass () {
  bodyRef.setAttribute('class', Theme.DARK);
} 

function checkTheme() {
    if (localStorage.getItem('Theme') === Theme.DARK) {
      toggleRef.checked = true;
      createClass();
    }
  }