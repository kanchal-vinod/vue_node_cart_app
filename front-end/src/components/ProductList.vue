<template>
    <div>
        <div class="grid-wrap">
            <div v-for="product in products" :key="product.id" class="product-item">
                <img :src="product.imageName" alt="" srcset="">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <router-link :to="'/products/' + product.id">
                    <button>more details</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductList',
    props :['products'],
}
</script>