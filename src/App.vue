<template>
  <NavbarComponent />
  <router-view></router-view>
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';

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