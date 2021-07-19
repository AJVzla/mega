<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Contacto</h1>
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
          <h2>Contacto Relaciones con Inversores</h2>
          <p><strong>José Luis Borrello</strong><br>
            Gerente de Finanzas y Planeamiento Estratégico<br><br>
            <a target="_blank" href="mailto:inversores@ciamega.com.ar ">inversores@ciamega.com.ar </a>
            </p>
        </div>
      </div>
      
    </section>
  </article>
</template>

<script>
export default {
  name: 'contact'
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
  text-align: center
  padding-top: 20px
  font-size: 18px
  line-height: 20px
  a
    color: #004D9E
    font-size: 20px
.caja
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  /* Global Styles */





</style>
