const req = require('supertest');
const API_URL = process.env.API_URL

let postCoupon = () => {
    return req(API_URL)
        .post('/coupons')
        .send({
            "code": `${Math.floor(Math.random() * 10000000000)}`,
            "amount": "10",
            "discount_type": "fixed_product",
            "description": "Cupom de desconto de teste"
            }
            )
        .set('Accept', 'application/json')
        .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
        .then(response => {
            return response.body.code
        })
}

module.exports = { postCoupon }
