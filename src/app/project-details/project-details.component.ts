import { ThemeService } from '../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { BeforeAfterSliderComponent } from '../before-after-slider/before-after-slider.component';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, HeroComponent, FooterComponent, ScrollToTopComponent, BeforeAfterSliderComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  slug: string = '';
  // Aquí declararemos el modo oscuro
  isDarkMode: boolean = false;
  project: any = null;

  currentSection: number = 0;

  PROJECTS_DATA = [
  {
    slug: 'selu-rizo-fotografia',
    title: 'Selu Rizo Fotografía',
    heroBgLight: '/assets/images/hero-selu-light.jpg',
    heroBgDark: '/assets/images/hero-selu-dark.jpg',
    logoLight: '/assets/images/logo-selu-white.png',
    logoDark: '/assets/images/logo-selu-white.png',
    ctaText: 'Captura la esencia de mi marca',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,            
    logoSize: 'w-[300px] max-w-full md:w-[450px]',

    clientName: 'Selu Rizo Fotografía - Fotógrafo profesional',
    date: 'Mayo 2020',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '2 semanas',
    briefDescription: 'En mayo de 2020, Selu Rizo, fotógrafo profesional freelance, confió en mi estudio para dar forma a su nueva imagen de marca. El reto: crear desde cero un logotipo y unas tarjetas de visita que no solo transmitieran profesionalidad, sino que reflejaran su estilo visual único y la pasión que imprime en cada trabajo.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/selu_mood1.jpg',
      '/assets/images/selu_mood2.jpg'
    ],
    moodboardText: 'Todo gran proyecto comienza con una profunda comprensión de la marca. Analicé las tendencias actuales en fotografía profesional, estudiando paletas cromáticas, estilos tipográficos y el universo visual de la competencia. El objetivo: descubrir aquello que hace a Selu Rizo diferente, y transformarlo en un lenguaje visual auténtico. La creatividad se plasmó en papel y pantalla: generé diversas propuestas, buscando un equilibrio entre elegancia y personalidad.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'La clave diferencial llegó al decidir sustituir la letra “e” de “Selu” por una espiral de Fibonacci, símbolo universal de perfección y belleza natural, ejecutada con un trazo pictórico rojo que añade energía y fuerza visual a la marca. Esta espiral no solo representa la mirada creativa de Selu, sino que evoca la composición armónica presente en sus fotografías, transmitiendo profesionalidad y arte a partes iguales. El logotipo evolucionó en un formato 100% vectorial, listo para adaptarse a cualquier soporte y necesidad del cliente.',
    bocetoImg: '/assets/images/selu_boceto.jpg',
    finalImg: '/assets/images/selu_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Desarrollé dos versiones cromáticas —para fondo claro y oscuro— garantizando máxima legibilidad y coherencia en cualquier contexto. Las tarjetas de visita, diseñadas para impactar a primera vista, se aprobaron en la primera propuesta: un diseño limpio, potente y alineado con la identidad recién creada. Entregué todos los archivos finales del logotipo y sus variantes, preparados para impresión profesional y uso digital inmediato. Coordiné la producción de las tarjetas de visita para su primera tirada, asegurando una presentación impecable. ¿Buscas una identidad visual que eleve tu marca y transmita lo mejor de ti? Hablemos y convierte tu proyecto en un referente.',
    mockups: [
      '/assets/images/selu_mockup1.jpg',
      '/assets/images/selu_mockup2.jpg'
    ]
  },
  {
    slug: 'coral-cakes',
    title: 'Coral Cakes',
    heroBgLight: '/assets/images/hero-coral-light.jpg',
    heroBgDark: '/assets/images/hero-coral-dark.jpg',
    logoLight: '/assets/images/logo-coral-cakes.png',
    logoDark: '/assets/images/logo-coral-cakes.png',
    ctaText: '¡Dale un sabor único a mi marca!',
    overlayOpacity: 0.15,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[300px] max-w-full md:w-[450px]',

    clientName: 'Coral Cakes - Repostería creativa británica',
    date: 'Junio 2021',
    tools: [ { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' } ],
    duration: '1 semana',
    briefDescription: 'En junio de 2021, Coral Cakes, una encantadora empresa británica especializada en cupcakes artesanales, me encargó el diseño de un logotipo que expresara su identidad creativa, alegre y memorable. El reto era sencillo en apariencia, pero profundo en su ejecución: capturar en una sola imagen la dulzura, elegancia y originalidad que la marca ofrece.',

    moodboardImgs: [
      '/assets/images/coral_mood1.png',
      '/assets/images/coral_mood2.png'
    ],
    moodboardText: 'La fase inicial fue una exploración intensa y divertida: me sumergí en diversas paletas cromáticas cosy, tipografías amigables y modernas, y en tendencias de diseño actuales en el sector de la repostería creativa. El objetivo claro: encontrar la esencia visual que diferenciara a Coral Cakes, realzando su identidad creativa en un mercado saturado.',

    bocetoDescription: 'Con una paleta cromática cálida, dulce y atractiva definida, realicé múltiples bocetos y conceptos visuales. Cada propuesta buscaba transmitir alegría, cercanía y creatividad. Junto a la clienta, evaluamos cada opción cuidadosamente, seleccionando finalmente un diseño que reflejaba plenamente su visión.',
    bocetoImg: '/assets/images/coral_boceto.jpg',
    finalImg: '/assets/images/coral_final.jpg',

    conclusionText: 'Una vez elegida la propuesta definitiva, desarrollé el logotipo final en Adobe Illustrator, asegurando un formato vectorial escalable y de calidad premium. El resultado fue un logotipo versátil, eficaz en cualquier contexto y en cualquier color de fondo, garantizando así una imagen consistente y profesional en todas las aplicaciones digitales e impresas. Entregué todos los archivos finales junto a varios diseños de packaging para los productos, todos en formatos vectoriales de alta resolución, preparados para impresión profesional y uso digital inmediato. ¿Quieres darle a tu marca una imagen memorable y deliciosa? Contáctame y juntos haremos realidad tu visión creativa.',
    mockups: [
      '/assets/images/coral_mockup1.jpg',
      '/assets/images/coral_mockup2.jpg',
    ]
  },
  {
    slug: 'fc-beltatrez',
    title: 'F.C. Beltatrez',
    heroBgLight: '/assets/images/hero-beltatrez-light.jpg',
    heroBgDark: '/assets/images/hero-beltatrez-dark.jpg',
    logoLight: '/assets/images/logo-beltatrez.svg',
    logoDark: '/assets/images/logo-beltatrez.svg',
    ctaText: 'Haz de mi equipo una leyenda',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[200px] max-w-full md:w-[350px]',

    clientName: 'F.C. Beltatrez - Equipo de futbol de Timor Oriental, ubicado en Oxford (UK)',
    date: 'Agosto 2023',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' },
      { name: 'Procreate', icon: 'assets/images/icons/Procreate_icon.jpeg' } ],
    duration: '1 mes',
    briefDescription: 'En agosto de 2023, F.C. Beltatrez, un equipo de fútbol con raíces en Timor Oriental y sede en Oxford (Reino Unido), confió en mí para llevar a cabo un rebranding integral. El desafío era renovar la imagen del escudo oficial, diseñar una nueva equipación deportiva principal y rediseñar una bandera representativa, fusionando la cultura de Timor Oriental con una estética moderna y llamativa que potenciara la identidad única del club.',

    moodboardImgs: [
      '/assets/images/belta_mood1.jpg',
      '/assets/images/belta_mood2.jpg'
    ],
    moodboardText: 'Comencé profundizando en la historia visual del equipo, recopilando fotografías y gráficos previos, al mismo tiempo que obtenía información y feedback directamente del entrenador y el cuerpo técnico. Esto permitió definir claramente la dirección visual de la nueva equipación. Teniendo en cuenta la identidad cultural de Timor Oriental, elaboré diversos bocetos y exploré múltiples conceptos visuales, probando elementos gráficos, colores vibrantes y tipografías modernas.',

    bocetoDescription: 'Después de varias revisiones junto al equipo, se seleccionó un diseño definitivo que reflejara perfectamente la esencia del club. La fase digital implicó transformar el diseño antiguo del logo en un escudo vectorial escalable, garantizando su adaptabilidad a diferentes formatos y usos y manteniendo la estética y elementos gráficos del anterior. Con Procreate, realicé mockups detallados de la equipación, asegurando una visualización precisa y realista de los colores y patrones seleccionados. La bandera fue rediseñada con el nuevo logotipo, usando principalmente los colores rojo y negro emblemáticos de Timor Oriental.',
    bocetoImg: '/assets/images/belta_boceto.jpg',
    finalImg: '/assets/images/belta_final.jpg',

    conclusionText: 'Entregué al club todos los archivos finales, listos para aplicaciones físicas y digitales. Además, proporcioné asesoramiento especializado sobre materiales, medidas, proveedores y tiempos de producción, facilitando así la adquisición eficiente de equipaciones y merchandising oficial de alta calidad. ¿Quieres modernizar la imagen de tu equipo y destacar sobre el terreno de juego? Contáctame y hagamos realidad la visión deportiva de tu club.',
    mockups: [
      '/assets/images/belta_mockup1.jpg',
      '/assets/images/belta_mockup2.jpg'
    ]
  },
  {
    slug: 'amor-y-arte',
    title: 'Amor y Arte',
    heroBgLight: '/assets/images/hero-amor-y-arte-light.jpg',
    heroBgDark: '/assets/images/hero-amor-y-arte-dark.jpg',
    logoLight: '/assets/images/logo-amor-y-arte.svg',
    logoDark: '/assets/images/logo-amor-y-arte.svg',
    ctaText: 'Dale alma a mi identidad',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[300px] max-w-full md:w-[450px]',

    clientName: 'Amor y Arte – Empresa artesanal de muñecos reborn personalizados',
    date: 'Julio 2018',
    tools: [ { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' } ],
    duration: '4 días',
    briefDescription: 'En julio de 2018, Amor y Arte, una empresa dedicada a la fabricación artesanal de muñecos reborn personalizados, acudió a mí para crear desde cero su logotipo principal. El desafío consistía en reflejar con delicadeza y precisión la belleza, ternura y exquisitez que caracterizan sus productos artesanales, capturando el cuidado y amor que ponen en cada creación.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/amor_mood1.jpg',
      '/assets/images/amor_mood2.jpg'
    ],
    moodboardText: 'Inicié el proyecto sumergiéndome en el universo emocional y delicado de los muñecos reborn. Realicé un análisis detallado de los productos, exploré valores clave que la empresa quería proyectar y estudié la competencia para asegurar que el diseño final destacara claramente la identidad única y personal de Amor y Arte. Tras una conversación profunda con el cliente, definí una paleta cromática suave y elegante, alineada con la esencia del proyecto. Planteé varias propuestas iniciales, utilizando trazos cálidos y tipografías cercanas que reflejaran la emotividad y delicadeza que caracteriza a los muñecos reborn.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'El cliente seleccionó rápidamente la propuesta que mejor conectaba con su visión. Una vez elegidos los elementos visuales y tipográficos, desarrollé la versión final del logotipo en formato vectorial. Ajusté cuidadosamente medidas, colores y distribución tipográfica para asegurar que el resultado transmitiera equilibrio visual y reflejara la esencia cálida y tierna de Amor y Arte.',
    bocetoImg: '/assets/images/amor_boceto.jpg',
    finalImg: '/assets/images/amor_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Proporcioné los archivos digitales finales en alta resolución, preparados para ser usados inmediatamente en diversos soportes digitales e impresos. Además, creé mockups realistas del logotipo aplicado a packaging existente, mostrando cómo la nueva identidad visual mejoraría la experiencia del cliente. ¿Quieres una identidad visual que refleje con elegancia y autenticidad la esencia de tu negocio artesanal? Contáctame y llevemos tu marca al siguiente nivel.',
    mockups: [
      '/assets/images/amor_mockup1.jpg',
      '/assets/images/amor_mockup2.jpg'
    ]
  },
  {
    slug: 'swamp-labs',
    title: 'Swamp Labs',
    heroBgLight: '/assets/images/hero-swamp-labs-light.jpg',
    heroBgDark: '/assets/images/hero-swamp-labs-dark.jpg',
    logoLight: '/assets/images/logo-swamp-labs.png',
    logoDark: '/assets/images/logo-swamp-labs.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[350px] max-w-full md:w-[500px]',

    clientName: 'Swamp Labs - Solana NFTs Collection',
    date: 'Junio 2022',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
            { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' } ],
    duration: '1 mes',
    briefDescription: 'En junio de 2022, Swamp Labs confió en mí para llevar a cabo el diseño integral de su colección NFT en la blockchain de Solana. El reto: fusionar el universo del arte procedural con un rebranding completo y la creación de un ecosistema visual coherente y memorable. El encargo abarcó desde el diseño de personajes exclusivos, pasando por ilustraciones vectoriales únicas, hasta el desarrollo de un nuevo logotipo y banner destinado a posicionar la marca en redes sociales y la web.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/swamp_mood1.jpg',
      '/assets/images/swamp_mood2.jpg'
    ],
    moodboardText: 'La fase conceptual fue un laboratorio de creatividad. Desarrollé bocetos de logotipos con tipografías personalizadas, imágenes pensadas para funcionar como sello y favicon, e iconografía adaptable a cualquier soporte digital. Paralelamente, diseñé personajes y “traits” para un sistema procedural capaz de generar 5.000 combinaciones únicas dentro del lore de la colección, convirtiendo cada NFT en una pieza irrepetible cargada de storytelling. La paleta cromática se definió con tonos vibrantes y contrastados, buscando un equilibrio entre modernidad y atractivo visual. Cada elemento gráfico fue diseñado para destacar en el ecosistema NFT, asegurando una presencia sólida y reconocible.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con las bases asentadas, llevé el proyecto al plano digital. Creé tres versiones principales de logotipo —incluyendo una animada para eventos exclusivos del club—, y trabajé en la ilustración protagonista del banner oficial, integrando detalles ocultos y un estilo misterioso y envolvente. Además, elaboré ilustraciones vectoriales (huevo, cocodrilo bebé y cocodrilo adulto) como piezas clave para el lanzamiento y la narrativa visual de la colección, asegurando escalabilidad y calidad premium.',
    bocetoImg: '/assets/images/swamp_boceto.jpg',
    finalImg: '/assets/images/swamp_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Tras la validación con el cliente, entregué todos los recursos gráficos: logotipos adaptados a cualquier plataforma, banner principal para la web y redes, y las ilustraciones vectoriales listas para generación procedural y uso inmediato. El resultado: una identidad visual disruptiva, potente y perfectamente alineada con los valores de Swamp Labs y la cultura NFT de Solana. ¿Listo para transformar tu proyecto NFT en una marca con impacto real y una comunidad fiel? Contáctame y hagamos historia en la blockchain.',
    mockups: [
      '/assets/images/swamp_mockup1.gif',
      '/assets/images/swamp_mockup2.jpg'
    ]
  },
  {
    slug: 'ikigai-games',
    title: 'Ikigai Games',
    heroBgLight: '/assets/images/hero-ikigai-games-light.jpg',
    heroBgDark: '/assets/images/hero-ikigai-games-dark.jpg',
    logoLight: '/assets/images/logo-ikigai-games.png',
    logoDark: '/assets/images/logo-ikigai-games.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.05,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[500px] max-w-full md:w-[650px]',

    clientName: 'Ikigai Games - La pasión por los juegos de mesa hecha identidad',
    date: 'Octubre 2024',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '1 semana',
    briefDescription: 'En octubre de 2024 nace Ikigai Games, la futura editorial de juegos de mesa creada para convertirse en un referente de creatividad, pasión y diversión en el sector. El primer desafío fue elegir un nombre que resumiera la filosofía y el propósito de la marca: Ikigai, el término japonés que representa la “razón de vivir”, fusionando pasión, vocación, misión y profesión en una sola palabra. La meta: crear un logotipo que encarne esa energía, prepare el terreno para los futuros lanzamientos —empezando por el esperado Couple Clash— y transmita a simple vista el alma de la editorial.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/ikigai_mood1.jpg',
      '/assets/images/ikigai_mood2.jpg'
    ],
    moodboardText: 'El punto de partida fue la búsqueda del nombre perfecto. Analicé tendencias, valores y nombres del sector, pero ningún término tenía el peso, la profundidad y el simbolismo de “Ikigai”. Este concepto conecta con quienes creen que los juegos de mesa son mucho más que ocio: son una experiencia compartida que da sentido, une y crea recuerdos inolvidables. Definido el nombre, exploré distintas paletas cromáticas y referencias visuales para dotar a la marca de una identidad vibrante, contemporánea y única.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con los elementos elegidos, creé el logotipo definitivo en formato vectorial. El resultado: una imagen versátil, llena de color y dinamismo, preparada para acompañar cada lanzamiento y transmitir el propósito vital de la editorial. El símbolo infinito y los degradados cromáticos evocan la creatividad, la diversidad y la energía que Ikigai Games quiere aportar al mundo de los juegos de mesa.',
    bocetoImg: '/assets/images/ikigai_boceto.jpg',
    finalImg: '/assets/images/ikigai_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'El logotipo de Ikigai Games ya está listo para lucirse en la primera gran aventura editorial: Couple Clash. Todo está preparado para que la marca despegue y se posicione como un nuevo referente de originalidad, profesionalidad y pasión en el sector lúdico. ¿Quieres que tu editorial destaque con una imagen que transmita propósito, pasión y creatividad? Contáctame y da vida a tu proyecto de juegos con una identidad visual única.',
    mockups: [
      '/assets/images/ikigai_mockup1.jpg',
      '/assets/images/ikigai_mockup2.jpg'
    ]
  },
  {
    slug: 'mr-yugen',
    title: 'Mr. Yugen',
    heroBgLight: '/assets/images/hero-mryugen-dark.jpg',
    heroBgDark: '/assets/images/hero-mryugen-dark.jpg',
    logoLight: '/assets/images/logo-hero-dark.svg',
    logoDark: '/assets/images/logo-hero-dark.svg',
    ctaText: '¿Quieres una marca personalizada?',
    overlayOpacity: 0.15,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[500px] max-w-full md:w-[650px]',

    clientName: 'Mr. Yugen - Un nuevo símbolo para una nueva etapa creativa',
    date: 'Julio 2023',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '1 semana',
    briefDescription: 'En julio de 2023, emprendí uno de los retos más personales e ilusionantes de mi carrera: renovar la imagen gráfica de mi propia marca, Mr. Yugen. Este rebranding no solo es un cambio visual, sino el reflejo de una transformación interna —un viaje hacia la autenticidad, la creatividad y la belleza profunda inspirada en el concepto japonés de “Yūgen”.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/mryugen_mood1.jpg',
      '/assets/images/mryugen_mood2.jpg'
    ],
    moodboardText: 'La fase inicial fue un ejercicio de introspección y búsqueda artística. Profundicé en el significado de “Yūgen”, esa palabra japonesa que evoca la sensación de asombro ante la belleza sutil, lo misterioso y lo intangible. El objetivo era claro: alejarme de lo superficial para crear una imagen que capturara la esencia de mi nuevo enfoque creativo y profesional. Analicé referentes de arte minimalista, caligrafía y simbología japonesa, fusionando tradición y modernidad. Quería que cada trazo, cada curva, transmitiera profundidad, equilibrio y un halo de misterio que invite a mirar más allá.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'El papel y la pantalla se convirtieron en el laboratorio de mi identidad. Generé numerosos bocetos explorando iconos, tipografías y composiciones, buscando un equilibrio entre lo abstracto y lo reconocible, lo moderno y lo atemporal.Poco a poco, el nuevo símbolo fue emergiendo: una espiral que sugiere movimiento, energía y transformación, acompañada de una tipografía manuscrita que pone el acento en lo humano y lo artístico. Seleccionados los elementos clave, di vida al logotipo final en formato vectorial, asegurando su máxima calidad y versatilidad en cualquier formato o plataforma.',
    bocetoImg: '/assets/images/mryugen_boceto.jpg',
    finalImg: '/assets/images/mryugen_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'La versión principal del logo convive con variantes simplificadas, adaptadas para fondos oscuros o usos como favicon, logrando que la esencia de la marca se mantenga intacta en cada aplicación. La nueva identidad visual de Mr. Yugen marca el inicio de una etapa llena de proyectos con alma, creatividad y sentido. El logo no solo acompaña a la marca: la representa, la inspira y la impulsa a evolucionar. ¿Te gustaría que tu marca cuente tu historia y transmita todo su potencial creativo? Hablemos y diseñemos juntos el siguiente capítulo de tu identidad visual.',
    mockups: [
      '/assets/images/mryugen_mockup1.jpg',
      '/assets/images/mryugen_mockup2.jpg'
    ]
  },
  {
    slug: 'royal-hounds',
    title: 'Royal Hounds',
    heroBgLight: '/assets/images/hero-royal-hounds-light.jpg',
    heroBgDark: '/assets/images/hero-royal-hounds-dark.jpg',
    logoLight: '/assets/images/logo-royal-hounds.png',
    logoDark: '/assets/images/logo-royal-hounds.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[350px] max-w-full md:w-[500px]',

    clientName: 'Royal Hounds - Arte, narrativa y estrategia visual al servicio del crowdfunding editorial',
    date: 'Marzo 2018',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Freehand MX', icon: 'assets/images/icons/freehand-mx-seeklogo.png' }, ],
    duration: '2 meses',
    briefDescription: 'En marzo de 2018, tuve el privilegio de participar como diseñador gráfico, ilustrador digital y redactor en la campaña de Kickstarter de Royal Hounds, una novela gráfica de ambientación épica y misterio. Este proyecto supuso un reto creativo integral: desde la conceptualización de logotipo, favicon y arte promocional, hasta la creación de mockups de productos, ilustraciones finales, maquetación y redacción de toda la campaña en dos idiomas. La colaboración fue mucho más allá de lo visual: se trataba de crear un universo gráfico coherente y cautivador, capaz de emocionar a los fans, convertir visitantes en mecenas y sentar las bases de una marca fuerte y memorable en el sector del cómic independiente.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/royal_mood1.jpg',
      '/assets/images/royal_mood2.jpg',
      '/assets/images/royal_mood3.png',
      '/assets/images/royal_mood4.jpg',
      '/assets/images/royal_mood5.jpg',
    ],
    moodboardText: 'Un proyecto de novela gráfica exige mucho más que dominar el lápiz digital: es imprescindible entender el trasfondo, el tono y las referencias visuales de la historia. Para ello, trabajé mano a mano con el dibujante principal y el equipo creativo, recopilando bocetos originales, analizando la paleta emocional de la trama y estudiando el perfil del público objetivo del crowdfunding. Establecí un flujo de trabajo estructurado, con calendarios para cada fase y entregas parciales revisadas en equipo, lo que permitió mantener la coherencia gráfica, cumplir con los plazos y optimizar cada recurso según la prioridad dentro de la campaña. La investigación no solo abarcó el universo narrativo, sino también las mejores prácticas de campañas exitosas en Kickstarter, estudiando recompensas, banners, mockups y materiales que mejor funcionaban en proyectos similares.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con toda la documentación e inspiración reunida, me centré en el diseño de logotipos y favicon que fueran fieles a la esencia épica y misteriosa de Royal Hounds. Los primeros bocetos exploraban tipografías heroicas, siluetas de personajes y detalles que evocaban la dualidad de la historia: lo sombrío y lo heroico. Paralelamente, desarrollé arte conceptual para los productos de merchandising y las recompensas exclusivas del Kickstarter: pins, tazas, láminas, cartas y objetos de colección. El objetivo era que cada pieza fuera tan única y personalizable como la historia que la inspiraba. A nivel de comunicación, estructuré la campaña redactando los principales bloques de texto, aplicando técnicas de copywriting y SEO para captar la atención, crear deseo y facilitar la conversión. Preparé versiones en inglés y español para maximizar el alcance y el impacto internacional, ajustando el tono a cada público.',
    bocetoImg: '/assets/images/royal_boceto.jpg',
    finalImg: '/assets/images/royal_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'En la fase digital, cada elemento cobró vida: los mockups de productos se perfeccionaron con Adobe Photoshop, mezclando ilustraciones originales y assets del dibujante principal para crear presentaciones realistas y atractivas. La maquetación de la campaña se trabajó con mimo, cuidando cada bloque visual, iconografía, tabla de recompensas y diagrama de roadmap para que la experiencia del usuario fuera clara y fluida. También colaboré en la coloración digital de varias escenas clave, optimizando tiempos de producción sin perder calidad artística. Para la cabecera, diseñé el banner principal integrando ilustraciones atmosféricas y el título de la obra, buscando ese “efecto wow” imprescindible en los primeros segundos de la campaña. Finalmente, edité el video de presentación de Kickstarter, combinando arte, animaciones ligeras y narrativa, para sumergir al visitante en el universo de Royal Hounds desde el primer fotograma. El resultado fue una base de datos organizada con todos los recursos gráficos y literarios, perfectamente categorizados para facilitar la gestión y actualización de la campaña. Royal Hounds se presentó en Kickstarter con una identidad visual coherente, potente y memorable, apoyada en una comunicación efectiva y materiales promocionales de alta calidad. ¿Quieres llevar tu novela gráfica o proyecto editorial al siguiente nivel, con una campaña visualmente arrolladora y un storytelling que convierta? Contáctame y diseñaremos juntos una campaña capaz de enamorar a tu público y triunfar en cualquier plataforma de crowdfunding.',
    mockups: [
      '/assets/images/royal_mockup1.jpg',
      '/assets/images/royal_mockup2.jpg',
      '/assets/images/royal_mockup3.jpg',
      '/assets/images/royal_mockup4.jpg',
      '/assets/images/royal_mockup5.jpg',
      '/assets/images/royal_mockup6.jpg',
    ]
  },
  {
    slug: 'estevez-asesores',
    title: 'Estévez Asesores',
    heroBgLight: '/assets/images/hero-estevez-asesores-light.jpg',
    heroBgDark: '/assets/images/hero-estevez-asesores-dark.jpg',
    logoLight: '/assets/images/logo-estevez-asesores-blanco.png',
    logoDark: '/assets/images/logo-estevez-asesores-blanco.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[450px] max-w-full md:w-[600px]',
    
    clientName: 'Estévez Asesores - Rebranding y digitalización: una nueva imagen para una asesoría con historia',
    date: 'Septiembre 2022',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' },
      { name: 'No-Code', icon: 'assets/images/icons/No code.png' },
    ],
    duration: '1 mes',
    briefDescription: 'En septiembre de 2022, Estévez Asesores, despacho de referencia especializado en asesoría integral para empresas y particulares, confió en mí para dar un salto cualitativo en su imagen de marca y presencia digital. El reto fue doble: renovar su logotipo para proyectar una imagen moderna y profesional, y diseñar una página web funcional y visualmente atractiva, capaz de transmitir confianza, cercanía y la amplitud de servicios ofrecidos.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/estevez_mood1.jpg',
      '/assets/images/estevez_mood2.jpg'
    ],
    moodboardText: 'Como punto de partida, revisé la evolución del logotipo anterior y la gama cromática tradicional de la asesoría, buscando preservar su reconocimiento y solvencia, pero dotándolo de un aire contemporáneo y diferenciador. Entrevisté al equipo directivo y analicé cada departamento (fiscal, contable, laboral, jurídico…), con el objetivo de estructurar la navegación web y ordenar los contenidos de forma clara y orientada al usuario final. Para complementar el archivo gráfico de fotografías propias del despacho y para reforzar la identidad visual, generé imágenes con IA, asegurando versatilidad y coherencia en todos los materiales visuales de la web. A nivel textual, me apoyé en técnicas de copywriting y posicionamiento SEO, asegurando que los textos fueran persuasivos, claros y optimizados para los motores de búsqueda, con el objetivo de captar nuevos clientes y reforzar la marca en el entorno digital. Puedes ver todo el proceso de creación del logotipo y la web en el siguiente enlace: [Proceso de creación de la web de Estévez Asesores].',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con la información obtenida, desarrollé varias propuestas de logotipo, experimentando con diferentes estilos, formas y paletas de color. Busqué un equilibrio entre modernidad y tradición, utilizando tonos sobrios y detalles en rojo para transmitir dinamismo y confianza. Paralelamente, estructuré el contenido de la web en una base de datos lógica: quiénes somos, servicios, blog, contacto y secciones específicas según la especialización del despacho. Cada sección se dotó de imágenes propias y de archivo, garantizando una experiencia visual coherente y profesional. Una vez aprobado el diseño final del logotipo, lo desarrollé en dos variantes cromáticas para distintas aplicaciones (impresión, digital, papelería…). Creé versiones simplificadas para favicon y perfiles de redes sociales, asegurando máxima legibilidad en todos los soportes.',
    bocetoImg: '/assets/images/estevez_boceto.jpg',
    finalImg: '/assets/images/estevez_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'La web, desarrollada íntegramente con herramientas No-Code, permitió una construcción ágil, personalizada y eficiente, adaptándose a las necesidades del cliente y reduciendo costes de desarrollo. El diseño responsive y la optimización SEO fueron prioridades, garantizando una navegación fluida y una presencia digital sólida y competitiva. Imágenes generadas con IA y fotografía propia dotaron de carácter y personalidad cada sección, reforzando la imagen de Estévez Asesores como una empresa moderna, cercana y a la vanguardia del sector. El resultado final fue un rebranding integral que marcó un antes y un después para Estévez Asesores. La nueva imagen proyecta profesionalidad y cercanía, mientras que la web facilita la captación y fidelización de clientes, así como la comunicación eficaz de todos sus servicios. ¿Quieres que tu asesoría o despacho profesional luzca una imagen de confianza y se posicione como líder en el entorno digital? Contacta conmigo y te ayudo a transformar tu marca y presencia online.',
    mockups: [
      '/assets/images/estevez_mockup1.jpg',
      '/assets/images/estevez_mockup2.jpg',
      '/assets/images/estevez_mockup3.jpg',
    ]
  },
  {
    slug: 'caffeine-studios',
    title: 'Caffeine Studios',
    heroBgLight: '/assets/images/hero-caffeine-studios-light.jpg',
    heroBgDark: '/assets/images/hero-caffeine-studios-dark.jpg',
    logoLight: '/assets/images/logo-caffeine-studios.png',
    logoDark: '/assets/images/logo-caffeine-studios.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[400px] max-w-full md:w-[550px]',

    clientName: 'Caffeine Studios - Una taza de creatividad',
    date: 'Febrero 2018',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '2 meses',
    briefDescription: 'En febrero de 2018, Caffeine Studios, un joven pero ambicioso estudio creativo especializado en el desarrollo de aplicaciones web y videojuegos, se embarcó en el reto de actualizar su identidad visual y toda su presencia gráfica online y offline. Mi labor fue profunda: desde la reinvención del logotipo hasta la creación de una nueva tarjeta de visita, el diseño de iconos vectoriales inspirados en la molécula de cafeína y la producción de ilustraciones personalizadas que representasen la esencia, valores y personalidad del equipo.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/caffeine_mood1.jpg',
      '/assets/images/caffeine_mood2.jpg',
    ],
    moodboardText: 'El primer paso fue sumergirme en la historia y la identidad de Caffeine Studios. Analicé los recursos gráficos antiguos —logotipos, tarjetas, iconos web, banners de RRSS— y estudié sus colores corporativos, su filosofía de marca y los mensajes clave que querían comunicar. El objetivo era claro: crear una imagen fresca y moderna, alineada con los nuevos retos del estudio, pero sin perder la conexión con su trayectoria y comunidad. A través de entrevistas y sesiones de brainstorming con los fundadores y el equipo, desgranamos los valores diferenciales del estudio: pasión por la innovación, trabajo en equipo, cercanía y, sobre todo, una energía creativa inagotable. Inspirándonos en la propia molécula de cafeína y en el universo digital, definimos una serie de atributos visuales y conceptuales que guiarían todo el rediseño.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con una base conceptual sólida, realicé diversos bocetos para el nuevo logotipo: líneas limpias, trazos modernos y una paleta cromática vibrante que transmitiera creatividad y dinamismo. Paralelamente, diseñé las primeras versiones de ilustraciones para la web, proponiendo dos estilos visuales que se fusionaban: uno más minimalista y vectorial, otro más artístico y expresivo para retratar al equipo. También exploré conceptos para los iconos representativos de las tecnologías de programación más usadas en el estudio, reinterpretando la estructura hexagonal de la cafeína como símbolo gráfico. Las tarjetas de visita se concibieron en formatos vertical y horizontal, con un diseño moderno, bien jerarquizado y adaptado a la nueva identidad, buscando causar impacto tanto en reuniones presenciales como en eventos de networking.',
    bocetoImg: '/assets/images/caffeine_boceto.jpg',
    finalImg: '/assets/images/caffeine_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Tras consensuar los bocetos y aprobar la propuesta final, pasé al desarrollo digital. El logotipo se diseñó en formato vectorial para asegurar la máxima versatilidad y escalabilidad, tanto en medios digitales como impresos. Cada icono se redibujó con mimo, fusionando el concepto molecular y la identidad cromática del estudio, logrando una colección de recursos fácilmente reconocibles y reutilizables. Las ilustraciones del equipo se trabajaron en Photoshop e Illustrator, buscando que cada miembro se viera representado de manera auténtica, en su entorno de trabajo, resaltando la personalidad y el rol de cada uno dentro del estudio. Este enfoque visual refuerza la cercanía, el compañerismo y la pasión por la creatividad. Este enfoque visual refuerza la cercanía, el compañerismo y la pasión por la creatividad. El resultado final fue un branding completo y cohesivo, alineado con la energía, la pasión y la visión tecnológica de Caffeine Studios. Todos los archivos se entregaron en formatos originales y escalables, listos para ser usados en la web, redes sociales, productos físicos y eventos. La empresa ganó una identidad renovada, profesional y creativa, que no solo comunica quiénes son, sino también quiénes quieren llegar a ser. ¿Buscas una imagen corporativa capaz de transmitir la creatividad y la pasión de tu estudio digital? Contáctame y tomemos juntos la próxima taza de creatividad.',
    mockups: [
      '/assets/images/caffeine_mockup1.jpg',
      '/assets/images/caffeine_mockup2.jpg',
      '/assets/images/caffeine_mockup3.jpg',
      '/assets/images/caffeine_mockup4.jpg',
    ]
  },
  {
    slug: 'couple-clash',
    title: 'Couple Clash',
    heroBgLight: '/assets/images/hero-couple-clash-light.jpg',
    heroBgDark: '/assets/images/hero-couple-clash-dark.jpg',
    logoLight: '/assets/images/logo-couple-clash.png',
    logoDark: '/assets/images/logo-couple-clash.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.10,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[200px] max-w-full md:w-[350px]',

    clientName: 'Couple Clash - Branding y desarrollo de un juego de mesa único',
    date: 'Abril 2020 - Actualidad',
    tools: [ { name: 'Photoshop', icon: 'assets/images/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' },
      { name: 'Notion', icon: 'assets/images/icons/Notion-logo.svg' },
      { name: 'Procreate', icon: 'assets/images/icons/Procreate_icon.jpeg' }
    ],
    duration: 'Sigue en proceso',
    briefDescription: 'Couple Clash no es solo un juego de mesa. Es el resultado de cinco años de pasión, creatividad y dedicación obsesiva: un proyecto personal donde convergen mi amor por la estrategia, las ilustraciones, el humor y las partidas inolvidables. Mi reto era crear el juego al que siempre quise jugar: partidas rápidas y adictivas, reglas sencillas pero difíciles de dominar, componentes irresistibles y una experiencia que engancha tanto a parejas como a grupos de amigos. Hoy, Couple Clash está a punto de llegar a imprenta. Detrás hay un proceso artesanal —de ensayo, error y mucho aprendizaje—, decenas de versiones y un universo visual coherente y vibrante que invita a cualquier jugador a sumergirse en el “arte de discutir” de la forma más divertida posible.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/couple_mood1.jpg',
      '/assets/images/couple_mood2.jpg',
      '/assets/images/couple_mood3.jpg',
      '/assets/images/couple_mood4.jpg',
    ],
    moodboardText: 'Como jugón empedernido, el punto de partida fue analizar mis juegos favoritos, los que siempre piden “una partida más”. ¿Por qué funcionan? ¿Qué les falta? ¿Cómo puedo mejorar la experiencia para que la estrategia prime sobre el azar? La investigación fue mi brújula: estudié mecánicas de decenas de juegos, elegí lo mejor de cada uno, analicé los componentes y testee reglas con papel y boli. Definir el alma de Couple Clash fue un proceso tan importante como cualquier ilustración o regla. Todo quedó documentado en Notion, permitiéndome evolucionar el juego, organizar las pruebas y registrar cada avance (y cada error). ¿Quieres ver el lado más humano y real del desarrollo? En mi blog te cuento paso a paso los mayores retos y consejos para crear tu propio juego [ENLACE BLOG].',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con la mecánica equilibrada y testeada, era el momento de vestir a Couple Clash con su mejor traje visual. Diseñé primero el logotipo, buscando un estilo potente, memorable y flexible. Luego vinieron los iconos de categorías, la paleta de colores (estudiando la psicología de cada tono) y la estructura de todos los componentes. Imprimí prototipos en distintos papeles y gramajes, revisé medidas, estudié el impacto del color real y ajusté cada diseño tras recopilar feedback de jugones de confianza. El objetivo era que cada carta, ficha o tablero transmitiera coherencia emocional, diversión y calidad, invitando a jugar una y otra vez. Adobe Illustrator fue mi herramienta principal para el diseño de todos los elementos gráficos: desde el packaging y el logo hasta el último icono. Photoshop me sirvió para pulir colores y preparar los archivos de impresión. El toque final llegó con Procreate en iPad Pro: todas las ilustraciones de las cartas y tableros, en estilos variados pero perfectamente integrados, nacieron allí, permitiéndome dibujar en cualquier sitio e inspirarme al instante. El resultado es una identidad visual coherente y única, que conecta con el público objetivo y eleva la experiencia de juego a otro nivel. ¿Quieres ver cada ilustración y su proceso creativo? Descúbrelo en la sección de Ilustraciones [ENLACE ILUSTRACIONES].',
    bocetoImg: '/assets/images/couple_boceto.jpg',
    finalImg: '/assets/images/couple_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'En la fase final, el trabajo consiste en revisar, ajustar, corregir y preparar todos los archivos digitales para su impresión profesional. Cada detalle se repasa con lupa: ortografía, medidas, equilibrio de colores… y se testean las últimas versiones beta, buscando erratas o fallos invisibles a simple vista. En esta etapa, la investigación de costes y la optimización de la producción por lotes es esencial, igual que encontrar los mejores materiales sin disparar el precio. Hoy, Couple Clash está preparado para saltar al gran público a través del crowdfunding: la campaña está lista y solo falta tu apoyo para que el juego llegue a tu mesa. Si buscas un juego de cartas estratégico, divertido y original, que se disfruta tanto en pareja como en grupo, Couple Clash es tu próxima obsesión. ¿Quieres conocer el futuro de Couple Clash, recibir spoilers y no perderte la campaña de lanzamiento? Visita la página oficial del crowdfunding [ENLACE AQUÍ] y únete al choque de sofás más divertido del mundo de los juegos de mesa.',
    mockups: [
      '/assets/images/couple_mockup1.jpg',
      '/assets/images/couple_mockup2.jpg',
      '/assets/images/couple_mockup3.jpg',
      '/assets/images/couple_mockup4.jpg',
      '/assets/images/couple_mockup5.jpg',
    ]
  },
  {
    slug: 'invitacion-boda',
    title: 'Diseño de invitación premium con esencia medieval y fantasía épica',
    heroBgLight: '/assets/images/hero-invitacion-boda-light.jpg',
    heroBgDark: '/assets/images/hero-invitacion-boda-dark.jpg',
    logoLight: '/assets/images/logo-hero-light.svg',
    logoDark: '/assets/images/logo-hero-dark.svg',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.15,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[300px] max-w-full md:w-[450px] mb-2',

    clientName: 'Invitación de Boda – Tania & Luis',
    date: 'Febrero 2018',
    tools: [ { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '8 días',
    briefDescription: 'En febrero de 2018, recibí uno de los encargos más emotivos y artísticos de mi carrera: crear la invitación de boda personalizada para el hermano de una amiga. El objetivo era sorprender a los invitados con una pieza única, elegante y con alma, donde cada detalle evocara un universo de fantasía y romanticismo medieval. Este proyecto supuso un verdadero viaje creativo, desde la conceptualización de las siluetas y la ilustración fantástica, hasta el acabado artesanal con lacre y ornamentos, logrando que la experiencia comenzara desde el mismo momento de abrir el sobre.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/invitacion_mood1.jpg',
      '/assets/images/invitacion_mood2.jpg',
      '/assets/images/invitacion_mood3.jpg',
    ],
    moodboardText: 'El primer paso fue conversar con la pareja y descubrir sus gustos, historias y referencias. Ambos compartían una pasión por la literatura fantástica y los mundos medievales —de Tolkien a George R.R. Martin—, así que decidí fusionar esos universos en el diseño. Me inspiré en la caligrafía gótica, los sellos de cera y las ilustraciones de cuentos antiguos, apostando por un formato premium, elegante y atemporal. La idea clave surgió al analizar sus fotografías: ¿y si sus perfiles se convirtieran en portales a un mundo de fantasía, integrando paisajes y personajes mágicos en el interior de cada silueta?',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'El formato elegido fue un díptico con dos solapas laterales, que al abrirse desde el centro desvelan el corazón del mensaje. En las solapas, trabajé la silueta de la pareja, esculpiendo sus perfiles con precisión artística y rellenándolos con una ilustración fantástica: montañas, castillos, magos, bosques y criaturas míticas se funden para narrar una historia visual. Al unir las solapas por la parte trasera, las siluetas encajan en un beso sutil, completando al mismo tiempo la imagen de fondo y reforzando la idea de unión y destino compartido. Cada boceto se revisó minuciosamente, ajustando tanto los rasgos faciales como el encuadre del arte interior, para lograr un efecto sorprendente tanto cerrado como desplegado. El interior de la invitación mantiene la línea dorada y el fondo azul oscuro ornamentado, enmarcando el texto con tipografías medievales y detalles decorativos inspirados en manuscritos antiguos. Todo el mensaje se redactó en clave de fantasía, invitando a los asistentes a vivir una noche de magia, misterios y celebración.',
    bocetoImg: '/assets/images/invitacion_boceto.jpg',
    finalImg: '/assets/images/invitacion_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Aprobados los conceptos, realicé toda la composición en Adobe Illustrator, asegurando máxima nitidez y escalabilidad para la impresión. Probé distintas gamas cromáticas y acabados ornamentales, hasta dar con la combinación perfecta de dorados, azules profundos y detalles rojizos en el lacre. El diseño final incluía archivos independientes para cada parte de la invitación, preparados para una impresión profesional de alta calidad en formato CMYK. Para reforzar la experiencia, el sobre fue diseñado en un elegante tono púrpura y sellado con lacre personalizado, aportando un toque exclusivo y ceremonial al conjunto. El resultado fue una invitación de boda digna de un cuento de fantasía: elegante, llena de detalles y cargada de significado personal. La pareja recibió una papelería que no solo anuncia su enlace, sino que invita a los asistentes a adentrarse en su propia leyenda, anticipando una velada inolvidable y mágica. ¿Quieres una invitación de boda o papelería personalizada que cuente vuestra historia y sorprenda a todos los invitados? Contáctame y diseñemos juntos una pieza única que haga de vuestro día un recuerdo inolvidable.',
    mockups: [
      '/assets/images/invitacion_mockup1.png',
      '/assets/images/invitacion_mockup2.jpg'
    ]
  },
  {
    slug: 'the-folly-inn-uk',
    title: 'The Folly Inn',
    heroBgLight: '/assets/images/hero-folly-inn-light.jpg',
    heroBgDark: '/assets/images/hero-folly-inn-dark.jpg',
    logoLight: '/assets/images/logo-folly-inn-white.png',
    logoDark: '/assets/images/logo-folly-inn-white.png',
    ctaText: 'Diseña una identidad única y digital',
    overlayOpacity: 0.05,
    showTitle: false,            
    showCTA: false,              
    logoSize: 'w-[200px] max-w-full md:w-[350px]',

    clientName: 'The Folly Inn - Minimalismo con identidad local',
    date: 'Septiembre 2022',
    tools: [ { name: 'Illustrator', icon: 'assets/images/icons/Adobe_Illustrator_CC_icon.svg' }, ],
    duration: '3 días',
    briefDescription: 'En septiembre de 2022, tuve el privilegio de diseñar el logotipo de The Folly Inn, una taberna inglesa con carácter, situada en la pintoresca localidad de Faringdon, Oxfordshire. El encargo consistía en crear una imagen de marca sencilla, elegante y memorable, que rindiera homenaje a la icónica Folly Tower —el monumento más representativo de la zona— y pudiera usarse tanto en cartelería como en merchandising o sellos oficiales del local.',

    // → Datos de sección 2 (moodboard)
    moodboardImgs: [
      '/assets/images/folly_mood1.jpg',
      '/assets/images/folly_mood2.jpg'
    ],
    moodboardText: 'Para conseguir un logotipo genuinamente arraigado en la identidad local, visité en persona tanto la taberna como la propia Folly Tower. Paseé por el entorno, conversé con clientes habituales y recopilé fotografías de la torre desde diferentes ángulos, estudiando cómo sus líneas se recortan contra el horizonte rural. La Folly Tower —levantada en los años 30 por el excéntrico Lord Berners— es conocida por su aire misterioso y su silueta inconfundible. Mi objetivo era que cualquier habitante o visitante de Faringdon, al ver el logotipo, reconociese de inmediato ese referente tan especial para la comunidad.',

    // → Datos de sección 3 (before/after)
    bocetoDescription: 'Con la inspiración clara, realicé varios bocetos a mano alzada, jugando con la geometría de la torre y la simplicidad de las líneas. Opté por un enfoque minimalista, usando solo los elementos esenciales para sugerir la estructura y las almenas, integrando la imagen dentro de un círculo para evocar el formato de un sello o tampón tradicional de pub inglés. En paralelo, seleccioné una tipografía limpia y potente, cercana a la usada en la cartelería exterior de la taberna, asegurando coherencia con la identidad visual previa y facilitando el reconocimiento de marca. Ya en Illustrator, refinar los trazos fue clave para transmitir una personalidad propia: líneas irregulares y gruesas que combinan lo clásico con un toque contemporáneo. El resultado es un logotipo circular, perfectamente usable como sello, avatar digital o estampado en productos y uniformes.',
    bocetoImg: '/assets/images/folly_boceto.jpg',
    finalImg: '/assets/images/folly_final.jpg',

    // → Datos de sección 4 (mockups y conclusiones)
    conclusionText: 'Para potenciar la visibilidad del local y su actividad social, también diseñé el póster promocional de los “Tuesdays Tipple”, un evento semanal con aire veraniego: atardecer en la playa, palmeras, máscaras tiki y el logotipo de The Folly Inn destacando en el centro del sol poniente. El objetivo era atraer a público nuevo y fidelizar a la clientela habitual, apostando por una estética divertida y actual. El cliente recibió los archivos vectoriales del logotipo y las imágenes adaptadas a todos los formatos necesarios (impresión, redes, web, polos y camisetas). Como remate, se produjeron polos personalizados en negro y rosa para el equipo de dardos de la taberna, reforzando la nueva imagen de The Folly Inn y su sentido de comunidad. ¿Buscas un logotipo auténtico, memorable y que conecte con la historia de tu negocio? Contacta conmigo y crea una marca con identidad propia y carácter local.',
    mockups: [
      '/assets/images/folly_mockup1.jpg',
      '/assets/images/folly_mockup2.jpg',
      '/assets/images/folly_mockup3.jpg',
    ]
  },
  // ... Añade mas proyectos
  ];

  constructor(private route: ActivatedRoute, private theme: ThemeService) {}

  ngOnInit(): void {
    // 1. Recuperamos el slug de la URL. Ej: "selu-rizo-fotografia"
    this.slug = this.route.snapshot.paramMap.get('slug') || '';

    // 2. Buscamos en PROJECTS_DATA la entrada cuyo slug coincida
    this.project = this.PROJECTS_DATA.find(p => p.slug === this.slug);

    if (!this.project) {
      // Si no existe, podrías redirigir al 404, o volver al portfolio:
      // this.router.navigate(['/portfolio/branding']);
      console.warn(`No se encontró el proyecto con slug: ${this.slug}`);
    }
  }

  ngAfterViewInit(): void {
    // Animación de aparición para cada sección (fade + slide-up)
    gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',  // inicia cuando la sección entra en viewport
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    // Revelado tipo "mask" para imágenes clave
    gsap.utils.toArray<HTMLElement>('.reveal-img').forEach((img, i) => {
      gsap.from(img, {
        opacity: 0,
        scaleX: 0, transformOrigin: 'left center', // efecto barrido horizontal
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 80%', 
          toggleActions: 'play none none none',
          once: true
        }
      });
    });

    // Indicador de progreso: actualizar currentSection al entrar en cada bloque
    gsap.utils.toArray<HTMLElement>('section[id]').forEach((sec, index) => {
      ScrollTrigger.create({
        trigger: sec,
        start: 'top center',
        onEnter: () => { this.currentSection = index + 1; },
        onEnterBack: () => { this.currentSection = index + 1; }
      });
    });
  }

  ngOnDestroy(): void {
    // Limpiar triggers de ScrollTrigger al salir de la página
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  // Método para el toggle desde el Navbar
  toggleTheme() {
  this.isDarkMode = this.theme.toggle();
  }
}
