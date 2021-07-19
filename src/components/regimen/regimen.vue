<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Régimen de Oferta Pública</h1>
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
          <p>COMPAÑÍA MEGA S.A. ingresó al Régimen de Oferta Pública de la Comisión Nacional de Valores (CNV) conforme resolución RESFC-2019-20543-APN-DIR#CNV de fecha 7 de noviembre de 2019.<br>
            A través del <a target="_blank" href="https://www.cnv.gov.ar/SitioWeb/Empresas">sitio web oficial de la CNV</a> (*) podrá consultarse la información relacionada con la sociedad y el mercado de capitales.

            </p>
          <p> <i>(*) El hipervínculo conduce al sitio web de la CNV, ajeno a la Compañía, por lo que Compañía Mega S.A. no puede garantizar la información contenida en el mismo y no se responsabiliza por suplementar, actualizar o corregir dicha información.</i></p>
            
        </div>
      </div>
      
    </section>
  </article>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
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
  padding-top: 30px
  padding-left: 10px
  padding-right: 10px
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
.caja
  text-align: center
  p
    font-size: 18px

  /* Global Styles */


</style>

<script>
export default {
  name: 'regimen'
}
import $ from 'jquery'
$(document).ready(function () {
  $('.btn').click(function () {
    $(this).toggleClass('active')
    $('.profile .box').toggleClass('open')
  })
})
</script>


