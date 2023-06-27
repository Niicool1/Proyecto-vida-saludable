<script setup>
import { reactive } from 'vue';
import router from '../router';

import {
  createRutinaRequest
} from '../api/rutina'


const formData = reactive({
  dia: "",
  ejercicios: "",
});


async function submitForm() {

  try {
    const res = await createRutinaRequest(formData);
    console.log(formData);
    console.log(res);
    router.go(-1);

  } catch (error) {
    console.error(error)
  }
}


</script>


<template>
  <div class="container-fluid bg-light bg-gradient">
    <p class="text-white-50 text-opacity-1">.</p>
    <div class="mt-3">
      <h3><small class="text-body-secondary">Agregar día</small></h3>
    </div>
    <div class="segDeportivo container">
      <form @submit.prevent="submitForm" id="form" action="" method="get" novalidate>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          <div class="cajas card" style="width: 18rem;">
            <div class="mb-3">
              <input v-model="formData.dia" type="text" class="campo form-control" placeholder="Nombre del día">
            </div>
            <div class="form-floating mb-3">
              <textarea v-model="formData.ejercicios" class="areatexto form-control"
                placeholder="Leave a comment here"></textarea>
              <label for="floatingTextarea">Rutina para el día</label>
            </div>
            <div class="col-12 d-flex justify-content-between">
              <button type="submit" class="boton btn btn-success">Agregar</button>
              <router-link to="/seguimientoDeportivo">
                <button type="submit" class="arriba btn btn-danger">Cancelar</button>
              </router-link>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template> 


<style lang ="scss" scoped>
.container {
  margin-top: 60px;
}

.campo {
  margin: 1rem 0;
}

.boton {
  margin-bottom: 15px;
}

.areatexto {
  height: 400px;
}

.arriba,
h3 {
  position: relative;

  margin-left: 30px;
  margin-bottom: 15px;
}


@import '@/assets/mainstyles.scss';</style>
