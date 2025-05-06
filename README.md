# MrYugenWeb

**mr-yugen-web** es la página web y portafolio profesional de **Mr. Yugen** (Miguel Estévez):  
un diseñador gráfico, ilustrador profesional y programador en ciernes que adora la creatividad y trabajar en nuevas experiencias interactivas.  
Aquí encontrarás mi CV digital, todo sobre mi nuevo juego de mesa Couple Clash, portfolio de proyectos realizados, blog de tutoriales y experiencias personales y mis servicios de automatización.

Este es mi primer proyecto personal usando tecnologías como Angular y TypeScript, intentare hacerlo lo mejor posible, aunque es probable que cometa fallos por el camino. A programar se aprende programando. Espero que lo que encuentres aquí te pueda ayudar y toda sugerencia desde el respeto es bienvenida.

Espero que te guste el contenido de mi web e incluso podamos trabajar juntos en el futuro. 

Un saludo

---

## 📋 Tabla de Contenidos

- [MrYugenWeb](#mryugenweb)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎥 Demo](#-demo)
  - [✨ Características](#-características)
  - [🛠 Tecnologías](#-tecnologías)
  - [📂 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🚀 Instalación y Desarrollo](#-instalación-y-desarrollo)
  - [🖥 Comandos Útiles](#-comandos-útiles)
  - [🤝 Contribución](#-contribución)
  - [📄 Licencia](#-licencia)
  - [✍️ Autor y Contacto](#️-autor-y-contacto)

---

## 🎥 Demo

> Capturas de pantalla (añade tus imágenes en `docs/screenshots/`)
![Mr. Yugen Logo](docs/screenshots/home-light.png) 
![Couple Clash Logo](docs/screenshots/home-light.png) 
![Home – Modo Claro - Próximamente](docs/screenshots/home-light.png)  
![Home – Modo Oscuro - Próximamente](docs/screenshots/home-dark.png)  

---

## ✨ Características

- **Página Home** con hero, sección “¿Quién es Mr. Yugen?”, skills, portfolio, blog, servicios y contacto.  
- **Modo claro/oscuro** persistente (ThemeService + CSS variables).  
- **Animaciones suaves** con GSAP y Framer Motion (próximamente).  
- **Responsive** 100% (menú desktop / menú mobile fullscreen).  
- **SEO & accesibilidad**: semántica HTML, meta tags, formularios accesibles.  

---

## 🛠 Tecnologías

- **Frontend**: Angular 17 + TypeScript  
- **Estilos**: Tailwind CSS (darkMode por clase)  
- **Animaciones**: GSAP, Framer Motion  
- **Herramientas**: VS Code, Git, GitHub  

---

## 📂 Estructura del Proyecto

mryugenweb/
├── README.md
├── package.json
├── angular.json
├── tailwind.config.js
├── tsconfig.json
├── src/
│ ├── index.html
│ ├── styles.css
│ ├── assets/
│ │ ├── images/
│ │ │ ├── logo.svg
│ │ │ ├── profile.png
│ │ │ └── contact-illustration.svg
│ │ └── media/
│ └── app/
│ ├── app.component.html ← <router-outlet>
│ ├── app.component.ts
│ ├── app.routes.ts
│ ├── app.config.ts
│ ├── home/
│ │ ├── home.component.ts
│ │ ├── home.component.html
│ │ └── home.component.css
│ └── services/
│ └── theme.service.ts
└── docs/
└── screenshots/
├── home-light.png
└── home-dark.png

---

## 🚀 Instalación y Desarrollo

1. **Clonar** el repositorio  
   ```bash
   git clone https://github.com/MrYugen/mryugenweb.git
   cd mryugenweb

2. **Instalar** dependencias
   npm install

3. **Iniciar** servidor de desarrollo
   npm start

4. **Abrir** en el navegador: http://localhost:4200

---

## 🖥 Comandos Útiles

npm start → servidor dev

npm run build → compilación producción

npm test → ejecutar tests (cuando los añadas)

---

## 🤝 Contribución

1. Haz un fork del proyecto.

2. Crea una rama (git checkout -b feature/mi-nueva-funcionalidad).

3. Haz tus cambios y commit (git commit -m "feat: descripción breve").

4. git push origin feature/mi-nueva-funcionalidad.

5. Abre un Pull Request describiendo tu aportación.

---

## 📄 Licencia

Este proyecto y todo su contenido están protegidos por derechos de autor © 2025 Mr. Yugen.

**Licencia**: Creative Commons BY-NC-SA 4.0  
[Consulta los términos aquí](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es).

Esto significa que puedes compartir, adaptar o copiar este proyecto **siempre que**:

- Me atribuyas como autor original (Mr. Yugen).
- No lo uses con fines comerciales.
- Si modificas o creas a partir de este contenido, debes compartir bajo esta misma licencia.

Para usos diferentes, contáctame directamente: `mryugenmystery@gmail.com`

---

## ✍️ Autor y Contacto

Mr. Yugen (Miguel Estévez)

GitHub: @MrYugen

Email: mryugenmystery@gmail.com