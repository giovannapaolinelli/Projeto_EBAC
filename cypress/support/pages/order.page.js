/// <reference types="cypress" />
export const orderPage = {
    get message() { return cy.get('.woocommerce-notice')}
}