/// <reference types="cypress" />
class CheckoutPage {
        get fields() { return cy.get('.woocommerce-billing-fields [for]')}
        get #firstName() { return cy.get("#billing_first_name")}
        get #lastName() { return cy.get('#billing_last_name')}
        get #company() { return cy.get('#billing_company')}
        get #country() { return cy.get('#select2-billing_country-container')}
        get #address1() { return cy.get('#billing_address_1')}
        get #address2() { return cy.get('#billing_address_2_field')}
        get #city() { return cy.get('#billing_city')}
        get #state() { return cy.get('#select2-billing_state-container')}
        get #postcode() { return cy.get('#billing_postcode')}
        get #phone() { return cy.get('#billing_phone')}
        get #email() { return cy.get('#billing_email')}
        get #terms() { return cy.get('#terms')}
        get #order() { return cy.get('#place_order')}

    fillCheckout(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone, email){
        this.#firstName.type(nome)
        this.#lastName.type(sobrenome)
        this.#company.clear().type(empresa)
        this.#country.click().type(pais).get('[aria-selected="true"]').click()
        this.#address1.type(endereco)
        this.#address2.type(complemento)
        this.#city.type(cidade)
        this.#state.click().type(estado+'{enter}')
        this.#postcode.type(cep)
        this.#phone.type(telefone)
        this.#email.type(email)
        this.#terms.click()
        this.#order.click()
    };

    verifyField(){
        this.fields.each(field =>{
            cy.get(field).should('be.visible')
        })
    }
}

module.exports = new CheckoutPage()