const req = require('supertest');
const { postCoupon } = require('../utils/request');
const API_URL = process.env.API_URL

describe('Coupons API test', () => {
let id

    beforeAll(async () => {
        id = await postCoupon()
    })

    it('should list coupons', async () => {
        await req(API_URL)
            .get('/coupons')
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .then(response => {
                expect(response.statusCode).toEqual(200)
                expect(response.body).toBeInstanceOf(Array)
            })
    });

    it('should list coupons by ID', async () => {
        await req(API_URL)
            .get(`/coupons/${id}`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .then(response => {
                expect(response.statusCode).toEqual(200)
            })
    });

    it('should add fixed_product coupon', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${Math.floor(Math.random() * 10000000000)}`,
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
                }
                )
            .then(response => {
                expect(response.statusCode).toEqual(201)
            })
    });

    it('should add fixed_cart coupon', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${Math.floor(Math.random() * 10000000000)}`,
                "amount": "10",
                "discount_type": "fixed_cart",
                "description": "Cupom de desconto de teste"
                }
                )
            .then(response => {
                expect(response.statusCode).toEqual(201)
            })
    });

    it('should add percent coupon', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${Math.floor(Math.random() * 10000000000)}`,
                "amount": "10",
                "discount_type": "percent",
                "description": "Cupom de desconto de teste"
                }
                )
            .then(response => {
                expect(response.statusCode).toEqual(201)
            })
    });

    it('should not allow duplicate coupon', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${id}`,
                "amount": "10",
                "discount_type": "percent",
                "description": "Cupom de desconto de teste"
                }
                )
            .then(response => {
                expect(response.statusCode).toEqual(400)
                expect(response.body).toString("O código de cupom já existe")
            })
    });

    it('should not allow to add coupon without code', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "amount": "10",
                "discount_type": "percent",
                "description": "Cupom de desconto de teste"
                }
                )
            .then(response => {
                expect(response.statusCode).toEqual(400)
                expect(response.body).toString("Parâmetro(s) ausente(s): code")
            })
    });

    it('should not allow to add coupon without amount', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${Math.floor(Math.random() * 10000000000)}`,
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
                }                
                )
            .then(response => {
                expect(response.statusCode).toEqual(400)
                expect(response.body).toString("Parâmetro(s) ausente(s): amount")
            })
    });

    it('should not allow to add coupon without discount type', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${Math.floor(Math.random() * 10000000000)}`,
                "amount": "10",
                "description": "Cupom de desconto de teste"
                }           
                )
            .then(response => {
                expect(response.statusCode).toEqual(400)
                expect(response.body).toString("Parâmetro(s) ausente(s): discount_type")
            })
    });

    it('should not allow to add coupon without description', async () => {
        await req(API_URL)
            .post(`/coupons`)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .send({
                "code": `${Math.floor(Math.random() * 10000000000)}`,
                "amount": "10",
                "discount_type": "fixed_product"
                }       
                )
            .then(response => {
                expect(response.statusCode).toEqual(400)
                expect(response.body).toString("Parâmetro(s) ausente(s): description")
            })
    });
});