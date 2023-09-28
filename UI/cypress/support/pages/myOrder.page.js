/// <reference types="cypress" />
class OrderPage {
    get #orderNumber() { return cy.get('.woocommerce-orders-table__cell-order-number > a')}
    get #visualize() { return cy.get('.woocommerce-button')}
    get #product() { return cy.get('.woocommerce-Button')}
    get message() { return cy.get('.woocommerce-message')}
    get order() { return cy.get('.woocommerce-orders-table')}
    get orderPageTitle() { return cy.get('.woocommerce-order-details__title')}
    get orderStatus() { return cy.get('.woocommerce-orders-table__cell-order-status')}
    get payBtn() { return cy.get('.pay') }
    get cancelBtn() { return cy.get('.cancel') }

    clickVisualize(){
        this.#visualize.click()
    }

    clickOrderNumber(){
        this.#orderNumber.click()
    }

    accessCataloguePage(){
        this.#product.click()
    }

    clickPay(){
        this.payBtn.click()
    }

    clickCancel(){
        this.cancelBtn.click()

    }
}

module.exports = new OrderPage()