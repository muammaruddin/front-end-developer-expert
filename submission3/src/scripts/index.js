// eslint-disable-next-line max-classes-per-file
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

// Dynamic import for regenerator-runtime
(async () => {
  await import('regenerator-runtime');
})();

const app = new App({
  button: document.querySelector('.nav-toggle'),
  drawer: document.querySelector('.nav-drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.getElementById('maincontent');

  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.tabIndex = -1;
    mainContent.focus();
  });
});

class SkipContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<a href="#maincontent" class="skip-link">Skip To Content</a>
    `;
  }
}
customElements.define('skip-to-content', SkipContent);

class FooterDescription extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<p>Copyright &#169; 2024 - Muammaruddin Restaurant Apps</p>
    `;
  }
}
customElements.define('footer-description', FooterDescription);

// eslint-disable-next-line no-use-before-define
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const navBar = document.querySelector('.app-bar');
  if (window.scrollY > 50) {
    navBar.classList.add('scrolled');
    navBar.classList.remove('navbar-transparent');
  } else {
    navBar.classList.remove('scrolled');
    navBar.classList.add('navbar-transparent');
  }
}
