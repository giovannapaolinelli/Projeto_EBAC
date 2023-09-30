/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pages/login.page";
import AddressPage from "../../support/pages/addresses.page";

const address = require('../../fixtures/dados.json')
const users = require('../../fixtures/users.json')

Given('I login into my EBAC store account', () => {
    cy.visit('/minha-conta/')
    loginPage.login(users[0].username,users[0].password)
})

When("I visit my addresses page", () => {
    cy.visit('/minha-conta/edit-address/')
})

When("I click to edit my billing address", () => {
    AddressPage.clickEditBilling()
})

When("I click to edit my shipping address", () => {
    AddressPage.clickEditShipping()
})

When("I edit my billing address fields", () => {
    AddressPage.fillBillingAddress(
        address[1].nome,
        address[1].sobrenome,
        address[1].empresa,
        address[1].pais,
        address[1].endereco,
        address[1].complemento,
        address[1].cidade,
        address[1].estado,
        address[1].cep,
        address[1].telefone
        )
    AddressPage.clickSave()
})

When("I edit my shipping address fields", () => {
    AddressPage.fillShippingAddress(
        address[1].nome,
        address[1].sobrenome,
        address[1].empresa,
        address[1].pais,
        address[1].endereco,
        address[1].complemento,
        address[1].cidade,
        address[1].estado,
        address[1].cep
    )
    AddressPage.clickSave()
})

When("I delete my shipping address fields", () => {
    AddressPage.clearShippingAddress()
    AddressPage.clickSave()
})

When("I leave {string} field empty", (field) => {
    if (field == "FirstName"){
        AddressPage.clearName()
    } else if (field == "LastName") {
        AddressPage.clearLastName()
    } else if (field == "Endereço1"){
        AddressPage.clearAddress1()
    } else if (field == "Cidade"){
        AddressPage.clearCity()
    } else if (field == "PostCode"){
        AddressPage.clearPostCode()
    }
    AddressPage.clickSave()
})

Then('A new billing address edit page should open', () => {
    AddressPage.title.should('contain', 'Endereço de faturamento')
})

Then('A new shipping address edit page should open', () => {
    AddressPage.title.should('contain', 'Endereço de entrega')
})

Then('I should be able to save the new address', () => {
    AddressPage.message.should('contain', 'Endereço alterado com sucesso')
})

Then('A mandatory {string} error message should appear', (fieldName) => {
    AddressPage.messageError.should('contain', `${fieldName} é um campo obrigatório`)
})

Then('Mandatory fields error message should appear', () => {
    AddressPage.messageError.should('contain', 'Nome é um campo obrigatório' )
})
