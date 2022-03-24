<script>
//import ProductListing from './components/productListing.vue'

export default {
  data() {
    return {
      productName: 'Name',
      productModel: '123',
      productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.',
      productImage: 'https://via.placeholder.com/700x700'
    }
  },
  methods: {
    carouselCycle() {
      
    }
  },
  mounted() {

  }
}
</script>

<template lang="pug">
section.product-listing.js-product-listing
  div.product-listing__media
      div.product-carousel
          div.product-carousel__wrapper
              - for (var x = 0; x < 3; x++)
                  img.product-carousel__image.product-carousel__image--hero(v-bind:src="productImage")
              btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--prev.js-product-carousel-prev Prev
              btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--next.js-product-carousel-next Next
              btn.product-carousel__btn.product-carousel__btn--enlarge.js-product-carousel-enlarge Enlarge
          div.product-carousel__thumbnails
              img.product-carousel__image.product-carousel__image--thumbnail(v-bind:src="productImage")
  div.product-listing__info
      h2.product-listing__heading {{productName}}
      p.product-listing__model Model Number: 
          strong {{productModel}}
      p.product-listing__description {{productDesc}}
      div.product-listing__options
          p.product-listing__option-name Color/Finish 
              strong Black
          span.product-listing__option
          p.product-listing__option-name Size/Width 
              strong 32
          span.product-listing__option
          p.product-listing__option-name Some Third Thing 
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
    }
    &__heading {

    }
    &__model {

    }
    &__description {

    }
    &__options {

    }
    &__option {
        // fix this
        &-name{

        }
    }

}
.product-carousel {
    max-width: 700px;
    &__wrapper {
        max-height: 700px;
        overflow: hidden;
        position: relative;
    }
    &__image {
        margin: 0;
        max-width: 100%;
        z-index: 10;
        &--hero {

        }
        &--thumbnail {
            max-width: 50px;
        }
    }
    &__btn {
        background: rgba(0,0,0,.25);
        color: #fff;
        display: block;
        height: 50px;
        position: absolute;
        width: 50px;
        z-index: 20;
        &--arrow {
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
        }
        &--prev {
            left: 0;
        }
        &--next {
            right: 0;
        }
        &--enlarge {
            background: none;
            bottom: 5%;
            right: 5%;
        }
    }
    &__thumbnails {

    }
}
</style>
