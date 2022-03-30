<template lang="pug">
section.product-listing.js-product-listing
    div.product-listing__media
        <ProductGallery v-bind="{productImage:products[currentProduct].productImage, totalSlides: products[currentProduct].productImage.length}" />

    <ProductInfo v-bind="{productInfo:products[currentProduct], productCount: products.length}" />
    
</template>

<script>
import ProductGallery from "./components/productGallery.vue"
import ProductInfo from "./components/productInfo.vue"
import ProductData from "./assets/data.js"

export default {
    components: { 
        ProductGallery,
        ProductInfo
    },
    data() {
        return {
            currentProduct: 0,
            products: [],
            currentPath: window.location.pathname,
        }
    },
    methods: {
        changeProduct(val) {
            this.currentProduct = val
            history.replaceState(null,'',this.products[val].productModel)
        }
    },
    beforeCreate() {
    },
    created() {
        ProductData.then((response) => response.json())
        .then((json) => {
            json.products.forEach(e => {
                this.products.push(e)
            })
        })
    },
    beforeMount() {
        
    },
    mounted() {
        // loading existing product set if model number in url
        for (let i = 0; i < this.products.length; i++) {
            const e = this.products[i]
            if(e.productModel === this.currentPath.slice(1)) {
                this.changeProduct(i)
                break
            }
        }
    },
    beforeUnmount() {
    },
    umounted() {
    }
}
</script>
<style lang="scss">
.product-listing {
    display: flex;
    align-items: flex-start;
    
    &__media {
        flex: 1;
    }
    &__info {
        flex: 1;
        + *{
            display: none;
        }
    }
    &__heading {

    }
    &__model {

    }
    &__description {

    }
}

.visually-hidden {
    display: none;
}
</style>
