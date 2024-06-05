import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    
 <section class="description">
  <div class="hero">
    <h1>Welcome To Water Boom Resto</h1>
    <p>Temukan Menu Spesial kalian & Bersiaplah untuk perjalanan kuliner yang tak terlupakan</p>
  </div>
  <img src="./images/heros/hero-image_2.jpg" alt="hero" />
</section>

<div class="hero__inner">
  <h4>Jelajahi & Temukan Restoran</h4>
</div>

<div id="container" class="container"></div>



        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.resturantList();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('#container');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
