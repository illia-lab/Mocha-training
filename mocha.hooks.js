
const {seleniumWD} = require('promod');

before(async function() {
  const {getDriver, browser} = seleniumWD;

	await getDriver(browser);

  global.browser = browser;

});

after(async function() {
  await global.browser.quit();
});