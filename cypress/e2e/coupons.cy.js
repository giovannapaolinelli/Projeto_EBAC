/// <reference types="cypress" />
import contract from '../contracts/coupons.contract'

describe('Coupons Contract Test', () => {
    
    it('Should validate coupon contract', () => {
        cy.request({
            method: 'GET',
            url: '/coupons',
            headers: {authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"}
        }).then(response => {
            return contract.validateAsync(response.body)
        })
    });
});
