<template>
      <div class="container-fluid bg-light bg-gradient">
    <div class="container">
      <div id="recomendacion">
        <li>Alimentos recomendados</li>
      </div>
      <div class="row" id="alimento">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src="../assets/images/alimento1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Kiwi</h5>
              <p class="card-text">Tus alimentos presentan una deficiencia de X nutriente por lo que te recomendamos este alimento.</p>
              <a href="#" class="btn btn-primary">Mas información</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src="../assets/images/alimento2.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Palta</h5>
              <p class="card-text">Tus alimentos presentan una deficiencia de X nutriente por lo que te recomendamos este alimento.</p>
              <a href="#" class="btn btn-primary">Mas información</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src="../assets/images/alimento3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Almendras</h5>
              <p class="card-text">Tus alimentos presentan una deficiencia de X nutriente por lo que te recomendamos este alimento.</p>
              <a href="#" class="btn btn-primary">Mas información</a>
            </div>
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
