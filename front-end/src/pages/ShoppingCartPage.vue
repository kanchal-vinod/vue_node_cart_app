<template>
  <h1>shoping cart</h1>
<div v-if="cartItems.length > 0">
    <ShoppingCartList :products = 'cartItems'/>
    <button class="checkout-button">proceed to checkout</button>
</div>
<div v-if="cartItems.length=== 0">
  you current no have cart items
</div>
</template>

<script>       
import ShoppingCartList from '@/components/CartItems.vue'
import { cartItems } from '@/temp-data';

export default {
  name: "ShoppingCartPage",

  components:{
    ShoppingCartList
  },
  data() {
    return {
      cartItems,
    }
  },
}
</script>