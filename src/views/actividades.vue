<script>
// Esta parte es para indexarlo con la página princial

import ImageGallery from '../components/image-gallery.vue';

 export default {
  components: {
    ImageGallery
  },

  data() {
    return {
      galleryImages: [
        {
          src: "https://picsum.photos/800/500?random=1",
          alt: "Imagen 1",
          thumb: "https://picsum.photos/150/100?random=1"
        },
        {
          src: "https://picsum.photos/800/500?random=2",
          alt: "Imagen 2",
          thumb: "https://picsum.photos/150/100?random=2"
        }
      ]
    }
  }
}

</script>

<template>
  
    <div class="about">
      <h1>Esta es la página "Actividades"</h1>

       <div id="app">
    <ImageGallery 
      :images="galleryImages"
      transition-effect="slide"
      :auto-play="true"
      :interval="8000"
      :show-navigation="true"
      :show-thumbnails="true"
    />
  </div>


      <!-- Enlace de vuelta al home Acá no va el calendario-->
      <router-link to="/" class="nav-link">Volver al inicio</router-link>
    </div>
  </template>


<style scoped>
/* Estilos para esta página específica */
.gallery-wrapper {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  
}

.nav-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>