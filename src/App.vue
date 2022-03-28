<script>
import ProductGallery from "./components/productGallery.vue"
//import ProductListing from './components/productListing.vue'

export default {
    components: { 
        ProductGallery 
    },
    data() {
        return {
            products: [
                {
                    productName: "Name1",
                    productModel: "123",
                    productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
                    productImage: [
                        "https://via.placeholder.com/700x700/00ffFF/808080?text=product+photo1",
                        "https://via.placeholder.com/700x700/ff00FF/808080?text=product+photo2",
                        "https://via.placeholder.com/700x700/000000/808080?text=product+photo3",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo4"
                    ]
                },
                {
                    productName: "Name2",
                    productModel: "123",
                    productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
                    productImage: [
                        "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo3",
                        "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo4"
                    ]
                }
            ],
            computed: {
                // a computed getter
                productsHasLength() {
                    // `this` points to the component instance
                    return this.productImage.length;
                }
            }
        };
    },
    methods: {
        
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUnmount() {
    },
    umounted() {
    }
}
</script>

<template lang="pug">
section.product-listing.js-product-listing
  div.product-listing__media
      <ProductGallery v-bind:productImage="products[0].productImage"/>
  div.product-listing__info(v-for="product in products")
      h2.product-listing__heading {{product.productName}}
      p.product-listing__model Model Number: 
          strong {{product.productModel}}
      p.product-listing__description {{product.productDesc}}
      div.product-options
          p.product-options__name Color/Finish 
              strong Black
          span.product-listing__option
          p.product-options__name Size/Width 
              strong 32
          span.product-listing__option
          p.product-options__name Some Third Thing 
              strong 7
          span.product-listing__option
    
</template>
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
.product-options {
    &__name {

    }
    &__option{

    }
}

</style>
