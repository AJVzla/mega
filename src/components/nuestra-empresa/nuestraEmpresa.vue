<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Nuestra Empresa</h1>
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
          <div class="col-12 col-sm-12 col-md-3">
            <img src="./empresa-grafico.gif" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-sm-12 col-md-5">
            <p><strong>Compañía Mega</strong> opera desde principios del año 2001 y tiene como visión y misión:<br>
            Ser el protagonista esencial en el procesamiento de gas de la cuenca neuquina y en el desarrollo de infraestructura energética en la región, impulsando el crecimiento de la producción de gas y potenciando a la industria petroquímica.</p>
            <ul>
              <li>Contribuir al desarrollo energético del país y al desarrollo del sector petroquímico.</li>
<!--               <li>Mantener relaciones de mutuo beneficio con clientes y proveedores.</li>
              <li>Brindar un rendimiento adecuado a los accionistas.</li>
              <li>Ofrecer oportunidades de desarrollo profesional a los empleados.</li>
              <li>Cuidar el medio ambiente, la salud de los trabajadores y la seguridad de las personas e instalaciones.</li>
              <li>Actuar bajo los principios de la responsabilidad social empresaria y los lineamientos del Código de ética.</li> -->
            </ul> 
            <p>El eje principal de su negocio es agregar valor al gas natural a través de la separación y fraccionamiento de sus componentes ricos, a fin de recuperar etano que constituye la principal materia prima de la industria petroquímica argentina y exportar los componentes líquidos hacia otros mercados.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="secundario">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-8">
            <h2>Productos</h2>
            <p>La separación de los componentes líquidos del gas natural y su fraccionamiento permite obtener como productos principales etano, propano, butano y gasolina natural. El etano constituye la materia prima básica del complejo Petroquímico de Bahía Blanca, a partir del cual se obtiene etileno para elaboración de polietilenos y PVC.</p>
            <p>La producción de propano, butano y gasolina natural se despachan vía marítima a Petrobras: el propano y el butano tienen como destino el abastecimiento de los centros de consumo, mientras que la gasolina natural se utiliza mayoritariamente como materia prima en la industria petroquímica para la producción de etileno, propileno y butadieno.</p>
            <img src="./banner-plantas.jpg" alt="Banner de las plantas de Mega Cia." class="img-fluid">
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'nuestraEmpresa',
  data () {
    return {
      msg: 'Hola Juan esta es nuestra empresa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
ul 
  padding-left: 10px
  margin: 0 0 30px
  li 
    list-style: circle
p 
  margin-bottom: 30px
</style>
