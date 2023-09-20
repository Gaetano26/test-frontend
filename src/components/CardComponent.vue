<template>
    <div class="col mt-5">
      <div class="card show" style="height: 100%;">
        <div class="card-img">
          <img :src="product.image_url" :alt="product.name" class="img-fluid" style="height: 100%;">
        </div>
        <div class="card-body">
          <h3 style="margin: 0;">{{ product.name }}</h3>
          <h6 class="py-3" style="margin: 0;">Prezzo: {{ product.price }}</h6>
          <h6 class="py-2" style="margin: 0;">Quantita: {{ product.weight }}</h6>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: ['product'],
    setup() {
      return {};
    },
  };
  </script>
  
  <style lang="scss" scoped>
  h3 {
    color:  #007BFF;
  }

  h6 {
    color:  #007BFF;
  }
  .card-img {
    max-width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  </style>
  