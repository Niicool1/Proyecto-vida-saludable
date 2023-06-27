
<script setup>

    import DataComida from '@/data/comida.json'

    const Alimentos = DataComida

</script>

<template>
    <div class="container-fluid bg-light bg-gradient">
        <div class="container InformacionNutricional">
            <div class="m-2">
                <h5>Información nutricional sobre distintos alimentos: </h5>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    
                <p v-for="comida in Alimentos">
                    
                    <div class="cajas card" style="width: 18rem;">

                        <div class="card-body">
                            <h5 class="card-title">{{ comida.alimento}}</h5>
                            <p class="card-text">Información nuticional: </p>
                            <p class="card-text">Porción: {{ comida.porcion}} </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Calorías : {{ comida.calorias}}k/cal</li>
                            <li class="list-group-item">Proteínas : {{ comida.proteinas}}g</li>
                            <li class="list-group-item">Carbohidratos : {{ comida.carbohidratos}}g</li>
                            <li class="list-group-item">Grasas : {{ comida.grasa}}g</li>
                        </ul>
                    </div>
                </p>
            </div>
        </div>
    </div>
</template>




<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
