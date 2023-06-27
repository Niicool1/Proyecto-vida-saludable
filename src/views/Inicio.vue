<script setup>

</script>

<template>
    <div class="container home">
    <div class="row" id="imagenInicio">
      <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img src="../assets/images/rutinadeportiva.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Artículo sobre rutinas deportivas</h5>
            <p class="card-text">
              Aspectos fundamentales para tener una buena rutina de entrenamiento
            </p>
            <a href="#" class="btn btn-primary">Mas información</a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img src="../assets/images/infonutricional.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Artículo sobre información nutricional</h5>
            <p class="card-text">La importancia de conocer la información nutricional de tus alimentos</p>
            <a href="#" class="btn btn-primary">Mas información</a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img src="../assets/images/alimentacion-saludable.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Articulo sobre alimentación</h5>
            <p class="card-text">Consejos para tener una buena alimentación</p>
            <a href="#" class="btn btn-primary">Mas información</a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img src="../assets/images/habitosaludable.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Articulo sobre hábitos para una vida saludable</h5>
            <p class="card-text">La importancia de los hábitos para llevar un estilo de vida saludable</p>
            <a href="#" class="btn btn-primary">Mas información</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 



<style lang ="scss" scoped>
    .card-body {
      display: flex;
      flex-direction: column;
    }
    .card-body .btn {
      margin-top: auto;
    }
@import '@/assets/mainstyles.scss';
</style>

