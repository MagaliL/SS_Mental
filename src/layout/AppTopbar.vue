<script setup>
import { useLayout } from '@/layout/composables/layout';

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <img src="/demo/images/logos/top_bar.png" alt="Logo" class="h-10" />
            </router-link>
        </div>

        <!-- Menú de Navegación -->
        <nav class="hidden lg:flex space-x-20">
            <router-link to="/" class="text-blue-600 font-semibold">Inicio</router-link>
            <router-link to="/emergencia" class="text-blue-900 font-semibold">Emergencia</router-link>
            <router-link to="/agendar" class="text-blue-900 font- semibold">Agendar primera cita</router-link>
            <div class="relative">
                <button class="text-blue-900 font-semibold">Más ▼</button>
                <!-- Aquí puedes agregar un dropdown si es necesario -->
            </div>
        </nav>

        <!-- Configuración y Horario -->
        <div class="layout-topbar-actions flex items-center space-x-4">
            <div class="layout-config-menu flex items-center space-x-3"></div>

            <!-- Horario de Atención -->
            <div class="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-bold hidden lg:block">
                Acceso
                <br />
                <span class="text-xs font-normal"></span>
            </div>

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
