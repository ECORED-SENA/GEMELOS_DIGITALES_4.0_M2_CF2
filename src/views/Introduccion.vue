<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-color1.px-5
      .col-12
        .row.justify-content-end.bg-color2.mb-5(data-aos="slide-left")
          .col-lg-7.p-4
            p.mb-0 Para la lectura y apropiación de los contenidos dispuestos en este componente formativo, se comparte el siguiente video, que #[b permite reconocer los #[span.txt-deco1 elementos a tener en cuenta] desde la introducción, #[span.txt-deco2 los conceptos y temáticas]] a desarrollar en este espacio de aprendizaje.
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.align-items-center(data-aos="slide-right")
          .col-10.bg-color3
            p.mb-0 En la creación completa de un producto, intervienen diferentes elementos que aportan a sus características y a sus atributos. En este espacio, podrá encontrar de manera precisa los que se utilizan para su implementación.
          .col-2
            figure
              img(src='@/assets/curso/img2.svg').img-position1
              

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
