import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '@/views/Inicio.vue'

//si no se agregar las paginas aqui no se van a poder ver en el navegador
const routes = [
    {path: '/', name:'Inicio',component: Inicio},
    {path: '/iniciarSesion', name:'Iniciar Sesion', component: ()=>import('@/Formularios/iniciarSesion.vue')},
    {path: '/registro', name:'Registro', component: ()=>import('@/Formularios/registro.vue')},
    {path: '/alimentosRecomendados', name:'Alimentos Recomendados', component: ()=>import('@/views/alimentosRecomendados.vue')},
    {path: '/calculadoraCalorias', name:'Calculadora Calorías', component: ()=>import('@/views/calculadoraCalorias.vue')},
    {path: '/caloriasDiarias', name:'Calorías Diarias', component: ()=>import('@/views/caloriasDiarias.vue')},
    {path: '/informacionNutricional', name:'Información Nutricional', component: ()=>import('@/views/informacionNutricional.vue')},
    {path: '/perfilUsuario', name:'Perfil Usuario', component: ()=>import('@/views/perfilUsuario.vue')},
    {path: '/seguimientoDeportivo', name:'Seguimiento Deportivo', component: ()=>import('@/views/seguimientoDeportivo.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router

