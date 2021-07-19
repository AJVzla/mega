<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Información Financiera</h1>
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
          <h5>Estados Financieros Anuales</h5>
         <div class="btns">
           <div class="box">
              <p>Estado financiero</p>
              <div class="btn-ar">
                <a target="_blank" href="static/pdf/EEFF2020.pdf"><i class="icon-file-pdf"></i><h5>2020</h5></a>
              </div>
            </div>
            <div class="box">
              <p>Estado financiero</p>
              <div class="btn-ar">
                <a target="_blank" href="static/pdf/EEFF2019.pdf"><i class="icon-file-pdf"></i><h5>2019</h5></a>
              </div>
            </div>
            <div class="box">
              <p>Estado financiero</p>
              <div class="btn-ar">
                <a target="_blank" href="static/pdf/EEFF2018.pdf"><i class="icon-file-pdf"></i><h5>2018</h5></a>
              </div>
            </div>
            <div class="box">
              <p>Estado financiero</p>
              <div class="btn-ar">
                <a target="_blank" href="static/pdf/EEFF2017.pdf"><i class="icon-file-pdf"></i><h5>2017</h5></a>
              </div>
            </div>
         </div>
          <h5 style="margin-bottom: 15px">Estados Financieros Intermedios</h5>
       
          <p style="margin-bottom: 15px">Estados Financieros Intermedios cerrados el 30/09/2020 <a target="_blank" href="static/pdf/EEFF-30-sept-2020.pdf"><i class="icon-file-pdf"></i></a></p>
          <p style="margin-bottom: 15px">Estados Financieros Intermedios cerrados el 30/06/2020 <a target="_blank" href="static/pdf/EEFF-30-junio-2020.pdf"><i class="icon-file-pdf"></i></a></p>
          <p style="margin-bottom: 15px">Estados Financieros Intermedios cerrados el 31/03/2020 <a target="_blank" href="static/pdf/EEFF 31 de marzo de 2020 (COMPLETO).pdf"><i class="icon-file-pdf"></i></a></p>
          <p style="margin-bottom: 15px">Estados Financieros Intermedios cerrados el 31/03/2021 <a target="_blank" href="static/pdf/EEFF 31 de marzo 2021.pdf"><i class="icon-file-pdf"></i></a></p>
          
          <h5 style="margin-top: 35px">Prospectos</h5>
          <p>Prospecto del Programa Global de Emisión de ONs no convertibles en acciones por un valor nominal de hasta U$S 500.000 - 24 de junio de 2020 <a target="_blank" href="static/pdf/Prospecto - Compañia Mega SA.pdf"><i class="icon-file-pdf"></i></a><br><br>
          Prospecto Resumido del Programa Global de Emisión de ONs no convertibles en acciones por un valor nominal de hasta U$S 500.000 - 24 de junio de 2020 <a target="_blank" href="static/pdf/Prospecto Resumido - Compañia Mega SA.pdf"><i class="icon-file-pdf"></i></a></p>
           
           
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
    width: 70px
    border-radius: 0px
    // &:hover
    // background-color: #004D9E
    &:hover
      background-color: #004D9E
      border-color: #fff
      a h5, i
        color: #fff
a h5, i 
  font-size: 15px
  padding: 0
  margin: 0
  display: inline-block
  color: black
p
  font-size: 15px
  margin: 0
  i
    &:hover
      color: #004D9E
h2
  font-size: 30px
  margin: 0
  padding: 20px 0
h5
  margin: 0
  font-size: 28px
  padding: 10px 0
.caja
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .btns
    display: flex
    flex-direction: column
    justify-content: space-between
    max-width: 300px
    width: 100%
    padding: 10px 0
    .box
      padding-bottom: 10px
      p
        display: inline-block
        vertical-align: middle
        margin-bottom: 0
        padding-right: 20px
      .btn-ar
        display: inline-block
        vertical-align: middle
  /* Global Styles */

</style>

<script>
export default {
  name: 'info'
}
import $ from 'jquery'
$(document).ready(function () {
  $('.btn').click(function () {
    $(this).toggleClass('active')
    $('.profile .box').toggleClass('open')
  })
})
</script>

