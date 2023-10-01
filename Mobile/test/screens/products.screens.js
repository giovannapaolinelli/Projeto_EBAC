class Products {
    get #productsMenu(){
        return $('id:products')
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
        return $('id:toolbar')
    }
    
    async getFilterTitle(){
        return await this.filterTitle.getText()
    }

    async clickFilter(){
        await this.#filters.click()
    }

    async clickSort(){
        await this.#sort.click()
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

}

module.exports = new Products