import http from "k6/http"
import Utils from "../performanceUtils/utils"
import { check } from "k6"

export default class Coupon {

    list(token){
        let response = http.get(`${Utils.getBaseUrl()}/coupons`, {
            headers:{
                Authorization: `${token}`,
            }
        })
        check(response, { 'Listagem deve retornar 200': r => r && r.status === 200 })
    }

    post(token, code, amount, type, description){
        let response = http.post(`${Utils.getBaseUrl()}/coupons`, JSON.stringify(
            {
                "code": code,
                "amount": amount,
                "discount_type": type,
                "description": description
            }
        ),
            {
            headers:{
                Authorization: `${token}`
            }
        })
        check(response, { 'Post deve retornar 201': r => r && r.status === 201 })
    }

}