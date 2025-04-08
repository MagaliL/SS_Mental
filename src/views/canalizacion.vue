<script setup>
// Esta parte es para indexarlo con la página princial
</script>



<template>
    
    <nav class="hidden lg:flex space-x-20">
            
            <router-link to="/sobreprograma" class="text-blue-900 font-semibold">Sobre el programa</router-link>
            <router-link to="/canalizacion" class="text-blue-900 font- semibold">Canalizacion y Seguimiendo</router-link>
        </nav>
     <br><br><br>
      <p>Nuestro deseo es que desde el primer momento que te acerques a nosotros recibas la atención que retquieres. Para ubicarte en el área adecuada tendrás tu primer contacto con nuestra trabajadora social, ella es:</p><br><br>

      <div class="container">
      <div class="columna">
     <img src="/public/demo/images/foto/alma_rosa.jpeg" style="width: 50%; height: 70%;" alt="Lic. Alma Rosa López Velarde">
      </div>
      
      
      <div class="columna">
        <h2>Lic. Alma Rosa López Velarde</h2>
        <p style="text-align: justify;" class="text-columna">Trabajadora Social de formación con una Especialidad en Diseño de Modelos de Intervención en Trabajo Social con mujeres, con Perspectiva de Género, promoviendo la participación de individuos, grupos, comunidades y la sociedad en general, en acciones que prevengan, atiendan o den solución, a las necesidades y problemas que se presenten. </p></div>
      </div>  


      
      <!-- Enlace de vuelta al home -->
      <router-link to="/" class="nav-link">Volver al inicio</router-link>
    
  </template>


<style>
p{
  
  color: #24417c; 
  font: inherit;
}
.columna{
    flex: 1; /* Ambas columnas ocupan el mismo espacio */
    padding: 5px;
    border-radius: 5px;
    /* background-color: #24417c; */
   
   
}

img{
  display: flex;
  float:inline-end;
  flex-direction: column;
  /* gap: 1rem; */
  margin-bottom: 3rem; 
  padding-left: 0%;
}

.container{
  display: flex;
  gap: 10%; /* Espacio entre columnas */
}
</style>

