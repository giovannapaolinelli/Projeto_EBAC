const Products = require("../screens/products.screens");
const simpleProductScreens = require("../screens/simpleProduct.screens");

const data = require('../../mobileData/dados.json')

describe('Add New Simple Product', () =>{
        it('should add new simple product', async () => {
            await Products.clickAddProductMenu()
            await Products.clickAddProductBtn()
            await simpleProductScreens.clickAddSimpleProduct()
            await simpleProductScreens.addProductName(data.product[1].productName)
            await simpleProductScreens.publishProduct()
            expect (await simpleProductScreens.findProductList(data.product[1].productName)).toBeDisplayed()
        });
});