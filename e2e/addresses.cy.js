/// <reference types="cypress" />
import contract from '../cypress/contracts/coupons.contract'

describe('Coupons Contract Test', () => {
    
    it('Should validate address contract', () => {
        cy.request({
            method: 'GET',
            url: '/coupons',
            headers: {authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"}
        }).then(response => {
            return contract.validateAsync(response.body)
        })
    });
});
