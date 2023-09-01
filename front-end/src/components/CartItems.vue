<template>
    <div>
        <div v-for="product in products" :key="product.id" class="product-container">
      <img class="product-image" :src="product.imageName" alt="" srcset="">
      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button class="remove-button">remove from cart</button>
    </div>
    </div>
</template>

<script>
    export default{
        name: "ShoppingCartList",
        props : ['products']
    }
</script>