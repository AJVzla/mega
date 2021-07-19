 <template>
  <div id="app">
    <cabecera></cabecera>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <pie v-bind:empresa="empresa"></pie>
  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera'
import Pie from '@/components/Pie'

export default {
  name: 'app',
  data: function () {
    return {
      empresa: {
        ba: {
          prov: 'BUENOS AIRES',
          calle: 'San Martín 344, pisos 9º y 10º',
          cp: '(C1004AAH)',
          ciudad: 'Ciudad Autónoma de Buenos Aires',
          tel1: '(54 11) 2821-0300'
          // tel2: '(54-11) 5441-5746',
          // tel2Short: '5746',
          // fax1: '(54-11) 4032-0096'
          // fax2: '(54-11) 5441-5731',
          // fax2Short: '5731'
        },
        nqn: {
          prov: 'PLANTA NEUQUEN',
          calle: 'Ruta Provincial 51, km 85',
          cp: '(Q8300XAD) Loma La Lata',
          ciudad: 'Provincia de Neuquén',
          tel1: '(54 299) 4904-400'
          // tel2: '(54-299) 489-3938',
          // tel2Short: '8',
          // fax1: '(54-299) 489-3937 int 1019'
        },
        bahia: {
          prov: 'PLANTA BAHIA BLANCA',
          calle: 'Av. del Desarrollo Presidente Frondizi s/n',
          cp: '(B8000XAU) Puerto Galván',
          ciudad: 'Provincia de Buenos Aires',
          tel1: '(54 291) 4037-650'
          // tel2: '(54-11) 5441-5746',
          // fax1: '(54-291) 457-2471'
        }
      }
    }
  },
  components: {
    Cabecera,
    Pie
  }
}
</script>

<style lang="sass">
.prueba 
  font-size: 30px
  color: red

@import '~bootstrap/scss/bootstrap'
@import "../static/fonts/fontello/css/mega-icons.css"
// #app 
//   font-family: 'Avenir', Helvetica, Arial, sans-serif
//   -webkit-font-smoothing: antialiased
//   -moz-osx-font-smoothing: grayscale
//   text-align: center

// Cargo las tipografías con FontSquirrel (descargarlas de Google Fonts y generar variante por variante en FontSquirrel)
@font-face 
    font-family: OpenSansRegular
    src: url('/fonts/open-sans/opensans-regular.woff2') format('woff2'), url('/fonts/open-sans/opensans-regular.woff') format('woff')
    font-weight: 400
    font-style: normal
@font-face 
    font-family: OpenSansBold
    src: url('/fonts/open-sans/opensans-bold-webfont.woff2') format('woff2'), url('/fonts/open-sans/opensans-bold-webfont.woff') format('woff')
    font-weight: 700
    font-style: normal
@font-face 
    font-family: OpenSansBold
    src: url('/fonts/open-sans/opensans-light-webfont.woff2') format('woff2'), url('/fonts/open-sans/opensans-light-webfont.woff') format('woff')
    font-weight: 300
    font-style: normal
// Stage 1
.fonts-loaded body 
    font-family: OpenSansRegular, sans-serif
// Stage 2
// Cargamos el resto de las familias/variantes en una segunda etapa
.fonts-b-loaded h1, .fonts-b-loaded .nav-principal ul li a
    font-family: OpenSansBold, sans-serif

#app
  overflow-x: hidden

*
  margin: 0
  padding: 0
  box-sizing: border-box
.clear
  clear: both
/* Animación suave */
%animacion-suave 
  -webkit-transition: all .35s ease-in-out
  -moz-transition: all .35s ease-in-out
  -o-transition: all .35s ease-in-out
  -ms-transition: all .35s ease-in-out
  transition: all .35s ease-in-out
a 
  text-decoration: none
  color: #000
  @extend %animacion-suave
  &:hover
    text-decoration: none
    color: #004D9E
ul 
  margin: 0
li
  list-style: none
/* Animación suave */
%animacion-suave 
  -webkit-transition: all .35s ease-in-out
  -moz-transition: all .35s ease-in-out
  -o-transition: all .35s ease-in-out
  -ms-transition: all .35s ease-in-out
  transition: all .35s ease-in-out

h1 
  font-size: 36px
  line-height: 48px
h2 
  font-size: 30px
  line-height: 36px
h3
  font-size: 24px
  line-height: 30px
h4
  font-size: 20px
  line-height: 24px
p 
  font-size: 16px
  line-height: 18px
  margin: 0
.bajada
  font-size: 20px
  line-height: 27px
@media (max-width: 550px)
  h1
    font-size: 30px
    line-height: 36px
  h2 
    font-size: 24px
    line-height: 30px
  h3
    font-size: 20px
    line-height: 24px
  h4
    font-size: 18px
    line-height: 20px

header 
  z-index: 2
// Cabeceras internas
.portada
  background: #004D9E
  padding: 30px
  .linea
    width: 100%
    height: 100%
    border: solid 1px #fff
    text-align: center
    padding: 20px 0
    h1
      color: #fff
      text-transform: uppercase
.lineas 
  font-size: 0
  line-height: 0
  padding: 5px 0 
  div
    display: inline-block
    height: 10px

.linea1
  background: #004D9E
  width: 50%
.linea2
  background: #ccc
  width: 35%
.linea3
  background: #efefef
  width: 15%

.descripcion
  padding: 40px 0
  p 
    margin: 0 0 30px
  img 
    display: block 
    margin: 0 auto
.secundario
  padding: 0 0 50px
  h2
    padding: 20px 10px
    border: solid 1px #e5e5e5
    text-transform: uppercase
    color: #004D9E
  p 
    padding: 0 10px
  img 
    display: block
    margin: 0 auto

.cont-celeste
  background: #E1E7EC
  padding: 20px
  margin: 20px 0
  img 
    margin: 0 auto 20px
    display: block

// .fade-enter-active, .fade-leave-active
//   transition: opacity .5s
// .fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ 
//   opacity: 0

.fade-enter-active 
  transition: all .3s ease-in-out
.fade-leave-active 
  transition: all .5s ease-in-out
.fade-enter, .fade-leave-to
  transform: translateX(90vw)
  opacity: 0 



</style>