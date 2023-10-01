/// <reference types="cypress" />

export const cartPage = {
    get emptyMessage() { return cy.get("#main > div > div > p")}
}
