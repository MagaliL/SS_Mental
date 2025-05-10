<script setup>
//import { useLayout } from '@/layout/composables/layout';

//const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <!-- No lo borro por si llegamos a usarlo
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button> -->
            <router-link to="/" class="layout-topbar-logo p-6">
                <img src="/public/demo/images/home/PSMFI-LOG.png" alt="Logo" class="h-12" />
            </router-link>
        </div>

        <!-- Menú de Navegación -->
        <nav class="hidden lg:flex mx-auto space-x-10 items-center h-full">
            <!-- Añade items-center y h-full -->
            <router-link to="/" class="text-blue-600 font-semibold py-2">Inicio</router-link>
            <router-link to="/emergencia" class="text-blue-900 font-semibold py-2">Emergencia</router-link>
            <!--router-link to="/agendar" class="text-blue-900 font-semibold py-2">Agendar primera cita</router-link-->
            <a href="https://forms.gle/MLKdKxPMz7szFCiq5" class="text-blue-900 font-semibold py-2"> Agendar primera cita </a>
            <div class="relative">
                <button class="text-blue-900 font-semibold py-2">Más ▼</button>
            </div>
        </nav>

        <!-- Configuración y Horario -->
        <div class="layout-topbar-actions flex items-center space-x-4">
            <div class="layout-config-menu flex items-center space-x-4"></div>

            <!-- Boton de acceso -->
            <router-link to="/login" class="bg-blue-50 hover:bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-bold hidden lg:block transition-colors"> Acceso </router-link>
            <!-- Menú Responsive -->
            <button
                class="layout-topbar-menu-button layout-topbar-action lg:hidden"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button>
        </div>
    </div>
</template>
