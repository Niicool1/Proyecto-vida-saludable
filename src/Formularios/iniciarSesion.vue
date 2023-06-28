<script setup>
    import { reactive, computed } from 'vue';
    import { useVuelidate } from '@vuelidate/core'
    import{loginRequest} from '../api/auth.js'
    import router from '../router';
    

    import { 
        required,
        email,

    } from '@vuelidate/validators'

 

    const formData = reactive({
        email: "",
        password: "",
    });

    const rules = computed (() => {
        return{ 
            email: {required, email},
            password: {required},
        }
        
    });

    const v$ = useVuelidate(rules, formData);

    const state = reactive({
    hasError: false,
    });

   

    async function submitForm() {
        const result = await v$.value.$validate();
        if (result) {
            console.log(formData);

            try {
                const res = await loginRequest(formData);
                console.log(res);

                router.push({
                    path: "/",
                    force: true
                    });

            } catch (error) {
                state.hasError = true;
                console.error(error)
            }
        }
    }





</script>

<template>
    
    <body>
        

        <section class="container">
            <div class="form">
                <div class="titulo-form"><label>Iniciar sesión</label></div> 
                <form @submit.prevent="submitForm" id="form" action="" method="get" novalidate>
                    
                    
        
                        <div v-if="v$.$error == true || state.hasError" class="alert alert-danger" role="alert">
                            <strong>Inicio de sesión fallido</strong>, correo y/o contraseña incorrecto/s
                        </div>

                        <div class="form-group position-relative">

                            <label for="email" class="form-label">Correo</label>
                            <input type="email" class="form-control" id="email" placeholder="Ingrese su correo" v-model="formData.email">
                                
                        </div>

                        <div class="form-group">
                            <label for="contrasenya" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" placeholder="Ingrese su contraseña" id="contrasenya" v-model="formData.password">
                                
                        </div>
                                    
                        <div class ="form-link">
                            <span><router-link to="#" class="login">Olvidé mi contraseña</router-link></span>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-dark">Iniciar Sesión</button>
                        </div>
                    </form>
    

                    <div class ="form-link">
                        <span>¿No tienes cuenta? <router-link to="/registro" class="login">Regístrate</router-link></span>
                    </div>
                    <div class ="form-link">
                        <span><router-link to="/" class="login">Volver al inicio</router-link></span>
                    </div>

            </div>
        </section>
    </body>



</template>



<style lang ="scss" scoped>
    @import '@/assets/styles.scss';
</style>
