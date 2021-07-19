<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-4 col-md-4 col-lg-3">
          <div class="datos">
            <h4>{{ empresa.ba.prov }}</h4>
            <p>{{ empresa.ba.calle }}</p>
            <p>{{ empresa.ba.cp }}</p>
            <p>{{ empresa.ba.ciudad }}</p>
            <p>Tel: <a :href="empresa.ba.tel1">{{ empresa.ba.tel1 }}</a></p>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-4 col-lg-3">
          <div class="datos">
            <h4>{{ empresa.nqn.prov }}</h4>
            <p>{{ empresa.nqn.calle }}</p>
            <p>{{ empresa.nqn.cp }}</p>
            <p>{{ empresa.nqn.ciudad }}</p>
            <p>Tel: <a :href="empresa.nqn.tel1">{{ empresa.nqn.tel1 }}</a> </p>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-4 col-lg-3">
          <div class="datos">
            <h4>{{ empresa.bahia.prov }}</h4>
            <p>{{ empresa.bahia.calle }}</p>
            <p>{{ empresa.bahia.cp }}</p>
            <p>{{ empresa.bahia.ciudad }}</p>
            <p>Tel: <a :href="empresa.bahia.tel1">{{ empresa.bahia.tel1 }}</a></p>
          </div>
        </div>
      </div>
    </div>    
  </footer>
</template>

<script>

export default {
  name: 'Pie',
  props: ['empresa']
}
</script>

<style scoped lang="sass">
footer 
  background: #eaeaea
  padding: 20px 0
.datos
  text-align: left
  margin: 0 auto 10px
  width: 220px
h4 
  font-size: 16px
  line-height: 20px
  text-transform: uppercase
  color: #004D9E
  font-weight: 700
p 
  font-size: 12px
  line-height: 16px
  color: #000
  margin: 0
a
  color: #000
  text-decoration: none
  &:hover 
    color: #004D9E
</style>
