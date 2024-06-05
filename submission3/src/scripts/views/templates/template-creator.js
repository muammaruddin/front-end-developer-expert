import API_ENDPOINT from '../../globals/api-endpoint';

// Function to load lazysizes and parent-fit dynamically
const loadLazySizes = async () => {
  await import('lazysizes');
  await import('lazysizes/plugins/parent-fit/ls.parent-fit');
};

const DetailTemplate = (restaurant) => `
<div class="detail-restaurant">
  <h2 class="restaurant__name">${restaurant.name}</h2>
  
  <div class="image-container-detail">
      <img crossorigin="anonymous" src="${API_ENDPOINT.SM_IMG(restaurant.pictureId)}" alt="${restaurant.name}">
  </div>


  <div class="restaurant__info">
    <h3>Information</h3>
    <div class="detail-goup">
        <h4>Rating : ${restaurant.rating}</h4>
        <h4>Alamat : ${restaurant.address}</h4>
        <h4>Kota : ${restaurant.city}</h4>
        <h4>Deskripsi :</h4>
        <p>${restaurant.description}</p>
    </div>
  </div>

  <div class="restaurant__menu">
      <h3>Menu</h3>
      <div class="detail-goup">
        <h4>Makanan</h4>
        <ul>
        ${`${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join(',  ')}.`}
        </ul>
        <h4>Minuman</h4>
        <ul>
        ${`${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join(',  ')}.`}
        </ul>
      </div>
  </div>

  <div class="restaurant__reviews">
      <h3>Customer Reviews</h3>
      ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="detail-goup review">
            <h4>${review.name}</h4>
            <p>${review.review}</p>
            <small>${review.date}</small>
          </div>
      `,
    )
    .join('')}
  </div>
</div>
`;

const ItemTemplate = (restaurant) => `
<div class="cards lazyload">
    <div class="image-container">
        <img class="lazyload" crossorigin="anonymous" data-src="${API_ENDPOINT.SM_IMG(restaurant.pictureId || '-')}" alt="${restaurant.name || '-'}" class="zoom-image">
    </div>
    <h4>Rating : ${restaurant.rating || '-'}</h4>
    <a href="#/detail/${restaurant.id || '-'}">
        <h2 class="restaurant__name">${restaurant.name || '-'}</h2>
    </a>
    <p>${restaurant.description || '-'}</p>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const addReview = () => `
<div class="form-container">
  <form id="form">
    <h1>Tambah Review</h1>
    <label for="name">Nama</label>
    <input type="text" id="name" name="name" placeholder="Nama" required />

    <label for="review">Review</label>
    <textarea name="review" id="review" maxlength="50" required></textarea>

    <button class="btn-submit">Tambah Review</button>
  </form>
</div>
`;

// Load lazysizes when the module is loaded
loadLazySizes();

export {
  DetailTemplate,
  ItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  addReview,
};
