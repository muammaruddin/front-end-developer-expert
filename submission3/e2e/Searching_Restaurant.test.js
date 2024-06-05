const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Searching Restaurants');

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
Scenario('searching restaurants', async ({ I }) => {
  I.see('There is no favorite restaurant', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.cards', 5);
  I.seeElement('.cards a');

  const names = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    // eslint-disable-next-line no-undef
    I.click(locate('.cards a').at(i));

    I.waitForElement('#likeButton', 5);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // eslint-disable-next-line no-await-in-loop
    names.push((await I.grabTextFrom('.restaurant__name')).trim());
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');

  I.waitForElement('.restaurant__name', 5);
  I.seeElement('.restaurant__name');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.cards');

  assert.strictEqual(names.length, visibleLikedRestaurants);

  I.waitForElement('#query', 5);
  I.seeElement('#query');

  const searchQuery = names[0].substring(1, 2);
  I.fillField('#query', searchQuery);

  I.pressKey('Enter');
  // mendapatkan daftar film yang sesuai dengan searchQuery
  const matchingRestaurants = names.filter(
    (name) => name.indexOf(searchQuery) !== -1,
  );

  const visibleSearchedLikedRestaurants = await I.grabNumberOfVisibleElements(
    '.cards',
  );

  assert.strictEqual(
    matchingRestaurants.length,
    visibleSearchedLikedRestaurants,
  );
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < matchingRestaurants.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleName = await I.grabTextFrom(
      // eslint-disable-next-line no-undef
      locate('.restaurant__name').at(i + 1),
    );

    assert.strictEqual(matchingRestaurants[i], visibleName);
  }
});
