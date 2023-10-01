/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {productsPage} from "../../support/pages/products.page";

const product = require('../../fixtures/dados.json')

Given('I visit a product page', () => {
    cy.visit(`/produtos/${product.product[0].productUrl}`)
})

When('I add {string} product to the cart', (amount) => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, amount, product.product[0].color, product.product[0].size, product.product[0].variationId )
})

When('I add {string} and {string} of product to the cart', (amount1, amount2) => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, amount1, product.product[0].color, product.product[0].size, product.product[0].variationId )
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, amount2, product.product[0].color, product.product[0].size, product.product[0].variationId )
})

When('I add {string} of a product and {string} of another product to the cart', (amount1, amount2) => {
    cy.addProduct(product.product[0].productId, product.product[0].productUrl, amount1, product.product[0].color, product.product[0].size, product.product[0].variationId )
    cy.addProduct(product.product[1].productId, product.product[1].productUrl, amount2, product.product[1].color, product.product[1].size, product.product[1].variationId )
})

Then('{string} product should be added', (amount, should) => {
    productsPage.cartIcon.should('contain', amount)
})

