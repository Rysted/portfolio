// Icons
import {
  LinkedIn,
  GitHub,
  Gmail,
  WhatsApp,
  Responsive,
  Optimization,
  Maintenance,
  ServicesIcon,
  BookCode,
} from "./Icons";

// Schema type
import { Schema } from "../data/Schema";

export const spanish: Schema = {
  selected: "spanish",
  home: {
    greeting: "¡Hola! Soy",
    name: "Rysted",
    profession: "Desarrollador Web Full Stack",
    description:
      "Creador de soluciones digitales para empresas y emprendedores.",
    socials: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/marcelo-sebastian-suarez",
        ariaLabel: "Ir a mi perfil de LinkedIn",
        icon: <LinkedIn />,
      },
      {
        title: "GitHub",
        url: "https://github.com/Rysted",
        ariaLabel: "Ir a mi perfil de GitHub",
        icon: <GitHub />,
      },
      {
        title: "Gmail",
        url: "mailto:rysted.dev@gmail.com",
        ariaLabel: "Enviar un correo a mi dirección de Gmail",
        icon: <Gmail />,
      },
      {
        title: "WhatsApp",
        url: "https://wa.me/+541157347309?text=Hola%20Rysted,%20me%20interesaría%20contratar%20tus%20servicios.%20%0A¿Podemos%20hablar%20más%20al%20respecto?",
        ariaLabel: "Enviar un mensaje a mi número de WhatsApp",
        icon: <WhatsApp />,
      },
    ],
  },
  header: {
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
    },
    navMenu: [
      {
        url: "home",
        text: "Inicio",
      },
      {
        url: "services",
        text: "Servicios",
      },
      {
        url: "projects",
        text: "Proyectos",
      },
      {
        url: "skills",
        text: "Habilidades",
      },
    ],
    themeMenu: {
      title: "Tema",
      light: "Claro",
      dark: "Oscuro",
    },
    languageMenu: {
      title: "Idioma",
      spanish: "Español",
      english: "Inglés",
    },
  },
  services: {
    icon: <ServicesIcon styles="w-8 h-8" colors={true} />,
    title: "Servicios",
    cards: [
      {
        icon: <Responsive />,
        title: "Diseño único y adaptable a todos los dispositivos",
        subTitle:
          "Creo sitios web únicos y flexibles, diseñados para destacar la identidad de tu marca.",
      },
      {
        icon: <Optimization />,
        title: "Optimización para motores de búsqueda (SEO)",
        subTitle:
          "Elevo tu presencia en línea mediante estrategias de SEO para aumentar tu visibilidad en internet.",
      },
      {
        icon: <Maintenance />,
        title: "Mantenimiento, soporte y soluciones personalizadas",
        subTitle:
          "Brindo servicios de mantenimiento, soporte técnico y soluciones personalizadas.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    cards: [
      {
        image: "newPortfolio.webp",
        title: "Portfolio",
        description:
          "Este es mi nuevo portafolio, aquí podrás encontrar una selección de mis proyectos más recientes y mi información de contacto.",
        tags: ["HTML", "React", "TypeScript", "Tailwind CSS"],
        code: "",
        demo: "https://rysted.netlify.app/",
      },
      {
        image: "moon.webp",
        title: "Moon - Backend",
        description:
          "Proyecto de backend que, aprovechando herramientas modernas, garantiza un rendimiento óptimo y una mayor seguridad.",
        tags: ["JavaScript", "Express", "MySQL", "Zod", "Multer"],
        code: "https://github.com/Rysted/Moon_backend",
        demo: "",
      },
      {
        image: "moon.webp",
        title: "Moon - Frontend",
        description:
          "Moon es un e-commerce de videojuegos, diseñado para ofrecer claves de videojuegos.",
        tags: ["HTML", "CSS", "JavaScript", "React", "React Router"],
        code: "https://github.com/Rysted/utn-moon-front",
        demo: "",
      },
      {
        image: "mouseReact.webp",
        title: "Mouse events",
        description:
          "Este proyecto de React+Vite presenta un controlador de mouse interactivo con animaciones y efectos visuales.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        code: "https://github.com/Rysted/mouse-events",
        demo: "https://mouse-react.netlify.app/",
      },
      {
        image: "mrcoffee.webp",
        title: "MrCoffee - MPA",
        description:
          "MrCoffee es un e-commerce de café y alimentos de alta calidad. Se ofrece la opción de pago en línea y recolección en tienda.",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Express",
          "BcryptJS",
          "Express-Validator",
          "EJS",
          "Multer",
          "Sequelize",
          "MySQL",
        ],
        code: "https://github.com/Rysted/grupo_5_MrCoffee",
        demo: "",
      },
      {
        image: "portfolioExample.webp",
        title: "Old portfolio",
        description:
          "Este repositorio contiene el código fuente de mi antiguo portafolio web. Aunque ya no está en uso, decidí mantener este repositorio como referencia y para compartir mi progreso a lo largo del tiempo.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        code: "https://github.com/Rysted/old-portfolio",
        demo: "https://stellular-creponne-a706db.netlify.app/",
      },
    ],
    button: {
      demoTitle: "Demo",
      codeTitle: "Código",
      showMore: "Mostrar más",
      noMoreResults: "No hay más resultados",
    },
  },
  skills: {
    icon: <BookCode styles="w-8 h-8" colors={true} />,
    title: "Habilidades",
    cards: [
      {
        title: "Lenguajes",
        skills: ["Typescript", "Javascript", "HTML", "CSS"],
      },
      {
        title: "Interfaz de usuario",
        skills: ["React", "TailwindCSS", "Bootstrap"],
      },
      {
        title: "Lado del servidor",
        skills: ["Node.js", "Express.js", "EJS", "Sequelize"],
      },
      { title: "Bases de datos", skills: ["MySQL"] },
      { title: "Diseño", skills: ["Figma", "Miro"] },
      {
        title: "Herramientas",
        skills: [
          "Postman",
          "phpMyAdmin",
          "Workbench",
          "Prepros",
          "Jira",
          "Trello",
          "Git",
          "Github",
        ],
      },
      { title: "Idiomas", skills: ["Inglés (lectura)", "Español (nativo)"] },
    ],
  },
  backToTop: {
    ariaLabel: "Ir al principio",
  },
  footer: {
    title: "© 2024 - Rysted",
    socials: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/marcelo-sebastian-suarez",
        ariaLabel: "Ir a mi perfil de LinkedIn",
        icon: (
          <LinkedIn
            hover={true}
            styles="w-16 h-16 md:w-8 md:h-8 fill-light_text"
          />
        ),
      },
      {
        title: "GitHub",
        url: "https://github.com/Rysted",
        ariaLabel: "Ir a mi perfil de GitHub",
        icon: (
          <GitHub
            hover={true}
            styles="w-16 h-16 md:w-8 md:h-8 fill-light_text"
          />
        ),
      },
    ],
  },
};

