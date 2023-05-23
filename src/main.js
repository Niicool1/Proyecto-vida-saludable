
import { createApp } from 'vue'

import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Inicio from '@/views/Inicio.vue'
import iniciarSesion from '@/Formularios/iniciarSesion.vue'
import Registro from '@/Formularios/registro.vue'

import "bootstrap/dist/css/bootstrap.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'Inicio',component: Inicio},
        {path: '/iniciarSesion', name:'Iniciar Sesion',component: iniciarSesion},
        {path: '/registro', name:'Registro',component: Registro}
    ]
})

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js";