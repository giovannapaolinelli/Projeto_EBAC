/// <reference types="cypress" />
class CataloguePage {
    product(productId) { 
        return cy.get(`.post-${productId} > .product-block > .block-inner > .image > .product-image > .image-hover`)}
    options(productId) { 
        return cy.get(`.post-${productId} > .product-block > .block-inner > .image > .groups-button > .add-cart > a`)}
    visualize(productId) { 
        return cy.get(`.post-${productId} > .product-block > .block-inner > .image > .groups-button > .button > span`)}
    heart(productId) { 
        return cy.get(`.post-${productId} > .product-block > .block-inner > .image > .groups-button > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > a`)}
    compare(productId) { 
        return cy.get(`.post-${productId} > .product-block > .block-inner > .image > .groups-button > .yith-compare > a`)}
    get message() { return cy.get(`#yith-wcwl-message`)}
    get compareBox() { return cy.get(`.cboxIframe`)}
    get productBox() { return cy.get(`.yith-wcqv-main`)}

    clickProduct(productId){
        this.product(productId).click({force: true})
    }

    clickOptions(productId){
        this.options(productId).click({force: true})
    }
    
    addToWishList(productId){
        this.heart(productId).click({force: true})
    }

    clickVisualize(productId){
        this.visualize(productId).click({force: true})
    }

    clickCompare(productId){
        this.compare(productId).click({force: true})
    }

}

module.exports = new CataloguePage()