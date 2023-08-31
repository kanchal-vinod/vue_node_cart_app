<template>
  <div class=" img-wrap">
    <img :src=product.imageName alt="">
  </div>
  <div class="product-details">
    <h2>{{ product.name }}</h2>
    <h3 class="product-price">{{ product.price }}</h3>
    <button class="add-to-cart">Add To Cart</button>
  </div>
</template>
<script>
import { products } from '@/temp-data';
export default {
  name: "ProductDetails",
  data() {
    return {
      product : products.find(product => product.id === this.$route.params.productId),
    }
  },
}
</script>