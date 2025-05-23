<script>
export default {
  name: 'ImageGallery',
  props: {
    // Props que recibirá el componente
        images: {
        type: Array,
        required: true,
        validator: value => value.every(img => img.src) // Verifica que cada imagen tenga 'src'
        },

        transitionEffect: {
            type: String,
            default: 'fade',
            validator: value => ['fade', 'slide', 'zoom'].includes(value) // Tipos de transición permitidos
        },

        autoPlay: {
            type: Boolean,
            default: false
        },

        interval: {
            type: Number,
            default: 3000 // Tiempo en milisegundos
        },

        showThumbnails: {
            type: Boolean,
            default: true
        },

        showNavigation: {
            type: Boolean,
            default: true
        },

        startIndex: {
            type: Number,
            default: 0
        }
  },


  data() {
    return {
      // Datos reactivos del componente

        currentIndex: this.startIndex, // Índice de la imagen actual
        isFullscreen: false, // Controla el modo pantalla completa
        intervalId: null // Guarda el ID del intervalo para autoPlay
    };
},



 beforeDestroy() {
  this.stopAutoPlay();
  window.removeEventListener('keydown', this.handleKeyDown);
  document.body.style.overflow = ''; 
  },

mounted() {
  if (this.autoPlay) {
    this.startAutoPlay();
  }
  window.addEventListener('keydown', this.handleKeyDown);
},

watch: {
  autoPlay(newVal) {
    if (newVal) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }
},

  methods: {
    // Funciones para manejar la galería

    // Avanza a la siguiente imagen
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
             },

        // Retrocede a la imagen anterior
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },

        // Cambia a una imagen específica
        setCurrentIndex(index) {
            this.currentIndex = index;
        },

        // Inicia el autoPlay
        startAutoPlay() {
            this.stopAutoPlay(); // Detiene cualquier intervalo existente
            this.intervalId = setInterval(this.nextImage, this.interval);
        },

        // Detiene el autoPlay
        stopAutoPlay() {
            if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            }
        },

        // Activa/desactiva el modo pantalla completa
        toggleFullscreen() {
            this.isFullscreen = !this.isFullscreen;
             document.body.style.overflow = this.isFullscreen ? 'hidden' : '';
        },

        // Maneja eventos de teclado
        handleKeyDown(e) {
            if (!this.isFullscreen) return; 
            switch(e.key) {
                case 'ArrowRight':
                this.nextImage();
                break;
                case 'ArrowLeft':
                this.prevImage();
                break;
                case 'Escape':
                this.toggleFullscreen();
                break;
            }
               e.preventDefault();
            
           }
       }
    

  };




</script>




<template>
  <!-- Imagen principal con transición -->

<div class="gallery-container" tabindex="0" @keydown="handleKeyDown">
  <transition :name="transitionEffect" mode="out-in">
    <div 
      class="main-image-container"
      :key="currentIndex"
      @click="toggleFullscreen"
    >
      <img 
        :src="images[currentIndex].src" 
        :alt="images[currentIndex].alt || 'Gallery image'"
        class="main-image"
        :class="{ 'fullscreen': isFullscreen }"
      />
      <button v-if="showNavigation" class="nav-button prev" @click.stop="prevImage">‹</button>
      <button v-if="showNavigation" class="nav-button next" @click.stop="nextImage">›</button>
    </div>
  </transition>

  <!-- Miniaturas -->
  <div v-if="showThumbnails" class="thumbnails-container">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="thumbnail-item"
      :class="{ 'active': index === currentIndex }"
      @click="setCurrentIndex(index)"
    >
      <img 
        :src="image.thumb || image.src" 
        :alt="image.alt || `Thumbnail ${index}`"
        class="thumbnail-image"
      />
    </div>
  </div>
</div>

</template>



<style scoped>
    .gallery-container {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}

.main-image-container {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.main-image {
  display: block;
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.main-image.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-height: none;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.9);
  object-fit: contain;
  cursor: zoom-out;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.thumbnails-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.thumbnail-item {
  width: 60px;
  height: 60px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.thumbnail-item.active {
  border-color: #42b983;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.zoom-enter-active, .zoom-leave-active {
  transition: all 0.5s ease;
}
.zoom-enter {
  transform: scale(0.5);
  opacity: 0;
}
.zoom-leave-to {
  transform: scale(1.5);
  opacity: 0;
}

</style>