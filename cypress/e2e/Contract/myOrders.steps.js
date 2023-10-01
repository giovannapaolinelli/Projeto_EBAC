/// <reference types="cypress" />

import contract from '../../../cypress/contracts/coupons.contract'

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Then("I should validate my contract", () => {
    cy.request({
        method: 'GET',
        url: '/wp-json/wc/v3/coupons',
        headers: {authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"}
    }).then(response => {
        return contract.validateAsync(response.body)
    })
})
