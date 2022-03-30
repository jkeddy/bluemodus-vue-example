<template lang="pug">
div.product-listing__info
    h2.product-listing__heading {{productInfo.productName}}
    p.product-listing__model Model Number: 
        strong {{productInfo.productModel}}
    p.product-listing__description {{productInfo.productDesc}}
    div.product-options
        p.product-options__name Color/Finish 
            strong {{productInfo.productType}} 
            <br>
            btn.product-options__type(v-for="(product,index) in productCount"
                @click="$parent.changeProduct(`${index}`)"
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
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
    },
    props: {
        productInfo: Array,
        productCount: Number
    },
}
</script>
<style lang="scss" scoped>
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
</style>