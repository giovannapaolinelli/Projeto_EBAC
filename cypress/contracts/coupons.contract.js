const Joi = require ('joi')

const couponsSchema = Joi.array().items({
    id: Joi.number(),
    code: Joi.string(),
    amount: Joi.string(),
    date_created: Joi.string(),
    date_created_gmt: Joi.string(),
    date_modified: Joi.string(),
    date_modified_gmt: Joi.string(),
    discount_type: Joi.string(),
    description: Joi.string().allow(''),
    date_expires: Joi.string().allow(null),
    date_expires_gmt: Joi.string().allow(null),
    usage_count: Joi.number(),
    individual_use: Joi.boolean(),
    product_ids: Joi.array().items(),
    excluded_product_ids: Joi.array().items(),
    usage_limit: Joi.string().allow(null),
    usage_limit_per_user: Joi.string().allow(null),
    limit_usage_to_x_items: Joi.string().allow(null),
    free_shipping: Joi.boolean(),
    product_categories: Joi.array().items(),
    excluded_product_categories: Joi.array().items(),
    exclude_sale_items: false,
    minimum_amount: Joi.string(),
    maximum_amount: Joi.string(),
    email_restrictions: Joi.array().items(),
    used_by: Joi.array().items(),
    meta_data: Joi.array().items(),
    _links: Joi.object().keys({
        self: Joi.array().items({href: Joi.string()}),
        collection:Joi.array().items({href: Joi.string()})
    })
})
export default coupons;