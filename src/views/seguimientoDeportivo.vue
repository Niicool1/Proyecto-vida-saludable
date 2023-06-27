<script setup>
import { ref, onMounted } from 'vue'
import { getRutinasRequest } from '../api/rutina'

const rutinas = ref([])
const loadRutinas = async () => {
  try {
    const res = await getRutinasRequest()
    console.log(res)
    rutinas.value = res.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  loadRutinas()
})
</script>


<template>
  <div class="container-fluid bg-light bg-gradient">
    <p class="text-white-50 text-opacity-1">.</p>
    <div class="mt-3">
      <h3><small class="text-body-secondary">Seguimiento Deportivo</small></h3>
    </div>
    <div class="ultraboton">
      <router-link to="/seguimientoDeportivo/nuevo">
        <button type="submit" class="btn btn-primary mb-3">Agregar día</button>
      </router-link>
    </div>

    

    <div class="bg-light bg-gradient row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="rutina in rutinas" class="col">
        <div class="card h-100" style="min-height: 12rem;">
          <div class="card-body">
            <h5 class="card-title">{{ rutina.dia }}</h5>
            
            <p class="card-text">{{ rutina.ejercicios }} </p>
          </div>
        </div>
      </div>
      <p class="text-white-50 text-opacity-1">.</p>
    </div>
  </div> 
</template>

<style lang ="scss" scoped>



.ultraboton{
  margin-bottom: 50px;
  margin-left: 30px;
  position: relative;
}
.campo {
  margin: 1rem 0;
}

.boton {
  margin-bottom: 15px;
  margin-right: 20px;
}

.areatexto {
  height: 250px;
}

.arriba,
h3 {
  position: relative;

  margin-left: 30px;
  margin-bottom: 15px;
}


@import '@/assets/mainstyles.scss';
</style>
