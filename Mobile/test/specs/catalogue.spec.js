const homeScreens = require("../screens/home.screens");
const loginScreens = require("../screens/login.screens");
const myStoreScreens = require("../screens/myStore.screens");
const Products = require("../screens/products.screens");

const data = require('../../data/dados.json')
    
describe('Product Catalogue', () =>{
        it('should filter products', async () => {
            await Products.clickFilter()
            expect (await Products.getFilterTitle()).toEqual('Filters')
        });
        it('should search products', async () => {
            await Products.searchProduct(data.product[0].productName)
            expect (await Products.findProductList(data.product[0].productName)).toBeDisplayed()
        });
});