export const english = {
  selected: "english",
  home: {
    greeting: "Hello! I'm",
    name: "Rysted",
    profession: "Full Stack Web Developer",
    description:
      "Creator of digital solutions for companies and entrepreneurs.",
    socials: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/marcelo-sebastian-suarez",
        ariaLabel: "Go to my LinkedIn profile",
        icon: <LinkedIn />,
      },
      {
        title: "GitHub",
        url: "https://github.com/Rysted",
        ariaLabel: "Go to my GitHub profile",
        icon: <GitHub />,
      },
      {
        title: "Gmail",
        url: "mailto:rysted.dev@gmail.com",
        ariaLabel: "Send an email to my Gmail address",
        icon: <Gmail />,
      },
      {
        title: "WhatsApp",
        url: "https://wa.me/+541157347309?text=Hello%20Rysted,%20I%20would%20be%20interested%20in%20hiring%20your%20services.%20%0ACan%20we%20talk%20more%20about%20it?",
        ariaLabel: "Send a message to my WhatsApp number",
        icon: <WhatsApp />,
      },
    ],
  },
  header: {
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    navMenu: [
      {
        url: "home",
        text: "Home",
      },
      {
        url: "services",
        text: "Services",
      },
      {
        url: "projects",
        text: "Projects",
      },
      {
        url: "skills",
        text: "Skills",
      },
    ],
    themeMenu: {
      title: "Theme",
      light: "Light",
      dark: "Dark",
    },
    languageMenu: {
      title: "Language",
      spanish: "Spanish",
      english: "English",
    },
  },
  services: {
    icon: <ServicesIcon styles="w-8 h-8" colors={true} />,
    title: "Services",
    cards: [
      {
        icon: <Responsive />,
        title: "Unique and adaptable design for all devices",
        subTitle:
          "I create unique and flexible websites, designed to highlight your brand's identity.",
      },
      {
        icon: <Optimization />,
        title: "Search Engine Optimization (SEO)",
        subTitle:
          "I increase your online presence through SEO strategies to increase your visibility on the internet.",
      },
      {
        icon: <Maintenance />,
        title: "Maintenance, support and custom solutions",
        subTitle:
          "I provide maintenance, technical support and custom solutions.",
      },
    ],
  },
  projects: {
    title: "Projects",
    cards: [
      {
        image: "newPortfolio.webp",
        title: "Portfolio",
        description:
          "This is my new portfolio, here you can find a selection of my most recent projects and my contact information.",
        tags: ["HTML", "React", "TypeScript", "Tailwind CSS"],
        code: "",
        demo: "https://rysted.netlify.app/",
      },
      {
        image: "moon.webp",
        title: "Moon - Backend",
        description:
          "Backend project that, taking advantage of modern tools, ensures optimal performance and greater security.",
        tags: ["JavaScript", "Express", "MySQL", "Zod", "Multer"],
        code: "https://github.com/Rysted/Moon_backend",
        demo: "",
      },
      {
        image: "moon.webp",
        title: "Moon - Frontend",
        description:
          "Moon is a video game e-commerce, designed to offer video game keys.",
        tags: ["HTML", "CSS", "JavaScript", "React", "React Router"],
        code: "https://github.com/Rysted/utn-moon-front",
        demo: "",
      },
      {
        image: "mouseReact.webp",
        title: "Mouse events",
        description:
          "This React+Vite project presents an interactive mouse controller with animations and visual effects.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        code: "https://github.com/Rysted/mouse-events",
        demo: "https://mouse-react.netlify.app/",
      },
      {
        image: "mrcoffee.webp",
        title: "MrCoffee - MPA",
        description:
          "MrCoffee is a high-quality coffee and food e-commerce. The option of online payment and in-store pickup is offered.",
        tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Express",
          "BcryptJS",
          "Express-Validator",
          "EJS",
          "Multer",
          "Sequelize",
          "MySQL",
        ],
        code: "https://github.com/Rysted/grupo_5_MrCoffee",
        demo: "",
      },
      {
        image: "portfolioExample.webp",
        title: "Old portfolio",
        description:
          "This repository contains the source code of my old web portfolio. Although it is no longer in use, I decided to keep this repository as a reference and to share my progress over time.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        code: "https://github.com/Rysted/old-portfolio",
        demo: "https://stellular-creponne-a706db.netlify.app/",
      },
    ],
    button: {
      demo: "Demo",
      code: "Code",
      showMore: "Show more",
      noMoreResults: "No more results",
    },
  },
  skills: {
    icon: <BookCode styles="w-8 h-8" colors={true} />,
    title: "Skills",
    cards: [
      {
        title: "Languages",
        skills: ["Typescript", "Javascript", "HTML", "CSS"],
      },
      { title: "Frontend", skills: ["React", "TailwindCSS", "Bootstrap"] },
      {
        title: "Backend",
        skills: ["Node.js", "Express.js", "EJS", "Sequelize"],
      },
      { title: "Databases", skills: ["MySQL"] },
      { title: "Design", skills: ["Figma", "Miro"] },
      {
        title: "Tools",
        skills: [
          "Postman",
          "phpMyAdmin",
          "Workbench",
          "Prepros",
          "Jira",
          "Trello",
          "Git",
          "Github",
        ],
      },
      { title: "Languages", skills: ["English (reading)", "Spanish (native)"] },
    ],
  },
  backToTop: {
    ariaLabel: "Go to the top",
  },
  footer: {
    title: "© 2024 - Rysted",
    socials: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/marcelo-sebastian-suarez",
        ariaLabel: "Go to my LinkedIn profile",
        icon: (
          <LinkedIn
            hover={true}
            styles="w-16 h-16 md:w-8 md:h-8 fill-light_text"
          />
        ),
      },
      {
        title: "GitHub",
        url: "https://github.com/Rysted",
        ariaLabel: "Ir a mi perfil de GitHub",
        icon: (
          <GitHub
            hover={true}
            styles="w-16 h-16 md:w-8 md:h-8 fill-light_text"
          />
        ),
      },
    ],
  },
};
