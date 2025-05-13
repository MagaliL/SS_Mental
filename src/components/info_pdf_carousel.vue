<script>
  // Importaciones necesarias
import { VueperSlide, VueperSlides } from 'vueperslides'; // Componentes del carrusel
import 'vueperslides/dist/vueperslides.css'; // Estilos base del carrusel

export default {
  name: 'SmartInfographicCarousel', // Nombre significativo del componente
  components: { VueperSlides, VueperSlide }, // Componentes registrados
  
  // PROPS: Configuración externa del componente
  props: {
    // Configuración básica del carrusel
    carouselConfig: {
      type: Object,
      default: () => ({
        autoPlay: false,    // Auto-reproducción desactivada por defecto
        infiniteLoop: true, // Navegación circular activada
        showArrows: true,   // Flechas visibles
        showBullets: true   // Puntos de navegación visibles
      }),
      validator: config => {
        // Validamos que la configuración tenga el formato correcto
        const validKeys = ['autoPlay', 'infiniteLoop', 'showArrows', 'showBullets'];
        return Object.keys(config).every(key => validKeys.includes(key));
      }
    },
    
    // Array de slides (requerido)
    slidesData: {
      type: Array,
      required: true,
      validator: slides => slides.every(slide => {
        // Validación estricta de cada slide
        const validTypes = ['image', 'pdf'];
        const hasValidType = validTypes.includes(slide.type);
        const hasValidSrc = typeof slide.src === 'string' && slide.src.length > 0;
        
        // Validaciones específicas por tipo
        if (slide.type === 'image') {
          return hasValidType && hasValidSrc;
        } else if (slide.type === 'pdf') {
          const hasValidThumbnail = !slide.thumbnail || typeof slide.thumbnail === 'string';
          return hasValidType && hasValidSrc && hasValidThumbnail;
        }
        return false;
      })
    },
    
    // Configuración de rutas
    pathsConfig: {
      type: Object,
      default: () => ({
        images: '@/assets/carousel/', // Ruta base para imágenes
        pdfs: '/documents/',          // Ruta base para PDFs
        thumbs: '/thumbnails/'        // Ruta base para miniaturas
      })
    },
    
    // Estilos personalizables
    uiStyles: {
      type: Object,
      default: () => ({
        titleColor: '#ffffff',       // Color del título
        pdfButtonColor: '#e74c3c',  // Color del botón PDF
        maxHeight: '70vh'           // Altura máxima del carrusel
      })
    }
  },
  
  // DATA: Estado interno del componente
  data() {
    return {
      defaultPdfThumbnail: '/defaults/pdf-thumbnail.jpg', // Miniatura por defecto
      isMounted: false, // Flag para controlar montaje
      currentSlideIndex: 0 // Slide actualmente visible
    };
  },
  
  // COMPUTED: Propiedades calculadas
  computed: {
    // Procesa los slides con rutas completas y valores por defecto
    processedSlides() {
      return this.slidesData.map(slide => ({
        ...slide,
        // Añade valores por defecto si no están especificados
        title: slide.title || '',
        altText: slide.altText || slide.title || '',
        buttonText: slide.buttonText || 'Ver documento',
        // Procesa la miniatura para PDFs
        thumbnail: slide.type === 'pdf' 
          ? this.resolveThumbnailPath(slide)
          : null
      }));
    },
    
    // Extrae configuraciones para mejor legibilidad
    showNavigationArrows() {
      return this.carouselConfig.showArrows;
    },
    showNavigationBullets() {
      return this.carouselConfig.showBullets;
    },
    autoPlay() {
      return this.carouselConfig.autoPlay;
    },
    infiniteLoop() {
      return this.carouselConfig.infiniteLoop;
    },
    titleColor() {
      return this.uiStyles.titleColor;
    }
  },
  
  // MÉTODOS: Lógica del componente
  methods: {
    // Genera un hash único para la key (mejor rendimiento)
    hashCode(str) {
      return md5(str).substring(0, 8); // Usamos solo los primeros 8 caracteres
    },
    
    // Resuelve la ruta completa para assets
    resolveAssetPath(slide) {
      if (slide.type === 'image') {
        // En desarrollo, usa require para que webpack procese la imagen
        if (process.env.NODE_ENV === 'development') {
          try {
            return require(`@/assets/${this.pathsConfig.images}${slide.src}`);
          } catch (e) {
            console.error(`No se pudo cargar la imagen: ${slide.src}`);
            return require('@/assets/fallback-image.jpg');
          }
        }
        // En producción, usa la ruta directa
        return `${this.pathsConfig.images}${slide.src}`;
      }
      return `${this.pathsConfig.pdfs}${slide.src}`;
    },
    
    // Resuelve la ruta para miniaturas de PDF
    resolveThumbnailPath(slide) {
      if (!slide.thumbnail) return this.defaultPdfThumbnail;
      return `${this.pathsConfig.thumbs}${slide.thumbnail}`;
    },
    
    // Maneja el clic en un slide
    handleSlideClick(slide) {
      if (slide.type === 'image') {
        this.$emit('image-click', slide); // Evento personalizado
      }
      // Para PDFs, el manejo es específico en handlePdfClick
    },
    
    // Manejo específico para PDFs
    handlePdfClick(slide) {
      const pdfPath = `${this.pathsConfig.pdfs}${slide.src}`;
      if (slide.openInNewTab) {
        window.open(pdfPath, '_blank', 'noopener,noreferrer');
      } else {
        this.$emit('pdf-open', { slide, path: pdfPath });
      }
    },
    
    // Callback cuando el carrusel está listo
    onCarouselReady() {
      this.isMounted = true;
      this.$emit('carousel-ready'); // Evento de inicialización
    },
    
    // Método público para cambiar slide
    goToSlide(index) {
      if (this.$refs.carousel) {
        this.$refs.carousel.goToSlide(index);
      }
    }
  },
  
  // HOOKS DEL CICLO DE VIDA
  mounted() {
    console.log('Carrusel montado con', this.slidesData.length, 'slides');
  }
};
</script>

<style scoped>
/* ESTILOS PRINCIPALES */
.infographic-carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.carousel-main {
  height: 100%;
}

/* CONTENEDOR DE SLIDES */
.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* ESTILOS PARA IMÁGENES */
.slide-image {
  max-width: 100%;
  max-height: v-bind('uiStyles.maxHeight');
  object-fit: contain;
  transition: transform 0.3s ease;
}

.slide-image:hover {
  transform: scale(1.02);
}

/* ESTILOS PARA PDFs */
.pdf-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.pdf-thumbnail {
  max-width: 200px;
  max-height: 200px;
  border: 2px solid #eee;
  margin-bottom: 15px;
}

.pdf-action-button {
  background-color: v-bind('uiStyles.pdfButtonColor');
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pdf-action-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

/* TÍTULO DEL SLIDE */
.slide-title {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: v-bind('uiStyles.titleColor');
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 0;
  font-size: 1.2rem;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .infographic-carousel {
    border-radius: 0;
  }
  
  .pdf-thumbnail {
    max-width: 150px;
  }
  
  .slide-title {
    font-size: 1rem;
    bottom: 10px;
  }
}
</style>