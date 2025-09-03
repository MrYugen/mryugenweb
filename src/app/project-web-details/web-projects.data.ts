export interface WebSection {
  title: string;
  text: string;
  image: string;
}

export interface WebProject {
  slug: string;
  title: string;
  heroBgLight: string;
  heroBgDark: string;
  overview: string;
  sections: WebSection[];
}

export const WEB_PROJECTS: WebProject[] = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    heroBgLight: '/assets/images/portfolio_web.png',
    heroBgDark: '/assets/images/portfolio_web2.png',
    overview: 'Proyecto web corporativo con un diseño limpio y funcional orientado a la conversión.',
    sections: [
      {
        title: 'Planificación',
        text: 'Análisis de requisitos, definición del mapa del sitio y selección de tecnologías adecuadas.',
        image: '/assets/images/portfolio_web.png'
      },
      {
        title: 'Diseño',
        text: 'Creación de wireframes, prototipos y diseño visual responsive centrado en el usuario.',
        image: '/assets/images/portfolio_web2.png'
      },
      {
        title: 'Desarrollo',
        text: 'Implementación del sitio utilizando prácticas modernas de desarrollo y optimización.',
        image: '/assets/images/portfolio_web3.png'
      }
    ]
  },
  {
    slug: 'project-beta',
    title: 'Project Beta',
    heroBgLight: '/assets/images/proyecto1_img1.jpg',
    heroBgDark: '/assets/images/proyecto1_img2.jpg',
    overview: 'Landing page dinámica enfocada en la captación de clientes potenciales.',
    sections: [
      {
        title: 'Planificación',
        text: 'Definición de objetivos, contenido y estrategia SEO inicial.',
        image: '/assets/images/proyecto1_img1.jpg'
      },
      {
        title: 'Diseño',
        text: 'Diseño visual atractivo alineado con la identidad de la marca.',
        image: '/assets/images/proyecto1_img2.jpg'
      },
      {
        title: 'Desarrollo',
        text: 'Construcción del sitio con tiempos de carga optimizados y animaciones ligeras.',
        image: '/assets/images/proyecto1_img3.jpg'
      }
    ]
  },
  {
    slug: 'project-gamma',
    title: 'Project Gamma',
    heroBgLight: '/assets/images/proyecto2_img1.jpg',
    heroBgDark: '/assets/images/proyecto2_img2.jpg',
    overview: 'Plataforma web administrable con panel de control personalizado.',
    sections: [
      {
        title: 'Planificación',
        text: 'Arquitectura de la información y definición de roles de usuario.',
        image: '/assets/images/proyecto2_img1.jpg'
      },
      {
        title: 'Diseño',
        text: 'Prototipado de interfaces y selección de un diseño modular.',
        image: '/assets/images/proyecto2_img2.jpg'
      },
      {
        title: 'Desarrollo',
        text: 'Integración de funcionalidades, pruebas y despliegue.',
        image: '/assets/images/proyecto2_img3.jpg'
      }
    ]
  }
];