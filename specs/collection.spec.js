//@ts-check
const { waitForCondition } = require('sat-utils');
const { expect } = require('chai');
const { engine } = require('../launcher/engine');

const { $, $$, browser } = engine;

describe('Work With collections', () => {
  afterEach(async () => {
    await browser.executeScript(() => localStorage.clear());
  });

  it.only('check button count', async () => {
    await browser.get('http://localhost:4000');
    await waitForCondition(() => $('button').isDisplayed(), { message: 'Button is not displayed', timeout: 5000 });
    const buttons = $$('button');
    const buttonsCount = await buttons.count();
    expect(buttonsCount).to.eql(3);
    await browser.sleep(5000);

    it('check button text', async () => {
      await browser.get('http://localhost:4000');
      await waitForCondition(() => $('button').isDisplayed(), { message: 'Button is not displayed', timeout: 5000 });
      const buttons = $$('button');
      const buttonText = await buttons.map(async (button) => {
        return await button.getText();
      });
      expect(buttonText).to.deep.equal(['Увійти,  Зареєструватися, Увійти']);
      console.log(buttonText);
    });
  });
});
