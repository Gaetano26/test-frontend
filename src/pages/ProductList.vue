<template>
   <div  v-if="!this.loading" class="container">
    <div class="row row-cols-lg-4">
      <CardComponent  v-for="(product, index) in store.productsList" :key="product.id" :product="product" />
    </div>
    <nav aria-label="Page navigation example">
                <ul class="pagination mt-5">
                    <li class="page-item"><button class="page-link" :class="currentPage === 1 ? 'd-none': ''" @click="getData(currentPage - 1)">Previous</button></li>
                    <li class="page-item" v-for="n in lastPage"><button  :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                    </li>
    
                    <li class="page-item"><button class="page-link" :class="currentPage === lastPage ? 'd-none': ''" @click="getData(currentPage + 1)">Next</button></li>
                </ul>
            </nav>
  </div>
    <div v-else>
        <LoaderComponent />
    </div>
  </template>
  
  <script>
  import { store } from '../store'
  import CardComponent from '../components/CardComponent.vue';
  import LoaderComponent from '../components/LoaderComponent.vue';
  
  import axios from 'axios';
  
  
  export default {
    components: {
      CardComponent,
      LoaderComponent
    
  },
    data () {
        
  
        return {
          store,
          currentPage: 1,
            lastPage: null,
            loading : true
        }
    },
    methods: {
        getData(numPage) {
            axios.get(`${store.apiURL}/products`, {
                params: {
                    "page": numPage
                }
            }).then((res) => {
              console.log(res.data.results.products)
               store.productsList = res.data.results.products.data;
               this.currentPage = res.data.results.products.current_page
               this.lastPage = res.data.results.products.last_page
               console.log(this.lastPage)


            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            })
        }
    },
    mounted() {
        this.getData(1);
    },

  }    
  </script>
 
  <style lang="scss" scoped>
  
  </style>