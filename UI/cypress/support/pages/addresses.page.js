/// <reference types="cypress" />
class AddressPage {
    get #billingEdit() { return cy.get(':nth-child(1) > .title > .edit')}
    get #shippingEdit() { return cy.get(':nth-child(2) > .title > .edit')}

    get #billingFirstName() { return cy.get("#billing_first_name")}
    get #billingLastName() { return cy.get('#billing_last_name')}
    get #billingCompany() { return cy.get('#billing_company')}
    get #billingCountry() { return cy.get('#select2-billing_country-container')}
    get #billingAddress1() { return cy.get('#billing_address_1')}
    get #billingAddress2() { return cy.get('#billing_address_2_field')}
    get #billingCity() { return cy.get('#billing_city')}
    get #billingState() { return cy.get('#select2-billing_state-container')}
    get #billingPostcode() { return cy.get('#billing_postcode')}
    get #billingPhone() { return cy.get('#billing_phone')}
    get #shippingFirstName() { return cy.get("#shipping_first_name")}
    get #shippingLastName() { return cy.get('#shipping_last_name')}
    get #shippingCompany() { return cy.get('#shipping_company')}
    get #shippingCountry() { return cy.get('#select2-shipping_country-container')}
    get #shippingAddress1() { return cy.get('#shipping_address_1')}
    get #shippingAddress2() { return cy.get('#shipping_address_2_field')}
    get #shippingCity() { return cy.get('#shipping_city')}
    get #shippingState() { return cy.get('#select2-shipping_state-container')}
    get #shippingPostcode() { return cy.get('#shipping_postcode')}

    get messageError() { return cy.get('.woocommerce-error')}
    get message() { return cy.get('.woocommerce-message')}
    get title() { return cy.get('form > h3')}
    get saveBtn() { return cy.get('button.button')}

    clickSave(){
        this.saveBtn.click()
    }

    clickEditBilling(){
        this.#billingEdit.click()
    }

    clickEditShipping(){
        this.#shippingEdit.click()
    }

    fillBillingAddress(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone){
        this.#billingFirstName.clear().type(nome)
        this.#billingLastName.clear().type(sobrenome)
        this.#billingCompany.clear().type(empresa)
        this.#billingCountry.click().type(pais).get('[aria-selected="true"]').click()
        this.#billingAddress1.clear().type(endereco)
        this.#billingAddress2.clear().type(complemento)
        this.#billingCity.clear().type(cidade)
        this.#billingState.click().type(estado+'{enter}')
        this.#billingPostcode.clear().type(cep)
        this.#billingPhone.clear().type(telefone)
    }

    fillShippingAddress(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep){
        this.#shippingFirstName.clear().type(nome)
        this.#shippingLastName.clear().type(sobrenome)
        this.#shippingCompany.clear().type(empresa)
        this.#shippingCountry.click().type(pais).get('[aria-selected="true"]').click()
        this.#shippingAddress1.clear().type(endereco)
        this.#shippingAddress2.clear().type(complemento)
        this.#shippingCity.clear().type(cidade)
        this.#shippingState.click().type(estado+'{enter}')
        this.#shippingPostcode.clear().type(cep)
    }

    clearShippingAddress(){
        this.#shippingFirstName.clear()
        this.#shippingLastName.clear()
        this.#shippingCompany.clear()
        this.#shippingAddress1.clear()
        this.#shippingAddress2.clear()
        this.#shippingCity.clear()
        this.#shippingPostcode.clear()
    }

    clearName(){
        this.#billingFirstName.clear()
    }

    clearLastName(){
        this.#billingLastName.clear()
    }

    clearAddress1(){
        this.#billingAddress1.clear()
    }

    clearCity(){
        this.#billingCity.clear()
    }
    
    clearPostCode(){
        this.#billingPostcode.clear()
    }

}

module.exports = new AddressPage()