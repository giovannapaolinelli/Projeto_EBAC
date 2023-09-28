/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pages/login.page";
import dashboardPage from "../../support/pages/dashboard.page";
import myOrderPage from "../../support/pages/myOrder.page";
import { productsPage } from "../../support/pages/products.page";
import checkoutPage from "../../support/pages/checkout.page";

const users = require('../../fixtures/users.json')

Given('I am logged with a user who has completed an order', () => {
    cy.visit('/minha-conta/')
    loginPage.login(users[1].username,users[1].password)
})

Given('I am logged with a user who has not completed an order', () => {
    cy.visit('/minha-conta/')
    loginPage.login(users[0].username,users[0].password)
})

When("I access my order page", () => {
    cy.visit('/minha-conta/orders/')
})

When("click on the visualize", () => {
    myOrderPage.clickVisualize()
})

When("click on the order number", () => {
    myOrderPage.clickOrderNumber()
})

When("I click on the link to see products", () => {
    myOrderPage.accessCataloguePage()
})

When("My order status changes to {string}", (status) => {
    cy.request({
        method: 'PUT',
        url: '/wp-json/wc/v3/orders/11224',
        headers: {authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"},
        body: 
                {
                    "status": status,
                }
    })
})

When("I pay the order", () => {
    myOrderPage.clickPay()
    checkoutPage.payOrder()
})

When("I cancel my order", () => {
    myOrderPage.clickCancel()
})

Then('My order must be visible', () => {
    myOrderPage.order.should('be.visible')
})

Then('I should see my order details', () => {
    myOrderPage.orderPageTitle.should('be.visible')
})

Then('An empty order message should appear', () => {
    myOrderPage.message.should('contain', 'Nenhum pedido feito ainda')
})

Then('Product page should appear', () => {
    productsPage.pageTitle.should('contain', 'Produtos')
})

Then('My order status must be {string}', (status) => {
    if (status == "pending"){
        myOrderPage.orderStatus.should('contain', 'Pagamento pendente')
    } else if (status == "processing") {
        myOrderPage.orderStatus.should('contain', 'Processando')
    } else if (status == "on-hold") {
        myOrderPage.orderStatus.should('contain', 'Aguardando')
    } else if (status == "completed") {
        myOrderPage.orderStatus.should('contain', 'Concluído')
    } else if (status == "cancelled") {
        myOrderPage.orderStatus.should('contain', 'Cancelado')
    } else if (status == "refunded") {
        myOrderPage.orderStatus.should('contain', 'Reembolsado')
    } else if (status == "failed") {
        myOrderPage.orderStatus.should('contain', 'Malsucedido')
    }
})

Then('My order status must be processing', () => {
    cy.visit('/minha-conta/orders/')
    myOrderPage.orderStatus.should('contain', 'Aguardando')
})

Then('My order status must be cancelled', () => {
    cy.visit('/minha-conta/orders/')
    myOrderPage.orderStatus.should('contain', 'Cancelado')
})