<template>
    <div class="seguimineto deportivo">
        <main class="p-1">
    <section class="m-4 p-2">
      <div class="m-1" id="informacion">
         <h5>Seguimiento deportivo</h5>
      </div>
      <div class="containerDias">
        <div class="row align-items-start">
          <div class="Ejercicio col border border-2 border-primary">
              <h4 class="pb-3 mb-2 border-bottom border-2 border-primary">Lunes</h4>
              
                  <div class="row col-9">
                      <label for="ejercicio1" class="form-label"></label>
                      <input type="text" class="form-control" id="ejercicio1" placeholder="Ingrese ejercicio">
                  </div>
                  <div class="row col-9">
                      <label for="ejercicio2" class="form-label"></label>
                      <input type="text" class="form-control" id="ejercicio2" placeholder="Ingrese ejercicio">
                  </div> 
                  <div class="row col-9 input-group mb-2">
                    <i class="col-2 bi bi-circle" type="submit"></i>
                    <input type="text" class="form-control" id="agregarEjercicio2" placeholder="Agregar ejercicio">
                  </div>  
                        
          </div>
          <div class="Ejercicio col border border-2 border-primary">
            <h4 class="pb-3 mb-2 border-bottom border-2 border-primary">Martes</h4>
        
            <div class="row col-9">
                <label for="ejercicio3" class="form-label"></label>
                <input type="text" class="form-control" id="ejercicio3" placeholder="Ingrese ejercicio">
            </div>
            <div class="row col-9">
                <label for="ejercicio4" class="form-label"></label>
                <input type="text" class="form-control" id="ejercicio4" placeholder="Ingrese ejercicio">
            </div>
            <div class="row col-9 input-group mb-2">
              <i class="col-2 bi bi-circle" type="submit"></i>
              <input type="text" class="form-control" id="agregarEjercicio2" placeholder="Agregar ejercicio">
            </div>
            
          </div>
          <div class="Ejercicio col border border-2 border-primary">
            <h4 class="pb-3 mb-2 border-bottom border-2 border-primary">Miércoles</h4>
        
            <div class="row col-9">
                <label for="ejercicio5" class="form-label"></label>
                <input type="text" class="form-control" id="ejercicio5" placeholder="Ingrese ejercicio">
            </div>
            <div class="row col-9">
                <label for="ejercicio6" class="form-label"></label>
                <input type="text" class="form-control" id="ejercicio6" placeholder="Ingrese ejercicio">
            </div> 
            <div class="row col-9 input-group mb-2">
              <i class="col-2 bi bi-circle" type="submit"></i>
              <input type="text" class="form-control" id="agregarEjercicio2" placeholder="Agregar ejercicio">
            </div>      
          </div>
          <div class="modificarDia">
            <li class="border border-dark d-inline-block">Agregar dia</li>
            <li class="border border-dark d-inline-block ">Eliminar dia</li>
          </div>
          <div class="row d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary col-1" type="submit">Guardar</button>
          </div>
    
      </div>
     </div>
    </section>

  </main>
    </div>
</template>

<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
