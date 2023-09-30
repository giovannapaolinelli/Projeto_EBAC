/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { CheckoutPage } = require('../../support/pages')
import { orderPage } from "../../support/pages/order.page";
import checkoutPage from "../../support/pages/checkout.page";

const address = require('../../fixtures/dados.json')
const product = require('../../fixtures/dados.json')

Given('I visit EBAC Store products page', () => {
    cy.visit('/produtos/')
})

When('I add product to the cart and complete shopping', () => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, 1, product.product[0].color, product.product[0].size, product.product[0].variationId )
    cy.checkout()
})

When('I fill checkout', () => {
    checkoutPage.fillCheckout(
        address.userInfo[1].nome,
        address.userInfo[1].sobrenome,
        address.userInfo[1].empresa,
        address.userInfo[1].pais,
        address.userInfo[1].endereco,
        address.userInfo[1].complemento,
        address.userInfo[1].cidade,
        address.userInfo[1].estado,
        address.userInfo[1].cep,
        address.userInfo[1].telefone,
        address.userInfo[1].email)
    checkoutPage.verifyField()
})

Then('a success screen must appear', () => {
    orderPage.message.should('contain', 'Obrigado. Seu pedido foi recebido.')
})