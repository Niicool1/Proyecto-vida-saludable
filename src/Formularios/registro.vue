<script setup>

</script>

<template>
    <body>
        <section class="container">
            <div class="form">

                <div class="titulo-form"><label>Registrarse</label></div>

                <div class="alert alert-danger" role="alert">
                    <div id ="error"></div>
                </div>

                <form id="form" action="" method="get" novalidate>
                    <div class="form-group">  
                        <label for="email">Correo</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su correo" required>

                    </div>
                    <div class="form-group">    
                        <label for="rut">Rut</label>
                        <input type="text" class="form-control" id="rut" placeholder="Ingrese su RUT" required>

                    </div>                        
                    <div class="form-group">
                        <label for="contrasenya">Contraseña</label>                
                        <input type="password" class="form-control" id="contrasenya" placeholder="Ingrese su contraseña" required>

                    </div>
                    <div class="form-group">
                        <label for="recontrasenya">Confirmar contraseña</label>
                        <input type="password" id="recontrasenya" class="form-control" placeholder="Ingrese nuevamente la contraseña" required>

                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">
                          Acepto los terminos y condiciones de servicio
                        </label>

                      </div>
                
                    <div class="col-12">                        
                        <button type="submit" class="btn btn btn-dark">Registrarse</button>
                    </div>
                    <div class ="form-link">
                        <span>¿Ya tienes una cuenta? <router-link to="iniciarSesion" class="login">Iniciar sesión</router-link></span>
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
