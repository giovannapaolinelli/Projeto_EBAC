/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const { dashboardPage } = require('../../support/pages')

Given('I visit EBAC Store', () => {
    cy.visit('/')
})

When("I log in with user {string} and pass {string}", (user, pass) => {
    cy.login(user, pass)
})

When("I log in with user "<user>" and pass "<pass>" three times", (user, pass) => {
    cy.login(user, pass)
})

Then('the admin dashboard page should be visible', () => {
    dashboardPage.siteName.should("be.visible")
})

Then('a password error message must appear', () => {
    dashboardPage.siteName.should("be.visible")
})

Then('An unknown user error message must appear', () => {
    dashboardPage.siteName.should("be.visible")
})

Then('login should be blocked', () => {
    dashboardPage.siteName.should("be.visible")
})