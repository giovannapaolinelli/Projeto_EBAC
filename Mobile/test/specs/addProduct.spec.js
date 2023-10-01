const homeScreens = require("../screens/home.screens");
const loginScreens = require("../screens/login.screens");
const myStoreScreens = require("../screens/myStore.screens");
const simpleProductScreens = require("../screens/simpleProduct.screens");

const users = require('../../data/dados.json')

describe('Add New Simple Product', () =>{
        it('should add new simple product', async () => {
            await simpleProductScreens.clickAddProductMenu()
            await simpleProductScreens.clickAddProductBtn()
            await simpleProductScreens.clickAddSimpleProduct()
            await simpleProductScreens.addProductName("Denim Pants")
            await simpleProductScreens.addProductValue("80", "50")
            await simpleProductScreens.publishProduct()
            expect (await simpleProductScreens.findProductList("Denim Pants")).toBeDisplayed()
        });
});