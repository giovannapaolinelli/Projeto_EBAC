class AddProducts {
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
        return $('id:product_regular_price')
    }

    get #salePrice(){
        return $('id:product_sale_price')
    }

    get #navigateUp(){
        return $('~Navigate up')
    }

    get #publishProduct(){
        return $('id:menu_publish')
    }

    async clickAddSimpleProduct(){
        await this.#simpleProduct.click()
    }

    async addProductName(name){
        await this.#editProductName.setValue(name)
    }

    async addProductValue(){
        await this.#editProductValue.click()
        await this.#navigateUp.click()
    }

    async publishProduct(){
        await this.#publishProduct.click()
        await this.#navigateUp.click()
    }

    async findProductList(productName){
        await this.#navigateUp.click()
        const product = $('android=new UiSelector().text("'+productName+'")');
        product.scrollIntoView();
        return await $('android=new UiSelector().text("'+productName+'")')
    }

}

module.exports = new AddProducts