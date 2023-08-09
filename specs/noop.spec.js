const { expect } = require('chai');
const { seleniumWD } = require('promod');
const { $, $$, browser } = seleniumWD;

describe('Tes Suite 1(Login)', () => {
  const username = $(`input[placeholder="Ім'я користувача"]`);
  const password = $(`input[placeholder="пароль"]`);
  const headerSighIn = $$('.btn.btn-secondary').get(0);
  const sighIn = $$('.btn.btn-primary').get(0);
  const ErrorMessage = $$('.alert.alert-danger').get(0);

  it('test case 1(Positive)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('admin');
    await password.sendKeys('admin');
    await sighIn.click();
  });

  it('test case 2(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('admin1111');
    await password.sendKeys('admin1111');
    await sighIn.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });

  it('test case 3(Positive)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('user');
    await password.sendKeys('user');
    await sighIn.click();
  });
  it('test case 4(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('admin');
    await password.sendKeys('admin202020');
    await sighIn.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });
  it('test case 5(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('admin202020');
    await password.sendKeys('admin');
    await sighIn.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });

  it('test case 6(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('');
    await password.sendKeys('');
    await sighIn.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });

  it('test case 7(Positive)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('admin');
    await password.sendKeys('admin');
    await sighIn.click();
  });

  it('test case 8(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('admin');
    await password.sendKeys('');
    await sighIn.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });

  it('test case 9(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await username.sendKeys('');
    await password.sendKeys('admin');
    await sighIn.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });
});

describe('Test Suite 2(Registration)', () => {
  const username = $(`input[placeholder="Ім'я користувача"]`);
  const password = $(`input[placeholder="пароль"]`);
  const name = $(`input[placeholder="Ім'я"]`);
  const email = $(`input[placeholder="Імейл"]`);
  const SighUp = $$('.btn.btn-primary').get(0);
  const headerSighUp = $$('.btn.btn-secondary').get(1);
  const ErrorMessage = $$('.alert.alert-danger').get(0);

  it('Test case 1(Positive)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighUp.click();
    await username.sendKeys('');
    await name.sendKeys('test1');
    await email.sendKeys('test1');
    await password.sendKeys('test1');
    await SighUp.click();
  });
  it('Test case 2(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighUp.click();
    await username.sendKeys('test1');
    await name.sendKeys('');
    await email.sendKeys('test1');
    await password.sendKeys('test1');
    await SighUp.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });
  it('Test case 3(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighUp.click();
    await username.sendKeys('test1');
    await name.sendKeys('test1');
    await email.sendKeys('');
    await password.sendKeys('test1');
    await SighUp.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });
  it('Test case 4(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighUp.click();
    await username.sendKeys('test1');
    await name.sendKeys('test1');
    await email.sendKeys('test1');
    await password.sendKeys('');
    await SighUp.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });
  it('Test case 5(Negative)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighUp.click();
    await username.sendKeys('');
    await name.sendKeys('');
    await email.sendKeys('');
    await password.sendKeys('');
    await SighUp.click();
    expect(await ErrorMessage.isDisplayed()).to.eql(true, 'Message should be visible');
  });
  it('Test case 6(Positive)', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighUp.click();
    await username.sendKeys('異體字');
    await name.sendKeys('康熙字典體,');
    await email.sendKeys('俗字');
    await password.sendKeys('強强');
    await SighUp.click();
  });
});

describe('Test Suite 3(Search fields)', () => {
  const username = $(`input[placeholder="Ім'я користувача"]`);
  const password = $(`input[placeholder="пароль"]`);
  const sighIn = $$('.btn.btn-primary').get(0);
  const headerSighIn = $$('.btn.btn-secondary').get(0);
  const priceForm = $$(`input[placeholder="Ціна"]`).get(0);
  const filterButton = $$('.btn.btn-default').get(0);
  const workVoulume = $$(`input[placeholder="Робочий об'єм"]`).get(0);
  const producer = $$(`input[placeholder="Виробник"]`).get(0);
  const filterResults = $('.active.brand');

  it.only('test case 1', async () => {
    await browser.get('http://localhost:4000/');
    await headerSighIn.click();
    await password.sendKeys('admin');
    await username.sendKeys('admin');
    await sighIn.click();
    await priceForm.sendKeys(10000);
    await filterButton.click();
  });
});
