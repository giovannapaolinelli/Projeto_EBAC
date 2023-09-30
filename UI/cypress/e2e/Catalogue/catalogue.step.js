/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CataloguePage from "../../support/pages/catalogue.page";
import {productDetailsPage} from "../../support/pages/productDetails.page"

Given('I visit EBAC Store products page', () => {
    cy.visit('/produtos/')
})

When('I click on a product', () => {
    CataloguePage.clickProduct()
})

When('I like a product', () => {
    CataloguePage.addToWishList()
})

When('I click on see options', () => {
    CataloguePage.clickOptions()
})

When('I click on compare products', () => {
    CataloguePage.clickCompare()
})

When('I click on visualize products', () => {
    CataloguePage.clickVisualize()
})

Then('The product should be saved in my favorites', () => {
    CataloguePage.message.should('contain', 'Produto adicionado')
})

Then('The product page should appear', () => {
    productDetailsPage.productTitle.should('contain', 'Abominable Hoodie')

})

Then('The product comparison page should appear', () => {   
    CataloguePage.compareBox.should('be.visible')
})

Then('The product pop up page should appear', () => {
    CataloguePage.productBox.should('be.visible')
    productDetailsPage.productTitle.should('contain', 'Abominable Hoodie')
})