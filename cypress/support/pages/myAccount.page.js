/// <reference types="cypress" />
class MyAccountPage {
    get #name() { return cy.get('#account_first_name')}
    get #lastName() { return cy.get('#account_last_name')}
    get #emailaddress() { return cy.get('#account_email')}
    get display() { return cy.get('#account_display_name')}
    get password() { return cy.get('#password_1')}
    get confirm() { return cy.get('#password_2')}
    get currentPass() { return cy.get('#password_current')}
    get save() { return cy.get('.woocommerce-Button')}
    get messageError() { return cy.get('.woocommerce-error')}
    get message() { return cy.get('.woocommerce-message')}

    insertName(name){
        this.#name.clear().type(name)
    }

    insertLastName(last){
        this.#lastName.clear().type(last)
    }
    
    insertEmail(email){
        this.#emailaddress.clear().type(email)
    }

    insertDisplay(display){
        this.display.clear().type(display)
    }

    clearName(){
        this.#name.clear()
    }

    clearLastName(){
        this.#lastName.clear()
    }
    
    clearEmail(){
        this.#emailaddress.clear()
    }

    clearDisplay(){
        this.display.clear()
    }

    insertNewPass(pass){
        this.password.type(pass)
    }

    insertCurrentPass(pass){
        this.currentPass.type(pass)
    }

    confirmPass(pass){
        this.confirm.type(pass)
    }

    clickSave(){
        this.save.click()
    }

}

module.exports = new MyAccountPage()