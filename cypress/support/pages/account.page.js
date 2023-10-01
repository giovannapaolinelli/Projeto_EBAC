/// <reference types="cypress" />
export const accountPage = {
    get pageTitle() { return cy.get("#main > header > h1")}
}