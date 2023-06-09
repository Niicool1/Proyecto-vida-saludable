<script setup>

</script>



<template>
  

  <div id="nav">
    <router-link to="/">Go to Home |</router-link>
    <router-link to="/iniciarSesion">Iniciar Sesion |</router-link>
    <router-link to="/alimentosRecomendados">Alimentos Recomendados</router-link> 
    <router-link to="/calculadoraCalorias">Calculadora Calorías</router-link> 
    <router-link to="/caloriasDiarias">Calorías Diarias</router-link> 
    <router-link to="/informacionNutricional">Información Nutricional</router-link> 
    <router-link to="/seguimientoDeportivo">Seguimiento Deportivo</router-link> 
    <router-link to="/perfilUsuario">Perfil Usuario</router-link> 

  </div>

 

  <div class="Routercontainer">
    
    
  <router-view></router-view>

  </div>
</template>


<style scoped>

</style>
