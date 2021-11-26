<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Creación de curvas
    .row.bg-color4.px-5
      .col-12
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5(data-aos="fade-right")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img2.png', style="width: 320px").m-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Como base para la #[b #[span.txt-deco1 construcción de superficies en 3D]], se considera como información geométrica la #[b #[span.txt-deco2 creación de curvas]], cuya aplicación contiene los #[b comandos para crear geometrías en 3D, como: puntos, líneas, arcos, #[i spline], hélices, curvas sobre superficies y herramientas para editar geometría existente], tales como:
        .row.justify-content-center.mb-5
          .col-lg-10(data-aos="fade-left")
            figure
              img(src='@/assets/curso/img5.svg', style="width: 950px").m-auto
        p.mb-5 #[b El módulo se encuentra en la #[span.txt-deco1 pestaña de curvas y está conformado por el grupo de curva], curva derivada y editar curva]. En el navegador de pieza, se cuenta con el historial de las operaciones, el cual #[b #[span.txt-deco2 permite tener un registro en la creación de un modelo 3D]]. Tenga en cuenta el ejemplo de la Figura 1.
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 1.] Aplicación de curva
            figure
              img(src='@/assets/curso/img3.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
        .cajon.color-primario.p-4.mb-5
          p.mb-0 #[b A continuación, se describe #[span.txt-deco1 cómo se ubican cada una de las siguientes herramientas y comandos para el desarrollo de las diferentes operaciones y actividades]].
        #t_1_1
        .titulo-segundo
          h2 1.1 Panel de herramientas
        p.mb-5 #[b El panel de herramientas] contiene los comandos agrupados; #[b #[span.txt-deco2 dentro de las herramientas más importantes], se encuentra croquización directa, que contiene las herramientas para el modelado en 2D; #[span.txt-deco1 a su derecha, está el grupo de curva, conformado por comandos para creación de curvas 3D]; #[span.txt-deco2 seguido de curva derivada y editar curva]]. En la Figura 2, se logra identificar cada uno de los elementos que se han mencionado.
        .row.justify-content-center(data-aos="fade-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 2.] Panel de herramientas
            figure
              img(src='@/assets/curso/img4.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
        separador
        #t_1_2
        .titulo-segundo
          h2 1.2 Comandos de curvas
        .row.align-items-center.mb-5(data-aos="slide-right")
          .col-2
            figure
              img(src='@/assets/curso/img5.png').img-position2
          .col-10.bg-color6
            p.mb-0 #[b #[span.txt-deco2 En la creación de figuras geométricas en 3D]], se hacen necesarios los comandos que aportan diferentes funciones y permiten su desarrollo; de esta manera, en las siguientes pestañas se relacionan los que son utilizados, su descripción y la imagen de cómo se representan.
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Comandos de curvas")
            .row
              .col-12
                .row
                  .col-8.col-lg-5
                    h4.text-center.text-white.txt-deco3 #[b Comandos de curvas]
                  .col-12
                    p.mb-4 Este grupo contiene las herramientas para creación de formas geométricas en 3D, como: punto, línea, arco/círculo, #[i spline], hélice, texto y curva sobre superficie.
                .row.justify-content-center.mb-4
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 3.] Comando de curva
                    figure
                      img(src='@/assets/curso/img6.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
                .row.justify-content-end
                  .col-4
                    figure
                      img(src='@/assets/curso/img8.svg', style="width: 200px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Punto")
            .row
              .col-12
                .row
                  .col-8.col-lg-5
                    h4.text-center.text-white.txt-deco3 #[b Punto]
                  .col-12
                    p.mb-4 A través de este comando, se pueden generar puntos en el espacio en forma libre, de acuerdo con la ubicación del cursor o a partir de geometría existente, de acuerdo con las opciones que se muestran en el cuadro de diálogo.
                .row.justify-content-center.mb-4
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 4.] Comando punto
                    figure
                      img(src='@/assets/curso/img7.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
                .row.justify-content-end
                  .col-4
                    figure
                      img(src='@/assets/curso/img8.svg', style="width: 200px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Línea")
            .row
              .col-12
                .row
                  .col-8.col-lg-5
                    h4.text-center.text-white.txt-deco3 #[b Línea]
                  .col-12
                    p.mb-4 Esta herramienta crea segmentos de línea en 3D en forma libre o a partir de geometría existente.
                .row.justify-content-center.mb-4
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 5.] Comando línea
                    figure
                      img(src='@/assets/curso/img8.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
                .row.justify-content-end
                  .col-4
                    figure
                      img(src='@/assets/curso/img8.svg', style="width: 200px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Arco/círculo")
            .row
              .col-12
                .row
                  .col-8.col-lg-5
                    h4.text-center.text-white.txt-deco3 #[b Arco/círculo]
                  .col-12
                    p.mb-4 Este comando crea un arco a partir de un plano de referencia, a través de tres puntos o por medio de geometría existente.
                .row.justify-content-center.mb-4
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 6.] Comando arco
                    figure
                      img(src='@/assets/curso/img9.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
                .row.justify-content-end
                  .col-4
                    figure
                      img(src='@/assets/curso/img8.svg', style="width: 200px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="<i>Spline studio</i>")
            .row
              .col-12
                .row
                  .col-8.col-lg-5
                    h4.text-center.text-white.txt-deco3 #[b #[i Spline studio]]
                  .col-12
                    p.mb-4 Con esta herramienta, se genera una curva 3D en el espacio en forma libre o a través de la sección de geometría existente. Los puntos de control se pueden ajustar de acuerdo con la vista actual.
                .row.justify-content-center.mb-4
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 7.] #[i Spline studio]
                    figure
                      img(src='@/assets/curso/img10.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
                .row.justify-content-end
                  .col-4
                    figure
                      img(src='@/assets/curso/img8.svg', style="width: 200px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Curva sobre superficie")
            .row
              .col-12
                .row
                  .col-8.col-lg-5
                    h4.text-center.text-white.txt-deco3 #[b Curva sobre superficie]
                  .col-12
                    p.mb-4 El comando crea una curva #[i spline] sobre la superficie seleccionada, a través de puntos control.
                .row.justify-content-center.mb-4
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 8.] Curva sobre superficie
                    figure
                      img(src='@/assets/curso/img11.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
                .row.justify-content-end
                  .col-4
                    figure
                      img(src='@/assets/curso/img8.svg', style="width: 200px").m-auto
    .row.bg-color12.px-5
      .col-12
        separador
        #t_1_3
        .titulo-segundo
          h2 1.3 Herramientas de curvas derivadas
        .row.align-items-center.mb-3
          .col-lg-6.mb-4.mb.lg-0
            p.mb-5 #[b Teniendo en cuenta las geometrías que se deben utilizar para el diseño de los productos, se considera un conjunto de herramientas de curvas derivadas, que se pueden generar a partir de una geometría existente, así como se muestra en la Figura 9.]
            .row.justify-content-center
              .col-lg-9(data-aos="fade-right")
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco2 Figura 9.] Herramientas de curvas derivadas
                figure
                  img(src='@/assets/curso/img13.png', style="width: 1200px").m-auto
                  figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img12.png', style="width: 450px").m-auto
        p.mb-5 #[b De igual manera, en las siguientes pestañas se puede ampliar y detallar la información acerca de estas.]
        TabsC.color-primario.mb-5
          .py-3.py-md-4(titulo="Curva desfasada").bg-color7
            .row.align-items-center.justify-content-center
              .col-11.col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 10.] Curva desfasada
                    figure
                      img(src='@/assets/curso/img14.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-11.col-lg-4
                h4 Curva desfasada
                p.mb-5 Crea una curva equidistante a otra, sobre el mismo plano, a una distancia específica.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Proyectar la curva").bg-color7
            .row.align-items-center.justify-content-center
              .col-11.col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 11.] Proyectar la curva
                    figure
                      img(src='@/assets/curso/img15.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-11.col-lg-4
                h4 Proyectar la curva
                p.mb-5 El comando crea una curva proyectada sobre una superficie, a partir de la selección de un croquis en 2D que se encuentra en un plano o una curva en el espacio.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Curva de intersección").bg-color7
            .row.align-items-center.justify-content-center
              .col-11.col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 12.] Curva de intersección
                    figure
                      img(src='@/assets/curso/img16.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-11.col-lg-4
                h4 Curva de intersección
                p.mb-5 Esta herramienta crea una curva en la intersección de un conjunto de superficies o a través de una superficie y un plano de referencia.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Curva desfasada en la cara").bg-color7
            .row.align-items-center.justify-content-center
              .col-11.col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 13.] Curva desfasada en la cara
                    figure
                      img(src='@/assets/curso/img17.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-11.col-lg-4
                h4 Curva desfasada en la cara
                p.mb-5 Este comando permite crear una curva sobre una superficie o plano, en forma equidistante, siempre y cuando se encuentre sobre la superficie.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Curva compuesta").bg-color7
            .row.align-items-center.justify-content-center
              .col-11.col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 14.] Curva compuesta
                    figure
                      img(src='@/assets/curso/img18.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-11.col-lg-4
                h4 Curva compuesta
                p.mb-5 Este comando crea una curva a partir de la selección de una arista o curva de una superficie o una curva que se encuentre sobre la superficie.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Curva combinada").bg-color7
            .row.align-items-center.justify-content-center
              .col-11.col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 15.] Curva combinada
                    figure
                      img(src='@/assets/curso/img19.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-11.col-lg-4
                h4 Curva combinada
                p.mb-5 Esta herramienta crea una curva combinando dos curvas que se encuentran en planos diferentes.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
