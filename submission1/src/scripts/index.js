import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './data-display.js';

const navbarDrawerElement = document.querySelector('#navigation-drawer-id');
const navbarContainerElement = document.querySelector('#navbar-container-id');
const navbarElement = document.querySelector('#navbar-id')
const bodyGeneralElement = document.querySelector('body');

navbarDrawerElement.addEventListener('click', event => {
    navbarContainerElement.classList.toggle('open');
    event.stopPropagation();
});

bodyGeneralElement.addEventListener('click', event => {
    navbarContainerElement.classList.remove('open');
    event.stopPropagation();
});

window.addEventListener('scroll', () => {
    const scrollOnPage = window.pageYOffset;
  
    if (scrollOnPage > 0 ) {
      navbarElement.style.backgroundColor = '#25282d';
      navbarElement.style.position = 'fixed';
    } else {
      navbarElement.style.backgroundColor = 'transparent';
      navbarElement.style.position = 'absolute';
    }
  
  });
