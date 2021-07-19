<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Enviar CV</h1>
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
            <p>Si desea formar parte del equipo de Compañía Mega S.A., por favor envíenos su C.V. a la siguiente dirección</p>
            <a href="mailto:megacomunicaciones@ciamega.com.ar">megacomunicaciones@ciamega.com.ar</a>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'enviarCV'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.descripcion
  min-height: calc(100vh - 420px)
a 
  font-size: 20px
  color: #004D9E
  text-align: center
  display: block
</style>
