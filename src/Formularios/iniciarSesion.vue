<script setup>



</script>

<template>
    <body>

        <section class="container">
            <div class="form">
            
                <div class="titulo-form"><label>Iniciar sesión</label></div>
                    
                <form id="form" action="" method="get" novalidate>
                    <div class="alert alert-danger" role="alert">
                        <strong>Inicio de sesión fallido</strong>, correo y/o contraseña incorrecto/s
                    </div>
                    <div class="form-group position-relative">
                        <label for="email" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su correo" required>
                        
                    </div>
                    <div class="form-group">
                        <label for="contrasenya" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" placeholder="Ingrese su contraseña" id="contrasenya" required>
                        
                    </div>
                              
                    <div class ="form-link">
                        <span><router-link to="#" class="login">Olvidé mi contraseña</router-link></span>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-dark">Iniciar Sesión</button>
                    </div>
                    <div class ="form-link">
                        <span>¿No tienes cuenta? <router-link to="/registro" class="login">Regístrate</router-link></span>
                    </div>
                    <div class ="form-link">
                        <span><router-link to="/" class="login">Volver al inicio</router-link></span>
                    </div>

                </form>
            </div>
        </section>
    </body>
</template>

<style lang ="scss" scoped>
    @import '@/assets/styles.scss';
</style>
