/// <reference types="cypress" />

class DashboardPage {
    get message() { return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')}
    get orders() { return cy.get('.woocommerce-MyAccount-navigation-link--orders > a')}
    get downloads() { return cy.get('.woocommerce-MyAccount-navigation-link--downloads > a')}
    get addresses() { return cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a')}
    get accountDetails() { return cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')}
    get logoff() { return cy.get('.woocommerce-MyAccount-navigation-link--customer-logout')}
    get logoffMessage() { return cy.get('.woocommerce-MyAccount-content > :nth-child(2) > a')}
    get pageTitle() { return cy.get('.page-title')}

    goToOrder(){
        this.orders.click()
    }

    goToDownloads(){
        this.downloads.click()
    }

    goToAddresses(){
        this.addresses.click()
    }

    goToAccountDetails(){
        this.accountDetails.click()
    }

    clicklogoff(){
        this.logoff.click()
    }

    clickLogoffMessage(){
        this.logoffMessage.click()
    }
}

module.exports = new DashboardPage()