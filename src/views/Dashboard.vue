<script setup>
//Importaciones de widgets 

// Contenido personalizado aquí:
const welcomeMessage = "Bienvenido";
</script>
<template>

  <div class="Homepage_container">
    <!-- Hero Section -->

    <section class="hero-section">
      <h1 class="titulo_home">Estamos para escucharte</h1>
      <p class="subtitulo_home">Acompañamiento a tu salud mental</p>
    </section>
     
    <div class="Info">  
      <b><p>Horario de atención del programa</p></b>
      <b><p>De lunes a viernes de 9:00 a 19:00</p></b>
       
    </div>
    
    <!-- Botones -->

    <div class="Botones_home">
      <button class="primary-button1"><a href="" target="_blank">AGENDAR PRIMERA CITA</a></button> <br>
      <button class="primary-button2"><a href="" target="_blank">EMERGENCIA</a></button> <br>
      <button class="primary-button3"><a href="" target="_blank">ACTIVIDADES</a></button>  <br>
    </div>

    <!-- Redes sociales -->

    <div class="redes_sociales">
        <p>Sígenos en Facebook</p>
        <button class="primary-button2"><a href="https://www.facebook.com/profile.php?id=61572265868700" target="_blank">NUESTRO FACEBOOK</a></button>
    </div>

    
    <img src="/public/demo/images/home/PSMFI-LOG.png" alt="">


    <!-- Contenido personalizado -->
    <div class="custom-content">
      <!-- Componentes personalizados -->
    </div>
  </div>
</template>