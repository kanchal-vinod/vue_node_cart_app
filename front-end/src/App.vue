<template>
  <navbar/>
  <div class="page-wrap">
    <router-view></router-view>
  </div>
  
</template>

<script>
import Navbar  from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    Navbar ,
  }
}
</script>

