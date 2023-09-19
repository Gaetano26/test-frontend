<template>

<JumboComponent />
<main>
  <DescriptionComponent />
  <CtaComponentVue />
</main>

</template>
     
<script>

import JumboComponent from '../components/JumboComponent.vue';
import DescriptionComponent from '../components/DescriptionComponent.vue';
import CtaComponentVue from '../components/CtaComponent.vue';
     
     export default {
       components: {
       JumboComponent,
       DescriptionComponent,
       CtaComponentVue,
     },
       data () {
           
     
           return {}
       }
     }    
     </script>
     
     <style lang="scss" scoped>
     main {
      background-color: #FFA500;
     }
     </style>