/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CataloguePage from "../../support/pages/catalogue.page";
import {productDetailsPage} from "../../support/pages/productDetails.page"


const product = require('../../fixtures/dados.json')

Given('I visit EBAC Store products page', () => {
    cy.visit('/produtos/')
})

When('I click on a product', () => {
    CataloguePage.clickProduct(product.product[0].productId)
})

When('I like a product', () => {
    CataloguePage.addToWishList(product.product[0].productId)
})

When('I click on see options', () => {
    CataloguePage.clickOptions(product.product[0].productId)
})

When('I click on compare products', () => {
    CataloguePage.clickCompare(product.product[0].productId)
})

When('I click on visualize products', () => {
    CataloguePage.clickVisualize(product.product[0].productId)
})

Then('The product should be saved in my favorites', () => {
    CataloguePage.message.should('contain', 'Produto adicionado')
})

Then('The product page should appear', () => {
    productDetailsPage.productTitle.should('contain', `${product.product[0].productName}`)

})

Then('The product comparison page should appear', () => {   
    CataloguePage.compareBox.should('be.visible')
})

Then('The product pop up page should appear', () => {
    CataloguePage.productBox.should('be.visible')
    productDetailsPage.productTitle.should('contain', 'Abominable Hoodie')
})