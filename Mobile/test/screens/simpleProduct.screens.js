class AddProducts {
    get #productsMenu(){
        return $('id:products')
    }

    get #addProductButton(){
        return $('id:addProductButton')
    }

    get #simpleProduct(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    get #editProductName(){
        return $('id:editText')
    }

    get #editProductValue(){
        return $('android=new UiSelector().text("Add price")')
    }

    get #regularPrice(){
        return $('android=new UiSelector().text("Regular price")')
    }

    get #salePrice(){
        return $('android=new UiSelector().text("Sale price")')
    }

    get #navigateUp(){
        return $('~Navigate up')
    }

    get #publishProduct(){
        return $('id:menu_publish')
    }
    
    async clickAddProductMenu(){
        await this.#productsMenu.click()
    }

    async clickAddProductBtn(){
        await this.#addProductButton.click()
    }

    async clickAddSimpleProduct(){
        await this.#simpleProduct.click()
    }

    async addProductName(name){
        await this.#editProductName.setValue(name)
    }

    async addProductValue(regularValue, saleValue){
        await this.#editProductValue.click()
        await this.#regularPrice.setValue(regularValue)
        await this.#salePrice.setValue(saleValue)
        await this.#navigateUp.click()
    }

    async publishProduct(){
        await this.#publishProduct.click()
    }

    async findProductList(productName){
        await this.#navigateUp.click()
        const product = $('android=new UiSelector().text("'+productName+'")');
        product.scrollIntoView();
        return await $('android=new UiSelector().text("'+productName+'")')
    }

}

module.exports = new AddProducts