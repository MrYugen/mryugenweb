import { Injectable } from '@angular/core';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string; // Categoría principal para el filtro
  tags: string[];   // Etiquetas secundarias
  excerpt: string;
  content: string;  // HTML
  date: string;
  author: string;
  image: string;
  readTime: string; // Nuevo: Tiempo de lectura
  featured?: boolean; // Nuevo: Para destacar en el Bento Grid (ocupa más espacio)
}

@Injectable({
    providedIn: 'root'
})
export class BlogService {

  // Categorías para el filtro del frontend
  public categories = [
    'Todos',
    'Juegos de Mesa',
    'Diseño Gráfico',
    'Ilustración Digital',
    'Branding',
    'Automatización',
    'UX/UI',
    'Escritura'
  ];

  private posts: BlogPost[] = [
    // 1. COUPLE CLASH (Destacado)
    {
      id: 1,
      slug: 'mi-odisea-creativa',
      title: 'El inicio de todo: Mi Odisea Creativa con Couple Clash',
      category: 'Couple Clash',
      tags: ['Game Design', 'Emprendimiento', 'UK'],
      excerpt: 'Cómo empezó todo en un país remoto y cómo una idea evolucionó hasta convertirse en Couple Clash. La historia real detrás de los cartones.',
      content: `<h2><strong>HABLANDO DEL TIEMPO</strong></h2>
        <br />
        <h3><strong>El tiempo es una ilusión…</strong></h3>
        <p>El tiempo… es algo en lo que suelo pensar continuamente, el tiempo… Me fascina lo relativo del tiempo. Un instante puede convertirse en un recuerdo eterno, y una espera de minutos puede sentirse como una eternidad.</p>
        <p><strong>O como vuela cuando te diviertes con un buen juego de mesa.</strong> Horas que se evaporan entre risas, jugadas maestras y pequeñas discusiones por quién lleva razón. Pero cuando el tiempo se convierte en esfuerzo, dedicación y persistencia… cada segundo cuenta.</p>
        <br />
        <h3><strong>CINCO AÑOS, UNA VIDA ENTERA</strong></h3>
        <br />
        <p>Hace cinco años di un salto al vacío. Dejé mi zona de confort con <strong>una maleta llena de sueños y otra de incertidumbre</strong>. Me fui a un país desconocido, con poco dinero, sin conocer a nadie, sin hablar el idioma y con la experiencia justa para encontrar trabajo en cocina.</p>
        <figure class="my-6">
          <img src="assets/images/blog/main_blog_post1.jpg" alt="Llegando de emigrante a UK por primera vez" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Un nuevo comienzo aguarda</em></figcaption>
        </figure>
        <p>Como decimos en mi país: <strong>me fui con una mano delante y otra detrás</strong>. Tenia dos meses para encontrar mi nueva zona de confort.</p>
        <p><em>No fue fácil</em>. Hubo miedos e inseguridades, dudas y muchos momentos en los que quise tirar la toalla. Pero también hubo encuentros fascinantes, trabajos inolvidables (y otros que prefiero olvidar) y, sobre todo, <strong>aprendizaje</strong>. Cada error fue un maestro y cada pequeño logro, una victoria personal.</p>
        <br />
        <h3><strong>EL PROYECTO QUE LO CAMBIÓ TODO</strong></h3>
        <br />
        <p>Durante esos cinco años decidí dedicar la mayor parte de mis ratos libres a liberar mi parte creativa en un proyecto personal. Quería algo que me retara y que mezclara mis pasiones: diseño, juegos, humor, estrategia y originalidad. Y después de darle vueltas y pasar por un proceso de ensayo y error, una antigua idea vino a mi mente y ha continuado hasta ahora, así nació <strong>Couple Clash</strong>.</p>
        <p>¿Crees que desarrollar un juego es solo tener una idea divertida? ¡Ojalá fuera tan sencillo!</p><br />
        <p><strong>Diseñar un juego de mesa implica:</strong></p>
        <ul>
          <li> - Estrategia y planificación</li>
          <li> - Diseño visual y branding</li>
          <li> - Pruebas y ajustes interminables</li>
          <li> - Marketing y storytelling</li>
        </ul><br />
        <figure class="my-6">
          <img src="assets/images/blog/infografia_boardgames.jpg" alt="Estrategia, Branding, Playtesting y Marketing" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Pilares del diseño de juegos de mesa</em></figcaption>
        </figure>
        <p>Requiere sacar lo mejor de ti en ámbitos muy distintos. Lo mejor es que esas habilidades se te quedan para la vida: créeme, es más valioso de lo que parece.</p>
        <br /><blockquote>
          <p><em>Nota rápida para ponerte en contexto:</em> <em>Couple Clash</em> es un <strong>juego de cartas para dos jugadores</strong> que convierte un “pique” de pareja en un duelo estratégico y con humor. Ganas cuando haces que tu rival se quede sin <strong>puntos de Disculpa</strong>.</p>
        </blockquote><br />
        <p>Cada carta, cada mecánica y cada partida de prueba ha sido un ladrillo más en este castillo de sueños.</p>
        <figure class="my-6">
          <img src="assets/images/blog/Ensayo-y-error.jpg" alt="proceso de ensayo y error en el grafismo de Couple Clash" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Un proceso de ensayo y error constante hasta ver los resultados. En la imagen se puede ver parte de la evolución del diseño, desde los concept art hasta el producto final.</em></figcaption>
        </figure>
        <figure class="my-6">
          <img src="assets/images/blog/couple_mockup2.jpg" alt="Couple Clash está en una fase muy avanzada de desarrollo" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Hoy Couple Clash está en una fase muy avanzada de desarrollo. Muy pronto podrás apoyarlo en crowdfunding y tener tu copia en casa.</em></figcaption>
        </figure>
        <br />
        <h3><strong>NO SOY UN GURÚ, SOLO UN VIAJERO EN EL TIEMPO</strong></h3><br />
        <p>Y hasta aquí lo más lógico es que te preguntes: <strong><em>¿Y quién puñetas es este tío que ni se ha presentado y se pone tan intenso?</em></strong></p>
        <p>Touché. Lo siento </p><br />
        <p>¡Hola! Soy Miguel, aunque por aquí me leerás como <strong>Mr. Yugen</strong>. Me apasionan el diseño, la ilustración, los juegos de cartas y un largo etcétera de aficiones. En futuras entradas <strong>me iréis conociendo un poco mejor</strong>: te enseñaré colecciones, intereses y, sobre todo, <strong>aprenderemos cosas juntos</strong>.</p>
        <p>No estoy aquí para venderte una guía para el éxito, un manual de superación o un curso con los mandamientos del creador de juegos. Mi objetivo es <strong>compartir mi experiencia</strong> y el fruto de mis esfuerzos: <em>Couple Clash.</em> Si algo de lo que he aprendido durante estos años puede ayudarte a dar el salto y crear tu propio juego (o a poner en marcha esa idea creativa que llevas aparcando), <strong>me daré por satisfecho</strong>.</p><br />
        <p>Este blog encontrarás:</p><br />
        <ul>
          <li><strong> - Los aciertos y errores</strong> en el desarrollo de <em>Couple Clash</em>. Con ejemplos y procesos de cada paso. No cometas los mismos errores que yo.</li>
          <li><strong> - Consejos prácticos</strong> para creadores de juegos de mesa. No perdáis vuestro tiempo en fases innecesarias. Sigue estos pasos para no volverte loco.</li>
          <li><strong> - Anécdotas divertidas y desgracias</strong>. También se aprende riéndose de uno mismo.</li>
          <li><strong> - Avances exclusivos</strong> del juego y su proceso creativo. <em>Couple Clash</em> está muy cerca de ver la luz.</li>
        </ul>
        <p>No puedo esperar a enseñarte más.</p>
        <br />
        <h3><strong>¿TE APUNTAS A LA AVENTURA?</strong></h3><br />
        <p>Si has llegado hasta aquí, <strong>gracias</strong>. La presentación siempre es lo más aburrido; ahora empieza lo bueno. Abre la mente, desempolva esa idea que llevas tiempo posponiendo y prepárate para un viaje creativo.</p>
        <p>Aquí, en este rincón del tiempo, empezamos una nueva odisea. </p>
        <br />
      `,
      date: '2024-12-18',
      author: 'Mr. Yugen',
      image: 'assets/images/blog_post1.webp', 
      readTime: '8 min',
      featured: true // IMPORTANTE: Saldrá grande
    },
      // 2. ERRORES COMUNES AL DISEÑAR UN JUEGO DE MESA (Parte 1)
    {
      id: 2,
      slug: 'errores-juego-parte-1',
      title: '#2 Errores comunes al diseñar un juego de mesa (Parte 1)',
      category: 'Couple Clash',
      tags: ['Game Design', 'Emprendimiento', 'UK'],
      excerpt: 'Desde mi desgracia personal, te cuento los errores más comunes al diseñar un juego de mesa y cómo evitarlos.',
      content: `<h2><em>Una guía con un toque de desgracia personal</em></h2>
        <br />
        <p><strong>¿Qué puede salir mal al diseñar un juego de mesa?</strong> La respuesta corta: <strong>TODO</strong>. La respuesta larga: acompáñame en esta travesía donde los errores, los despistes y los dolores de cabeza están incluidos en el paquete “creador de juegos”. <br />Si estás pensando en crear tu propio juego, te adelanto que no todo es épico como en una partida de <em>Dungeons &amp; Dragons</em>. A veces, es más parecido a una comedia de errores.</p>
        <figure class="my-6">
          <img src="assets/images/blog/falta_de_creatividad.jpg" alt="Creativo frustrado por la falta de ideas" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Hay días en los que no te sale nada, no te frustres, nos pasa a todos continuamente.</em></figcaption>
        </figure>
        <p>Pero tranquilo, aquí estoy yo para contarte mis palmazos y así evitarte algunos. <strong>Durante estos cinco años creando Couple Clash</strong>, he tropezado, me he caído y me he vuelto a levantar (siempre con una gran taza de café en la mano y ojeras nivel “oso panda”).<br /> Aquí te dejo algunos de los errores más comunes que cometí y cómo puedes evitarlos. Además de ser un guía del orden en el que abordar un proyecto de este tipo.</p>
        <br />
        <h3><strong>1. QUERER DISEÑAR “EL JUEGO PERFECTO” DESDE EL INICIO</strong></h3><br />
        <p><strong>Mi error</strong>: Cuando empecé con <em>Couple Clash</em>, quería que fuera el “juego de cartas definitivo”. Mecánicas revolucionarias, arte impecable, reglas claras y complejas a la vez. ¡Todo al mismo tiempo!</p>
        <p>Me vi escribiendo todo lo que se me venía a la cabeza; en el fragor de la emoción mi idea se volvía cada vez más grande y complicada, y mi mente solo repetía que no había problema: soy un genio, puedo con todo.</p><br />
        <p>Como resultado: una libreta llena de mil ideas y reglas incoherentes, y noches sin dormir pensando en cómo mezclarlo todo, para darme cuenta de que había empezado mal.</p>
        <figure class="my-6">
          <img src="assets/images/blog/Caos_vs_simpleza.jpg" alt="Libreta que ilustra el Caos vs Simplicidad" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>A veces, menos es más.</em></figcaption>
        </figure>
        <p>Vuelta a empezar: <em>¿podía conseguir lo mismo con menos?</em> Tuve que simplificar mucho, descartar ideas y centrarme en objetivos. Quería algo que fuera divertido, estratégico y muy rejugable sin perder un poquito de lo que buscaba al principio.</p><br />
        <p>Para ayudarme a focalizar lo que buscaba que definiera mi juego en el futuro, <strong>hice una lista de mis juegos favoritos</strong> con una temática similar a la que yo quería para el mío y <strong>escribí los pros y los contras</strong> de dichos juegos. No estamos buscando copiar ni nada similar. Solo buscar virtudes y deficiencias en otros productos que realmente nos gustan y funcionan; ponernos críticos como cuando un redactor de videojuegos escribe una reseña del último <em>Final Fantasy</em> y juzga cada apartado del juego: <strong>Gráficos, Jugabilidad, Diversión, Originalidad…</strong> <br /><em>¿Qué le hizo poner dicha nota en cada apartado? <br />¿Cuáles ha decidido que son los puntos fuertes y flacos del juego?</em></p><br />
        <p>Yo quería un juego de mesa de cartas, así que <em>Magic: The Gathering</em> <em>(virtud: sinergias y estrategia)</em> fue el primero de mi lista; también estuvieron <em>Bang!</em> <em>(virtud: simplicidad profunda)</em> y <em>Pokémon TCG</em> <em>(virtud: uso de tipos)</em>, entre otros muchos, o juegos de móviles como <em>Hearthstone</em> <em>(virtud: estilo, carisma, equipos)</em> o <em>Slay the Spire</em> <em>(virtud: gestión de los turnos)</em>. He ido quitando y añadiendo con el tiempo.</p>
        <p>Hazlo con tus favoritos, <strong>ponte crítico y tendrás una lista de virtudes que querrás aplicar a tu juego y contras o deficiencias que querrás evitar</strong>.</p><br />
        <p>Simplifica la lista, quédate con las virtudes más importantes para ti, añade las ideas y reglas que tenías y dale una vuelta a ese cóctel y a cómo todo podría funcionar. ¿Lo tienes?</p><br />
        <p>Vale, recapitulemos.</p>
        <ul>
          <li>- Sabes qué <strong>tipo de juego</strong> quieres crear y tienes unas <strong>reglas básicas</strong> que te gustaría aplicar.</li>
          <li>- Tienes <strong>ideas originales</strong> varias para aplicar a tu juego y hacerlo original y diferente.</li>
          <li>- Has hecho una <strong>lista de tus juegos favoritos</strong> que pertenezcan a la categoría donde pondrías el tuyo.</li>
          <li>- Has anotado <strong>pros y contras</strong> <em>(virtudes y defectos)</em> de dichos juegos. <em>(La lista de contras son objetivos a evitar para tu juego).</em></li>
          <li>- Simplifica la lista de virtudes: <strong>elige de dos a cinco virtudes de la lista</strong>; tu juego debe intentar cumplirlas al final.</li>
          <li>- Añade tus ideas originales a la lista; céntrate en crear unas reglas que podrían funcionar con dicha lista.</li>
          <li>- Con los objetivos claros, déjate llevar por la imaginación y <strong>mézclalo</strong> todo en tu cabeza.</li>
        </ul><br />
        <figure class="my-6">
          <img src="assets/images/blog/Recapitulacion.jpg" alt="Checklist de diseño de juegos" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md">
          <figcaption><em>El esqueleto inicial de tu futuro juego empieza aquí</em></figcaption>
        </figure>
        <p><em>¿Lo ves?</em></p><br />
        <p>Ahora deja todo a un lado, viene la siguiente parte: si este ha sido el esqueleto del proyecto, ahora toca darle el alma.</p><br />
        <p><strong>Lección aprendida</strong>: El “juego perfecto” no existe. Empieza con una idea simple y desarróllala poco a poco. Piensa en lo que te gusta como jugador e intenta que tu futuro juego también lo transmita. Cuando tengas tu idea bien perfilada, piensa en una versión jugable con los elementos básicos. Mejorará con el tiempo y las pruebas.</p>
        <blockquote><br />
          <p><em>“Recuerda: es más fácil pulir una piedra pequeña que una montaña.”</em></p>
        </blockquote>
        <br />
        <h3><strong>2. NO DEFINIR BIEN LA TEMÁTICA DESDE EL PRINCIPIO</strong></h3><br />
        <p><strong>Mi error</strong>: Cambié la temática de <em>Couple Clash</em> más veces que de camiseta en verano. Porque, claro, el nombre del juego —al menos en mi caso— vino cerca del final del proceso. Si tienes un nombre claro en tu cabeza, puede que te sea más sencillo.</p><br />
        <p>Yo solo sabía que quería hacer un juego de mesa y que fuera de cartas. Tenía mi manual de reglas básico y quería centrarme en que fuera la mejor experiencia para dos jugadores, aunque en el futuro pudieran jugar más personas. Vamos, que si mi novia y yo queremos jugar a algo, que mi juego sea la primera opción en nuestras cabezas. Difícil… que me gusta un reto.</p><br />
        <p><strong>¿Hago un juego <em>cozy</em> de cositas lindas?</strong> —A mi novia le gustan los muñecos espachurrables.</p>
        <p><strong>¿Un juego de supervivencia en pareja?</strong> —Para demostrar que el amor te salva de todo.</p>
        <p><strong>¿O un “battle royale” doméstico?</strong> —Que solo quede el gato…</p>
        <p><strong>¿Lo ambiento en la Edad Media, en el futuro, en un mundo de cosas lindas imaginario…?</strong></p><br />
        <figure class="my-6">
          <img src="assets/images/blog/Ideas.jpg" alt="Ilustraciones sobre ideas de ambientacion para juegos" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>No te vuelvas loco, puedes dejar la imaginación volar, pero define la temática desde el principio antes de continuar</em></figcaption>
        </figure>
        <p>Y después de decidir que mi juego sería un duelo de magos poderosos cabreados, para luego cambiarlo a una pareja que debe sobrevivir a catástrofes naturales y, finalmente, plantearme un juego de tener y cuidar gatitos (todos sabemos que los gatitos venden mucho), mi mente desenterró una idea de hace mucho tiempo, un tiempo en el que mi yo adolescente, junto a dos amigos, soñamos con hacer un juego que simulara una discusión de pareja. Algún día os contaré la historia de por qué nos vino esa idea a la cabeza. El tema es que al final todo quedó en nada en cuestión de días; éramos jóvenes e inexpertos y no sabíamos qué hacer con nuestra vida.</p><br />
        <p>Pero para mí no quedó en el olvido; allí estaba mi yo de 2019, rescatando dicha temática tan original —<em>¿quién no ha discutido con su pareja alguna vez?</em>— para, más de diez años después, hacerla mía hoy y guiar el rumbo de mi juego.</p>
        <figure class="my-6">
          <img src="assets/images/blog/idea_antigua.png" alt="Una discusion de pareja fué la idea original de Couple Clash" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Cualquier cosa o vivencia puede convertirse en una idea para tu juego</em></figcaption>
        </figure>
        <p>Por eso debes tener en cuenta que <strong>tu juego irá evolucionando continuamente</strong> a lo largo del tiempo. <strong>Tener una temática y ambientación claras y definidas te ayudará</strong> a trabajar mejor tus ideas, las mecánicas y a fijar las virtudes de tu juego con más facilidad.</p><br />
        <p>Y con el esqueleto y el alma de tu juego ya definidos, toca ponernos manitas: vamos a crear el primer prototipo; es hora de que otras personas juzguen nuestra idea antes de continuar. Al fin y al cabo, esto lo hacemos por los jugadores, ¿no?</p><br />
        <p><strong>Lección Aprendida:</strong> Define la temática clara y tempranamente. La temática guiará tus mecánicas, el diseño del juego y hasta las futuras ilustraciones. Si dudas, pregúntate: <strong>“¿Qué experiencia quiero que vivan los jugadores?”</strong></p><br />
        <em>"La temática es como el alma del juego; si no está clara, el juego se siente vacío."</em><br /><br />
        <p>Y hasta aquí la parte 1 de la guía de <strong>errores comunes al diseñar un juego y cómo evitarlos.</strong></p>
        <p>En breve tendrás una segunda parte cargadita de contenido: tres grandes consejos más, en un orden que quizás no esperes, que para mí son imprescindibles de conocer antes de lanzarte a la odisea de crear tu propio juego de mesa.</p><br />
        <p><strong>¡No te pierdas lo que viene!</strong> Suscríbete y acompáñame en esta aventura de creación, risas y... ¿por qué no? Unas cuantas discusiones bien llevadas.</p>
        `,
      date: '2024-12-13',
      author: 'Mr. Yugen',
      image: 'assets/images/blog_post2.jpg', 
      readTime: '8 min',
      featured: false
    },
    // 3. ERRORES COMUNES AL DISEÑAR UN JUEGO DE MESA (Parte 2)
    {
      id: 3,
      slug: 'errores-juego-parte-2',
      title: '#3 Errores comunes al diseñar un juego de mesa (Parte 2)',
      category: 'Couple Clash',
      tags: ['Game Design', 'Emprendimiento', 'UK'],
      excerpt: 'El gran final de las “desgracias”, los últimos errores más habituales en la creación de un juego de mesa. ¡Que no te pase lo mismo!',
      content: `
        <h2><em>La guía definitiva con un toque de desgracia personal (Parte 2)</em></h2>
        <br /> 
        <p>Y aquí volvemos, con la segunda parte de nuestra Guía de <strong>Errores Comunes al Diseñar un Juego y Cómo Evitarlos.</strong></p>
        <p>En el anterior artículo estuvimos creando el esqueleto de nuestro juego y dándole una ambientación que le dota de alma.</p>
        <p>Es hora de continuar y no precisamente con el diseño del juego, que sería lo lógico en este punto. Ahora toca exponerse y seguir puliendo los puntos anteriores aunque pensemos que están perfectos.</p>
        <p>Por lo tanto, ha llegado el momento de hablar de mi siguiente error:</p>
        <br />
        <h2><strong>3. IGNORAR A LOS JUGADORES DURANTE EL PROCESO</strong></h2>
        <br />
        <p><strong>Mi Error</strong>: Creía que mis ideas eran brillantes y no necesitaba feedback. Total, ¿quién iba a entender mejor mi juego que yo? (Respuesta: <strong>todo el mundo menos yo</strong>).</p>
        <br />
        <p>Y sí, llegados a este punto yo seguí con el diseño. Y hasta pasado un tiempo no entendí que lo había hecho mal.</p>
        <p>Verás, estamos en un punto en el que podemos <strong>construir nuestro primer prototipo de juego</strong>. Esa versión cutre, barata, hecha a mano, sin arte ni diseño, con solo lo necesario para jugar. Y sí, es bueno que te pares aquí y lo hagas. Piénsalo, somos creadores, queremos crear juegos increíbles, pero <strong>nuestros juegos están destinados a los jugadores</strong>. Si a ellos no les gusta, nuestro juego se quedará en algo que <em>“quiso pero no pudo ser”</em>. A la gente deben gustarle nuestras ideas y, al igual que el redactor de videojuegos que pusimos de ejemplo en el artículo anterior, las personas deben opinar sobre las mecánicas y reglas del juego que estamos creando (aunque no sean expertos e incluso nunca hayan jugado a un juego similar al tuyo).</p>
        <figure class="my-6">
          <img src="assets/images/blog/testeo_con_jugadores_alegres.jpg" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Sesión de playtesting con notas, post-its y prototipo sobre la mesa. Miralos que contentos están todos...</em></figcaption>
        </figure>
        <figure class="my-6">
          <img src="assets/images/blog/testeo_con_jugadores_serios.jpg" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>...cuando lo normal es que los jugadores tengan esta cara y entiendan mas bien poco.</em></figcaption>
        </figure>
        <p>Cuando afronté este punto, parte del diseño básico del juego estaba hecho (colores, ilustraciones temporales cutres hechas con IA, fichas elaboradas, logo provisional del juego, tableros…). Había perdido meses centrándome en la parte gráfica sin estar seguro al 100% de que el juego y las mecánicas funcionaban, que los textos de las cartas tenían sinergia y que todo estaba equilibrado. <strong>Pensé que todo estaba bien y que, si la gente veía algo bonito en mesa, iban a valorarlo más y mejor y no iban a rehuir de probarlo</strong>.</p>
        <br />
        <p>Craso error. El juego cambió mucho. Se reescribieron los efectos de muchas cartas varias veces para crear equilibrio, se cambiaron muchos equipos, se modificaron nombres de cartas, se adaptaron y crearon nuevas reglas, se modificó el uso de los tokens y mil cosas más que, al final, hacían que el juego tuviera más sentido y cobrara una vida que no tenía antes.</p>
        <p>Pero hacer esos cambios me llevó más tiempo del normal por culpa de que todo estaba previamente diseñado y quería seguir manteniendo la estética en los cambios. <strong>Es mejor que todo esté muy básico y poder probar las sugerencias rápidamente</strong>.</p>
        <br />
        <p>Y todos estos cambios vinieron de escuchar a otros jugadores, esas personas que desean invertir parte de su tiempo libre en probar el prototipo de tus sueños y darte sus consejos, que pueden ser más o menos acertados. <strong>El equilibrio está en cuestionárselo todo y pensar cada detalle</strong>, en ir más allá siempre teniendo en mente que los jugadores obtengan la mayor diversión posible.</p>
        <br />
        <p><strong>En el futuro hablaremos de</strong> nuevo sobre los prototipos iniciales y <strong>cómo construir a mano la mejor maqueta</strong>, también sobre las <strong>preguntas que hay que realizar a los beta testers</strong> que prueben nuestro juego en su fase inicial para obtener la máxima información de calidad posible en cada partida. Pero por ahora, sigamos con el siguiente punto, un punto fundamental para todo juego y que, desgraciadamente, te hará realizar más cambios.</p>
        <br />
        <blockquote>
          <p><em>“El juego no es para ti, es para ellos. Si ellos se divierten, tú ganas.”</em></p>
        </blockquote>
        <br />
        <h2><strong>4. DECISIONES DE DISEÑO APRESURADAS</strong></h2>
        <br />
        <p><strong>Mi Error</strong>: “¿Por qué no meter 10 tipos de tokens, 6 miniaturas, 4 tableros, 200 cartas especiales y dados personalizados desde el inicio?” ¡Gran idea!… hasta que te das cuenta de que el juego se ha convertido en una pesadilla logística y una ruina económica.</p>
        <br />
        <p>Me pasó justo eso. Me emocionaba tanto con cada idea nueva que quería meterlo todo de golpe, como si en la primera versión tuviera que estar ya listo para competir con los grandes del mercado. ¿El resultado? Un prototipo con más accesorios que la maleta de <em>Mary Poppins</em>: fichas de colores que nadie entendía, tableros que no servían para nada, miniaturas sin sentido y un manual que parecía escrito por un ingeniero de cohetes.</p>
        <br />
        <p>Y lo peor es que, cuando quería cambiar una sola mecánica, tenía que rehacer medio set de componentes. En vez de avanzar, me pasaba horas imprimiendo, recortando y corrigiendo detalles que ni siquiera sabía si funcionarían. Aprendí por las malas que <strong>añadir cosas “porque molan” es la manera más rápida de bloquear tu propio proyecto</strong>. Al final, muchas de esas piezas tan espectaculares terminaron en una caja olvidada, mientras lo esencial del juego se abría camino a base de sencillez y pruebas.</p>
        <figure class="my-6">
          <img src="assets/images/blog/decisiones_apresuradas.jpg" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>Es fácil crear un caos logístico al querer incluir muchos componentes o mecánicas en tu juego solo por hacerlo más "chulo"</em></figcaption>
        </figure>
        <p>Y, por supuesto, como se aprende más tarde, <strong>a más componentes tenga tu juego, más caro es crearlo</strong>. Al final, el factor económico y el presupuesto cobran una importancia muy relevante en tu proyecto, y agradecerás que los costes no sean muy elevados al haber reducido los componentes y accesorios a los estrictamente necesarios al inicio. <strong>Utiliza el exceso de esas ideas y lo retirado inicialmente como el combustible de futuras expansiones o DLC</strong> de tu juego que lo harán crecer hasta ese diseño final que tienes en la cabeza. Esto te da tiempo para fragmentar el trabajo y el proyecto en porciones más accesibles para ti y ganas tiempo para pulir aún más las ideas.</p>
        <br />
        <p><strong>Lección Aprendida</strong>: Ve paso a paso. Cada componente que añades complica el diseño y aumenta los costes. Añade detalles solo cuando estés seguro de que aportan valor real al juego.</p>
        <br />
        <blockquote>
          <p><em>“Menos es más. Y también es más barato.”</em></p>
        </blockquote>
        <br />
        <h2><strong>5. SUBESTIMAR EL TIEMPO Y EL ESFUERZO</strong></h2>
        <br />
        <p><strong>Mi Error</strong>: “¡Esto lo tengo listo en seis meses!” dijo un ingenuo Mr. Yugen en 2019. Cinco años después, aquí estamos.</p>
        <br />
        <p>Lo subestimé todo: el tiempo de testeo, el de rediseñar cartas, el de volver a equilibrar mecánicas… incluso el de convencer a amigos y familiares para que jugaran una partida más cuando ya me querían tirar las cartas a la cabeza. Cada cambio que pensaba que me llevaría un par de tardes terminaba convirtiéndose en semanas. Y cada vez que resolvía un problema, aparecían tres nuevos como si fueran jefes secretos de un videojuego.</p>
        <br />
        <p>La verdad es que <strong>diseñar un juego</strong> no es solo tener una buena idea y ponerla en papel, <strong>es una prueba de resistencia</strong>. Habrá momentos en que avances a toda velocidad y otros en que sientas que el proyecto no se mueve ni un milímetro. Lo importante es no perder de vista que cada ajuste, cada partida de prueba y cada error corregido son pasos reales hacia adelante. El tiempo nunca fue tu enemigo: es la herramienta que pule tu idea hasta convertirla en algo que merezca llegar a la mesa.</p>
        <br />
        <figure class="my-6">
          <img src="assets/images/blog/subestimar_el_tiempo.jpg" loading="lazy" decoding="async" class="w-full h-auto rounded-2xl shadow-md" />
          <figcaption><em>El tiempo es un recurso valioso en el diseño de juegos. No te apresures ni lo subestimes.</em></figcaption>
        </figure>
        <br />
        <p><strong>Lección Aprendida</strong>: Diseñar un juego lleva tiempo. Mucho tiempo. No te frustres si el progreso es lento. Celebra cada pequeño avance y no te pongas plazos imposibles.</p>
        <br />
        <p><em>“El éxito es un maratón, no un sprint. Y a veces te tropiezas.”</em></p>
        <br />
        <h2><strong>CONCLUSIÓN: RÍETE DE TUS ERRORES, LEVÁNTATE Y SIGUE ADELANTE</strong></h2>
        <br />
        <p>Diseñar <em>Couple Clash</em> fue una odisea llena de momentos absurdos, decisiones cuestionables y risas histéricas (a veces por no llorar). Pero cada error me enseñó algo valioso. Si estás en el proceso de crear un juego, <strong>no te desesperes</strong>. Tropezar es parte del viaje. Levántate, sacúdete el polvo y sigue adelante.</p>
        <br />
        <p>¡Y si algún día tu juego llega a la mesa de otros jugadores, todo habrá valido la pena!</p>
        <br />
        <p><strong>PRÓXIMAMENTE EN EL BLOG:</strong> “<strong>Cómo una Discusión de Pareja Inspiró <em>Couple Clash</em></strong>”.</p>
        <br />
        <p><strong>¡Suscríbete y acompáñame en esta aventura de creación, risas y caos controlado!</strong></p>
        <figure class="my-6">
          <img src="assets/images/blog/banner_logos.jpg" alt="Mr. Yugen/Ikigais Games/Couple Clash, Suscribete" class="rounded">
        </figure>
      ` ,
      date: '2024-12-18',
      author: 'Mr. Yugen',
      image: 'assets/images/blog_post3.png',
      readTime: '8 min',
      featured: false
    },
    // 4. AUTOMATIZACIÓN (Técnico)
    {
      id: 4,
      slug: 'automatizacion-procesos-python',
      title: 'Automatiza tu aburrimiento: Scripts en Python para diseñadores',
      category: 'Automatización',
      tags: ['Python', 'Productividad', 'No-Code'],
      excerpt: '¿Cansado de renombrar 500 archivos a mano? Te enseño cómo gané 10 horas a la semana automatizando tareas repetitivas.',
      content: `
        <h2>¿Por qué automatizar?</h2>
        <p>Si lo haces más de tres veces, automatízalo. Esa es mi regla de oro...</p>
        <h3>El Script Mágico</h3>
        <pre><code class="language-python">import os
def renombrar_archivos():
    # Tu código aquí para salvar vidas
    print("Archivos renombrados con éxito")</code></pre>
        <p>Con este simple bloque, te ahorras horas de clic derecho + cambiar nombre.</p>
      `,
      date: '2025-01-10',
      author: 'Mr. Yugen',
      image: 'assets/images/blog/python_automation.jpg', // Placeholder
      readTime: '5 min',
      featured: true
    },
    // 5. BRANDING
    {
      id: 5,
      slug: 'psicologia-color-branding',
      title: 'Más allá del azul: Psicología del color en Branding',
      category: 'Branding',
      tags: ['Teoría del Color', 'Identidad Visual'],
      excerpt: 'El color no es solo estética, es emoción. Descubre cómo elegir la paleta perfecta para transmitir los valores de tu marca.',
      content: `<p>Lorem ipsum dolor sit amet...</p>`,
      date: '2025-01-15',
      author: 'Mr. Yugen',
      image: 'assets/images/blog/branding_colors.jpg',
      readTime: '6 min',
      featured: false
    },
    // 6. UX/UI
    {
      id: 6,
      slug: 'maquetacion-ux-ui-moderna',
      title: 'De Figma al Código: Buenas prácticas de Maquetación',
      category: 'UX/UI',
      tags: ['Figma', 'Angular', 'Tailwind'],
      excerpt: 'Cómo mantener la fidelidad del diseño al pasarlo a código. Tips para desarrolladores con ojo de diseñador.',
      content: `<p>El eterno conflicto entre diseñadores y desarrolladores se acaba hoy...</p>`,
      date: '2025-01-20',
      author: 'Mr. Yugen',
      image: 'assets/images/blog/ui_design.jpg',
      readTime: '10 min',
      featured: false
    },
    // 5. ILUSTRACIÓN
    {
      id: 7,
      slug: 'ilustracion-digital-procreate',
      title: 'Mi flujo de trabajo en Procreate: Del boceto al arte final',
      category: 'Ilustración Digital',
      tags: ['Procreate', 'iPad', 'Tutorial'],
      excerpt: 'Capas, máscaras y pinceles. Te enseño cómo organizo mis archivos para no volverme loco dibujando.',
      content: `<p>Procreate ha cambiado las reglas del juego...</p>`,
      date: '2025-02-01',
      author: 'Mr. Yugen',
      image: 'assets/images/blog/illustration_process.jpg',
      readTime: '7 min',
      featured: true
    },
     // 6. ESCRITURA
    {
      id: 8,
      slug: 'guia-escritura-creativa',
      title: 'Bloqueo del escritor: Cómo salir del folio en blanco',
      category: 'Escritura',
      tags: ['Storytelling', 'Creatividad'],
      excerpt: 'Técnicas para desbloquear tu creatividad cuando las musas están de vacaciones.',
      content: `<p>Escribir es reescribir. No tengas miedo al primer borrador de mierda...</p>`,
      date: '2025-02-05',
      author: 'Mr. Yugen',
      image: 'assets/images/blog/writing_tips.jpg',
      readTime: '4 min',
      featured: false
    }
  ];

  constructor() { }

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }

  // Nuevo: Obtener posts relacionados (excluyendo el actual)
  getRelatedPosts(currentSlug: string, category: string): BlogPost[] {
    return this.posts
      .filter(post => post.category === category && post.slug !== currentSlug)
      .slice(0, 2); // Devuelve máx 2
  }

  // Nuevo: Obtener categorías únicas dinámicamente si quisieras
  getCategories(): string[] {
    return this.categories;
  }
}