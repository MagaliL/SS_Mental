<script setup>

</script>

<template>
    <br><br><br>
  
<div class="layout-container">
    

    <div class="columna">
      <div class="border border-gray-400 rounded-md">
          <!-- Título de la caja -->
          <div class="text-white text-lg font-bold px-4 py-2" style="background-color: #24417c;">
            Antecedentes
          </div>
          <!-- Contenido de la caja -->
          <div class="bg-white text-justify text-gray-800 px-4 py-4">
            <p style="color: #24417c; font: inherit;" >
              Desde el año 1973, en la Facultad de Ingeniería se ha brindado a la comunidad estudiantil el servicio de asesorías psicopedagógicas, que consiste en orientación educativa para favorecer el desarrollo integral del estudiantado y responder a sus necesidades educativas y/o dificultades académicas. La asesoría psicopedagógica ha sido una actividad complementaria a la docencia que apoya a la población estudiantil que tiene dificultades académicas y afectan su desempeño escolar, para que mediante la atención individual y personalizada y a partir del conocimiento de sus necesidades personales, académicas y aspiraciones profesionales, en conjunto con quien proporciona la asesoría, implementen las estrategias y acciones pertinentes a fin de corregir sus deficiencias y contribuir a su desarrollo integral como personas y futuros profesionistas.
            </p><br>

            <p style="color: #24417c; font: inherit;" >
              A partir de la identificación de problemas psicológicos entre las, les y los estudiantes que acudían a las asesorías psicopedagógicas, en octubre de 2022 y como consecuencia de la pandemia de COVID19 se implementó un servicio de atención psicológica para abordar temas como estrés, ansiedad, depresión, manejo de emociones, ideación suicida y conflictos familiares y de pareja. Asimismo, en febrero de 2024, en respuesta a las necesidades en temas de prevención y atención a casos de violencia de género, se estableció la Unidad Integral de Género en la Facultad de Ingeniería, la cual también proporciona atención psicológica, se han atendido temas como sobrevivencia a distintos tipos de violencias, generar violencia, interrupción voluntaria del embarazo, síntomas de ansiedad, personas con diagnóstico psiquiátrico y situaciones donde se experimentaron pérdidas o duelos.
            </p>

          </div>
      </div>
    </div>

    <div class="columna">

          <div  class="image-center"><img src="@/assets/imagenes/bases/img-baile.jpg" alt="Programa de Salud Mental de la Facultad de Ingeniería" /></div>
    </div>
</div>
   

  <br><br><br>
<div class="layout-container">
    <div class="border border-gray-400 rounded-md">
    <!-- Título de la caja -->
    <div class="text-white text-lg font-bold px-4 py-2" style="background-color: #24417c;">
      Objetivos
    </div>

    <!-- Contenido de la caja -->
    <div class="bg-white text-justify text-gray-800 px-4 py-4">
      <p style="color: #24417c; font: inherit;" >
        El objetivo general del programa es ofrecer a la comunidad estudiantil de la Facultad de Ingeniería un programa de salud mental que aborde de manera efectiva las necesidades psicoemocionales, mediante la prevención, acompañamiento, canalización adecuada y seguimiento continuo, con el fin de promover el bienestar y su desarrollo académico.
      </p><br>

      <b><p style="color: #24417c; font: inherit;">Objetivos específicos</p></b> <br>
          
      <ol class="numbered-list">
            <li><p style="color: #24417c; font: inherit;" >Prevenir problemas de salud mental promoviendo el bienestar emocional.</p></li><br>
            <li><p style="color: #24417c; font: inherit;">Brindar acompañamiento psicológico a estudiantes con necesidades específicas.</p></li><br>
            <li><p style="color: #24417c; font: inherit;">Fomentar el apoyo grupal y el sentido de comunidad.</p></li><br>
            <li><p style="color: #24417c; font: inherit;">Canalizar oportunamente a la población que requiera acompañamiento psicológico con dependencias o instancias especializadas.</p></li><br>
            <li><p style="color: #24417c; font: inherit;">Desarrollar una respuesta comunitaria para crear un entorno universitario saludable y seguro.</p></li><br>
        </ol>
        
    </div>
  </div>
</div>
  <br><br><br>
        
<h1 style="color: #24417c; text-align: center;">Consulta el documento de las bases del programa: </h1> <br><br>

<div class="pdf-container">
  <!-- Visor PDF -->
  <embed 
    src="/public/demo/pdf/PSM_FI_UNAM.pdf" 
    type="application/pdf" 
    width="100%" 
    height="600px"
    class="pdf-viewer"
  >
  
  <!-- Botón de descarga -->
  <div class="download-section">
    <a 
      href="/public/demo/pdf/PSM_FI_UNAM.pdf" 
      download="PSM_FI_UNAM.pdf"
      class="download-button"
    >
      📥 Descargar PDF
    </a>
  </div>
</div>



  <!-- Enlace de vuelta al home -->
   <br><br><br>
  <router-link to="/" class="nav-link">Volver al inicio</router-link>
  </template>



<style scoped>
.numbered-list {
  list-style-type: decimal;
  padding-left: 20px;
  color: #24417c;
}

.layout-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.columna{
    flex: 1; /* Ambas columnas ocupan el mismo espacio */
    padding: 15px;
    border-radius: 5px;
    box-sizing: border-box; 
    display: flex;
    justify-content: center; /* Centrado horizontal */
    align-items: center;     /* Centrado vertical */
    min-height: 300px;  
}
.image-center img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  object-fit: contain;
}

/* Media Queries */
@media (max-width: 768px) {
  .columna {
    flex: 100%; /* Ocupa todo el ancho */
    min-width: 100%;
  }
  
  .border-gray-400 {
    margin: 0 -15px; /* Ajuste para móviles */
  }
}


.pdf-container {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.pdf-viewer {
  min-height: 500px; /* Altura mínima */
  background: #f9f9f9; /* Fondo mientras carga */
}

.download-section{
  display: flex;
  justify-content: center; /* Centrado horizontal */
  margin: 2rem 0; /* Espaciado */

}
.download-button {
  display: inline-block;
  background:#cd171e;
  color: white;
  padding: 12px 24px;
  margin: 15px 0;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.download-button:hover {
  background: #1a335f;
  transform: translateY(-2px);
}

</style>