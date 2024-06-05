import FavoriteRestaurant from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="main">
      <h4><span>Restoran</span> favorit kalian</h4>
    </div>
    <div id="container" class="container">
        `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('#container');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
export default Like;
