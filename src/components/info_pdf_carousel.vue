<script>
// Importamos los componentes necesarios de vueper-slides
import { VueperSlide, VueperSlides } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "InfographicCarousel",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      // Datos de cada slide (imágenes y PDFs)
      slides: [
        {
          type: "image", // Tipo de contenido
          src: "infografia1.jpg", // Nombre del archivo (debe estar en assets/images)
          title: "Guía de Prevención", // Título descriptivo
        },
        {
          type: "pdf",
          src: "manual.pdf", // Nombre del archivo (debe estar en public/pdfs)
          thumbnail: "/pdf-thumbs/manual-thumb.jpg", // Ruta de la miniatura
          title: "Manual Completo (PDF)",
        },
      ],
    };
  },
  methods: {
    // Método para abrir imagen en lightbox (ampliada)
    openLightbox(imageSrc) {
      console.log("Abrir imagen:", imageSrc);
      // Aquí podrías integrar un lightbox como vue-easy-lightbox
    },
  },
};
</script>


<template>
  <!-- Contenedor principal del carrusel -->
  <div class="carousel-container">
    <!-- 
      VueperSlides es el componente principal del carrusel
      :slides -> Número total de slides
      :bullets -> Muestra puntos de navegación
      :arrows -> Muestra flechas de navegación
    -->
    <vueper-slides
      :slides="slides.length"
      :bullets="true"
      :arrows="true"
      class="infographic-carousel"
    >
      <!-- Iteramos sobre cada slide definido en data() -->
      <vueper-slide v-for="(slide, index) in slides" :key="index">
        <!-- Contenido personalizado para cada slide -->
        <template #content>
          <!-- Si el slide es una IMAGEN -->
          <div v-if="slide.type === 'image'" class="image-slide">
            <!-- 
              Mostramos la imagen
              :src -> Ruta de la imagen
              @click -> Al hacer clic podemos ampliarla
            -->
            <img
              :src="require(`@/assets/images/${slide.src}`)"
              :alt="slide.title"
              class="slide-image"
              @click="openLightbox(slide.src)"
            />
            <!-- Título descriptivo -->
            <p class="image-title">{{ slide.title }}</p>
          </div>

          <!-- Si el slide es un PDF -->
          <div v-else-if="slide.type === 'pdf'" class="pdf-slide">
            <!-- 
              Enlace para descargar/ver el PDF
              target="_blank" abre en nueva pestaña
            -->
            <a
              :href="`/pdfs/${slide.src}`"
              target="_blank"
              class="pdf-link"
            >
              <!-- Mostramos una miniatura del PDF -->
              <img
                :src="slide.thumbnail || '/pdf-thumbs/default.png'"
                :alt="slide.title"
                class="pdf-thumbnail"
              />
              <!-- Información del PDF -->
              <div class="pdf-info">
                <span class="pdf-title">{{ slide.title }}</span>
                <button class="download-btn">
                  <i class="fas fa-download"></i> Descargar
                </button>
              </div>
            </a>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<style scoped>
/* Estilos generales del contenedor */
.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos para slides de imágenes */
.image-slide {
  text-align: center;
}

.slide-image {
  max-width: 100%;
  max-height: 70vh;
  cursor: pointer;
  transition: transform 0.3s;
}

.slide-image:hover {
  transform: scale(1.02);
}

.image-title {
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: bold;
}

/* Estilos para slides de PDF */
.pdf-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.pdf-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pdf-thumbnail {
  max-width: 200px;
  border: 2px solid #eee;
  margin-bottom: 15px;
}

.pdf-info {
  text-align: center;
}

.download-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #369f6e;
}

/* Responsive design */
@media (max-width: 768px) {
  .slide-image {
    max-height: 50vh;
  }
  
  .pdf-thumbnail {
    max-width: 150px;
  }
}
</style>
