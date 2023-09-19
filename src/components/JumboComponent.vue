<template>
    <div class="container-fluid orange">
        <div class="row row-lg-6">
            <div class="col rel ps-4">
                <img class="imag ms-4" src="/public/img/logo_transparent.png" alt="">
                <h1>La Sicilia in un Solo Click</h1>
                <router-link to="/products"><a href="" class="btn blue py-3 px-5 text-white">Vai ai Prodotti</a></router-link>
              
            </div>
            <div class="col">
                <img class="img-fluid" src="/public/img/Immagine 2023-09-19 162722.png" alt="">
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
.orange {
    background-color:  #FFA500;
}

.imag {
     margin-top: -60px;
    width: 700px;
    height: 650px;
  
}

.rel {
    position: relative;
}

h1 {
    position: absolute;
    top: 58%;
    left: 20%;
    color: white;
    letter-spacing: 1px;
}

.col {
    overflow-y: hidden;
}

.blue {
    background-color:  #007BFF;
    position: absolute;
    top: 75%;
    left: 36%;
  border-color:  white;
}

</style>