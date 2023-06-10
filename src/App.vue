<script setup>

</script>



<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Inicio</router-link>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <router-link to="/alimentosRecomendados" class="nav-item nav-link">Alimentos recomendados</router-link> 
              <router-link to="/calculadoraCalorias" class="nav-item nav-link">Calculadora calorías</router-link> 
              <router-link to="/caloriasDiarias" class="nav-item nav-link">Calorías diarias</router-link> 
              <router-link to="/informacionNutricional" class="nav-item nav-link">Información nutricional</router-link> 
              <router-link to="/seguimientoDeportivo" class="nav-item nav-link">Seguimiento deportivo</router-link> 
              <router-link to="/perfilUsuario" class="nav-item nav-link">Perfil usuario</router-link> 
            </div>
            <div class="navbar-nav ms-auto">
              <router-link to="/iniciarSesion" class="nav-item nav-link">Iniciar Sesion</router-link>
            </div>
        </div>
    </div>
</nav>
  
  <div class="Routercontainer">
    <router-view></router-view>
  </div>


  <footer class="bg-light text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer text</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer text</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
</footer>




</template>


<style scoped>

</style>
