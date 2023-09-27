/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pages/login.page";
import dashboardPage from "../../support/pages/dashboard.page";


Given('I visit EBAC Store login page', () => {
    cy.visit('/minha-conta/')
})

When("I log in with user {string} and pass {string}", (user, pass) => {
    loginPage.login(user,pass)
})

When("I log in with user {string} and pass {string} three times", (user, pass) => {
    for (let i =0; i < 4; i++){
        loginPage.login(user,pass)
    }
})

Then('the dashboard page should be visible', () => {
    dashboardPage.message.should('be.visible')
})

Then('a password error for the {string} message must appear', (user) => {
    loginPage.unknownMailError.should('contain', `Erro: a senha fornecida para o e-mail ${user} está incorreta. Perdeu a senha?`)
})

Then('An unknown user error message must appear', () => {
    loginPage.unknownMailError.should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
})

Then('login should be blocked for 15 min', () => {
    loginPage.loginBtn.should('be.disabled')
})