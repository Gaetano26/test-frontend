<template>
  <NavbarComponent v-if="this.$route.path != '/login' && this.$route.path != '/register' "/>
  <router-view></router-view>
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';
import router from './router';

export default {
  components: {
    NavbarComponent
},
  data () {
      

      return {}
  }
}    
</script>

<style lang="scss" scoped>

</style>