const homeScreens = require("../screens/home.screens");
const loginScreens = require("../screens/login.screens");
const myStoreScreens = require("../screens/myStore.screens");
const simpleProductScreens = require("../screens/simpleProduct.screens");

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () =>{
    it('should login with valid credentials', async () => {
        await homeScreens.skipTour()
        await homeScreens.goToLogin()
        await loginScreens.setStoreAddress(urlLoja)
        await loginScreens.continueBtn()
        await loginScreens.continueWithStoreCredentials()
        await loginScreens.login(usuario, senha)
        await loginScreens.twoFactorAuth()
        await loginScreens.twoFactorLogin(senha)

        expect (await myStoreScreens.getStoreName()).toEqual('EBAC - Shop')
    });

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
    
})