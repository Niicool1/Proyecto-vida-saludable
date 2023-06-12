<script setup>
    import { reactive, computed } from 'vue';
    import { useVuelidate } from '@vuelidate/core'
    

   


    import { 
        required,
        email,
        minLength,
        sameAs,
        helpers,
        
        


    } from '@vuelidate/validators'


 

    const formData = reactive({
        email: "",
        password: "",
        confirmpassword: "",
        rut: "",
        caja: "",
    });

    const rules = computed (() => {
        return{ 
            email: {
                required: helpers.withMessage("Ingrese su correo",required),
                email: helpers.withMessage("Email invalido",email),
            },

            password: {
                required: helpers.withMessage("Ingrese una contraseña",required), 
                minLength: helpers.withMessage("La contraseña debe tener al menos 10 caracteres", minLength(10))
            },

            confirmpassword: {
                required: helpers.withMessage("Confirmar contraseña ",required),
                sameAs: helpers.withMessage("Las contraseñas no coinciden",sameAs(formData.password))
            },
            rut: {
                required: helpers.withMessage("El Rut es obligatorio",required),

            },
            caja: {
                sameAs: helpers.withMessage("Debe aceptar los terminos y condiciones",sameAs(true)),
            }
        }
        
    });

    const v$ = useVuelidate(rules, formData);
   
 
    const submitForm = async () => {
        const result = await v$.value.$validate();
        if (result) {
            alert("Se mando el formulario")
            
        }
    };

    
</script>


<template>
    <body>
        <section class="container">
            <div class="form">
                <div class="titulo-form"><label>Registrarse</label></div>
                <form @submit.prevent="submitForm" id="form" action="" method="get" novalidate>


                    
                    <div class="form-group">  
                        <label for="email">Correo</label>
                        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Ingrese su correo">
                        <span v-for="error in v$.email.$errors" :key="error.$uid" class="col-form-label text-danger">
                            {{ error.$message }}
                        </span>

                    </div>
                    <div class="form-group">    
                        <label for="rut">Rut</label>
                        <input v-model="formData.rut" type="text" class="form-control" id="rut" placeholder="Ingrese su RUT">
                        <span v-for="error in v$.rut.$errors" :key="error.$uid" class="col-form-label text-danger">
                            {{ error.$message }}
                        </span>
                    </div>                       
                    <div class="form-group">
                        <label for="contrasenya">Contraseña</label>                
                        <input v-model="formData.password" type="password" class="form-control" id="contrasenya" placeholder="Ingrese su contraseña">
                        <span v-for="error in v$.password.$errors" :key="error.$uid" class="col-form-label text-danger">
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="recontrasenya">Confirmar contraseña</label>
                        <input v-model="formData.confirmpassword" type="password" id="recontrasenya" class="form-control" placeholder="Ingrese nuevamente la contraseña">
                        <span v-for="error in v$.confirmpassword.$errors" :key="error.$uid" class="col-form-label text-danger">
                            {{ error.$message }}
                        </span>
                    </div>

                    <div class="form-check">
                        <input v-model="formData.caja" class="form-check-input" type="checkbox" value="" id="invalidCheck">
                        <label class="form-check-label" for="invalidCheck">
                        Acepto los terminos y condiciones de servicio
                        </label>
                    </div>
                    <span v-for="error in v$.caja.$errors" :key="error.$uid" class="col-form-label text-danger">
                            {{ error.$message }}
                    </span>
                    
                    <div class="col-12">                       
                        <button  @click="alert ^= true" type="submit" class="btn btn btn-dark">Registrarse</button>
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
