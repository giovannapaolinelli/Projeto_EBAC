/// <reference types="cypress" />
class CataloguePage {
    get product() { return cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover')}
    get #options() { return cy.get('.post-2559 > .product-block > .block-inner > .image > .groups-button > .add-cart > a')}
    get #visualize() { return cy.get('.post-2559 > .product-block > .block-inner > .image > .groups-button > .button > span')}
    get #heart() { return cy.get('.post-2559 > .product-block > .block-inner > .image > .groups-button > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > a')}
    get #compare() { return cy.get('.post-2559 > .product-block > .block-inner > .image > .groups-button > .yith-compare > a')}
    get message() { return cy.get('#yith-wcwl-message')}
    get compareBox() { return cy.get('.cboxIframe')}
    get productBox() { return cy.get('.yith-wcqv-main')}

    clickProduct(){
        this.product.click({force: true})
    }

    clickOptions(){
        this.#options.click({force: true})
    }
    
    addToWishList(){
        this.#heart.click({force: true})
    }

    clickVisualize(){
        this.#visualize.click({force: true})
    }

    clickCompare(){
        this.#compare.click({force: true})
    }

}

module.exports = new CataloguePage()