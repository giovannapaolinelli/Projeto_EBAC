/// <reference types="cypress" />
class RegisterPage {
    get #email() { return cy.get("#reg_email")}
    get #pass() { return cy.get("#reg_password")}
    get #register() { return cy.get(":nth-child(4) > .button")}

    register(email, pass){
        this.#email.wait(200).type(email, {force: true})
        this.#pass.type(pass)
        this.#register.click()
    }
}

module.exports = new RegisterPage()