<template>
    <div class="container">
        <div class="row">
            <div class="PerfilUsuario">
                <ul class="perfil">
                    <li>
                        <div class="fotoPerfil">
                            <img src="../assets/images/perfil.png" class="rounded-circle img-thumbnail">   
                        </div>
                        <h5>Nombre de perfil</h5>
                    </li>
                       
                    <li>
                        <div class="border border-dark" id="dashboardPerfil">
                            <p>Dashboard con información sobre la dieta del usuario y su actividad deportiva</p>
                        </div>
                    </li>
                    <li>
                        <div class="boton">
                            <div class="btn-group boton2" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-light">Ingresar nueva comida</button>
                                <button type="button" class="btn btn-light">Ingresar actividad fisica</button>
                                <button type="button" class="btn btn-light">Información en detalle sobre mi alimentación</button>
                            </div>
                        </div>
                          
                    </li>
                        
                </ul>

            </div>
        </div>
    </div>
</template>

<style lang ="scss" scoped>
    @import '@/assets/mainstyles.scss';
</style>
