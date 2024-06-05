import { ItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
    <section  class="container favorite">
      <h1>Restoran Favorit Kalian</h1>

      <div class="search-container">
        <input id="query" type="text" class="query" placeholder="Cari Restoran Favorit Kalian">
        <button id="btn-search">Search</button>
      </div>
    
      <div class="restaurants" id="restaurants"></div>
    </section>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    const queryInput = document.getElementById('query');
    const searchButton = document.getElementById('btn-search');

    // Click event for the search button
    searchButton.addEventListener('click', () => {
      const query = queryInput.value;
      callback(query);
    });

    // Keydown event for the input field to listen for the Enter key
    queryInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const query = queryInput.value;
        callback(query);
      }
    });
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(ItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        There is no favorite restaurant
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
