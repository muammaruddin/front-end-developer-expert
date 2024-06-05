import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav-list ul'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // eslint-disable-next-line no-use-before-define
  handleScroll();
});

// eslint-disable-next-line no-use-before-define
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const navBar = document.querySelector('.nav-bar');
  if (window.scrollY > 50) {
    navBar.classList.add('scrolled');
    navBar.classList.remove('navbar-transparent');
  } else {
    navBar.classList.remove('scrolled');
    navBar.classList.add('navbar-transparent');
  }
}
