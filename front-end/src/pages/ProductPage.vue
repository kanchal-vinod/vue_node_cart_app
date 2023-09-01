<template>
  <h2>Products</h2>
  <ProductList :products = "products"/>
</template>

<script>
import ProductList from '@/components/ProductList'
import { products } from '@/temp-data';
export default{
  name: "ProductPage",
  components : {
    ProductList,
  },
  data() {
    return {
      products,
    }
  },

 
}
</script>