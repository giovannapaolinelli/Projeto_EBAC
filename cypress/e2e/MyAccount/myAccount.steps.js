/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pages/login.page";
import dashboardPage from "../../support/pages/dashboard.page";

const users = require('../../fixtures/dados.json')

Given('I login into my EBAC store account', () => {
    cy.visit('/minha-conta/')
    loginPage.login(users.user[0].username,users.user[0].password)
})

When("I logout", () => {
    dashboardPage.clicklogoff()
})

When("I click on logout from the dashboard message", () => {
    dashboardPage.clickLogoffMessage()
})

When("I go to orders", () => {
    dashboardPage.goToOrder()
})

When("I go to addresses", () => {
    dashboardPage.goToAddresses()
})

When("I go to downloads", () => {
    dashboardPage.goToDownloads()
})

When("I go to account details", () => {
    dashboardPage.goToAccountDetails()
})

Then('I should be logged off', () => {
    loginPage.loginBtn.should('be.visible')
})

Then('I should see my orders', () => {
    dashboardPage.pageTitle.should('contain', 'Pedidos')
})

Then('I should see my addresses', () => {
    dashboardPage.pageTitle.should('contain', 'Endereços')
})

Then('I should see my downloads', () => {
    dashboardPage.pageTitle.should('contain', 'Downloads')
})

Then('I should see my account details', () => {
    dashboardPage.pageTitle.should('contain', 'Detalhes da conta')
})