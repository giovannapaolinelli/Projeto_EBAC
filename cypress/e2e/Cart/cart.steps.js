/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { cartPage } from "../../support/pages/cart.page";
const data = require('../../fixtures/interceptData.json')

Given('I add product to a cart and visit cart page', () => {
    cy.visit('/produtos/')
    cy.addProduct()
    cy.visit('/carrinho/')
    cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments', (req) => {
        req.reply({
            status: 200,
            body: {
            "fragments": data.autocompleteSearchData
        }
        })
        })
})

When('I delete my product from the cart', () => {
    cy.deleteProduct()  
})

When('I edit the product in the cart', () => {
    cy.decreaseProduct()
})

Then('The cart must be updated', () => {
    cartPage.emptyMessage.should('contain', 'Seu carrinho está vazio.')
})

Then('The cart must be empty', () => {
    cartPage.emptyMessage.should('contain', 'Seu carrinho está vazio.')
})