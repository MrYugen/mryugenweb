export interface WebSection {
  title: string;
  text: string;
  image: string;
}

// Opcionales para el nuevo wireframe
export interface TechItem { label: string; value: string; }
export interface TechSection { image: string; items: TechItem[]; }
export interface RepoSection { text: string; url?: string; }
export interface LogicPoint { text: string; image?: string; align?: 'left' | 'right'; }
export interface LogicSection { subtitle?: string; points: LogicPoint[]; }
export interface ImpactSection { text: string; ctaLabel: string; ctaLink: string; }

export interface WebProject {
  slug: string;
  title: string;
  heroBgLight: string;
  heroBgDark: string;
  overview: string;
  sections: WebSection[]; // fallback para proyectos antiguos
  tech?: TechSection;
  repo?: RepoSection;
  logic?: LogicSection;
  featuredImage?: string;
  impact?: ImpactSection;
}

export const WEB_PROJECTS: WebProject[] = [
  {
    slug: 'estevez-asesores',
    title: 'Estevez Asesores - Consultoría y Asesoría Legal',
    heroBgLight: '/assets/images/proyecto1_img1.jpg',
    heroBgDark: '/assets/images/proyecto1_img2.jpg',
    // INTRODUCCIÓN (wireframe)
    overview:
      'Estevez Asesores es un proyecto de consultoría y asesoría legal que busca ofrecer soluciones personalizadas a sus clientes. A través de un enfoque centrado en el cliente y un profundo conocimiento del marco legal, Estevez Asesores se posiciona como un aliado estratégico en la toma de decisiones.',
    // Nuevo diseño para este proyecto
    tech: {
      image: '/assets/images/portfolio_web.png',
      items: [
        {
          label: 'Framework & Lenguaje',
          value: 'Angular 17 con TypeScript, arquitectura SPA para front-end.'
        },
        {
          label: 'Estilos y Maquetación',
          value: 'Tailwind CSS para los estilos (utilizando dark mode por clase CSS).'
        },
        {
          label: 'Animaciones',
          value: 'GSAP (GreenSock) y Framer Motion para efectos interactivos fluidos.'
        },
        {
          label: 'Pruebas',
          value: 'Jasmine como framework de testing con ejecutor Karma.'
        },
        {
          label: 'Herramientas',
          value: 'Visual Studio Code como IDE, control de versiones con Git y repositorio en GitHub.'
        }
      ]
    },
    repo: {
      text:
        'Te invito a visitar el repositorio de Mr. Yugen Web en GitHub, donde encontrarás todo el proyecto abierto al público. Allí dispongo el paso a paso del desarrollo, con un README completo que documenta las características, instrucciones de instalación y una galería de capturas de la web. Explorando el repositorio podrás seguir cómo fue construido este sitio desde cero, revisar cada componente, y ver en acción las decisiones de diseño y código. ¡No dudes en curiosear y, si te animas, contribuir o dar feedback!'
      // url: 'https://github.com/...' // Añade aquí la URL real del repo cuando la tengas
    },
    logic: {
      subtitle: 'Aspectos clave de la construcción del sitio',
      points: [
        {
          text:
            'Desarrollé la aplicación como una Single Page Application (SPA) con Angular 17 y TypeScript, lo que permite transiciones fluidas entre secciones sin recargar la página. La navegación interna utiliza el router de Angular con restauración de scroll, de forma que al cambiar de sección el usuario no pierde la posición de lectura.',
          image: '/assets/images/proyecto1_img1.jpg',
          align: 'left'
        },
        {
          text:
            'Implementé un sistema de tema claro/oscuro persistente: un servicio personalizado guarda la preferencia del usuario y aplica variables CSS dinámicamente. De este modo, el sitio recordará el modo escogido incluso al volver más tarde, brindando una experiencia personalizada.',
          image: '/assets/images/proyecto1_img2.jpg',
          align: 'right'
        },
        {
          text:
            'Integré animaciones suaves y dinámicas usando librerías GSAP y Framer Motion. Estos efectos dan vida a la interfaz (por ejemplo, animaciones al hacer scroll o transiciones entre páginas) haciendo la experiencia más interactiva y atractiva, sin sacrificar rendimiento.',
          image: '/assets/images/proyecto1_img3.jpg',
          align: 'left'
        },
        {
          text:
            'El diseño es 100% responsive. Utilicé Tailwind CSS para agilizar estilos y adaptaciones; el menú de navegación y todos los layouts funcionan igual de bien en monitores grandes, tabletas o pantallas móviles. Probé múltiples resoluciones para garantizar que el contenido se vea siempre bien organizado.',
          image: '/assets/images/portfolio_web2.png',
          align: 'right'
        },
        {
          text:
            'Seguí buenas prácticas de accesibilidad web: el HTML del sitio es semántico, empleando las etiquetas correctas para cada sección; añadí atributos ARIA cuando fue pertinente y cuidé los contrastes de color y tamaños de letra para asegurar la legibilidad. Cualquier persona, independientemente de sus capacidades o dispositivo, puede navegar cómodamente.',
          image: '/assets/images/portfolio_web3.png',
          align: 'left'
        },
        {
          text:
            'Apliqué optimizaciones de rendimiento, como la carga diferida de imágenes (lazy loading) para que las páginas se carguen rápido sin perjudicar al navegador. Solo se cargan las imágenes cuando van a ser vistas, lo que hace la experiencia más ligera. Para mantener la calidad del código, incluí pruebas unitarias con Jasmine y Karma. Estas pruebas automatizadas verifican componentes clave, evitando regresiones cuando el proyecto evoluciona. El proyecto está configurado para ejecutar estos tests fácilmente, lo que refuerza un estándar de desarrollo profesional.',
          image: '/assets/images/automatizacion/carousel_portada.jpg',
          align: 'right'
        }
      ]
    },
    featuredImage: '/assets/images/automatizacion_background.jpg',
    impact: {
      text:
        'El lanzamiento de Mr. Yugen Web es un antes y un después en mi presencia en línea. Ahora cuento con un portal unificado donde clientes, reclutadores o colaboradores pueden explorar fácilmente todo mi perfil creativo-técnico: desde ver mi experiencia y habilidades, hasta navegar por proyectos destacados de branding, ilustración y desarrollo web, o leer artículos de mi blog. El sitio ha recibido comentarios positivos por su diseño atractivo y la fluidez de la experiencia de usuario, validando el esfuerzo invertido en los detalles como el modo oscuro, los cambios de imágenes en Heros y las animaciones sutiles.\n\nEn términos de impacto técnico, este proyecto me permitió consolidar conocimientos y adoptar buenas prácticas. Al ser completamente open source, Mr. Yugen Web también sirve de ejemplo a la comunidad: otros desarrolladores pueden revisar el código, aprender del enfoque utilizado e incluso proponer mejoras. Para mí, el mayor logro es haber creado una herramienta viva que puedo actualizar y mejorar con el tiempo, y que demuestra de forma tangible cómo convergen mis habilidades de diseño gráfico y desarrollo web en un solo producto.',
      ctaLabel: 'Hablemos de tu web',
      ctaLink: '/#contact'
    },
    // sections se mantiene vacío para este nuevo diseño
    sections: []
  },
  {
    slug: 'mr-yugen',
    title: 'Mr. Yugen - CV, Portfolio, Blog y Servicios Web',
    heroBgLight: '/assets/images/proyecto1_img1.jpg',
    heroBgDark: '/assets/images/proyecto1_img2.jpg',
    // INTRODUCCIÓN (wireframe)
    overview:
      'Mr. Yugen Web es mi proyecto personal insignia: un sitio web portfolio creado desde cero utilizando mis conocimientos y con ayuda de Vibe Coding. En esta web reúno todo lo que soy y lo que ofrezco —desde mis servicios y blog hasta una vitrina de proyectos de diseño e ilustración—, integrando cada sección en una experiencia única. El objetivo central fue construir una plataforma propia, moderna y atractiva, que sirviera como carta de presentación profesional y demostrara en la práctica mis conocimientos de diseño y desarrollo web.',
    // Nuevo diseño para este proyecto
    tech: {
      image: '/assets/images/web/yugenweb_tech.jpg',
      items: [
        {
          label: 'Framework & Lenguaje',
          value: 'Angular 17 con TypeScript, arquitectura SPA para front-end.'
        },
        {
          label: 'Estilos y Maquetación',
          value: 'Tailwind CSS para los estilos (utilizando dark mode por clase CSS).'
        },
        {
          label: 'Animaciones',
          value: 'GSAP (GreenSock) y Framer Motion para efectos interactivos fluidos.'
        },
        {
          label: 'Pruebas',
          value: 'Jasmine como framework de testing con ejecutor Karma.'
        },
        {
          label: 'Herramientas',
          value: 'Visual Studio Code como IDE, control de versiones con Git y repositorio en GitHub.'
        }
      ]
    },
    repo: {
      text:
        'Te invito a visitar el repositorio de Mr. Yugen Web en GitHub, donde encontrarás todo el proyecto abierto al público. Allí dispongo el paso a paso del desarrollo, con un README completo que documenta las características, instrucciones de instalación y una galería de capturas de la web. Explorando el repositorio podrás seguir cómo fue construido este sitio desde cero, revisar cada componente, y ver en acción las decisiones de diseño y código. ¡No dudes en curiosear y, si te animas, contribuir o dar feedback! ',
        url: 'https://github.com/MrYugen/mryugenweb' 
    },
    logic: {
      subtitle: 'Aspectos clave de la construcción del sitio',
      points: [
        {
          text:
            'Desarrollé la aplicación como una Single Page Application (SPA) con Angular 17 y TypeScript, lo que permite transiciones fluidas entre secciones sin recargar la página. La navegación interna utiliza el router de Angular con restauración de scroll, de forma que al cambiar de sección el usuario no pierde la posición de lectura.',
          image: '/assets/images/web/mryugenweb_img1.jpg',
          align: 'left'
        },
        {
          text:
            'Implementé un sistema de tema claro/oscuro persistente: un servicio personalizado guarda la preferencia del usuario y aplica variables CSS dinámicamente. De este modo, el sitio recordará el modo escogido incluso al volver más tarde, brindando una experiencia personalizada.',
          image: '/assets/images/web/mryugenweb_vid1.mp4',
          align: 'right'
        },
        {
          text:
            'Integré animaciones suaves y dinámicas usando librerías GSAP y Framer Motion. Estos efectos dan vida a la interfaz (por ejemplo, animaciones al hacer scroll o transiciones entre páginas) haciendo la experiencia más interactiva y atractiva, sin sacrificar rendimiento.',
          image: '/assets/images/web/mryugenweb_vid2.mp4',
          align: 'left'
        },
        {
          text:
            'El diseño es 100% responsive. Utilicé Tailwind CSS para agilizar estilos y adaptaciones; el menú de navegación y todos los layouts funcionan igual de bien en monitores grandes, tabletas o pantallas móviles. Probé múltiples resoluciones para garantizar que el contenido se vea siempre bien organizado.',
          image: '/assets/images/web/mryugenweb_img2.jpg',
          align: 'right'
        },
        {
          text:
            'Seguí buenas prácticas de accesibilidad web: el HTML del sitio es semántico, empleando las etiquetas correctas para cada sección; añadí atributos ARIA cuando fue pertinente y cuidé los contrastes de color y tamaños de letra para asegurar la legibilidad. Cualquier persona, independientemente de sus capacidades o dispositivo, puede navegar cómodamente.',
          image: '/assets/images/web/mryugenweb_img3.jpg',
          align: 'left'
        },
        {
          text:
            'Apliqué optimizaciones de rendimiento, como la carga diferida de imágenes (lazy loading) para que las páginas se carguen rápido sin perjudicar al navegador. Solo se cargan las imágenes cuando van a ser vistas, lo que hace la experiencia más ligera. Para mantener la calidad del código, incluí pruebas unitarias con Jasmine y Karma. Estas pruebas automatizadas verifican componentes clave, evitando regresiones cuando el proyecto evoluciona. El proyecto está configurado para ejecutar estos tests fácilmente, lo que refuerza un estándar de desarrollo profesional.',
          image: '/assets/images/web/mryugenweb_vid3.mp4',
          align: 'right'
        }
      ]
    },
    featuredImage: '/assets/images/web/mryugenweb_img4.jpg',
    impact: {
      text:
        'El lanzamiento de Mr. Yugen Web es un antes y un después en mi presencia en línea. Ahora cuento con un portal unificado donde clientes, reclutadores o colaboradores pueden explorar fácilmente todo mi perfil creativo-técnico: desde ver mi experiencia y habilidades, hasta navegar por proyectos destacados de branding, ilustración y desarrollo web, o leer artículos de mi blog. El sitio ha recibido comentarios positivos por su diseño atractivo y la fluidez de la experiencia de usuario, validando el esfuerzo invertido en los detalles como el modo oscuro, los cambios de imágenes en Heros y las animaciones sutiles.\n\nEn términos de impacto técnico, este proyecto me permitió consolidar conocimientos y adoptar buenas prácticas. Al ser completamente open source, Mr. Yugen Web también sirve de ejemplo a la comunidad: otros desarrolladores pueden revisar el código, aprender del enfoque utilizado e incluso proponer mejoras. Para mí, el mayor logro es haber creado una herramienta viva que puedo actualizar y mejorar con el tiempo, y que demuestra de forma tangible cómo convergen mis habilidades de diseño gráfico y desarrollo web en un solo producto.',
      ctaLabel: 'Hablemos de tu web',
      ctaLink: '/#contact'
    },
    // sections se mantiene vacío para este nuevo diseño
    sections: []
  },
  {
    slug: 'couple-clash',
    title: 'Mr. Yugen - CV, Portfolio, Blog y Servicios Web',
    heroBgLight: '/assets/images/proyecto1_img1.jpg',
    heroBgDark: '/assets/images/proyecto1_img2.jpg',
    // INTRODUCCIÓN (wireframe)
    overview:
      'Mr. Yugen Web es mi proyecto personal insignia: un sitio web portfolio creado desde cero utilizando mis conocimientos y con ayuda de Vibe Coding. En esta web reúno todo lo que soy y lo que ofrezco —desde mis servicios y blog hasta una vitrina de proyectos de diseño e ilustración—, integrando cada sección en una experiencia única. El objetivo central fue construir una plataforma propia, moderna y atractiva, que sirviera como carta de presentación profesional y demostrara en la práctica mis conocimientos de diseño y desarrollo web.',
    // Nuevo diseño para este proyecto
    tech: {
      image: '/assets/images/portfolio_web.png',
      items: [
        {
          label: 'Framework & Lenguaje',
          value: 'Angular 17 con TypeScript, arquitectura SPA para front-end.'
        },
        {
          label: 'Estilos y Maquetación',
          value: 'Tailwind CSS para los estilos (utilizando dark mode por clase CSS).'
        },
        {
          label: 'Animaciones',
          value: 'GSAP (GreenSock) y Framer Motion para efectos interactivos fluidos.'
        },
        {
          label: 'Pruebas',
          value: 'Jasmine como framework de testing con ejecutor Karma.'
        },
        {
          label: 'Herramientas',
          value: 'Visual Studio Code como IDE, control de versiones con Git y repositorio en GitHub.'
        }
      ]
    },
    repo: {
      text:
        'Te invito a visitar el repositorio de Mr. Yugen Web en GitHub, donde encontrarás todo el proyecto abierto al público. Allí dispongo el paso a paso del desarrollo, con un README completo que documenta las características, instrucciones de instalación y una galería de capturas de la web. Explorando el repositorio podrás seguir cómo fue construido este sitio desde cero, revisar cada componente, y ver en acción las decisiones de diseño y código. ¡No dudes en curiosear y, si te animas, contribuir o dar feedback!'
      // url: 'https://github.com/...' // Añade aquí la URL real del repo cuando la tengas
    },
    logic: {
      subtitle: 'Aspectos clave de la construcción del sitio',
      points: [
        {
          text:
            'Desarrollé la aplicación como una Single Page Application (SPA) con Angular 17 y TypeScript, lo que permite transiciones fluidas entre secciones sin recargar la página. La navegación interna utiliza el router de Angular con restauración de scroll, de forma que al cambiar de sección el usuario no pierde la posición de lectura.',
          image: '/assets/images/proyecto1_img1.jpg',
          align: 'left'
        },
        {
          text:
            'Implementé un sistema de tema claro/oscuro persistente: un servicio personalizado guarda la preferencia del usuario y aplica variables CSS dinámicamente. De este modo, el sitio recordará el modo escogido incluso al volver más tarde, brindando una experiencia personalizada.',
          image: '/assets/images/proyecto1_img2.jpg',
          align: 'right'
        },
        {
          text:
            'Integré animaciones suaves y dinámicas usando librerías GSAP y Framer Motion. Estos efectos dan vida a la interfaz (por ejemplo, animaciones al hacer scroll o transiciones entre páginas) haciendo la experiencia más interactiva y atractiva, sin sacrificar rendimiento.',
          image: '/assets/images/proyecto1_img3.jpg',
          align: 'left'
        },
        {
          text:
            'El diseño es 100% responsive. Utilicé Tailwind CSS para agilizar estilos y adaptaciones; el menú de navegación y todos los layouts funcionan igual de bien en monitores grandes, tabletas o pantallas móviles. Probé múltiples resoluciones para garantizar que el contenido se vea siempre bien organizado.',
          image: '/assets/images/portfolio_web2.png',
          align: 'right'
        },
        {
          text:
            'Seguí buenas prácticas de accesibilidad web: el HTML del sitio es semántico, empleando las etiquetas correctas para cada sección; añadí atributos ARIA cuando fue pertinente y cuidé los contrastes de color y tamaños de letra para asegurar la legibilidad. Cualquier persona, independientemente de sus capacidades o dispositivo, puede navegar cómodamente.',
          image: '/assets/images/portfolio_web3.png',
          align: 'left'
        },
        {
          text:
            'Apliqué optimizaciones de rendimiento, como la carga diferida de imágenes (lazy loading) para que las páginas se carguen rápido sin perjudicar al navegador. Solo se cargan las imágenes cuando van a ser vistas, lo que hace la experiencia más ligera. Para mantener la calidad del código, incluí pruebas unitarias con Jasmine y Karma. Estas pruebas automatizadas verifican componentes clave, evitando regresiones cuando el proyecto evoluciona. El proyecto está configurado para ejecutar estos tests fácilmente, lo que refuerza un estándar de desarrollo profesional.',
          image: '/assets/images/automatizacion/carousel_portada.jpg',
          align: 'right'
        }
      ]
    },
    featuredImage: '/assets/images/automatizacion_background.jpg',
    impact: {
      text:
        'El lanzamiento de Mr. Yugen Web es un antes y un después en mi presencia en línea. Ahora cuento con un portal unificado donde clientes, reclutadores o colaboradores pueden explorar fácilmente todo mi perfil creativo-técnico: desde ver mi experiencia y habilidades, hasta navegar por proyectos destacados de branding, ilustración y desarrollo web, o leer artículos de mi blog. El sitio ha recibido comentarios positivos por su diseño atractivo y la fluidez de la experiencia de usuario, validando el esfuerzo invertido en los detalles como el modo oscuro, los cambios de imágenes en Heros y las animaciones sutiles.\n\nEn términos de impacto técnico, este proyecto me permitió consolidar conocimientos y adoptar buenas prácticas. Al ser completamente open source, Mr. Yugen Web también sirve de ejemplo a la comunidad: otros desarrolladores pueden revisar el código, aprender del enfoque utilizado e incluso proponer mejoras. Para mí, el mayor logro es haber creado una herramienta viva que puedo actualizar y mejorar con el tiempo, y que demuestra de forma tangible cómo convergen mis habilidades de diseño gráfico y desarrollo web en un solo producto.',
      ctaLabel: 'Hablemos de tu web',
      ctaLink: '/#contact'
    },
    // sections se mantiene vacío para este nuevo diseño
    sections: []
  }
];

