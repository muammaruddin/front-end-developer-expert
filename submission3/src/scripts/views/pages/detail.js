import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { DetailTemplate, addReview } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
  <div id="restaurant-detail"></div>
  <div id="content_review"></div>
  <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');

    restaurantContainer.innerHTML = DetailTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });

    const reviewContainer = document.querySelector('#content_review');
    reviewContainer.innerHTML = addReview();
    const submitButton = document.querySelector('.btn-submit');
    const formName = document.querySelector('#name');
    const formReview = document.querySelector('#review');
    const restaurantId = restaurant.id;
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      if (formName.value === '' || formReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Kolom tidak boleh kosong!');
        formName.value = '';
        formReview.value = '';
      } else {
        const review = {
          id: restaurantId,
          name: formName.value,
          review: formReview.value,
        };
        const sendReview = await RestaurantSource.sendReview(review);
        formName.value = '';
        formReview.value = '';
        console.log(sendReview);
      }
    });
  },
};

export default Detail;
