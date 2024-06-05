import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  SM_IMG: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/small/${pictureId}`,
  MD_IMG: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/medium/${pictureId}`,
  LG_IMG: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/large/${pictureId}`,
};

export default API_ENDPOINT;
