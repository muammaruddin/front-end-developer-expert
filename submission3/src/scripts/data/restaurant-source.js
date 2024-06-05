import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async homeRestaurant() {
    try {
      const { default: Swal } = await import('sweetalert2');

      Swal.fire({
        title: 'Loading...',
        text: 'Please wait while we fetch the data',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();

      Swal.close();
      return responseJson.restaurants;
    } catch (error) {
      const { default: Swal } = await import('sweetalert2');
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'Waduh...',
        text: 'Something went wrong!',
        footer: `<p>${error.message}</p>`,
      });

      throw error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const { default: Swal } = await import('sweetalert2');

      Swal.fire({
        title: 'Loading...',
        text: 'Please wait while we fetch the data',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();

      Swal.close();
      return responseJson.restaurant;
    } catch (error) {
      const { default: Swal } = await import('sweetalert2');
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'waduh...',
        text: 'Something went wrong!',
        footer: `<p>${error.message}</p>`,
      });

      throw error;
    }
  }

  static async sendReview(review) {
    try {
      const { default: Swal } = await import('sweetalert2');

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
      const { default: Swal } = await import('sweetalert2');
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
