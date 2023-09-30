/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()

    fd.append('log', user)
    fd.append('pwd', pass)
    fd.append('wp-submit', 'Acessar')
    fd.append('redirect_to', `/wp-admin`)
    fd.append('testcookie', 1)

    cy.request({
        url: `/wp-login.php`,
        method: "POST",
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })
    })
    
    cy.visit("/wp-admin")
});

Cypress.Commands.add('checkout', () => {
    cy.get('.top-cart-wishlist').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
})

Cypress.Commands.add('deleteProduct', () => {
    cy.get('.remove > .fa').click()
})

Cypress.Commands.add('decreaseProduct', () => {
    cy.get('.minus').click()
})

Cypress.Commands.add('addProduct', (productId, productUrl, quantity, productColor, productSize, variationId) => {
    const fd = new FormData()
    fd.append('attribute_size', productSize)
    fd.append('attribute_color', productColor)
    fd.append('quantity', quantity)
    fd.append('add-to-cart', productId)
    fd.append('product_id', productId)
    fd.append('variation_id', variationId)

    cy.request({
        url: `/product/${productUrl}/`,
        method: "POST",
        body: fd
    }).then((resp) => {
        resp.headers['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const separator = firstPart.indexOf('=')
            const name = firstPart.substring(0, separator)
            const value = firstPart.substring(separator + 1)
            cy.setCookie(name, value)
        })

    cy.visit(`/product/${productUrl}/`)
    })
})
