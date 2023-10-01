const homeScreens = require("../screens/home.screens");
const loginScreens = require("../screens/login.screens");
const myStoreScreens = require("../screens/myStore.screens");

const users = require('../../mobileData/dados.json')

describe('Access Admin Panel', () =>{
    it('should login with valid credentials', async () => {
        await homeScreens.goToLogin()
        await loginScreens.setStoreAddress(users.url)
        await loginScreens.continueBtn()
        await loginScreens.continueWithStoreCredentials()
        await loginScreens.login(users.user, users.password)
        await loginScreens.twoFactorAuth()
        await loginScreens.twoFactorLogin(users.password)

        expect (await myStoreScreens.getStoreName()).toEqual('EBAC - Shop')
    });
    
})