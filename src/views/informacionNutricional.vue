<template>
    <div class="InformacionNutricional">
        
        <main class="p-1">
            <section class="m-4 p-1">
            <div class="m-1" id="informacion">
                <li>Información alimentos</li>
            </div>
            <div class="col-3">
                    <label for="buscarAlimento" class="form-label"></label>
                    <input type="text" class="form-control form-control" id="buscarAlimento" placeholder="Buscar alimento por nombre">

            </div>
            </section>
            <section>
            <ul class="row" id="infoAlimento">
                <li class="col">
                    <div class="card" style="width: 40rem; height: 50rem;">
                        <img src="images/manzana.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title" style="font-weight: 600;">Nombre del alimento</h5>
                        <p class="card-text">Cantidad de calorias e información nutricional</p>
                        
                        </div>
                    </div>
                </li>
                <li class="col">
                    <div class="card" style="width: 40rem; height: 50rem;">
                        <img src="images/papa.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title" style="font-weight: 600;">Nombre del alimento</h5>
                        <p class="card-text">Cantidad de calorias e información nutricional</p>
                        
                        </div>
                    </div>
                </li>

            </ul>
            </section>
        </main>

    </div>
</template>

<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
