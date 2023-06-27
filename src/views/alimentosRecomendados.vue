<template>
    <div class="container-fluid bg-light bg-gradient">
        <div class="container">
            <div id="recomendacion">
                <li>Alimentos recomendados</li>
                
            </div>
            <ul class="row" id="alimento">
                <li class="col">
                    <div class="card" style="width: 25rem; height: 30rem;">
                        <img src="../assets/images/alimento1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Kiwi</h5>
                        <p class="card-text">Tus alimentos presentan una deficiencia de X nutriente por lo que te recomendamos este alimento.</p>
                        <a href="#" class="btn btn-primary">Mas información</a>
                        </div>
                    </div>
                </li>
                <li class="col">
                    <div class="card" style="width: 25rem; height: 30rem;">
                        <img src="../assets/images/alimento2.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Palta</h5>
                        <p class="card-text">Tus alimentos presentan una deficiencia de X nutriente por lo que te recomendamos este alimento.</p>
                        <a href="#" class="btn btn-primary">Mas información</a>
                        </div>
                    </div>
                </li>
            
                <li class="col">
                    <div class="card" style="width: 25rem; height: 30rem;">
                        <img src="../assets/images/alimento3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Almendras</h5>
                        <p class="card-text">Tus alimentos presentan una deficiencia de X nutriente por lo que te recomendamos este alimento.</p>
                        <a href="#" class="btn btn-primary">Mas información</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
    
</template>


<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
