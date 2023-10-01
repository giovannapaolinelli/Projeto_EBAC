import { group } from 'k6';
import Coupon from '../performanceRequests/coupon.request';

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 20 },
        { duration: '10s', target: 0 }
    ],
    thresholds:{
        http_req_duration: ['p(90) < 2000']
    }
}

export default function () {
    let code = Math.floor(Math.random() * 10000000000)
    let coupon = new Coupon()

    group('coupon', ()=>{
        coupon.list("Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy")
        coupon.post("Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy", code, 10, "fixed_product", "Cupom de desconto de teste")
    })
}