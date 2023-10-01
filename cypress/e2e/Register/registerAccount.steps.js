/// <reference types="cypress" />
var faker = require('faker');

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { accountPage } from "../../support/pages/account.page";
const { RegisterPage } = require('../../support/pages')

Given("I visit EBAC Store register page", () => {
    cy.visit('/my-account/')
});

When('I register with email and password', () => {
    let emailFaker = faker.internet.email()
    let passFaker = faker.internet.password()
    RegisterPage.register(emailFaker, passFaker)
});

Then('My account page must be visible', () => {
    accountPage.pageTitle.should("be.visible")
});