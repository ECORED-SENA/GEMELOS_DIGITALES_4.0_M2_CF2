export default {
  global: {
    componenteFormativo: 'Modelado de superficies 3D en forma libre',
    descripcionCurso:
      'Este módulo tiene como objetivo guiar al estudiante en el desarrollo de habilidades y destrezas para la creación de gemelos digitales a través de curvas y superficies de forma libre, mediante el conocimiento y la aplicación del sistema CAD NX. Según Siemens (s. f.), un gemelo digital es una representación virtual de un producto o proceso físico que se utiliza para comprender y predecir las características de rendimiento de su equivalente físico. Los gemelos digitales se utilizan a lo largo de todo el ciclo de vida del producto para simular, predecir y optimizar el producto y el sistema de producción, antes de invertir en prototipos y activos físicos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Creación de curvas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Panel de herramientas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comandos de curvas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Herramientas de curvas derivadas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Creación de superficies en forma libre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Panel de comandos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Comandos de superficie',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Operaciones con superficies',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Renderización de formas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'd3plus. (2018, julio 16). Tutorial Básico introductorio a modelado CAD NX 10 [Video]. YouTube. ',
      link: 'https://youtu.be/iGTENoC7ryg',
    },
    {
      referencia:
        'Dep Fab Mecánica Marianao. (2019, noviembre 20). NX Curso <i>drawing</i> y acotado FMC0 M01 [Video]. YouTube. ',
      link: 'https://youtu.be/pFcMlBL5Ps0',
    },
    {
      referencia:
        'Joyanes, L. (2017). Industria 4.0 La Cuarta Revolución Industrial. Marcombo. ',
    },
    {
      referencia:
        'Leu, M., Tao, W., Ghazanfari, A. y Kolan, K. (2019). NX 12 <i>for Engineering Design. Missouri University of Science and Technology</i>. ',
      link: 'https://www.academia.edu/37546347/NX_12_for_Engineering_Design',
    },
    {
      referencia:
        'Lui, A. [Inge Lui]. (2020). Unidad 2 Ensambles utilizando NX [Video]. YouTube. ',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      referencia:
        'Mundo tutorial/Tutorial <i>world</i>. (2017, octubre 10). Siemens NX. Pieza 3D. Tutorial [Video]. YouTube. ',
      link: 'https://youtu.be/UeJ1Yegal9E',
    },
    {
      referencia: 'Siemens. (s. f.). Formación NX CAD básico. ',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      referencia:
        'Siemens. (2020). Documentación didáctica para cursos de formación. ',
      link:
        'https://www.automation.siemens.com/sce-static/learning-training-documents/tia-portal/digital-twin/sce-150-004-mcd-tia-com-digital-twin-at-education-static-model-nx-hs-darmstadt-1219-es.pdf',
    },
    {
      referencia:
        'Tickoo, S. (2018). Siemens NX 12.0 <i>for Designers</i>. CADCIM <i>Technologies</i>. ',
    },
  ],
  glosario: [
    {
      termino: 'CAD/CAM',
      significado:
        'es la integración del diseño asistido por ordenador y el <i>software</i> de fabricación asistido por ordenador, con el objetivo de obtener una gestión sencilla de los cambios del diseño, una concepción del diseño simultánea y una configuración del proceso de fabricación flexible, especialmente para el diseño y la fabricación de prototipos y de piezas acabadas.',
    },
    {
      termino: 'CAD',
      significado:
        'El diseño asistido por ordenador (CAD, por sus siglas en inglés) consiste en el uso de programas de ordenador para crear, modificar, analizar y documentar representaciones gráficas en 2D o 3D de objetos físicos.',
    },
    {
      termino: 'Gemelo digital',
      significado:
        'Un gemelo digital es una representación virtual de un producto o proceso físico, que se utiliza para comprender y predecir las características de rendimiento de su equivalente físico. Los gemelos digitales se utilizan a lo largo de todo el ciclo de vida del producto, para simular, predecir y optimizar el producto y el sistema de producción, antes de invertir en prototipos y activos físicos.',
    },
    {
      termino: 'NX',
      significado:
        'El <i>software</i> NX es una solución integrada de diseño, ingeniería y fabricación de productos, que ayuda a ofrecer productos innovadores, de forma más rápida y eficiente.',
    },
    {
      termino: 'Punto',
      significado:
        'Con este comando, se pueden generar puntos en el espacio en forma libre, de acuerdo con la ubicación del cursor, o partir de geometría existente, de acuerdo con las opciones que se muestran en el cuadro de diálogo.',
    },
    {
      termino: 'Arco/círculo',
      significado:
        'Este comando crea un arco a partir de un plano de referencia, a través de tres puntos o por medio de geometría existente.',
    },
    {
      termino: 'Curva desfasada',
      significado:
        'Crea una curva equidistante a otra, sobre el mismo plano, a una distancia específica.',
    },
    {
      termino: 'Superficie desplazada',
      significado:
        'Crea una superficie equidistante a una existente, permitiendo ajustar el valor del desplazamiento.',
    },
    {
      termino: 'Proyectar la curva',
      significado:
        'El comando crea una curva sobre una superficie a partir de la selección de un croquis en 2D que se encuentra en un plano o una curva en el espacio.',
    },
    {
      termino: 'Coser',
      significado:
        'Este comando permite unir dos o más superficies en una sola.',
    },
    {
      termino: 'Redondeo de cara',
      significado:
        'Genera un redondeo entre dos o más superficies, o en la arista de dos superficies combinadas, permitiendo mayor control y libertad en la configuración del redondeo.',
    },
    {
      termino: 'Engrosar',
      significado:
        'Con esta herramienta se puede generar un espesor a partir de la selección de una superficie, creando un cuerpo sólido.',
    },
    {
      termino: 'Materiales de objetosar',
      significado:
        'Esta herramienta permite asignar materiales a cada una de las superficies o sólidos de un modelo digital.',
    },
    {
      termino: 'Iluminación de la escena',
      significado: 'Permite ajustar la iluminación de la escena actual.',
    },
  ],
  complementario: [
    {
      texto:
        'Tickoo, S. (2018). Siemens NX 12.0 <i>for Designers</i>. CADCIM <i>Technologies</i>.',
      tipo: 'Libro',
      link:
        'https://www.academia.edu/44135303/Siemens_NX_12_0_for_Designers_11th_Edition_Sham_tickoo',
    },
    {
      texto: 'Siemens. (s. f.). Formación NX CAD básico.',
      tipo: 'Capítulo de libro',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      texto:
        'Leu, M., Tao, W., Ghazanfari, A. y Kolan, K. (2019). NX 12 <i>for Engineering Design. Missouri University of Science and Technology</i>.',
      tipo: 'Capítulo de libro',
      link:
        'https://me5763.github.io/lab/assets/books/NX-12-for-Engineering-Design.pdf',
    },
    {
      texto:
        'd3plus. (2018, julio 16). Tutorial Básico introductorio a modelado CAD NX 10 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/iGTENoC7ryg',
    },
    {
      texto:
        'Lui, A. [Inge Lui]. (2020). Unidad 2 Ensambles utilizando NX [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      texto:
        'Dep Fab Mecánica Marianao. (2019, noviembre 20). NX Curso <i>drawing</i> y acotado FMC0 M01 [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/pFcMlBL5Ps0',
    },
    {
      texto:
        'Mundo tutorial/Tutorial <i>world</i>. (2017, octubre 10). Siemens NX. Pieza 3D. Tutorial [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/UeJ1Yegal9E',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Riveros',
        cargo: 'Experto temático',
        centro: 'Centro Diseño y Metrología',
      },
      {
        nombre: 'José Eduardo Chaves Peña',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Carlos Andrés Ossa Jiménez',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
