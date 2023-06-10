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
</template>

