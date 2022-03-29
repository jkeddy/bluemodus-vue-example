<template lang="pug">
div.product-gallery(
        :class="{'product-gallery--modal': isModalActive}"
    )
    div.product-carousel(ref="carousel")
        img.product-gallery__image.product-gallery__image--hero(
            v-for="(imageUrl,index) in productImage"
            v-bind:src="imageUrl"
            :id="`s${index}`"
        )
    btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--prev.js-product-carousel-prev(
        @click="carouselCycle('prev')"
    ) Prev
    btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--next.js-product-carousel-next(
        @click="carouselCycle('next')"
    ) Next
    btn.product-carousel__btn.product-carousel__btn--enlarge.js-product-carousel-enlarge(
        @click="galleryModal()"
        :class="{'visually-hidden': isModalActive}"
    ) Enlarge
    btn.product-carousel__btn.product-carousel__btn--enlarge.js-product-carousel-enlarge(
        v-if="isModalActive"
        @click="galleryModal()"
    ) Close
    div.product-gallery__thumbnails
        img.product-gallery__image.product-gallery__image--thumbnail(
            v-for="index in maxVisibleImages"
            @click="carouselVal(`${index}`)"
            v-bind:src="productImage[index]"
            :id="`t${index}`"
        )
        span.product-gallery__image.product-gallery__image--thumbnail(
            v-if="thumbnailMax"
            @click="galleryModal()"
        ) {{thumbnailExtra}}
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data() {
        return {
            currentSlide: 1,
            isModalActive: false,
            maxVisibleImages: 6
        }
    },
    computed: {
        activeSlides() {
            const activeSlides = [];
            return activeSlides;
        },
        activeThumbnail() {
            const activeThumb = ''
            return activeThumb
        },
        isActive() {
            return this.activeSlides.indexOf(this._uid) >= 0;
        },
        thumbnailMax() {
            return this.totalSlides >= this.maxVisibleImages
        },
        thumbnailExtra() {
            return this.totalSlides - this.maxVisibleImages
        }
    },
    props: {
        productImage: Array,
        totalSlides: Number
    },
    methods: {
        carouselCycle(dir) {
            // move carousel in direction provided. highlight thumbnail
            if(dir === 'next'){
                //const activeSlide 
                this.currentSlide++
                console.log('next')
            }
            else{
                this.currentSlide--
                console.log('prev')
            }
            console.log(this.currentSlide)
        },
        carouselIndex(val) {
            // take value change carousel position add highlight
            console.log(val)
        },
        galleryModal() {
            this.isModalActive = !this.isModalActive
        }
    },
    mounted() {
        console.log(this.totalSlides)
        // be nice to add optional index here
        const carouselInit = this.$refs.carousel
        if(carouselInit.hasChildNodes){
            carouselInit.firstElementChild.classList.add('product-gallery__image--active')
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
    &--modal {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
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
            color: black;
            background: none;
            bottom: 5%;
            right: 5%;
        }
    }
}
</style>