<script setup>
import Galleria from 'primevue/galleria';
import { VueperSlide, VueperSlides } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';



// Contenido personalizado aquí:
const welcomeMessage = 'Bienvenido';
</script>

<!-- Html del homepage, sus estilos están en _main.scss -->

<template>

    <vueper-slides :infinite="true" :bullets="true" :autoplay="true" :autoplayduration="2000" :pause-autoplay-on-hover="true"  >
        <vueper-slide title="Prueba" content="Funciona?">Aquí debería haber texto</vueper-slide>

                        <template #arrow-left>
                            <i class="icon icon-arrow-left" />
                        </template>

                        <template #arrow-right>
                            <i class="icon icon-arrow-right" />
                        </template>
                        <vueper-slide v-for="i in 5" :key="i" :title="i.toString()" />
                </vueper-slides>


    <div class="Homepage_container">

        <div class="columna">
            <section class="hero-section">

                <center><h1 class="titulo_home">Estamos para escucharte</h1></center>
                <center><h2 class="subtitulo_home">Acompañamiento a tu salud mental</h2></center>
            </section>
            <div class="Info">
                <center>
                    <b><p>Horario de atención del programa</p></b> <b><p>De lunes a viernes de 9:00 a 19:00</p></b>
                </center>
            </div>
            <br /><br />

            <!-- Botones -->

            <div class="Botones_home">
                <!-- Botón AGENDAR PRIMERA CITA (enlace externo) -->
                <a
                    href="https://forms.gle/ewEaMeabtZN2pbBU6"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="primary-button1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    AGENDAR PRIMERA CITA
                </a>
                <br />

                <!-- Botones originales (para comparación) -->
                <router-link to="/emergencia" custom v-slot="{ navigate }">
                    <button
                        class="primary-button2 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        @click="navigate"
                    >
                        EMERGENCIA
                    </button>
                </router-link>
                <br />

                <router-link to="/actividades" custom v-slot="{ navigate }">
                    <button
                        class="primary-button3 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        @click="navigate"
                    >
                        ACTIVIDADES
                    </button>
                </router-link>
            </div>
        </div>

        <!-- Hasta aquí llega la primera columna  -->

        <div class="columna">
            <!-- Redes sociales -->

            <div class="redes_sociales">
                <center>
                    <b><h4 class="Info">Síguenos en Facebook</h4></b>
                </center>
                <center>
                    <button class="primary-button2"><a href="https://www.facebook.com/profile.php?id=61572265868700" target="_blank">NUESTRO FACEBOOK</a></button>
                </center>
            </div>
            <br /><br /><br />

            <center><img class="imagen1" src="/public/demo/images/home/PSMFI-LOG.png" alt="Programa de Salud Mental de la Facultad de Ingeniería" /></center>
        </div>

        <br /><br /><br />
    </div>

    <div class="slideshow">
        <!-- Componente slideshow -->

        <Galleria
            ref="galleria"
            v-model:activeIndex="activeIndex"
            :value="images"
            :numVisible="5"
            containerStyle="max-width: 640px"
            :showThumbnails="showThumbnails"
            :showItemNavigators="true"
            :showItemNavigatorsOnHover="true"
            :circular="true"
            :autoPlay="isAutoPlay"
            :transitionInterval="3000"
            :responsiveOptions="responsiveOptions"
            :pt="{ root: { class: [{ 'flex flex-col': fullScreen }] }, content: { class: ['relative', { 'flex-1 justify-center': fullScreen }] }, thumbnails: 'absolute w-full left-0 bottom-0' }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid gap-4 justify-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="flex items-stretch bg-surface-950 text-white h-10">
                    <button type="button" @click="onThumbnailButtonClick" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3">
                        <i class="pi pi-th-large"></i>
                    </button>
                    <button type="button" @click="toggleAutoSlide" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3"><i :class="slideButtonIcon"></i></button>
                    <span v-if="images" class="flex items-center gap-4 ml-3">
                        <span class="text-sm">{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="font-bold text-sm">{{ images[activeIndex].title }}</span>
                        <span class="text-sm">{{ images[activeIndex].alt }}</span>
                    </span>
                    <button type="button" @click="toggleFullScreen" class="bg-transparent border-none rounded-none hover:bg-white/10 text-white inline-flex justify-center items-center cursor-pointer px-3 ml-auto">
                        <i :class="fullScreenIcon"></i>
                    </button>
                </div>
            </template>
        </Galleria>
    </div>

    <button @click="$vueFlux.show('next')">NEXT</button>
</template>



<style>
.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color:#cd171e ;}

.vueperslides__bullet span {
  display: block;
  color: #24417c;
  font-size: 10px;
  opacity: 0.8;
}



</style>