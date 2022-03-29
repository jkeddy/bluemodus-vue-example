<script>
import ProductGallery from "./components/productGallery.vue"
//import ProductListing from './components/productListing.vue'

export default {
    components: { 
        ProductGallery 
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
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo7",
                        "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo7"
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
        changeProduct(val) {
            this.currentProduct = val
        }
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
      <ProductGallery v-bind="{productImage:products[currentProduct].productImage, totalSlides: products[currentProduct].productImage.length}"/>
  div.product-listing__info
      h2.product-listing__heading {{products[currentProduct].productName}}
      p.product-listing__model Model Number: 
          strong {{products[currentProduct].productModel}}
      p.product-listing__description {{products[currentProduct].productDesc}}
      div.product-options
          p.product-options__name Color/Finish 
                strong {{products[currentProduct].productType}} 
                <br>
                btn.product-options__type(v-for="(product,index) in products"
                  @click="changeProduct(`${index}`)"
                  v-bind:data-product-type="`${index}`"
                )
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
    &__type {
        background-color: black;
        display: inline-block;
        margin-right: 10px;
        height: 20px;
        width: 20px;
    }
}
.visually-hidden {
    display: none;
}
</style>
