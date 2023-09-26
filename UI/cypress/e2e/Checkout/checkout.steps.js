/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { CheckoutPage } = require('../../support/pages')
import { orderPage } from "../../support/pages/order.page";
import checkoutPage from "../../support/pages/checkout.page";

const address = require('../../fixtures/dados.json')

Given('I visit EBAC Store products page', () => {
    cy.visit('/produtos/')
})

When('I add product to the cart and complete shopping', () => {
    cy.addProduct()
    cy.checkout()
})

When('I fill checkout', () => {
    checkoutPage.fillCheckout(
        address[1].nome,
        address[1].sobrenome,
        address[1].empresa,
        address[1].pais,
        address[1].endereco,
        address[1].complemento,
        address[1].cidade,
        address[1].estado,
        address[1].cep,
        address[1].telefone,
        address[1].email)
    checkoutPage.verifyField()
})

Then('a success screen must appear', () => {
    orderPage.message.should('contain', 'Obrigado. Seu pedido foi recebido.')
})