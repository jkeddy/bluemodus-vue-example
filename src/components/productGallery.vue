<template lang="pug">
div.product-gallery__scrim(v-if="isModalActive")
div.product-gallery(
        :class="{'product-gallery--modal': isModalActive}"
    )
    div.product-carousel(ref="carousel")
        img.product-gallery__image.product-gallery__image--hero(
            v-for="(imageUrl,index) in productImage"
            v-bind:src="imageUrl"
            :id="`s${index+1}`"
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
    div.product-gallery__thumbnails.product-gallery__thumbnails--modal(
        v-if="isModalActive && thumbnailMax" 
        ref="thumbnails"
    )
        img.product-gallery__image.product-gallery__image--thumbnail(
            v-for="index in this.totalSlides"
            @click="carouselIndex(`${index-1}`)"
            v-bind:src="productImage[index-1]"
            :id="`t${index}`"
        )
        div.product-gallery--modal__controls
            btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--prev.product-carousel__btn--modal(
                @mousedown="thumbnailCycle($event, 'prev')"
                @mouseup="thumbnailCycle($event, 'stop')"
            ) ❮
            btn.product-carousel__btn.product-carousel__btn--arrow.product-carousel__btn--next.product-carousel__btn--modal(
                @mousedown="thumbnailCycle($event, 'next')"
                @mouseup="thumbnailCycle($event, 'stop')"
            ) ❯
    div.product-gallery__thumbnails(v-else ref="thumbnails")
        img.product-gallery__image.product-gallery__image--thumbnail(
            v-for="index in thumbnailRender"
            @click="carouselIndex(`${index-1}`)"
            v-bind:src="productImage[index-1]"
            :id="`t${index}`"
        )
        span.product-gallery__image.product-gallery__image--thumbnail(
            v-if="thumbnailMax && !isModalActive"
            @click="galleryModal()"
        ) {{thumbnailExtra}}
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data() {
        return {
            currentSlide: 0,
            isModalActive: false,
            maxVisibleImages: 6,
            thumbnailScroll: false
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
            return this.totalSlides > this.maxVisibleImages
        },
        thumbnailExtra() {
            return this.totalSlides - this.maxVisibleImages
        },
        thumbnailRender() {
            // not zeroth'd in loop
            return this.totalSlides > this.maxVisibleImages ? 6 : this.totalSlides 
        }
    },
    props: {
        productImage: Array,
        totalSlides: Number
    },
    methods: {
        // Fix zeroth issue present in all cycling
        carouselCycle(dir) {
            // move carousel in direction provided. highlight thumbnail
            const carouselEntries = this.$refs.carousel.children.length
            const thumbnailsEntries = this.$refs.thumbnails.children
            //let nextSlide
            // I cant believe that worked
            if(dir === 'next'){
                if(!(this.currentSlide >= carouselEntries)){
                   const nextSlide = this.currentSlide++
                    this.carouselIndex(nextSlide)
                    this.currentSlide++
                    console.log('forward')
                }else {
                    console.log('start')
                    this.carouselIndex(0)
                    this.currentSlide = 1
                }
            }
            else{
                 if(!(this.currentSlide <= 1)){
                    //const nextSlide = this.currentSlide--
                    //this.carouselIndex(nextSlide)
                    //this.currentSlide--
                    console.log('backwards')
                    console.log(`current slide: ${this.currentSlide}`)
                }else {
                    console.log('end')
                    this.carouselIndex(carouselEntries-1)
                    this.currentSlide = carouselEntries-1
                }
            }
            console.log(`current slide val3: ${this.currentSlide}`)
        },
        carouselIndex(val) {
            // take value change carousel position add highlight
            //terrible syntax
            //if(val != this.currentSlide) {
                const carouselEntries = this.$refs.carousel.children
                const thumbnailsEntries = this.$refs.thumbnails.children
                if(val != this.currentSlide) this.currentSlide = val
                console.log(`index val: ${val}`)
                for (const i of carouselEntries) {
                    i.classList.remove('product-gallery__image--active')
                }
                carouselEntries.item(val).classList.add('product-gallery__image--active')
                if(val < thumbnailsEntries.length) {
                    for (const i of thumbnailsEntries) {
                        i.classList.remove('product-gallery__image--thumbnail-active')
                    }
                    thumbnailsEntries.item(val).classList.add('product-gallery__image--thumbnail-active')
                }
                //console.log(this)
                
            //}
        },
        galleryModal() {
            //factor out to event emitter
            this.isModalActive = !this.isModalActive
        },
        thumbnailCycle(event,dir) {
            const thumbnailContainer = event.target.parentElement.parentElement
            const scrollVal = 30
            if(!this.thumbnailScroll) {
                if(dir === 'next'){
                    this.thumbnailScroll = setInterval(() => thumbnailContainer.scrollLeft += scrollVal, 100)
                }
                else if(dir === 'prev') {
                    this.thumbnailScroll = setInterval(() => thumbnailContainer.scrollLeft -= scrollVal, 100)
                }
            }
            else {
                clearInterval(this.thumbnailScroll)
                this.thumbnailScroll = false
            }
        },
        initGallery() {
            // be nice to add optional index here
            // get active slide array pos
            const startIndex = 1
            const carouselInit = this.$refs.carousel
            const thumbnailsInit = this.$refs.thumbnails
            if(carouselInit.hasChildNodes){
                carouselInit.firstElementChild.classList.add('product-gallery__image--active')
            }
            if (thumbnailsInit.hasChildNodes) {
                // terrible class name
                thumbnailsInit.firstElementChild.classList.add('product-gallery__image--thumbnail-active')
            }
            this.currentSlide = startIndex
        }
    },
    mounted() {
        this.initGallery()
    },
    updated() {
        this.initGallery()
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
            display: none;
        }
        &--active {
            display: block;
        }
        &--thumbnail {
            // this is terrible and hacky!!!!
            background-color: #000;
            color: #fff;
            display: inline-block;
            line-height: 5;
            width: 80px;
            height: 80px;
            text-align: center;
            vertical-align: middle;
            &-active{
                border: 3px solid green;
            }
        }
    }
    &__thumbnails {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &--modal {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        &__controls{
            margin: auto;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 22%;
        }
        .product-gallery__thumbnails{
            margin: auto;
            max-width: 50%;
            overflow: hidden;
        }
        .product-gallery__image{
            &--thumbnail {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
        }
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
        &--modal{
            //bottom: 22%;
        }
        &--enlarge {
            color: black;
            background: none;
            bottom: 10%;
            right: 5%;
        }
    }
}
</style>