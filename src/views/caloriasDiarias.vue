<template>
    <div class="container-fluid bg-light bg-gradient">
        <p class="text-white-50 text-opacity-1">.</p>
        <div class="container caloriasDiarias">
            <div class="caloriasDiarias d-flex justify-content-between align-items-center" id="recomendacion">
                <h5>Seguimiento calorias</h5>
                <div class="form-check form-switch form-check-reverse">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
                    <label class="form-check-label" for="flexSwitchCheckReverse">Vista Diaria</label>
                </div>
            </div>
            <div class="infoCalorias card p-3 my-3">
                <h4 class="pb-3 mb-2 card-body">Hoy</h4>
                <form>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Agregar alimento</label>
                        <input type="text" class="form-control" id="formGroupExampleInput"
                            placeholder="Ingrese alimento consumido">
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Agregar otro alimento</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2"
                            placeholder="Ingrese alimento consumido">
                    </div>
                </form>
            </div>
            <div class="infoCalorias mb-3">
                <p>Calorias totales consumidas durante el día</p>
                <p>Recomendación de alimento y horas donde comer</p>
            </div>
            <div class="d-flex flex-row-reverse">
                <button type="submit" class="btn btn-primary btn-lg m-3">Guardar</button>
            </div>
        </div>
    </div>
</template>
  
<style lang='scss'>   @import '@/assets/mainstyles.scss';

   .caloriasDiarias {
       margin-top: 20px;
   }

   #recomendacion {
       margin-bottom: 20px;
   }

   .infoCalorias {
       padding: 20px;
   }
</style>
  
 