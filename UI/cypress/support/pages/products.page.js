/// <reference types="cypress" />
export const productsPage = {
    get productList() { return cy.get('figure .product-image') },
    get pageTitle() { return cy.get('.page-title') },
    get cartIcon() { return cy.get('.dropdown-toggle > .mini-cart-items')}
}