<template>
    <div class="container py-5 mt-5">
        <div class="row py-5 mt-5">
            <div class="col py-5 text-center">
                <h2 class="pt-5 pb-3 text-white">Registrati adesso per ordinare i nostri prodotti.</h2>
                <i class="fas fa-arrow-down fs-2 text-white"></i>
                <div class="text-center py-4 "><router-link to="/register"><a href="https://www.tuosito.com" class="btn blue py-3 px-5 text-white">Registrati</a></router-link></div>
                <h3><h2 class="text-white">I nostri prodotti portano con sé i colori e i sapori unici della Sicilia.</h2></h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.blue {
    background-color:  #007BFF;
 
  border-color:  white;
}
</style>