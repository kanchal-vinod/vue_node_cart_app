<template>
  <h1>shoping cart</h1>
<div v-if="cartItems.length > 0">
    <div v-for="product in cartItems" :key="product.id" class="product-container">
      <img class="product-image" :src="product.imageName" alt="" srcset="">
      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button class="remove-button">remove from cart</button>
    </div>
    <button class="checkout-button">proceed to checkout</button>
</div>
<div v-if="cartItems.length=== 0">
  you current no have cart items
</div>
</template>

<script>
import { cartItems } from '@/temp-data';

export default {
  name: "ShoppingCartPage",

  data() {
    return {
      cartItems,
    }
  },
}
</script>