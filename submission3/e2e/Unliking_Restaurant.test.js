const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Unliking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('#query', 5);
  I.seeElement('#query');

  I.see('There is no favorite restaurant', '.restaurant-item__not__found');
});

// eslint-disable-next-line no-undef
Scenario('liking and then unliking a restaurant', async ({ I }) => {
  I.see('There is no favorite restaurant', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.cards a', 5);
  I.seeElement('.cards a');

  //   Liking Restaurant
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.cards a').first();
  const firstRestaurantName = (await I.grabTextFrom(firstRestaurant)).trim();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.cards', 5);
  I.seeElement('.cards');

  const likedRestaurantName = (
    await I.grabTextFrom('.restaurant__name')
  ).trim();

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  //   Unliking Restaurant
  I.waitForElement('.cards a', 5);
  I.seeElement('.cards a');

  // eslint-disable-next-line no-undef
  I.click(locate('.cards a'));

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('There is no favorite restaurant', '.restaurant-item__not__found');
});
