<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Creación de superficies en forma libre
    .row.justify-content-end.bg-color8.mb-4(data-aos="slide-left")
      .col-lg-7.p-4
        p.mb-0 #[b Para crear #[span.txt-deco1 superficies de forma libre]], es necesario #[b definir con anterioridad curvas, puntos, bordes de superficies o sólidos, u otros objetos]. En #[b #[span.txt-deco2 NX]], #[b las funciones de forma libre se encuentran en varios sitios dentro del programa], como:
    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/img10.svg', style="width: 1200px").m-auto
    p.mb-5 Lo mencionado anteriormente puede verse en la Figura 16.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 #[span.txt-deco2 Figura 16.] Superficies en forma libre
        figure
          img(src='@/assets/curso/img21.png', style="width: 1200px").m-auto
          figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
    p.mb-5 #[b La interfaz de superficies está conformada por el panel de comandos], que contiene las #[b #[span.txt-deco1 herramientas] para crear y editar las superficies, navegador de pieza, el historial de modelos y el área gráfica]. En la figura 17, se ubican los elementos que se han mencionado.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 #[span.txt-deco2 Figura 17.] Interfaz de la aplicación
        figure
          img(src='@/assets/curso/img11.svg', style="width: 1200px").m-auto
          figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
    .row.bg-color4.px-5
      .col-12
        #t_2_1
        .titulo-segundo
          h2 2.1 Panel de comandos
        p.mb-5 #[b Los comandos se encuentran organizados en tres grupos:]
        .row.justify-content-evenly.mb-5(data-aos="fade-left")
          .col-lg-3.bg-color9.mb-4.mb-lg-0
            figure.mb-4
              img(src='@/assets/curso/img12.svg', style="width: 100px").m-auto
            h4.text-center GRUPO 1
            p.text-center Se encuentran herramientas superficies de estudio, curvas de paso, barrido, redondeo de cara y redondeo de cara estético.
          .col-lg-3.bg-color10.mb-4.mb-lg-0
            figure.mb-4
              img(src='@/assets/curso/img13.svg', style="width: 100px").m-auto
            h4.text-center GRUPO 2
            p.text-center Están los comandos para realizar operaciones con las superficies.
          .col-lg-3.bg-color9
            figure.mb-4
              img(src='@/assets/curso/img14.svg', style="width: 100px").m-auto
            h4.text-center GRUPO 3
            p.text-center Contiene los comandos de edición de las superficies.
        p.mb-5 #[b Dicho lo anterior, se puede detallar en la Figura 18.]
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 #[span.txt-deco2 Figura 18.] Panel de comandos
            figure
              img(src='@/assets/curso/img22.png', style="width: 1200px").m-auto
              figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
        separador.mb-5
        #t_2_2
        .titulo-segundo
          h2 2.2 Comandos de superficie
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img23.png', style="width: 500px").m-auto
          .col-lg-6
            p.mb-4 #[b #[span.txt-deco2 El grupo de superficie]] contiene #[b los comandos para creación de superficies en forma libre], entre las que se destacan: #[b #[span.txt-deco1 Realize Shape], superficie de estudio, curva de paso, barrido y redondeos]. En la siguiente infografía, se presenta cómo son los comandos de superficie.
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-10
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco2 Figura 19.] Comandos de superficies
                figure
                  img(src='@/assets/curso/img24.png', style="width: 600px").m-auto
                  figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        separador.mb-5
        #t_2_2
        .titulo-segundo
          h2 2.2 Comandos de superficie
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            p.mb-4 Mediante este grupo de comandos, se permite realizar acciones como modificar y ajustar la geometría existente. Aquí se encuentran herramientas como: superficie desplazada, recortar lámina, extender lámina, coser y combinar superficie, entre otras. Estas se presentan como se anexa en la Figura 20.
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-lg-10
                .titulo-sexto.color-acento-contenido
                  h5 #[span.txt-deco2 Figura 20.] Operaciones entre superficies
                figure
                  img(src='@/assets/curso/img26.png', style="width: 600px").m-auto
                  figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
          .col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/img25.png', style="width: 500px").m-auto
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        TabsC.color-primario
          .py-3.py-md-4(titulo="Superficie desplazada").bg-color7
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 21.] Superficie desplazada
                    figure
                      img(src='@/assets/curso/img27.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-lg-4
                h4 Superficie desplazada
                p.mb-5 Crea una superficie equidistante a una existente, permitiendo ajustar el valor del desplazamiento.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Recorte de lámina").bg-color7
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 22.] Recorte de lámina
                    figure
                      img(src='@/assets/curso/img28.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-lg-4
                h4 Recorte de lámina
                p.mb-5 Este comando permite recortar una superficie a partir de la selección de una curva o un plano de referencia.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Extensión de lámina").bg-color7
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 23.] Extensión de lámina
                    figure
                      img(src='@/assets/curso/img29.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-lg-4
                h4 Extensión de lámina
                p.mb-5 Esta herramienta permite prolongar una superficie a partir de la selección de una o más de sus aristas o a lo largo de un vector.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Combinar superficies").bg-color7
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 24.] Combinar superficies
                    figure
                      img(src='@/assets/curso/img30.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-lg-4
                h4 Combinar superficies
                p.mb-5 Recorta y une dos o más superficies intersecantes formando aristas.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Coser").bg-color7
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 25.] Coser
                    figure
                      img(src='@/assets/curso/img31.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-lg-4
                h4 Coser
                p.mb-5 Este comando permite unir dos o más superficies en una sola.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right
          .py-3.py-md-4(titulo="Engrosar").bg-color7
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .row.justify-content-center
                  .col-lg-9
                    .titulo-sexto.color-acento-contenido
                      h5 #[span.txt-deco2 Figura 26.] Engrosar
                    figure
                      img(src='@/assets/curso/img32.png', style="width: 1200px").m-auto
                      figcaption.mt-3.bg-color5 #[b Nota.] Adaptada del sistema CAD NX 12.
              .col-lg-4
                h4 Engrosar
                p.mb-5 Con esta herramienta, se puede generar un espesor a partir de la selección de una superficie, creando un cuerpo sólido.
                .row.justify-content-end
                  .col-6
                    img(src='@/assets/curso/img8.svg', style="width: 200px").text-right

</template>

<script>
export default {
  name: 'Tema2',
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
