<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Contáctenos</h1>
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
            <form-contactenos></form-contactenos>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import FormContactenos from '@/components/contactenos/form-contactenos'

export default {
  name: 'contactenos',
  components: {
    FormContactenos
  }
}
</script>

<style scoped lang="sass">
.descripcion
  min-height: calc(100vh - 420px)
</style>
