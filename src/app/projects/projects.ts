export type Project = {
    id: number;
    title: string;
    description: string;
    experience: string;
    tasks: string[];
    image: string;
    link?: string;
  };
  
  export const projects = [
    {
      id: "1",
      title: " Social Gals",
      description: "Proyecto Social Gals es una aplicación diseñada para fomentar la conexión y colaboración entre mujeres interesadas en la tecnología y el emprendimiento. La idea principal era construir una app móvil en donde se ponga en práctica nuevas destresas, además de ser espacio en donde las usuarias pudieran compartir conocimientos, acceder a oportunidades y formar comunidades con intereses afines sobre moda.",
      experience: "Desarrollar este proyecto fue un reto emocionante, ya que me permitió explorar el diseño inclusivo y accesible. Uno de los principales aprendizajes fue la importancia de entender las necesidades de las usuarias, lo que me llevó a investigar sobre usabilidad y accesibilidad digital. Además, fue un ejercicio valioso en la creación de interfaces moviles atractivas sin comprometer la funcionalidad.",
      tasks: ["Diseño UX-UI", "Animaciones en Figma", "Prototipado de interfaz"],
      image: "/images/mockup1_temp.png",
      link: "https://www.figma.com/proto/QlZ4sQtCv0qA6zU4cuGeXZ/Proyecto-Social-Media",
    },
    {
      id: "2",
      title: " Playbooker",
      description: "Playbooker es una plataforma que permite a los usuarios reservar canchas deportivas en su ciudad de manera rápida y sencilla. Este proyecto nació de la necesidad de digitalizar un proceso que muchas veces sigue dependiendo de llamadas telefónicas y disponibilidad limitada de información en línea.",
      experience: "Fue una de mis primeras experiencias combinando diseño UX con desarrollo en React. Me enfrenté al desafío de estructurar una plataforma que tuviera flujos intuitivos para los usuarios. Aprendí a priorizar la accesibilidad y la experiencia del usuario en cada etapa del proceso, desde el diseño de los wireframes hasta la implementación del frontend.",
      tasks: ["Reserva de canchas", "Implementación en React", "Manejo de base de datos", "Optimización UX/UI"],
      image: "/images/mockup3_temps.png",
      link: "https://www.figma.com/proto/7i50rFlYxCdY2bIptZdeBZ/Proyecto-2?page-id=1%3A3&node-id=27-5049&viewport=952%2C553%2C0.02&t=GlvTYspdJDeS2NYG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A5049",
    },
    {
      id: "3",
      title: " Hopper",
      description: "Hopper es un videojuego en el que trabajé desarrollando la interfaz de usuario y los elementos visuales para mejorar la experiencia del jugador. El objetivo del juego era ofrecer una experiencia interactiva y gamificada con una curva de aprendizaje bien estructurada.",
      experience: "Este proyecto fue un gran reto ya que el diseño UX en videojuegos es muy diferente al diseño de aplicaciones tradicionales. Tuve que entender los principios de gamificación, investigar sobre cómo los usuarios interactúan con interfaces dinámicas y adaptar la experiencia para que fuera inmersiva sin distraer del juego. Fue una gran oportunidad para mejorar mis habilidades en animaciones y diseño de interfaces de alto impacto.",
      tasks: ["Gamificación", "Análisis de UX-UI", "Diseño de interfaz", "Animaciones"],
      image: "/images/mockup2_temp.png",
      link: "https://www.figma.com/proto/zaSsEUYU4qkBeKx9dYnS7T/Juego-2?page-id=0%3A1&node-id=1-4&viewport=-953%2C-246%2C0.19&t=YOMf1n0unVfONSat-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4",
    },
    {
      id: "4",
      title: " Gea",
      description: "Gea es una aplicación diseñada para la conservación de parques nacionales en Ecuador, ofreciendo información valiosa sobre flora, fauna y senderos turísticos. Su objetivo es fomentar el turismo sostenible y educar a los visitantes sobre la importancia de preservar estos espacios naturales.",
      experience: "Trabajar en Gea fue una experiencia enriquecedora porque tuve que equilibrar diseño y funcionalidad en un contexto donde la información debía ser presentada de manera clara y accesible. También aprendí a diseñar mapas interactivos, algo completamente nuevo para mí en ese momento, y a optimizar interfaces para dispositivos móviles, ya que era el canal principal de acceso a la app.",
      tasks: ["Diseño UX-UI", "Interfaz intuitiva", "Mapas interactivos", "Optimización para dispositivos móviles"],
      image: "/images/mockup4_temp.png",
      link: "https://www.figma.com/proto/iCekYCX0NOSADbQoY5jjRh/proyecto-parques",
    },
    {
      id: "5",
      title: "Justlift",
      description: "Justlift es una plataforma de fitness donde los usuarios pueden acceder a entrenamientos personalizados, programas de nutrición y seguimiento de progreso. El proyecto implicó la mejora y optimización de ciertos componentes clave para mejorar la navegación y usabilidad.",
      experience: "Este proyecto me permitió profundizar en el desarrollo con Drupal y en la mejora de sistemas ya existentes. Aprendí sobre la importancia de la arquitectura de la información y cómo pequeños cambios en la interfaz pueden hacer una gran diferencia en la experiencia del usuario. También fue un reto integrar nuevas funcionalidades sin afectar la estructura original del sitio web, lo que me enseñó a trabajar en entornos más complejos y colaborativos.",
      tasks: ["Drupal", "Corrección de información", "Añadir componentes", "Implementación del hero, footer y header"],
      image: "/images/mockup5_temp.png",
      link: "https://justlift.com.ec/",
    },
  ];
  