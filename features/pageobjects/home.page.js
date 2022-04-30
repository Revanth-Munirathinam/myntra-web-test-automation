

const Page = require('./page');
const chai = require('chai');
chai.Assertion.addProperty('visible', require('chai-visible'));
const expect = chai.expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get homePageLogo () {
        return $('#desktop-header-cnt');
    }

    get searchBar () {
        return $('//input[@class="desktop-searchBar"]');
    }

    get searchIcon () {
        return $('//span[@class="myntraweb-sprite desktop-iconSearch sprites-search"]');
    }

    get searchResultsPage() {
        return $('//span[text()="T-shirts For Men & Women"]')
    }

    get sortBy() {
        return $('//div[@class="sort-sortBy"]//span[@class="myntraweb-sprite sort-downArrow sprites-downArrow"]')
    }

    get sortLowToHigh() {
        return $('//input[text()="Price: Low to High" and @value="price_asc"]')
    }

    get priceList() {
        return $('//span[@class="product-discountedPrice"]')
    }

    /**
     * a method to wait for homepage to load
     */
    async waitForHome () {
        await (await this.homePageLogo).waitForExist();
        expect (await this.homePageLogo).to.exist;
    }

    /**
     * a method to search a text in Search Page
     */
     async search (text) {
        expect (await this.searchBar).to.exist;
        await (await this.searchBar).setValue(text);
        await (await this.searchIcon).click();
    }
    /**
     * a method to validate search results page
     */
     async validateSearchResults () {
        await (await this.searchResultsPage).waitForExist();
        expect (await this.searchResultsPage).to.exist;
    }

    /**
     * a method to choose sort by option
     */
     async sortBy (option) {
        expect (await this.sortBy).to.exist;
        // await (await this.sortBy).click();
        browser.moveToObject (this.sortBy, 1034, 325);

        await (await this.sortLowToHigh).waitForExist();
        expect (await this.sortLowToHigh).to.exist;
        await (await this.sortLowToHigh).click();
    }

    /**
     * a method to validate sortBy filtered
     */
       async validateSortByLowToHigh (option) {
        await (await this.priceList).waitForExist();
        expect (await this.priceList).to.exist;

        var price = [];
        price = browser.findElements(await this.priceList).getText();

        expect(price).to.equals(price.sort());

    }


}

module.exports = new HomePage();
