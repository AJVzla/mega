<template>
  <div class="home">
    <div class="slider-principal">
      <ul class="owl-carousel">
        <li class="slide slide1"></li>
        <li class="slide slide2"></li>
        <li class="slide slide3"></li>
      </ul>
    </div>
    <section class="compania">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 text-center">
            <h1>Compañía Mega S.A.</h1>
            <p class="bajada"><strong>Compañía Mega</strong> es una empresa argentina que opera desde abril del 2001. Tiene como eje principal del negocio agregar valor al gas natural a través de la separación y el fraccionamiento de sus componentes ricos. Recupera el etano, que constituye una de las principales materias primas de la industria petroquímica argentina, y aprovecha el resto de los componentes líquidos (propano, butano y gasolina natural) para otros mercados. Es una sociedad anónima cuyos accionistas son YPF S.A., Petrobras y Dow Argentina.</p>    
          </div>
        </div>
      </div>
    </section>
    <section class="premio">
      <div class="obrero"></div>
      <div class="circulo">
        <h2>Premio Nacional a la calidad 2006</h2>
        <p>Categoría: Empresa Grande de Producción de Bienes.</p>
        <!-- <div class="enlace">
          <a href="static/video/mega-cia-video-institucional.mp4" download>descargar video</a>
        </div> -->
      </div>
    </section>
    <section class="novedades">
      <router-link :to="{name: 'medioAmbiente'}" class="modulo-nov">
        <h4>Medio Ambiente</h4>
        <img src="./medio-ambiente.jpg" alt="">
        <p>Compañía Mega S.A., luego de implementar su Sistema de Gestión Integrado que comprende normas de calidad, seguridad, salud ocupacional y medio ambiente, definió una ...</p>
      </router-link>
      <router-link :to="{name: 'nuestraEmpresa'}" class="modulo-nov">
        <h4>Nuestros productos</h4>
        <img src="./nuestros-productos.jpg" alt="">
        <p>La separación de los componentes líquidos del gas natural y su fraccionamiento permite obtener como productos principales etano, propano, butano y gasolina natural ...</p>
      </router-link>
    </section>
    <section class="folleto">
      <a href="static/pdf/MEGA-folleto-inst-online.pdf" target="_blank" class="col-izq">
        <img src="./folleto.png" alt="Folleto institucional de Mega">
        <div class="cont-texto">
          <h4>Folleto institucional</h4>
          <div class="folle">
            <span><a href="static/pdf/Brochure-Mega_ESP.pdf" target="_blank"><i class="icon-file-pdf"></i>Bajar folleto en Español</a></span> 
           <span><a href="static/pdf/Brochure-Mega_ENG.PDF" target="_blank"><i class="icon-file-pdf"></i>Bajar folleto en Inglés</a></span>
          </div>           
        </div>
      </a>      
      <router-link :to="{name: 'sistemaDeGestion'}" class="col-der">
        <h4>Sistema de Gestión</h4>
        <img src="./sistema-gestion.png" alt="">
      </router-link>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    $('.slider-principal > ul').owlCarousel({
      autoplay: true,
      items: 1,
      loop: true,
      slideSpeed: 1000,
      autoplaySpeed: 500,
      singleItem: true,
      dragBeforeAnimFinish: false,
      mouseDrag: true,
      touchDrag: true,
      nav: false
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.slider-principal
  width: 100%
  .slide
    width: 100%
    height: 700px
  .slide1 
    background: url(./slide1.jpg) no-repeat center center
    background-size: cover
  .slide2
    background: url(./slide2.jpg) no-repeat center center
    background-size: cover
  .slide3
    background: url(./slide3.jpg) no-repeat center center
    background-size: cover
@media (max-width: 550px)
  .slider-principal .slide
      height: 45vh  

.compania
  padding: 70px 0 
h1 
  color: #004D9E
  text-transform: uppercase
  font-weight: 700
  margin: 0 0 20px
.premio
  position: relative
  background: url(./home-premio.jpg) no-repeat left center fixed #e5e5e5
  width: 100%
  height: 300px
  margin-bottom: 50px
  .obrero
    position: absolute
    height: 300px
    width: 250px
    background: url(./obrero.png) no-repeat left center
  .circulo
    position: absolute
    bottom: -70px
    width: 300px
    height: 300px
    border-radius: 50%
    border: 5px solid #fff
    padding: 30px
    right: 15%
    background: #004D9E
    color: #fff
    display: flex 
    justify-content: center
    flex-direction: column
    text-align: center
    h2 
      margin-bottom: 10px
    a
      display: inline-block
      margin-top: 15px
      text-transform: uppercase
      padding: 5px
      font-weight: 700
      border-radius: 5px
      border: solid 1px #fff
      color: #fff
      &:hover
        background: #fff
        color: #004D9E
@media (max-width: 550px)
  .compania
    padding: 30px 0
  .premio
    background: url(./home-premio.jpg) no-repeat center center fixed #e5e5e5
    .obrero 
      display: none


.novedades
  padding: 40px 0
  text-align: center
.modulo-nov
  display: inline-block
  margin: 20px 
  width: 280px
  text-align: center
  vertical-align: top
  h4 
    background: #004D9E
    color: #fff
    margin: 0
    width: 100%
  img 
    max-width: 100%
  p 
    text-align: left
    margin: 10px 0
.folleto
  background: #95A1AB
  padding: 30px 0
  display: flex
  align-items: center
  justify-content: center
  .col-izq, .col-der
    padding: 20px 0
    margin: 0 2%
    width: 46%
    max-width: 500px
    text-align: center
  .col-izq
    background: #ddd
    .cont-texto
      display: inline-block
      text-align: left
    h4 
      padding: 10px
      background: #004D9E
      color: #fff
    &:hover 
      background: #004D9E
      .folle
        span
          a
            color: #fff
    .folle
      display: flex
      flex-direction: column
      span
        margin-top: 5px
        a
          color: #000
          padding: 5px
      h4 
        background: #fff
        color: #004D9E
      a 
        color: #fff
  .col-der
    background: #e5e5e5
    padding: 20px 0 0
    &:hover 
      background: #004D9E
      color: #fff  
    img
      margin: 40px 0 0
@media (max-width: 750px)
  .folleto
    display: block
    .col-izq, .col-der
      display: block
      padding: 0
      margin: 20px auto
      width: 95%
      max-width: 500px
</style>
