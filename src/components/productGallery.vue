<template lang="pug">
div.product-gallery
    div.product-carousel
        img.product-gallery__image.product-gallery__image--hero(
            v-for="(imageUrl,index) in productImage"
            v-bind:src="imageUrl"
            :id="`s${index+1}`"
            :class="{'product-gallery__image--active': index === 0}"
        )
    btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--prev.js-product-carousel-prev(
        @click="carouselCycle('prev')"
    ) Prev
    btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--next.js-product-carousel-next(
        @click="carouselCycle('next')"
    ) Next
    btn.product-carousel__btn.product-carousel__btn--enlarge.js-product-carousel-enlarge(
        @click="galleryModal()"
    ) Enlarge
    div.product-gallery__thumbnails
    img.product-gallery__image.product-gallery__image--thumbnail(
        v-for="imageUrl in productImage"
        v-bind:src="imageUrl"
    )
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data() {
        return {
            currentSlide: 1,
            totalSlides: this.productImage.length
        }
    },
    props: {
        productImage: Array
    },
    methods: {
        carouselCycle(dir) {
            if(dir === 'next'){
                this.currentSlide++
                console.log('next')
            }
            else{
                this.currentSlide--
                console.log('prev')
            }
            console.log(this.currentSlide)
        },
        galleryModal() {
            alert("clicked");
        }
    }
}
</script>

<style lang="scss">

.product-gallery {
    max-width: 700px;
    position: relative;
    &__image {
        margin: 0;
        max-width: 100%;
        z-index: 10;
        &--hero {
            opacity: 0;
        }
        &--active {
            opacity: 1;
        }
        &--thumbnail {
            max-width: 50px;
        }
    }
    &__thumbnails {

    }
    
}
.product-carousel {
        max-height: 700px;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
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
}
</style>