<script setup>
import '@fortawesome/fontawesome-free/css/all.css'; // Importa Font Awesome
import { VueperSlide, VueperSlides } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';



// Contenido personalizado aquí:
const welcomeMessage = 'Bienvenido';
components: { VueperSlides, VueperSlide }
</script>

<!-- Html del homepage, sus estilos están en _main.scss -->

<template>

    <div class="Homepage_container">

        <div class="columna">
            <section class="hero-section">

                <center><img src="/public/demo/images/home/facultad_ingenieria.jpg" style="border-radius: 2em;" ></center>

                <!-- <center><h1 class="titulo_home">Estamos para escucharte</h1></center>
                <center><h2 class="subtitulo_home">Acompañamiento a tu salud mental</h2></center> -->
            </section>
            <!-- <div class="Info">
                <center>
                    <b><p>Horario de atención del programa</p></b> <b><p>De lunes a viernes de 9:00 a 19:00</p></b>
                </center>
            </div> -->
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
                 <center><h1 class="titulo_home">Te acompañamos en el cuidado de tu salud mental</h1></center> <br>

                 <p>Sabemos que los desafíos académicos pueden ser exigentes, pero también sabemos que cuidar de tu salud física y mental es clave para alcanzar tus metas. ​La Facultad de Ingeniería no es solo un lugar para desarrollar habilidades técnicas, sino también para crecer como personas integras y equilibradas.</p>
                <center>
                <br>
                <br>
                <br>
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

        <vueper-slides class="bordes-redondeados" :bullets="true" :autoplay="true" :autoplayduration="2000" :pause-autoplay-on-hover="true"  >
        <vueper-slide
      title="Emergencia"
      
      :style="{
        backgroundColor: '#e42936',
        color: 'white',
        fontSize: '3rem'
        
      }"
    />
        <vueper-slide
      title="Agenda tu Primera Cita"
      :style="{
        backgroundColor: '#24417c',
        color: 'white',
        fontSize: '3rem'
        
      }"
    />
   
       <vueper-slide
      title="Actividades"
      :style="{
        backgroundColor: '#e85d26',
        color: 'white',
        fontSize: '3rem'
        
      }"
    />



                        <template #arrow-left>
                            <i class="fas fa-chevron-left"></i>
                             
                        </template>

                        <template #arrow-right>
                            <i class="fas fa-chevron-right"></i>
                        </template>
                       
                </vueper-slides>




   
</template>



<style>
.bordes-redondeados{
  border-radius: 2em; /* Ajusta este valor según tu preferencia */
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

</style>