<script setup>
  import { reactive } from 'vue';

  import {
    createRutinaRequest
  } from '../api/rutina'


  const formData = reactive({
        dia: "" , 
        ejercicios: "",
    });


async function submitForm() {
  
  try {
    const res = await createRutinaRequest(formData);
    console.log(formData);
    console.log(res);
  } catch (error) {
    console.error(error)
  }
}


</script>



<template>
  <div class="container-fluid bg-light bg-gradient">

    <h3><small class="text-body-secondary">Seguimiento Deportivo</small></h3>

    <button type="submit" class="arriba btn btn-primary">Agregar Día</button>

    <div class="segDeportivo container">
      <form @submit.prevent="submitForm" id="form" action="" method="get" novalidate>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          <div class="cajas card" style="width: 18rem;">
            <div class="mb-3">
              <input v-model= "formData.dia" type="text" class="campo form-control" placeholder="Nombre del día">
            </div>
            <div class="form-floating mb-3">
              <textarea v-model= "formData.ejercicios" class="areatexto form-control" placeholder="Leave a comment here"></textarea>
              <label for="floatingTextarea">Rutina para el día</label>
            </div>
            <div class="col-12">
              <button type="submit" class="boton btn btn-success">Agregar</button>
              
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template> 


<style lang ="scss" scoped>
.campo{
  margin: 1rem 0 ;
}
.boton{
  margin-bottom: 15px;
  margin-right: 20px;
}
.areatexto{
  height: 250px;
}
.arriba,h3{
  position: relative ;
  
  margin-left: 30px;
  margin-bottom: 15px;
}


@import '@/assets/mainstyles.scss';
</style>
