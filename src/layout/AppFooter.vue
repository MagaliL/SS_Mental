<script setup>

</script>

<template>

    <div class="layout-footer">
       <!-- Se añadieron los logos de la facultad y de la universidad al footer (Magali) -->
       <!-- class logos es para poder modificar los logos en el ccs (Magali)-->
        <div class="footerlogos">

            <div class="logo_izquierda">
                <ul>
                    <!-- rel="noopener noreferrer" en la etiqueta <a> es para seguridad ya que se van a abrir llas páginas en una pestaña nueva. -->
                    <li> <a href="https://www.unam.mx/" target="_blank" rel="noopener noreferrer" class="logoUnam"><img src="/public/demo/images/logos/logo_1.png" alt=""></a></li> 
                </ul>
                <br>
                
            </div>
            <div class="texto">
                <ul>
                    <li><b>¡Juntxs somos Facultad de Ingeniería!</b></li><br>
                    <li><b>FI comprometida con la salud mental</b></li><br>
                    <li><a href="https://www.ingenieria.unam.mx/paginas/aviso_privacidad.php" target="_blank" rel="noopener noreferrer" class="hover-link">Aviso de privacidad</a></li>
                </ul>
            </div>
            
            <div class="logo_derecho">
                <ul><li><a href="https://www.ingenieria.unam.mx/" target="_blank" rel="noopener noreferrer" class="logoFi"><img src="/public/demo/images/logos/logo_2.png" alt=""></a></li>
                </ul>
            </div>

        </div>
    </div>

</template>
