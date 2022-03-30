<template lang="pug">
section.product-listing.js-product-listing
    div.product-listing__media
        <ProductGallery v-bind="{productImage:products[currentProduct].productImage, totalSlides: products[currentProduct].productImage.length}" />

    <ProductInfo v-bind="{productInfo:products[currentProduct], productCount: products.length}" />
    
</template>

<script>
import ProductGallery from "./components/productGallery.vue"
import ProductInfo from "./components/productInfo.vue"

export default {
    components: { 
        ProductGallery,
        ProductInfo
    },
    data() {
        return {
            currentProduct: 0,
            products: [
                {
                    productType: 'Type1',
                    productName: "Name1",
                    productModel: "123",
                    productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
                    productImage: [
                        "https://via.placeholder.com/700x700/00ffFF/808080?text=product+photo1",
                        "https://via.placeholder.com/700x700/ff00FF/808080?text=product+photo2",
                        "https://via.placeholder.com/700x700/000000/808080?text=product+photo3",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo4",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo5",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo6",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo7",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo8",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo9"
                    ]
                },
                {
                    productType: 'Type2',
                    productName: "Name2",
                    productModel: "456",
                    productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
                    productImage: [
                        "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo3",
                        "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo4"
                    ]
                },
                {
                    productType: 'Type3',
                    productName: "Name3",
                    productModel: "678",
                    productDesc: "In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
                    productImage: [
                        "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo6",
                        "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo7"
                    ]
                }
            ],
            currentPath: window.location.pathname
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
