/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProductPage from "../../support/pages/products.page";

const product = require('../../fixtures/dados.json')

Given('I visit EBAC Store product page', () => {
    cy.visit(`/produtos/${product.product[0].productUrl}`)
})

When('I add {string} product to the cart', (amount) => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, amount, product.product[0].color, product.product[0].size, product.product[0].variationId )
})

When('I add one more product to the cart', () => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, 10, product.product[0].color, product.product[0].size, product.product[0].variationId )
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, 1, product.product[0].color, product.product[0].size, product.product[0].variationId )
})

When('I add diffent products to the cart', () => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, 10, product.product[0].color, product.product[0].size, product.product[0].variationId )
    cy.addProduct(product.product[1].productId, product.product[1].productUrl, 10, product.product[1].color, product.product[1].size, product.product[1].variationId )
})

Then('The product {string} be added', (should) => {
    CataloguePage.message.should('contain', 'Produto adicionado')
})

Then('The products should be added', () => {   
    CataloguePage.compareBox.should('be.visible')
})
