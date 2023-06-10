<template>
    <div class="calculadoraAlimentos">
        <main class="p-4">
            <section>
                <div id="recomendacion">
                    <li>Calculadora de calorias</li>
                    <li>Modo simple</li> 
                </div>
            </section>
            <section class="p-4"> 
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

            </section>
            <section class="p-4">
                <div class="infoCalorias">
                    <p>Informacion sobre la cantidad de calorias que deberia consumir</p>
                </div>
            </section>

        </main>
        


    </div>
</template>

<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
