/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pages/login.page";
import AddressPage from "../../support/pages/addresses.page";

const data = require('../../fixtures/dados.json')

Given('I login into my EBAC store account', () => {
    cy.visit('/minha-conta/')
    loginPage.login(data.user[0].username,data.user[0].password)
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
        data.userInfo[1].nome,
        data.userInfo[1].sobrenome,
        data.userInfo[1].empresa,
        data.userInfo[1].pais,
        data.userInfo[1].endereco,
        data.userInfo[1].complemento,
        data.userInfo[1].cidade,
        data.userInfo[1].estado,
        data.userInfo[1].cep,
        data.userInfo[1].telefone
        )
    AddressPage.clickSave()
})

When("I edit my shipping address fields", () => {
    AddressPage.fillShippingAddress(
        data.userInfo[1].nome,
        data.userInfo[1].sobrenome,
        data.userInfo[1].empresa,
        data.userInfo[1].pais,
        data.userInfo[1].endereco,
        data.userInfo[1].complemento,
        data.userInfo[1].cidade,
        data.userInfo[1].estado,
        data.userInfo[1].cep
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
