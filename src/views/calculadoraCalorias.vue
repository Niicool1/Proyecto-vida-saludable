<template>
    <div class="container-fluid bg-light bg-gradient">
        <div class="container calculadoraAlimentos">
            <div id="recomendacion">
                <li>Calculadora de calorias</li>
                <li>Modo simple</li> 
            </div>
            <div class="row">
                <div class="col-2">
                    <input type="text" class="form-control" placeholder="Ingrese su peso" aria-label="Peso">
                </div>
                <div class="col-2">
                    <input type="text" class="form-control" placeholder="Ingrese su altura" aria-label="Altura">
                </div>
                <div class="btn-group dropend col-1">
                    <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Actividad
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Actividad deportiva nula</a></li>
                    <li><a class="dropdown-item" href="#">Actividad deportiva regular</a></li>
                    <li><a class="dropdown-item" href="#">Intensa actividad deportiva</a></li>
                    </ul>
                </div>    
            </div>
            <div class="col-1">
                <button class="btn btn-primary" type="submit">Calcular</button>
            </div>
            <div class="infoCalorias">
                <p>Informacion sobre la cantidad de calorias que deberia consumir</p>
            </div>

        </div>

    </div>
    
</template>

<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
