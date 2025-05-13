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
  <vueper-slides class="bordes-redondeados" :bullets="true" :autoplay="true" :autoplayduration="2000" :pause-autoplay-on-hover="true" :slides="images"  >
      
         <vueper-slide image="/demo/images/home/slide1.png"
          :style="{ color: 'white', fontSize: '3rem' }"
          />

        <vueper-slide image="/demo/images/home/Emergencia.png" 
        :style="{cursor: 'pointer', color: 'white', fontSize: '3rem'}" 
        @click.native="$router.push('/emergencia')"
        />


        <vueper-slide image="/demo/images/home/Agendar.png"
        :style="{ cursor: 'pointer', color: 'white',fontSize: '3rem'}"
        @click.native="$router.push('/agendar')"
        />
   
       <vueper-slide image="/demo/images/home/Actividades.png"
       :style="{cursor: 'pointer', color: 'white',fontSize: '3rem' }"
       @click.native="$router.push('/preventivas')"
    />
                        <template #arrow-left>
                            <i class="fas fa-chevron-left"></i>
                             
                        </template>

                        <template #arrow-right>
                            <i class="fas fa-chevron-right"></i>
                        </template>
                       
                </vueper-slides>


    <div class="Homepage_container">

        <div class="columna">
            <section class="hero-section">
              <br><br><br><br><br>

                <!-- <center><img src="/public/demo/images/home/facultad_ingenieria.jpg" style="border-radius: 2em;" ></center> -->

                <center><img class="imagen1" src="/public/demo/images/home/PSMFI-LOG.png" alt="Programa de Salud Mental de la Facultad de Ingeniería" /></center>

                <!-- <center><h1 class="titulo_home">Estamos para escucharte</h1></center>
                <center><h2 class="subtitulo_home">Acompañamiento a tu salud mental</h2></center> -->
            </section>
            <!-- <div class="Info">
                <center>
                    <b><p>Horario de atención del programa</p></b> <b><p>De lunes a viernes de 9:00 a 19:00</p></b>
                </center>
            </div> -->
           
        </div>

        <!-- Hasta aquí llega la primera columna  -->

        <div class="columna">
           

            <div class="redes_sociales">
                <br><br><br><br><br>
                 <center><h1 class="titulo_home">Te acompañamos en el cuidado de tu salud mental</h1></center> <br><br>

                 <p style="text-align: justify;">Sabemos que los desafíos académicos pueden ser exigentes, pero también sabemos que cuidar de tu salud física y mental es clave para alcanzar tus metas. ​La Facultad de Ingeniería no es solo un lugar para desarrollar habilidades técnicas, sino también para crecer como personas integras y equilibradas.</p>
                <br>

                 <center><h5 >Tenemos a tu disposición las siguientes áreas</h5 ></center>
                <br>
                </br>

                <ul><li><p>→ Prevención y fortalecimiento</p></li>
                <li><p>→ Canalización y seguimiento</p></li>
                <li><p>→ Acompañamiento y valoración temprana</p></li>
              <li><p>→ Evaluación</p></li></ul>

    
            </div>
        

        </div>

        
    </div>
    <br><br><br>
    <center><b><h4 class="Info">Síguenos en Facebook</h4></b></center>            
    <center><button class="primary-button2"><a href="https://www.facebook.com/profile.php?id=61572265868700" target="_blank">NUESTRO FACEBOOK</a></button>
                </center>
      


   
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