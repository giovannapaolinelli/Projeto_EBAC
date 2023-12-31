class Products {
    get #productsMenu(){
        return $('id:products')
    }

    get #navigateUp(){
        return $('~Navigate up')
    }

    get #addProductButton(){
        return $('id:addProductButton')
    }

    get #filters(){
        return $('id:btn_product_filter')
    }

    get #sort(){
        return $('id:btn_product_sorting')
    }

    get #search(){
        return $('id:menu_search')
    }

    get #searchBar(){
        return $('id:search_src_text')
    }

    get filterTitle(){
        return $('android=new UiSelector().text("Filters")')
    }

    async clickFilter(){
        await this.#filters.click()
    }

    async clickSort(){
        await this.#sort.click()
    }

    async clickAddProductMenu(){
        await this.#productsMenu.click()
    }

    async clickAddProductBtn(){
        await this.#addProductButton.click()
    }
    
    async searchProduct(name){
        await this.#search.click()
        await this.#searchBar.setValue(name)
    }

    async findProductList(productName){
        const product = $('android=new UiSelector().text("'+productName+'")');
        product.scrollIntoView();
        return await $('android=new UiSelector().text("'+productName+'")')
    }

    async exit(){
        await this.#navigateUp.click()
    }

}

module.exports = new Products