const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');

var config = require('./../../wdio.conf.js').config;
const pages = {
    home: HomePage
}


Given(/^I launch the application$/, async () => {
    await browser.url(config.baseUrl)
});


When(/^I wait for home page to load$/, async () => {
    await HomePage.waitForHome();
});

When('I search as {string} in search bar', async (text) => {
    await HomePage.search(text);
});


Then('I validate search results page loaded', async () => {
    await HomePage.validateSearchResults();
});


When('I apply sort by option as {string}', async (option) => {
    await HomePage.sortBy(option);
});


Then('I validate all products are sorted by {string}', async (option) => {
    await HomePage.validateSortByLowToHigh(text);
});

