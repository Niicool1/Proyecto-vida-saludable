import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import iniciarSesion from '@/Formularios/iniciarSesion.vue'
import Registro from '@/Formularios/registro.vue'
import alimentosRecomendados from '@/views/alimentosRecomendados.vue'
import calculadoraCalorias from '@/views/calculadoraCalorias.vue'
import caloriasDiarias from '@/views/caloriasDiarias.vue'
import informacionNutricional from '@/views/informacionNutricional.vue'
import perfilUsuario from '@/views/perfilUsuario.vue'
import seguiminentoDeportivo from '@/views/seguimientoDeportivo.vue'

//si no se agregar las paginas aqui no se van a poder ver en el navegador
const routes = [
    {path: '/', name:'Inicio',component: Inicio},
    {path: '/iniciarSesion', name:'Iniciar Sesion',component: iniciarSesion},
    {path: '/registro', name:'Registro',component: Registro},
    {path: '/alimentosRecomendados', name:'Alimentos Recomendados',component: alimentosRecomendados},
    {path: '/calculadoraCalorias', name:'Calculadora Calorías',component: calculadoraCalorias},
    {path: '/caloriasDiarias', name:'Calorías Diarias',component: caloriasDiarias},
    {path: '/informacionNutricional', name:'Información Nutricional',component: informacionNutricional},
    {path: '/perfilUsuario', name:'Perfil Usuario',component: perfilUsuario},
    {path: '/seguiminentoDeportivo', name:'Seguimineto Deportivo',component: seguiminentoDeportivo}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router

