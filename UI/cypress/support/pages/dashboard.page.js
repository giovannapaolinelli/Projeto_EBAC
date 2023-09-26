/// <reference types="cypress" />

export const dashboardPage = {
    get message() { return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')}
}