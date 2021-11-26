<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Renderización de formas
    .row.bg-color1.px-5
      .col-12
        .bloque-texto-a.color-primario.p-4.p-md-4.mb-5(data-aos="fade-left")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img33.png', style="width: 320px").m-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 #[b #[span.txt-deco1 En el panel de sombreado realista]], se encuentran las #[b herramientas que permiten asignar materiales, escenarios, sombras, iluminaciones y reflejos], que dan una #[b #[span.txt-deco2 apariencia real al producto en el proceso de aprobación por el cliente]]. En la Figura 27, se destaca la forma en que se muestra para su utilización.
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 27.] Panel de comandos sombreado realista
            figure
              img(src='@/assets/curso/img34.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
        p.mb-5 De igual manera, en el siguiente cuadro, #[b se destaca el #[span.txt-deco1 uso de los comandos o herramientas en función del objeto y materiales] que se desean asignar al #[span.txt-deco2 producto]].
        SlyderA.mb-5
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img35.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img36.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img37.svg', style="width: 1200px").m-auto
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img38.svg', style="width: 1200px").m-auto
        .row.bg-color11.align-items-center.justify-content-center(data-aos="fade-down")
          .col-6.col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/img8.svg', style="width: 400px").m-auto
          .col-lg-9
            p.mb-0 Teniendo en cuenta las #[b #[span.txt-deco2 especificaciones del producto]], se elaboran #[b modelos digitales en estilo libre a través de formas en 3D], curvas y superficies, donde #[b #[span.txt-deco1 se implementan diferentes comandos y herramientas en función de un producto]], en atención a las necesidades del cliente.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
