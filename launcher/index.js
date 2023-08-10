// @ts-check
const { engine } = require('./engine');

before(async function () {
  await engine.getDriver(engine.browser);
});
after(async function () {
  await engine.browser.quitAll();
});
