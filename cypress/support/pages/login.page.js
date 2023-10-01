/// <reference types="cypress" />

class LoginPage {
    get #username() { return cy.get('#username')}
    get #password() { return cy.get('#password')}
    get loginBtn() { return cy.get('.woocommerce-form > .button')}
    get unknownMailError() { return cy.get('.woocommerce-error')}

    login(email, pass){
        this.#username.wait(200).clear().type(email, {force: true})
        this.#password.type(pass)
        this.loginBtn.click()
    }

    checkLogin(){
        cy.log(this.loginBtn.invoke('attr', 'aria-disabled'))
        return this.loginBtn.invoke('attr', 'aria-disabled')
    }
}

module.exports = new LoginPage()