<template>
  <article class="">
    <section class="portada">
      <div class="linea">
        <h1>Esquema del proceso</h1>
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
            <p>El  proceso se divide en dos instalaciones principales: una Planta Separadora y una Planta Fraccionadora, conectadas por un ducto de 600km con una estación de bombeo intermedia, que atraviesa cuatro provincias</p>
            <img src="./esquema.png" alt="Esquema del proceso de Mega" class="img-fluid img-esq">
            <!-- <div class="cont-celeste"> -->
              <h4>PLANTA SEPARADORA LOMA LA LATA</h4>
              <p>Ubicada en el corazón del yacimiento de gas natural argentino, Loma La Lata, provincia de Neuquén.</p>
              <h6>Separación del gas de entrada:</h6>
              <p>El gas que ingresa a la planta es enviado a un separador de alimentación a fin de eliminar cualquier partícula extraña previo a su envío al sector de deshidratación.</p>
              <h6>Deshidratación:</h6>
              <p>Para separar los componentes ricos, la corriente del gas natural que entra a la Planta Separadora se somete a un proceso de enfriamiento. Sin embargo, para poder realizar este proceso, es condición precedente quitarle al gas el agua que trae consigo. La etapa de deshidratación deja al gas con un contenido de agua menor a una parte por millón. El sistema de deshidratación consta de cinco lechos: cuatro operativos y uno de regeneración.</p>
              <h6>Recuperación:</h6>
              <p>El gas deshidratado se divide en dos corrientes para ingresar cada una a un tren de separación criogénica. El proceso consiste en una expansión hasta los 26Kg/cm2, disminuyendo la temperatura del gas hasta los -97°C. En estas condiciones ingresa a la torre demetanizadora, separando al gas natural en sus diferentes componentes. De esta manera el etano, propano, butano y gasolina natural se condensan y son recogidos en estado líquido por el fondo de la torre (NGL). El metano residual, todavía en estado gaseoso, es recuperado por el tope de la torre para su acondicionamiento e inyección a gasoductos. El sistema de separación permite una eficiencia de hasta 88% en la recuperación de etano y superior a 96% en la recuperación de propano.</p>
              <h6>Estación de compresión de gas:</h6>
              <p>El gas residual obtenido de la demetanización, mayoritariamente metano, es recomprimido a fin de inyectarlo al gasoducto. Para este fin la planta cuenta con un sistema de compresión de 93000hp que descarga a un cabezal desde donde se alimentan los principales gasoductos troncales del país.</p>

              <h4>POLIDUCTO</h4>
              <p>El objetivo del poliducto es el de transportar el líquido recuperado (que mayoritariamente es etano, propano, butano y gasolina natural) desde la planta de Loma La Lata hasta la planta de Bahía Blanca.</p>

              <h4>PLANTA FRACCIONADORA DE BAHÍA BLANCA</h4>
              <p>En la planta se recibe el líquido recuperado en Loma La Lata y transportado a través de 600 km de ducto, y se fracciona el etano, propano, butano y gasolina natural mediante procesos de destilación (deetanización, depropanización y debutanización).</p>
              <h6>Deetanización, Depropanización y Debutanización:</h6>
              <p>El líquido recuperado en Loma La Lata que ingresa a este sector de destilación debe ser precalentado para garantizar una temperatura constante de alimentación a la deetanizadora. Este precalentamiento se lleva a cabo intercambiando calor con gasolina natural, que a su vez es pre-enfriada antes de su almacenamiento. Durante la deetanización se separa el etano del líquido formado por propano, butano y gasolina natural, para su posterior tratamiento. Esta mezcla líquida es acondicionada para llevar a cabo la depropanización en la que se obtiene el propano y una mezcla líquida constituida por butano y gasolina natural que nuevamente es acondicionada para ingresar a la columna de destilación donde se realiza la debutanización. En esta columna de destilación se obtienen el butano y la gasolina natural. Tanto el propano como el butano y la gasolina natural son acondicionados térmicamente para su almacenamiento.</p>
              <h6>Tratamiento de etano:</h6>
              <p>El sector de tratamiento de etano consiste en una unidad de remoción de dióxido de carbono. La remoción del dióxido de carbono se basa en una tecnología con aminas que deja el etano prácticamente libre de dióxido de carbono. El anhídrido carbónico se acondiciona en una etapa posterior para eliminar el ácido sulfhídrico y se comercializa parcialmente.</p>
              <h6>Sistema de refrigeración de productos:</h6>
              <p>El sistema de refrigeración de productos proporciona el frío requerido para el almacenamiento de propano, butano, gasolina natural y la condensación de la deetanización.</p>
              <h6>Almacenamiento de productos:</h6>
              <p>El sector de almacenamiento está compuesto por tanques de propano, butano y gasolina natural. Todos los productos se almacenan a presión atmosférica. La gasolina natural se almacena en tanques de techo flotante, mientras que el propano y el butano se almacenan en tanques refrigerados.</p>
         
              <img src="./planta.jpg" alt="Planta de Mega Cia" class="img-fluid">
            <!-- </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="secundario">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-12 col-md-8">
            <h2>Despacho de productos líquidos</h2>
            <p>El propano y el butano, o bien la mezcla de ambos, son despachados por vía marítima. El sistema de carga a buques de los productos refrigerados consiste en 2 brazos cargadores, uno de los cuales opera como reserva, y el otro para los vapores de retorno del buque. El sistema de bombas y brazos cargadores ha sido diseñado para cargar 40.000 m3 en 1 día considerando las demoras ocasionadas por el amarre y desamarre de los buques.</p>
            <p>Del mismo modo, la gasolina natural se despacha por vía marítima cargando buques mediante 2 brazos de carga, uno de ellos está en modo reserva. Este sistema tiene una capacidad de carga de buques de  15.000 m3 en 15 horas.</p>
          </div>
        </div>
      </div>
    </section> -->
  </article>
</template>

<script>
export default {
  name: 'esquemaDelProceso'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.secundario p 
  margin-bottom: 10px
.img-esq 
  margin: 40px 0
</style>
