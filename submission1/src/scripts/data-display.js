import('../public/data/DATA.json').then(({ default: restaurantData }) => {
    let restaurantDataContent = restaurantData.restaurants;
    let restaurantDataList = ``;
    restaurantDataContent.forEach(function (restaurantData) {
        restaurantDataList += `
        <div id="content-list-id" class="content-list">
        <img class="content-image" src="${restaurantData.pictureId}" alt="Restaurant ${restaurantData.name} Image">
        <div class="restaurant-information">
            <h2 class="restaurant-information-title" tabindex="0">${restaurantData.name}</h2>
            <p class="restaurant-information-rating">Rate : ${restaurantData.rating}</p>
            <p class="restaurant-information-description">${restaurantData.description.slice(0, 250)}...</p>
          </div>
        </div>`
    })
    document.querySelector('#content-card-id').innerHTML = restaurantDataList;
})