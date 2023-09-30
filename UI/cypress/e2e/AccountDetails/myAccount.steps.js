/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pages/login.page";
import myAccountPage from "../../support/pages/myAccount.page";

const users = require('../../fixtures/users.json')

Given('I login into my EBAC store account', () => {
    cy.visit('/minha-conta/')
    loginPage.login(users[0].username,users[0].password)
})

When("I visit my account details page", () => {
    cy.visit('/minha-conta/edit-account/')
})

When("I edit my info {string} with {string}", (info, input) => {
    if (info == "name"){
        myAccountPage.insertName(input)
    } else if (info == "lastName") {
        myAccountPage.insertLastName(input)
    } else if (info == "displayName"){
        myAccountPage.insertDisplay(input)
    } else if (info == "email"){
        myAccountPage.insertEmail(input)
    }
    myAccountPage.clickSave()
})


When("I save without an info {string}", (info) => {
    if (info == "name"){
        myAccountPage.clearName()
    } else if (info == "lastName") {
        myAccountPage.clearLastName()
    } else if (info == "displayName"){
        myAccountPage.clearDisplay()
    } else if (info == "email"){
        myAccountPage.clearEmail()
    }
    myAccountPage.clickSave()
})

When("I fill my current password field", () => {
    myAccountPage.insertCurrentPass(users[0].password)

})

When("I change my password for {string}", (pass) => {
    myAccountPage.insertNewPass(pass)
    myAccountPage.clickSave()
})

When("I confirm my password for {string}", (conf) => {
    myAccountPage.confirmPass(conf)
    myAccountPage.clickSave()
})

Then('My details must be saved', () => {
    myAccountPage.message.should('contain', 'Detalhes da conta modificados com sucesso')
})

Then('A mandatory {string} error message must appear', (field) => {
    myAccountPage.messageError.should('contain', `${field} é um campo obrigatório`)
})

Then('a missing password error message must appear', () => {
    myAccountPage.messageError.should('contain', 'Digite sua senha atual')
})

Then('a different password error message must appear', () => {
    myAccountPage.messageError.should('contain', 'As novas senhas não são iguais')
})
