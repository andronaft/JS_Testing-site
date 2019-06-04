

module.exports = {
  'Demo test Google' : function (browser) {
    browser.resizeWindow(1920, 1080);
    browser
      .url('https://rozetka.com.ua/')
      .pause(1000);

    // expect element <body> to be present in 1000ms
    browser.setValue('input[type=text]', 'носки');

    browser.click('header form > button').pause(1000);

    browser.useXpath()
            .click('//*[@id="price[min]"]')
            .setValue('//*[@id="price[min]"]', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('//*[@id="price[min]"]', '100');

    browser.click('//*[@id="price[max]"]')
            .setValue('//*[@id="price[max]"]', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('//*[@id="price[max]"]', '2000');

    browser.useCss().click('#sort_price #submitprice');

    browser.click('#block_with_search > div > div.g-i-tile-l.clearfix > div:nth-child(1)');

    browser.click('rz-cart-button > rz-cart-button-simple > div > div > form > span > span > button');

    browser.click('.toOrder button[type=submit]');

    browser.click('button.btn-link-green');

    browser.click('#reciever_name')
            .setValue('#reciever_name', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('#reciever_name', 'Леопольд Кот');

    browser.click('#reciever_phone')
            .setValue('#reciever_phone', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('#reciever_phone', '+380671234567');

    browser.click('#reciever_email')
            .setValue('#reciever_email', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('#reciever_email', 'leopold@mailforspam.com')
            .click('body')
            .pause(1000);
            
    browser.Keys.ENTER;

    // browser.click('button[name=next_step]');

    browser.click('#orders div.check-method-subl-i-inner > div.check-method-subl-select > div.inline.pos-fix.pickups-select-wrap > a');
    
    browser.click('#orders > div > div > div:nth-child(2) > div:nth-child(1) > div.check-f-i-field-indent > div > div > ul > li:nth-child(2) > div.check-method-subl-i-inner > div.check-method-subl-select > div.inline.pos-fix.pickups-select-wrap > a');

    browser.click('#orders > div > div > div:nth-child(2) > div:nth-child(1) > div.check-f-i-field-indent > div > div > ul > li:nth-child(2) > div.check-method-subl-i-inner > div.check-method-subl-select > div.inline.pos-fix.pickups-select-wrap > div > div.pickups-select-dropdown-wrap > div > ul > li:nth-child(27)');

    browser.click('//*[@id="orders"]/div/div/div[4]/div/div[8]/div/div[2]/input')
            .setValue('//*[@id="orders"]/div/div/div[4]/div/div[8]/div/div[2]/input', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('//*[@id="orders"]/div/div/div[4]/div/div[8]/div/div[2]/input', 'Леопольд');

    browser.click('//*[@id="orders"]/div/div/div[4]/div/div[9]/div/div[2]/input')
            .setValue('//*[@id="orders"]/div/div/div[4]/div/div[9]/div/div[2]/input', ['', [browser.Keys.CONTROL, "a"]])
            .keys('\uE017') // delete them using delete key
            .setValue('//*[@id="orders"]/div/div/div[4]/div/div[9]/div/div[2]/input', 'Кот');

    browser.end();
  }
};