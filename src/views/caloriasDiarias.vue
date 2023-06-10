<template>
    <div class="caloriasDiarias">
        <main class="p-3">
      <section>
        <div class="caloriasDiarias" id="recomendacion">
            <li>Seguimiento calorias</li>
            <li>
                <div class="form-check form-switch form-check-reverse">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
                    <label class="form-check-label" for="flexSwitchCheckReverse">Vista Diaria</label>
                  </div>   
            </li>
        </div>
      </section>
      <section class="p-4"> 
        <div class="infoCalorias border border-2 border-primary">
            <h4 class="pb-3 mb-2 border-bottom border-2 border-primary">Hoy</h4>
            
            <form class="m-4 p-3">
                <div class="row mb-3 col-5">
                    <label for="alimento1" class="form-label"></label>
                    <input type="text" class="form-control-lg" id="alimento1" placeholder="Ingrese alimento consumido">
                </div>
                <div class="row mb-3 col-5">
                    <label for="alimento2" class="form-label"></label>
                    <input type="text" class="form-control-lg" id="alimento2" placeholder="Ingrese alimento consumido">
                </div>
                
            </form>
        </div>


      </section>
      <section class="p-4 m-3">
        <div class="infoCalorias">
            <p>Calorias totales consumidas durante el día</p>
            <p>Recomendación de alimento y horas donde comer</p>
        </div>
        <div class="d-flex flex-row-reverse">
            <div class="p-2"><button type="submit" class="btn btn-primary btn-lg m-3" style="--bs-btn-font-size: 1rem;">Guardar</button></div>
            <!--  --bs-btn-padding-y: 1.25rem; --bs-btn-padding-x: 1.75rem; --bs-btn-font-size: 1rem;-->
        </div>
      </section>

    </main>



    </div>
    

</template>

<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
