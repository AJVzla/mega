<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Relaciones Institucionales</h1>
      </div>
    </section>
    <section class="lineas">
      <div class="linea1"></div>
      <div class="linea2"></div>
      <div class="linea3"></div>
    </section>
    <section class="descripcion">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-8">
            <p><strong>En Compañía Mega S.A.</strong> hemos trabajado desde el comienzo de las operaciones en construir un vínculo entre nuestra Compañía y los distintas partes interesadas de acuerdo con nuestro Manual de Gestión. De esta forma hemos desarrollado diferentes programas que nos han permitido acercarnos a la comunidad. Los públicos externos se componen, entre otros, de: clientes, proveedores, vecinos, superficiarios, entidades públicas y privadas, asociaciones civiles, ONG’s y medios de comunicación.</p>

            <h5>Programa de Becas Acompañando a Crecer</h5>
            <p>Compañía Mega S.A. desarrolla desde el año 2003 un programa de Becas Universitarias orientada a estudiantes egresados del sistema polimodal de Ingeniero White, mediante el cual se otorgan cinco becas anuales. <br>Este programa se lleva a cabo con la colaboración de la Fundación Cecilia Grierson, quien acompaña en la evaluación de los postulantes y en el seguimiento de las becas otorgadas.</p>
            <h6>Los requisitos para la inscripción son:</h6>
            <ul>
              <li>Obtener titulo de estudio de polimodal en establecimientos de Ingeniero White</li>
              <li>Realizar estudios universitarios en la ciudad de Bahía Blanca</li>
              <li>Tener promedio general de calificaciones en el polimodal no inferior a 8 puntos</li>
              <li>No poseer otras becas o pasantías</li>
            </ul>
            <a href="static/pdf/reglamento2021.docx"><i class="icon-file-pdf"></i><h5>VER REGLAMENTO DE BECAS</h5></a>
            <div class="cont-pdf">
              <img src="./becas2021.png" alt="" >

            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-8">
            <h5 class="subtitulo">Programa de Pasantías</h5>
            <p>Teniendo en cuenta la importancia de fomentar el vínculo con las universidades, la Compañía posee un Programa anual de pasantías rentadas para estudiantes universitarios con la Universidad Nacional del Sur (Bahía Blanca) y la Universidad Nacional del Comahue (Neuquén). Participan de dichas pasantías los alumnos que cursan carreras relacionadas con el proceso productivo, a los efectos de realizar tareas que les permitan mejorar su conocimiento en temas específicos y realizar sus tesis de estudio.</p>        
            <!-- <h5 class="subtitulo">Programa UNISOL</h5>
            <p>Es un programa solidario implementado a partir de una iniciativa del personal de la compañía quienes han conformado un grupo de ayuda llamado “Unisol”. El mismo tiene como fin recaudar dinero en forma mensual entre quienes desean colaborar voluntariamente, para ser donado con diferentes fines solidarios. Todos los meses, el grupo, a través de una votación, elige el destino del dinero recaudado (instituciones, tratamientos médicos, escuelas, etc.). Compañía Mega S.A. apoya a sus empleados, colaborando con este proyecto duplicando el monto del dinero recaudado y entregándolo a Unisol para que efectúe la donación correspondiente.</p> -->
            
            <h5 class="subtitulo">Participación en Instituciones</h5>
            <p>Como parte de su vínculo con otros organismos, Compañía Mega S.A. participa en las siguientes instituciones: Cámara de Concesionarios y Permisionarios del Puerto de Bahía Blanca, Instituto Argentino del Petróleo y Gas, Unión Industrial de Bahía Blanca, Instituto Petroquímico Argentino, FUNDECE (Fundación Empresaria para la Calidad y la Excelencia).</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'relacionesInstitucionales'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.secundario p 
  margin-bottom: 10px
.cont-pdf
  width: 100%
  display: flex
  justify-content: space-around
img 
  margin: 20px auto
  width: 90%
  -webkit-transition: all .35s ease-in-out
  -moz-transition: all .35s ease-in-out
  -o-transition: all .35s ease-in-out
  -ms-transition: all .35s ease-in-out
  transition: all .35s ease-in-out
  &:hover
    width: 110%
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75)
.link-azul
  display: block
  text-align: center
  color: #004D9E
h5 
  color: #004D9E
ul 
  padding-left: 15px
  li
    list-style: circle
a h5 
  font-size: 14px
  margin: 15px 0
  display: inline-block
</style>
