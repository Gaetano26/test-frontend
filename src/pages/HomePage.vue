<template>

<JumboComponent />
<main>
  <DescriptionComponent />
  <CtaComponentVue />
</main>

</template>
     
<script>

import { store } from '../store';
import JumboComponent from '../components/JumboComponent.vue';
import DescriptionComponent from '../components/DescriptionComponent.vue';
import CtaComponentVue from '../components/CtaComponent.vue';
import axios from 'axios';

export default {
  components: {
    JumboComponent,
    DescriptionComponent,
    CtaComponentVue,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    generateChart() {
      if (store.authUser) {
        console.log(store.authUser.id);
        axios
          .post(`${store.apiURL}/charts`, {
            user_id: store.authUser.id,
          })
          .then((res) => {
            console.log(res);
            store.authChart = true;
          });
      }
    },
  },
  mounted() {
    this.generateChart();
  },
};
     </script>
     
     <style lang="scss" scoped>
     main {
      background-color: #FFA500;
     }
     </style>