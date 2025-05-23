<script setup>
import '@fortawesome/fontawesome-free/css/all.css'; // Importa Font Awesome
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { VueperSlide, VueperSlides } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

// Importaciones directas de imágenes
import Actividades from '@/assets/imagenes/images-carousel/principal/Actividades.png';
import Agendar from '@/assets/imagenes/images-carousel/principal/Agendar.png';
import Emergencia from '@/assets/imagenes/images-carousel/principal/Emergencia.png';
import slide1 from '@/assets/imagenes/images-carousel/principal/slide1.png';

import AyS from '@/assets/imagenes/images-carousel/infografias/AyS.png';
import orquesta from '@/assets/imagenes/images-carousel/infografias/orquesta.jpeg';
import Pautas from '@/assets/imagenes/images-carousel/infografias/Pautas_para_la-atencion.png';
import Proceso from '@/assets/imagenes/images-carousel/infografias/Proceso.png';
import Seguro from '@/assets/imagenes/images-carousel/infografias/Seguro.jpeg';

const router = useRouter()

// Definición de imágenes para el primer carrusel

const carruselPrincipal = ref([
  {
    image: slide1
  },
  {
    image: Emergencia,
    style: { cursor: 'pointer' },
    clickHandler: () => router.push('/emergencia') // ← Función personalizada
  },
  {
    image: Agendar,
    style: { cursor: 'pointer' },
    clickHandler: () => router.push('/agendar')
  },
  {
    image: Actividades,
    style: { cursor: 'pointer' },
    clickHandler: () => router.push('/agendar')
  }
])

const infografias = ref([
  { image: AyS },
  { image: orquesta },
  { image: Pautas },
  { image: Proceso },
  { image: Seguro }
])




// Manejo de errores
onMounted(() => {
  try {
    // Código que podría fallar durante el montaje
  } catch (error) {
    console.error('Error en mounted:', error)
  }
})

// components: {VueperSlides, VueperSlide }

</script>

<!-- Html del homepage, sus estilos están en _main.scss -->

<template>
  <!-- Primer carrusel -->
  <div v-if="carruselPrincipal.length">
    <vueper-slides 
    class="bordes-redondeados" 
      :bullets="true" 
      :autoplay="true" 
      :autoplay-duration="2000" 
      :pause-autoplay-on-hover="true">

      <vueper-slide
        v-for="(slide, i) in carruselPrincipal"
        :key="i"
        :image="slide.image"
        :style="slide.style || {}"
        @click="slide.click || (() => {})"
        />
          
          <template #arrow-left>
            <i class="fas fa-chevron-left"></i>
                              
          </template>

          <template #arrow-right>
            <i class="fas fa-chevron-right"></i>
          </template>
                        
    </vueper-slides>
  </div>


  <div class="Homepage_container">
        <div class="columna">
            <section class="hero-section">
              <br><br><br><br><br>

                <div  class="image-center"><img src="@/assets/imagenes/images-home/PSMFI-LOG.png" alt="Programa de Salud Mental de la Facultad de Ingeniería" /></div>

            </section>
           
        </div>

        <!-- Hasta aquí llega la primera columna  -->

        <div class="columna">
           
            <div class="redes_sociales">
                <br><br><br><br><br>
                 <h1 class="titulo_home" style="text-align: center;">Te acompañamos en el cuidado de tu salud mental</h1> <br><br>

                 <p style="text-align: justify;">Sabemos que los desafíos académicos pueden ser exigentes, pero también sabemos que cuidar de tu salud física y mental es clave para alcanzar tus metas. ​La Facultad de Ingeniería no es solo un lugar para desarrollar habilidades técnicas, sino también para crecer como personas integras y equilibradas.</p>
                <br>

                 <h5 style="text-align: center;">Tenemos a tu disposición las siguientes áreas</h5 >
                <br> </br>

                <ul><li><p>→ Prevención y fortalecimiento</p></li>
                <li><p>→ Canalización y seguimiento</p></li>
                <li><p>→ Acompañamiento y valoración temprana</p></li>
                <li><p>→ Evaluación</p></li></ul>

            </div>
        
        </div>
   
  </div>
    
    <b><h4 class="Info" style="text-align: center;">Síguenos en Facebook</h4></b>         
    <div style="display: flex; justify-content: center; ">
    <button class="primary-button2"><a href="https://www.facebook.com/profile.php?id=61572265868700" target="_blank">NUESTRO FACEBOOK</a></button>
  </div>
    <br><br><br><br><br><br>
      

<!--  Para el carrusel de infografías -->
<div v-if="infografias">
     <vueper-slides 
    :slide-ratio="16 / 9" 
    :bullets="true" 
    :autoplay="true" 
    :autoplay-duration="2000" 
    :pause-autoplay-on-hover="true" 
    class="infografia-carrusel">

    <vueper-slide
        v-for="(slide, i) in infografias"
        :key="i"
        :image="slide.image"
      />

          
      <template #arrow-left>
        <i class="fas fa-chevron-left"></i>
                             
      </template>

      <template #arrow-right>
        <i class="fas fa-chevron-right"></i>
      </template>

    </vueper-slides>
    <br><br><br>
</div>


   
</template>


<style>


/* Estilos para evitar problemas con infografías grandes */
.infografia-carrusel {
  width: 100%;
  max-width: 1200px; /* Opcional: si quieres limitar el ancho */
  margin: 0 auto;
  border-radius: 2em;
  overflow: hidden;

}

.infografia-carrusel .vueper-slide {
  background: #f5f5f5; /* Fondo para slides con espacios vacíos */
}

.infografia-carrusel .vueper-slide__image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Escala sin recortar, manteniendo proporción */
}

.bordes-redondeados{
  border-radius: 2em; 
  overflow: hidden;
}

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

.vueperslides__arrow {
  background:#cd171e !important;
  width: 40px !important;
  height: 40px !important;
}

.image-center { 
  display: flex;
  justify-content: center;
  padding: 1rem; /* Espacio alrededor */
}

</style>