<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Gobierno Corporativo</h1>
      </div>
    </section>
    <section class="lineas">
      <div class="linea1"></div>
      <div class="linea2"></div>
      <div class="linea3"></div>
    </section>
    <section class="descripcion">
      <div class="container">
        <div class="caja">
          <h5>Gobierno corporativo</h5>
          <p>En COMPAÑÍA MEGA priorizamos y alentamos la incorporación de las mejores prácticas de Gobierno Corporativo, porque estamos convencidos de que éstas, son herramientas clave para coadyuvar a la seguridad económica y jurídica, tanto de los inversores, como de la Compañía, de sus accionistas, empleados y de la sociedad en general, adicionando transparencia e integridad a nuestra gestión.
          <br><br>
            Actualmente, las prácticas de Gobierno Corporativo de COMPAÑÍA MEGA están reguladas por el Estatuto de la Compañía, el Código de Ética, las Políticas Internas, la Ley General de Sociedades N° 19.550, la Ley de Mercado de Capitales N°26.831, las normas de la Comisión Nacional de Valores, y las demás normas del ordenamiento legal vigente que resultan de aplicación.

            </p>
            <h5 style="margin-top: 20px">Código de Ética</h5>
          <p>
          Nuestro Código de Ética tiene como finalidad establecer las directrices que deben regir la conducta de todos los miembros de la Compañía en el cumplimiento de sus funciones laborales, relaciones comerciales, operativas y vínculos profesionales. Aplica tanto a los miembros del Directorio, de la Comisión Fiscalizadora, Gerentes, empleados, como a todos los proveedores, contratistas, subcontratistas y socios de negocios de la Compañía.<br><br>

          <a target="_blank" href="static/pdf/codigo-de-etica-compania-mega.pdf">Descarga el código de ética <i class="icon-file-pdf"></i></a>
          </p>
            
        </div>
      </div>
      
    </section>
  </article>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h5
  font-size: 30px
.btn-ar
    display: flex
    justify-content: center
    border: solid 1px #444
    margin-top: 30px
    width: 300px
    padding: 5px
    border-radius: 0px
    // &:hover
    // background-color: #004D9E
    &:hover
      background-color: #004D9E
      border-color: #fff
      a h5
        color: #fff
a h5
  font-size: 18px
  margin: 0
  display: inline-block
  color: black
  &:hover
    color: #fff
p
  padding-top: 15px
  padding-left: 10px
  padding-right: 10px
  text-align: center
  a
    color: #004D9E
i
  font-size: 16px
  opacity: 0.8
.caja
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  /* Global Styles */

</style>

<script>
export default {
  name: 'gobierno'
}
import $ from 'jquery'
$(document).ready(function () {
  $('.btn').click(function () {
    $(this).toggleClass('active')
    $('.profile .box').toggleClass('open')
  })
})
</script>


