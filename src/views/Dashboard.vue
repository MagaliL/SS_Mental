<script setup>

import { ref, shallowReactive } from 'vue';
import {
   Book,
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
   FluxPreloader,
   Img,
   VueFlux,
   Zip,
} from 'vue-flux';
import 'vue-flux/style.css';

   const $vueFlux = ref();

   const vfOptions = shallowReactive({
      autoplay: true,
   });

   const vfRscs = shallowReactive([
      new Img('URL1', 'img 1'),
      new Img('URL2', 'img 2'),
      new Img('URL3', 'img 3'),
   ]);

   const vfTransitions = shallowReactive([Book, Zip]);



// Contenido personalizado aquí:
const welcomeMessage = "Bienvenido";
</script>



<!-- Html del homepage, sus estilos están en _main.scss -->

<template>

<div class="Homepage_container">
  

    <div class="columna">

    <section class="hero-section">
      <center><h1 class="titulo_home">Estamos para escucharte</h1></center>
      <center><h2 class="subtitulo_home">Acompañamiento a tu salud mental</h2></center>
    </section>
    <div class="Info">  
      <center><b><p>Horario de atención del programa</p></b>
      <b><p>De lunes a viernes de 9:00 a 19:00</p></b></center>
    </div><br><br>
    
    <!-- Botones -->

    <div class="Botones_home">
      <button class="primary-button1"><a href="" target="_blank">AGENDAR PRIMERA CITA</a></button> <br>
      <button class="primary-button2"><a href="" target="_blank">EMERGENCIA</a></button> <br>
      <button class="primary-button3"><a href="" target="_blank">ACTIVIDADES</a></button>  <br>
    </div>

    </div>

    <!-- Hasta aquí llega la primera columna  -->

    <div class="columna">
    <!-- Redes sociales -->

    <div class="redes_sociales">
        <center><b><h4 class="Info">Síguenos en Facebook</h4></b></center>
        <center><button class="primary-button2"><a href="https://www.facebook.com/profile.php?id=61572265868700" target="_blank">NUESTRO FACEBOOK</a></button></center>
    </div>
    <br><br><br>

   <center> <img class="imagen1" src="/public/demo/images/home/PSMFI-LOG.png" alt="Programa de Salud Mental de la Facultad de Ingeniería"></center>
    </div>  

    <br><br><br>
   
</div>

<div class="slideshow">
 
 <!-- Componente slideshow -->
 <VueFlux
 :options="vfOptions"
 :rscs="vfRscs"
 :transitions="vfTransitions"
 ref="$vueFlux">

 <template #preloader="preloaderProps">
    <FluxPreloader v-bind="preloaderProps" />
 </template>

 <template #caption="captionProps">
    <FluxCaption v-bind="captionProps" />
 </template>

 <template #controls="controlsProps">
    <FluxControls v-bind="controlsProps" />
 </template>

 <template #pagination="paginationProps">
    <FluxPagination v-bind="paginationProps" />
 </template>

 <template #index="indexProps">
    <FluxIndex v-bind="indexProps" />
 </template>
</VueFlux>

<button @click="$vueFlux.show('next')">NEXT</button>
</div> 

</template>