class HomeScreen {

    get #skipBtn(){
        return $('id:button_skip')
    }
    
    get #enterStoreAddress(){
        return $('id:button_login_store')
    }

    async skipTour(){
        await this.#skipBtn.click()
    }

    async goToLogin(){
        await this.#enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()