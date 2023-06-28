import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import {initAuth} from '../auth/validarAuth'

//si no se agregar las paginas aqui no se van a poder ver en el navegador
const routes = [
    {path: '/', name:'Inicio',component: Inicio},
    {path: '/iniciarSesion', name:'Iniciar Sesion', component: ()=>import('@/Formularios/iniciarSesion.vue')},
    {path: '/registro', name:'Registro', component: ()=>import('@/Formularios/registro.vue')},
    {path: '/caloriasDiarias', name:'Calorías Diarias', component: ()=>import('@/views/caloriasDiarias.vue')},
    {path: '/informacionNutricional', name:'Información Nutricional', component: ()=>import('@/views/informacionNutricional.vue')},
    {path: '/calculadoraCalorias', name:'Calculadora Calorías', component: ()=>import('@/views/calculadoraCalorias.vue')},

    
    {
        path: '/alimentosRecomendados', 
        name:'Alimentos Recomendados', 
        component: ()=>import('@/views/alimentosRecomendados.vue'),

    },
    {
        path: '/perfilUsuario', 
        name:'Perfil Usuario', 
        component: ()=>import('@/views/perfilUsuario.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/seguimientoDeportivo', 
        name:'Seguimiento Deportivo', 
        component: ()=>import('@/views/seguimientoDeportivo.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/seguimientoDeportivo/nuevo', 
        name:'Nuevo Seguimiento Deportivo', 
        component: ()=>import('@/views/nuevoSeguimientoDeportivo.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/seguimientoDeportivo/:id', 
        name:'Editar Seguimiento Deportivo', 
        component: ()=>import('@/views/nuevoSeguimientoDeportivo.vue'),
        meta: { requiresAuth: true },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    initAuth().then(({ estaAutenticado }) => {
      if (estaAutenticado.value) {
        next();
      } else {
        if (to.meta.requiresAuth) {
          next("/iniciarSesion");
        } else {
          next();
        }
      }
    });
  });
  

export default router

