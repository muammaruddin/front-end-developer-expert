import RestaurantSource from '../../data/restaurant-source';
import { ItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
<section class="hero">
  <div class="description">
    <h1>Welcome To Water Boom Resto</h1>
    <p>Temukan Menu Spesial kalian & Bersiaplah untuk perjalanan kuliner yang tak terlupakan</p>
  </div>
  <picture>
    <source media="(max-width: 480px)" srcset="./images/heroes-responsive/hero-image_2-small.jpg">
    <source media="(max-width: 768px)" srcset="./images/heroes-responsive/hero-image_2-medium.jpg">
    <source media="(max-width: 1000px)" srcset="./images/heroes-responsive/hero-image_2-large.jpg">
    <img src="./images/heroes-responsive/hero-image_2-default.jpg" alt="hero image">
  </picture>
</section>

<section  class="container"  id="maincontent">
  <h1>Jelajahi & Temukan Restoran</h1>

  <div class="restaurants"></div>
</section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += ItemTemplate(restaurant);
    });
  },
};

export default Home;
