import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get serachField () { return $('[name="search[keywords]"]') }
    get btnSubmit () { return $('[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchProduct (char) {
        await super.inputEventValue(this.serachField, char)
        await super.clickElement(this.btnSubmit)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
