<div></div><template>

  <form id="form-contactenos">
  <p v-show="mensajeEstado" v-bind:class="claseEstado" v-html="mensajeEstado"></p>
    <p>Por favor complete los siguientes campos, a la brevedad nos comunicaremos con usted.</p>
    <div class="form-group">
      <label for="nombre">Nombre y apellido</label>
      <input v-model="nombre" type="text" name="nombre">
    </div>
    <div class="form-group">
      <label for="tel">Teléfono</label>
      <input v-model="tel" type="tel" name="tel">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="email" type="mail" name="Email">
    </div>
    <div class="form-group">
      <label for="consulta">Consulta</label>
      <textarea v-model="consulta" name="consulta"></textarea>
    </div>
    <div class="boton">
      <button v-on:click.prevent="enviarFormulario" type="submit" name="dsubmit" value="Submit">Enviar</button>
    </div>
  </form>


</template>

<script>
export default {
  name: 'FormContactenos',
  data () {
    return {
      nombre: '',
      tel: '',
      email: '',
      consulta: '',
      estado: '',
      mensajeEstado: ''
    }
  },

  computed: {
    claseEstado () {
      return 'alert alert-' + this.estado
    }
  },

  methods: {
    enviarFormulario: function (evento) {
      this.$http.get('http://synapsis.com.ar/test/formulario/mega.php', {
        params: {
          token: 'DrKrxX0Gjl243B38QDjg4EgppGDNh8vl',
          SenderName: this.nombre,
          tel: this.tel,
          SenderAddress: this.email,
          consulta: this.consulta
        },
        before: function (request) {
          this.estado = 'info'
          this.mensajeEstado = 'Enviando...'
        }
      }).then(response => {
        if (response.body.error !== 'false') {
          this.estado = 'success'
          this.mensajeEstado = response.body.mensaje

          // Borro los datos del form
          this.nombre = ''
          this.tel = ''
          this.email = ''
          this.consulta = ''
        } else {
          this.estado = 'danger'
          this.mensajeEstado = response.body.mensaje
        }
      }, response => {
        this.estado = 'danger'
        this.mensajeEstado = response.body.mensaje
      })
    }
  }
}
</script>

<style scoped lang="sass">
form 
  font-size: 0
label 
  width: 30%
  vertical-align: top
  text-align: right
  padding-right: 10px
  font-size: 16px
input, textarea 
  width: 70%
  height: 40px
  font-size: 12px
textarea 
  height: 90px
.boton 
  text-align: right
%animacion-suave 
  -webkit-transition: all .35s ease-in-out
  -moz-transition: all .35s ease-in-out
  -o-transition: all .35s ease-in-out
  -ms-transition: all .35s ease-in-out
  transition: all .35s ease-in-out
button 
  border: solid 1px #004D9E
  padding: 0 10px
  background: #fff
  color: #004D9E
  cursor: pointer
  font-weight: 700
  font-size: 16px
  @extend %animacion-suave
  &:hover
    background: #004D9E
    color: #fff
</style>
