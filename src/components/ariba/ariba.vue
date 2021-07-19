<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Ariba</h1>
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
          <div class="btn-ar">
            <a href="https://service.ariba.com/Supplier.aw/124996083/aw?awh=r&awssk=C56809bX&dard=1"><i class="icon-file-pdf"></i><h5>Acceso a ARIBA Network</h5></a>
          </div>
          <div class="btn-ar">
            <a href="static/pdf/MEGA - Manual Ariba Proveedores.pdf"><i class="icon-file-pdf"></i><h5>Manual de proveedores</h5></a>
          </div>
            <p>En caso de dudas de navegación del portal Ariba, por favor, acceda a nuestro Centro de Ayuda ubicado en la esquina superior derecha de su cuenta.</p>
        </div>
      </div>
      
    </section>
  </article>
</template>

<script>
export default {
  name: 'ariba'
}
import $ from 'jquery'
$(document).ready(function () {
  $('.btn').click(function () {
    $(this).toggleClass('active')
    $('.profile .box').toggleClass('open')
  })
})
</script>


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
      a h5, i
        color: #fff
a h5, i 
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
.caja
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  /* Global Styles */





</style>
