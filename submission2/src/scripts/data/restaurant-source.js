import Swal from 'sweetalert2';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async resturantList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detailMenuRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const AllMenu = responseJson.restaurant;
    const foodsMenu = AllMenu.menus;
    return foodsMenu.foods;
  }

  static async detailDrinksMenuRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const AllMenu = responseJson.restaurant;
    const drinkMenu = AllMenu.menus;
    return drinkMenu.drinks;
  }

  static async detailCustomerReviews(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const responseRestaurant = responseJson.restaurant;
    return responseRestaurant.customerReviews;
  }

  static async sendReview(review) {
    try {
      Swal.fire({
        title: 'Submitting Review...',
        text: 'Please wait while we submit your review',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          Swal.close();
          Swal.fire({
            icon: 'success',
            title: 'Review Submitted',
            text: 'Thank you for your feedback!',
            footer: 'Please refresh your page to see your feedback',
          });
          resolve(response);
        }, 500);
      });
    } catch (error) {
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: `<p>${error.message}</p>`,
      });

      throw error;
    }
  }
}

export default RestaurantSource;
