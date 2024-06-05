import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
        <div class="detail-content">
            <h2 class="restaurant_title"> Restoran ${restaurant.name}</h2>
            <img crossorigin="anonymous" class="restaurant_poster" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="restaurant_poster"/>
            <div class="restaurant_info">
                <h3 class="info_tagline">Information</h3>
                <p class="info_address">Alamat : ${restaurant.address}</p>
                <p class="info_city">Kota : ${restaurant.city}</p>
            </div>
            <div class="restaurant_overview">
                <h3 class="overview_tagline">Overview</h3>
                <p class="info_description">${restaurant.description}</p>
            </div>
        </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <div class="content">
            <img 
            crossorigin="anonymous"
            class="content-item"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
            alt="ini adalah gambar ${restaurant.name}"
            />
            <h4 class="content-item_title"><a href="/#/detail/${
  restaurant.id
}">${restaurant.name}</a></h4>
            <div class="content-item_details">
            <p class="content-item_city">${restaurant.city}</p>
            <p class="content-item_rating">${restaurant.rating}</p>
            </div>
            <p class="content-item_description">${restaurant.description}</p>
        </div>
`;
const createLikeMovieButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const addReviews = () => `
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

const createUnlikeMovieButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  // eslint-disable-next-line max-len
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
  addReviews,
};
