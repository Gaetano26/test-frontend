<template>
    <section class="d-flex align-items-center">
      <div class="container-fluid">
        <div class="row row-cols-lg-2">
          <div class="col d-flex align-items-center justify-content-center">
            <img src="/public/img/logo_transparent.png" alt="">
          </div>
          <div class="col d-flex flex-column justify-content-center white">
            <h1 class="text-center pb-4">Modulo di Registrazione</h1>
            <h2 class="pt-3">Dati Personali</h2>
            <div>
              <form @submit.prevent="submitForm()">
                <div class="d-flex flex-column pt-2">
                  <label for="name">Nome</label>
                  <input type="text" id="name" placeholder="Es. Osvaldo" required v-model="name">
                  <p class="text-danger" v-if="message.name">{{ message.name }}</p>
                </div>
                <div class="d-flex flex-column pt-2">
                  <label for="surname">Cognome</label>
                  <input type="text" id="surname" placeholder="Es. Rossi" required v-model="surname">
                  <p class="text-danger" v-if="message.surname">{{ message.surname }}</p>
                </div>
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
import axios from 'axios';
import { store } from '../store'
import router from '../router'
  export default {
    data() {
      return {
        name: '',
        surname: '',
        email: '',
        password: '',
        message: {} ,
        store
      };
    },
    methods: {
        submitForm() {
     

      axios.post(`${store.apiURL}/register`, {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password,
      })
        .then((res) => {
            router.replace('/login')
            store.isReg = true;
             
        
        })
        .catch(error => {
          const messages = error.response.data.errors;

          if (messages.name) {
            this.message.name = messages.name[0];
          }
          if (messages.surname) {
            this.message.surname = messages.surname[0];
          }
          if (messages.email) {
            this.message.email = messages.email[0];
          }
          if (messages.password) {
            this.message.password = messages.password[0];
          }

          
        });

        },
      }
    };
  
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
  