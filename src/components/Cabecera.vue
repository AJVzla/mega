<template>
  <header class="cabecera" id="cabecera">
    <div class="container">
      <div class="row align-items-center">
        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <img src="../assets/home/mega-logo.svg" alt="Mega Compañía - Logo" class="logo">
          </router-link>
          <button class="burger burger-efecto mostrar">
            <span class="burger-box">
              <span class="burger-inner"></span>
            </span>
          </button>
        </div>       
        <nav class="nav-principal">
          <ul>
            <li class="js-btn-desp">Nuestra <br class="hidden-md-down">Compañía
              <ul class="desplegable">
               <li><router-link :to="{name: 'nuestrosComienzos'}">Nuestros comienzos</router-link></li>
                <li><router-link :to="{name: 'nuestraEmpresa'}">Nuestra empresa</router-link></li>
                <li><router-link :to="{name: 'Organizacion'}">Organización</router-link></li>
              </ul>
            </li>
             <li class="js-btn-desp">Inversores <br class="hidden-md-down">
              <ul class="desplegable">

                <li><router-link :to="{name: 'regimen'}">Régimen de Oferta Pública</router-link></li>
                <li><router-link :to="{name: 'info'}">Información Financiera</router-link></li>
                <li><router-link :to="{name: 'gobierno'}">Gobierno Corporativo</router-link></li>
                <li><router-link :to="{name: 'contact'}">Contacto</router-link></li>
              </ul>
            </li>
            <li class="js-btn-desp">Nuestras <br class="hidden-md-down">Plantas
              <ul class="desplegable">
                <li><router-link :to="{name: 'nuestrasPlantas'}">Plantas</router-link></li>
                <li><router-link :to="{name: 'esquemaDelProceso'}">Esquema del proceso</router-link></li>
                <li><router-link :to="{name: 'medioAmbiente'}">Medio ambiente</router-link></li>
                <li><router-link :to="{name: 'sistemaDeGestion'}">Sistema de Gestión Int.</router-link></li>
              </ul>
            </li>
            <li class="js-btn-desp">Relaciones <br class="hidden-md-down">Institucionales
              <ul class="desplegable">
                <li><router-link :to="{name: 'relacionesInstitucionales'}">Relaciones Institucionales</router-link></li>
              </ul>
            </li>
            <li class="js-btn-desp">Contáctenos
              <ul class="desplegable">
                <li><router-link :to="{name: 'contactenos'}">Consultas</router-link></li>
                  <li><router-link :to="{name: 'enviarCV'}">Enviar CV</router-link></li>
              </ul>
            </li>
            <li class="js-btn-desp">Proveedores <br class="hidden-md-down">
              <ul class="desplegable">
                <li><a href="https://portaldecompras.ciamega.com.ar/" target="_blank">Portal Compras</a></li>
                <li><router-link :to="{name: 'ariba'}">Portal ariba</router-link></li>
              </ul>
            </li>
            <li>
              <router-link :to="{name: 'lineaEtica'}">Línea <br class="hidden-md-down"> Ética</router-link>
            </li>
          </ul>
          <!-- <div class="btn btn-primary">Btotn</div> -->
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'cabecera'
}
import $ from 'jquery'
$(document).ready(function () {
  $('.desplegable').hide()
  $('.nav-principal .js-btn-desp').click(function (event) {
    var desplegable = $(this).children('.desplegable')
    $('.desplegable').not(desplegable).slideUp('fast')
    desplegable.slideToggle('fast')
    // event.preventDefault()
  })
})
// Menú hamburguesa //
$(document).ready(function () {
  $('.burger').click(function () {
    $(this).toggleClass('is-active')
    $('header').toggleClass('activo')
  })
})
</script>

<style scoped lang="sass">
/* Animación suave */
%animacion-suave 
  -webkit-transition: all .45s ease-in-out
  -moz-transition: all .45s ease-in-out
  -o-transition: all .45s ease-in-out
  -ms-transition: all .45s ease-in-out
  transition: all .45s ease-in-out

.cabecera
  background: #b5babb
  position: relative

.logo
  display: inline-block
  width: 200px
  font-size: 0
@media (max-width: 550px)
  .logo
    margin-left: 5px

.nav-principal
  display: inline-block
  width: calc(100% - 200px)
  text-align: right
  font-size: 0
  @extend %animacion-suave

.nav-principal ul
  margin: 0
.nav-principal .desplegable
  display: none
li
  display: inline-block
  margin: 0 10px
  text-align: left
  vertical-align: middle
  font-size: 16px
  line-height: 20px
  font-weight: 700
  cursor: pointer
  position: relative
  color: #fff
  &:hover, &:focus
    color: #004D9E
  a
    color: #fff
    &:hover, &:focus
      color: #004D9E
.desplegable
  position: absolute
  top: 50px
  left: 0
  background: #9c9c9c
  padding: 5px
  li 
    display: block
    min-width: 200px
    margin: 0
    padding: 5px 0
    font-weight: 400
    &:not(:last-child)
      border-bottom: solid 1px #efefef
    a 
      color: #fff
      &:hover 
        color: #004D9E
.mostrar
  display: none
@media (max-width: 991px)
  .hidden-md-down 
    display: none
  .mostrar
    display: inline-block
  header 
    overflow: hidden
  .nav-principal
    display: inline-block
    width: 300px
    text-align: right
    font-size: 0
    position: absolute
    right: -600px
    top: 79px
    height: calc(100vh - 80px)
    background: #a0a4a5
    padding: 20px
  header.activo
    overflow: visible
    .nav-principal
      right: 0
  li
    display: block
    margin: 0 10px
    padding: 10px 0
    &:not(:last-child)
      border-bottom: solid 1px #fff
  .desplegable
    position: relative
    top: 0
    left: 0

/*Hamburguesa*/
.burger,
.burger:focus
  position: absolute
  // display: inline-block
  padding: 5px
  margin: 0
  border: 0
  top: 15px
  right: 10px
  cursor: pointer
  transition-duration: 0.15s
  transition-timing-function: linear
.burger-box
  display: inline-block
  width: 40px
  height: 40px
  border-radius: 5px
  background: transparent
  position: relative
  transition:         all .20s ease-in-out        
.burger-inner
  display: block
  margin-top: -2px
  top: 50%
  left: 5px
.burger-inner,
.burger-inner::before,
.burger-inner::after
  width: 30px
  height: 4px
  border-radius: 0
  background-color: #000
  position: absolute
  transition-property: transform
  transition-property: transform
  transition-duration: 0.15s
  transition-timing-function: ease
  transition: all 200ms ease-in-out
.burger-inner::before,
.burger-inner::after
  content: ''
  display: block  
.burger-inner
  &::before
    top: -10px        
  &::after
    bottom: -10px       
span.burger-inner.scroll 
    top: 40%
    transition: all 200ms ease-in-out
    
/*Efecto de hambuger*/
.burger-efecto
  .burger-box
    -webkit-perspective: 80px
      perspective: 80px
  .burger-inner
    transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)
    transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)
    &::after
      transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)
  &.is-active .burger-inner
    background-color: transparent
    -webkit-transform: rotateY(180deg)
    transform: rotateY(180deg)
    &::before
      -webkit-transform: translate3d(0, 10px, 0) rotate(45deg)
            transform: translate3d(0, 10px, 0) rotate(45deg)
    &::after
      -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg)
            transform: translate3d(0, -10px, 0) rotate(-45deg)    


  
</style>
