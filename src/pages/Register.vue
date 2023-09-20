<template>
    <section class="d-flex justify-content-center pt-5">
      <div class="container">
        <div class="row row-cols-lg-2">
          <div class="col">
            <img src="/public/img/logo_transparent.png" alt="">
          </div>
          <div class="col white">
            <h1 class="text-center">Modulo di Registrazione</h1>
            <h2 class="pt-3">Dati Personali</h2>
            <div>
              <form @submit.prevent="submitForm">
                <div class="d-flex flex-column pt-2">
                  <label for="nome">Nome</label>
                  <input type="text" id="name" placeholder="Es. Osvaldo" required v-model="name">
                  <p class="text-danger" v-if="message.name">{{ message.name }}</p>
                </div>
                <div class="d-flex flex-column pt-2">
                  <label for="cognome">Cognome</label>
                  <input type="text" id="surname" placeholder="Es. Rossi" required v-model="surname">
                  <p class="text-danger" v-if="message.name">{{ message.surname }}</p>
                </div>
                <div class="d-flex flex-column pt-2">
                  <label for="Email">Email</label>
                  <input type="email" id="email" placeholder="Es. osvaldo@mail.com" required v-model="email">
                  <p class="text-danger" v-if="message.name">{{ message.email }}</p>
                </div>
                <div class="d-flex flex-column pt-2">
                  <label for="Password">Password</label>
                  <input type="password" id="password" placeholder="Es.Password" required v-model="password">
                  <p class="text-danger" v-if="message.name">{{ message.password }}</p>
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
  export default {
    data() {
      return {
        name: '',
        surname: '',
        email: '',
        password: '',
        message: {} // Suppongo che tu utilizzi message per la gestione degli errori
      };
    },
    methods: {
      submitForm() {
        // Gestisci l'invio del modulo qui
        // Esegui la validazione dei campi, invia una richiesta HTTP, ecc.
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
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
  