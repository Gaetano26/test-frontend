<template>
    <section class="d-flex align-items-center">
      <div class="container-fluid">
        <div class="row row-cols-lg-2">
          <div class="col d-flex align-items-center justify-content-center">
            <img src="/public/img/logo_transparent.png" alt="">
          </div>
          <div class="col pb-5 d-flex flex-column justify-content-center white">
            <h1 class="text-center mb-3">Login</h1>
            <h2 class="pt-3">Dati Personali</h2>
            <div>
              <form @submit.prevent=" submitForm()"  action="#">
                <div class="d-flex flex-column pt-2">
                  <label for="email">Email</label>
                  <input type="email" id="email" placeholder="Es. osvaldo@mail.com" required v-model="email">
                  <p class="text-danger" v-if="message.email">{{ message.email }}</p>
                </div>
                <div class="d-flex flex-column pt-2">
                  <label for="password">Password</label>
                  <input type="password" id="password" placeholder="Es.Password" required v-model="password">
                  <p class="text-danger" v-if="message.password">{{ message.password }}</p>
                </div>
                <div class="d-flex gap-3 mt-5" >
                    <button type="submit" class="btn orange  text-white">Invia</button>
                    <div><router-link to="/"><a href="/" class="btn btn-primary">Home</a></router-link></div>
                </div>
                
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { store } from '../store';
  import axios from 'axios';
  import router from '../router'
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: {} ,
        store
      };
    },
    methods: {
      submitForm() {
  axios.post(`${store.apiURL}/login`, {
    email: this.email,
    password: this.password,
  })
  .then((res) => {
    console.log(res);
    store.isAuth = true;
    store.authUser = res.data.user;
    router.push('/');
   
  })
  .catch(error => {
    const messages = error.response.data.errors;

    if (messages.email) {
      this.message.email = messages.email[0];
    }
    if (messages.password) {
      this.message.password = messages.password[0];
    }
  });
}
    },
  

    }


  </script>
  
  <style lang="scss" scoped>
    
    .container-fluid {
    height: 100vh;
  }

  .row {
    
    height: 100vh;
  }
  section {
    width: 100%;
    height: 100vh;
  }
  img {
    width: 500px;
    height: 500px;
  }

  .white {
    background-color: white
  }
  .orange {
    background-color: #FFA500;
    border-color: white;
   }

   h1 {
    color: #007BFF;
   }

   h2 {
    color: #007BFF;
   }

   label {
    color:  #FFA500;
   }
  </style>
  