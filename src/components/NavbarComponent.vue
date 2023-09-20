<template>
<nav class="d-flex justify-content-between  px-3 alt">
    <div class="cont-logo d-flex align-items-center pb-1"><router-link to="/"><img class="img-fluid pb-1" src="/public/img/logo_transparent.png" alt=""></router-link></div>
     <div class="d-flex gap-4 align-items-center">
         <div><i class="fas fa-shopping-cart text-white">2</i></div>
         <div v-if="store.isReg === false"><router-link to="/register"><a href="/" class="btn orange text-white">registrati</a></router-link></div>
         <div v-else-if="store.isAuth === false"><router-link to="/login"><a href="/" class="btn orange text-white">accedi</a></router-link></div>
     </div>
   
</nav>
</template>
   
   <script>
   import { store } from '../store';
   
   
   export default {
     components: {
     
   },
     data () {
         
   
         return {
          store
         }
     }
   }    
   </script>
   
   <style lang="scss" scoped>

   nav {
    background-color: #007BFF;
    border: none;
    overflow-y: hidden;
   }

   .orange {
    background-color: #FFA500;
    border-color: white;
   }
   
   .cont-logo  {
         width: 140px;
         height: 90px;
   }

   .alt {
    height: 80px;
    
   }
   
   </style>