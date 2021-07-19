<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Línea Ética</h1>
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
            <p>La Línea Ética de Compañía Mega S.A. es una herramienta diseñada para facilitar la denuncia de conductas contrarias al Código de Ética. La misma se encuentra disponible todos los días, las 24 hs. y es administrada por la firma BDO, tercero independiente que garantiza la confidencialidad, anonimato y transparencia del sistema de recepción de denuncias.</p>
           
            <img src="./linea-etica.jpg" alt="Banner de las plantas de Mega Cia." class="img-fluid">
          </div>
        </div>
      </div>
    </section>
    <section class="secundario">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-8">
            <h4>Canales de Denuncia</h4>
            <ul>
              <li>Teléfono: 0800-34-LINEA (54632)</li>
              <li>Página web: <a href="http://www.bdolineaetica.com/ciamega" target="_blank">www.bdolineaetica.com/ciamega</a></li>
              <li>Email: <a href="mailto:ciamega@bdolineaetica.com">ciamega@bdolineaetica.com</a></li>
              <li>Carta: Rondeau 2664 PB, C1262ABH CABA</li>
              <li>Entrevista personal: Maipú 942 PB, C1006ACN CABA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="descargas">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-8"> 
            <a href="static/pdf/manual-del-anuciante-mega.pdf" target="_blank"><img src="./icon-pdf.jpg" alt=""><span>DESCARGAR EL MANUAL</span></a>
            <a href="static/pdf/codigo-de-etica-compania-mega.pdf" target="_blank"><img src="./icon-pdf.jpg" alt=""><span>DESCARGAR EL CÓDIGO DE ÉTICA</span></a>
          </div>
        </div>
      </div>
    </section>   
  </article>
</template>

<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.descripcion 
  margin: 0
  padding: 0
  p 
    margin: 40px 0
.secundario
  margin: 0
  padding: 0
  h4 
    margin: 40px 0 30px
    font-size: 20px
    font-weight: 500
  ul 
    padding-left: 20px
    margin: 0
    li 
      list-style: circle
      a
        color: #004d9e
.descargas
  padding: 40px 0
  a
    padding-right: 30px
    display: inline-block
    vertical-align: top
    color: #004d9e
    font-weight: 500
    font-size: 14px
    @media(max-width: 550px)
      display: block
      padding: 0
    img,
    span
      display: inline-block
      vertical-align: middle
    img 
      padding-right: 10px

</style>
