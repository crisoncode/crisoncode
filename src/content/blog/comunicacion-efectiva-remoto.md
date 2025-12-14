---
author: Cristian Estarlich
pubDatetime: 2025-12-14T10:00:00Z
title: Comunicación efectiva trabajando en remoto
postSlug: comunicacion-efectiva-trabajando-en-remoto
featured: false
draft: false
tags:
  - Trabajo remoto
  - Comunicación
  - Desarrollo profesional
description: Consejos y estrategias para mejorar la comunicación efectiva cuando trabajas en remoto.
---

# Introducción

Este post no pretende sentar cátedra de cómo deben comunicarse las personas.
De hecho, desde que empecé a interesarme por las dotes comunicativas y en esencia la comunicación
humana, me di cuenta de que es todo un mundo.
Por mencionar alguno de mis descubrimientos cuando empecé a investigar el tema:

En la antigua Grecia a los delincuentes se les juzgaba de forma colectiva en una plaza.
Una persona determinaba cuál era la condena frente al cargo por el que se le estaba juzgando
y otra trataba de defenderle delante del pueblo.
Era el pueblo quien decidía con base en quién hiciese mejor su papel.
Esas dos personas hoy en día son un abogado y un fiscal\
Pero en esos **teatros**, porque no hay otra forma de llamarlos,
eran teatros que decidían si una persona iba a ver el sol del mañana,
la humanidad descubrió el poder de la comunicación: cómo se puede hablar bien, argumentar mejor,
persuadir a las personas. No se trataba de tener simplemente la razón,
sino de instrumentalizar la comunicación como un arma.
Córax de Siracusa y su discípulo Tisias (siglo V a. C.),
vieron en esto un gran poder y a base de estudio + prueba/error crearon lo que hoy conocemos como **retórica**.
Fue muchos años después cuando el grandísimo Aristóteles (siglo IV a. C.)
la convirtió en una disciplina formal que los intelectuales de la época estudiaban.

Cuando descubrí esto me explotó la cabeza. Crearon un arte y un procedimiento comunicativo
para convencer a las personas de que tienen la razón y que es su forma la correcta de hacer las cosas.
Esto obviamente hoy en día es usado para muchas más cosas de las que creemos,
puesto que hay muchas evoluciones de la retórica: política, marketing, etc.
Pero todo tiene un procedimiento comunicativo muy muy definido.

En nuestro mundo, el de la programación, comunicarse es fundamental y mucho más complicado de lo que
pensamos al principio. Muchas veces trabajamos con problemas superabstractos
que hasta nos resulta difícil trasladar a otro ser humano,
por eso usamos diagramas o como lo llamo yo: dibujitos de cajitas,
básicamente porque nos resulta prácticamente imposible expresar lo que tenemos en la cabeza con palabras
(ahora ya no parece tan fácil comunicarse eh?).\
A esto hay que sumarle la barrera humana, el cómo tú te comunicas y cómo el resto lo percibe.
A veces te vas a comunicar para pedir ayuda, otra para explicar cómo has resuelto un problema
y otra para hacer un cambio en una tarea que va a cambiar el planning las siguientes 2 semanas.
Hay muchas, **muchas veces** en las que una mala comunicación ha llegado
a entorpecer proyectos de forma muy notable y otras en las que la comunicación efectiva ha hecho
que el proyecto salga a flote incluso antes de lo previsto.

Voy a tratar de daros mi visión de cómo la comunicación debe ser para que sea efectiva, y encima
lo vamos a complicar un poquito dado que este post va a estar enfocado en comunicarse en remoto,
que obviamente complica la comunicación **un poquito**.

> La mayoría de la gente no escucha con la intención de entender, escuchan con el objetivo de contestar -Stephen Covey

![Comunicación trabajando en remoto](/assets/comunicacion.jpg)

# Decide como comunicarte

> Más vale pensar dos veces que arrepentirse una

En un día de trabajo es prácticamente imposible que no tengas que comunicar absolutamente nada.\
Qué tal vas con tu tarea, posibles blockers, un meeting al que tienes que asistir,
un email que tienes que responder o una discusión técnica en un canal de Slack / Teams donde está participando medio equipo.
De hecho considero que cuando en 8 horas no has comunicado absolutamente nada, algo está fallando en tu forma de trabajar
(salvo excepciones, obvio).
La industria del software es team player, si a ti te gusta el single player puedes probar con algún título de Kojima.

¿Entonces por dónde empezar? ¿Cómo decido cómo comunicarme?

Para decidirnos los humanos por naturaleza necesitamos opciones,
así que vamos a hacer un poco de "cirugía" y disección sobre los distintos tipos de comunicación
(luego iré dando mis tips para cada uno, pero primero quiero mostraros los distintos ámbitos comunicacionales):

## Los tipos de comunicación

1. Por propósito y/o función
   - **Operacional**: El día a día: standups, blockers, preguntas técnicas rápidas, coordinación de tareas.
   - **Decisiones técnicas**: RFCs, ADRs (Architecture Decision Records), debates sobre arquitectura o enfoque técnico.
   - **Conocimiento**: Documentación, knowledge sharing sessions, code reviews como herramienta de aprendizaje.
   - **Contexto**: Por qué estamos haciendo algo, objetivos de negocio, prioridades, roadmap.
   - **Relacional**: 1-on-1s, feedback, team building, resolver conflictos.
2. Por velocidad y ciclo de feedback
   - **Síncronas**: Meetings, pair programming, urgencias.
   - **Asíncronas**: Slack, Teams, Confluence, emails.
3. Por público, dirección y alcance
   - **Horizontal**: Entre miembros del equipo.
   - **Vertical**: Managers, stakeholders.
   - **Cross-funcional**: Con producto, diseño, otros equipos.

Esto está genial Cristian, ¡qué guay! Hemos destripado la comunicación un poquito, pero...
![Archer - Cómo afecta esto a los gorgonitas](/assets/gorgonitas.jpg)

Cuando debas comunicar algo fíjate en esta enumeración e identifica cuál va a ser la forma más efectiva.

Para enseñaros un poco como funciona esto, vamos a crear tres situaciones típicas:

### **Situación A:**

Tengo una tarea donde estoy integrando un sistema de mailing nuevo que Marketing nos ha pedido.
En este mismo no me queda muy claro en qué formato quieren ciertos datos para luego hacer sus fantasías marketinianas.

¿Cómo comunico? O mejor aún: ¿qué propósito o función tiene esto?

    ✅ Aclarar qué datos se mandan a un third-party -> Entonces esto es una decisión técnica.

¿Cómo debe ser la comunicación? ¿Asíncrona o síncrona?

    ⏳ ¿Es muy urgente? Yo creo que no, puedo ir tirando hasta que respondan: comunicación asíncrona.

> Aquí ya tenemos datos clave, la comunicación será asíncrona, en otras palabras: por escrito.
> Esto es fundamental. No está de más que cuando tengas ese texto redactado se lo mandes a alguien de tu equipo
> para que haga double check. Si un developer no lo entiende, 100% seguro que marketing aún menos.

¿Quién hay involucrado?

    🫂 Podemos observar que esto va a ser una comunicación cross-funcional, dado que marketing está involucrado.

¿Consecuencias de la situación?

    ⛔ ¿Está en juego tu tarea? Llegado cierto punto no podrás proceder y quedará bloqueada: comunicación operacional.

Solución:

1. En el primer ciclo de la comunicación (hay ciclos sí, esto es asíncrono, todo lo asíncrono conlleva ciclos):
   - Se añade un comentario a Jira etiquetando a la persona responsable en marketing para que lo aclare.
   - Como esto tarde o temprano **será un blocker en tu tarea, es a su vez también comunicación de tipo operacional**. Se debe trasladar al equipo que estás a la espera de marketing (en la daily suele ser el momento, tal y como se describe en el punto 1.1). No olvides que es cross-funcional: comunicas dentro y fuera del equipo.
2. Segundo ciclo - Marketing te ha respondido y eso ya es tu primera victoria. Te han definido qué datos quieren.
   - Se comunica en tus reportes operacionales (daily).
   - Aquí ya tenemos lo que queríamos: decisiones técnicas. Importantísimo documentarlo y que quede constancia de ello. Pide que respondan siempre en el ticket de la tarea y tú luego lo traspasas a tu documentación técnica de Confluence. Esto es tu salvaguarda: si luego hay malentendidos, tú ya tienes el contrato por escrito.
3. Segundo ciclo Opción B - Marketing no está entendiendo qué puñetas quieres:
   - Aquí no dudes jamás. Cuando haya dudas o no se te entienda debes saltar a un ciclo de feedback mucho más corto: toca montar un meeting y explicárselo, asegúrate de que lo han pillado. Si vas a un meeting, prepáratelo: nada de ir "en bolas". Luego se reporta en Jira lo que se ha decidido.

### **Situación B:**

Llevas varios días trabajando en una feature y te has dado cuenta de que la solución que te propusieron en el refinement no escala. Has encontrado una alternativa mejor, pero implica cambiar el approach y probablemente añadir 2-3 días más al sprint.

¿Cómo comunico? O mejor aún: ¿qué propósito o función tiene esto?

    ✅ Proponer un cambio técnico que afecta al planning -> Esto es una decisión técnica + contexto (afecta a negocio/deadlines).

¿Cómo debe ser la comunicación? ¿Asíncrona o síncrona?

    ⏳ ¿Es urgente? Sí, bastante. Cuanto más tiempo pase, más código habrás escrito con el approach equivocado. Además, esto puede generar debate: comunicación síncrona.

> Aquí no te la juegues. Si mandas un mensaje de Slack diciendo "oye creo que esto no escala" vas a generar un hilo interminable de preguntas y malentendidos. Necesitas un meeting donde puedas explicar el problema Y tu solución alternativa.

¿Quién hay involucrado?

    🫂 Tu equipo técnico seguro, pero si hay impacto en fechas probablemente también tu tech lead o product owner: comunicación horizontal + vertical.

¿Consecuencias de la situación?

    ⛔ Si no comunicas a tiempo, vas a entregar algo que no funciona o vas a reventar el sprint en el último momento. Peor aún: si lo callas y explota después, la confianza del equipo en ti se resiente.

Solución:

1. Antes del meeting - Prepárate o muere:
   - Documenta el problema: qué pasa con la solución actual y por qué no escala. Con datos si los tienes, con un diagrama si ayuda.
   - Documenta tu alternativa: qué propones, por qué es mejor, qué trade-offs tiene.
   - Estima el impacto: cuánto tiempo extra, qué tareas se ven afectadas.
   - **No vayas al meeting solo con el problema. Ve con la solución.**
2. El meeting:
   - Explica el problema primero, asegúrate de que lo entienden.
   - Presenta tu alternativa y deja espacio para que opinen.
   - Si hay consenso, genial. Si no, al menos has sembrado la duda y se puede iterar.
3. Post-meeting:
   - Documenta la decisión en el ticket o en un documento si es algo gordo.
   - Comunica en la daily el cambio de approach y el impacto en el sprint.
   - Si el PO no estaba en el meeting, asegúrate de que se entera del cambio de fechas.

### **Situación C:**

Un compañero del equipo lleva varias semanas entregando PRs con bugs recurrentes y código que no sigue los estándares. Esto está afectando al equipo porque otros tienen que dedicar más tiempo a las code reviews y a veces los bugs llegan a producción.

¿Cómo comunico? O mejor aún: ¿qué propósito o función tiene esto?

    ✅ Dar feedback constructivo a un compañero -> Esto es comunicación relacional.

¿Cómo debe ser la comunicación? ¿Asíncrona o síncrona?

    ⏳ ¿Es urgente? No es un incendio, pero tampoco puede esperar eternamente. Lo importante aquí es el formato: comunicación síncrona, pero privada. Esto NO se hace por Slack ni en un canal público.

> Esto es delicado. Una mala comunicación aquí puede joder una relación profesional o hacer que la persona se ponga a la defensiva. Necesitas un 1-on-1 donde puedas hablar con calma y sin audiencia.

¿Quién hay involucrado?

    🫂 Solo tú y esa persona. Esto es comunicación horizontal y privada. Si la cosa no mejora después de hablarlo, entonces ya escalarías a tu tech lead.

¿Consecuencias de la situación?

    ⛔ Si no lo comunicas, el problema sigue. Si lo comunicas mal, te ganas un enemigo o la persona se desmotiva. Si lo comunicas bien, ayudas a alguien a mejorar.

Solución:

1. Prepara ejemplos concretos:
   - No vayas con "tus PRs tienen bugs". Ve con "en la PR #234 del día X pasó esto, y en la #256 pasó esto otro".
   - Los ejemplos concretos evitan que la conversación se vuelva un "tú vs yo" abstracto.
2. El 1-on-1:
   - Empieza preguntando cómo está, si tiene mucha carga, si hay algo que le esté afectando. A veces hay contexto que no conoces.
   - Explica lo que has observado (sin juicios) y el impacto que tiene en el equipo.
   - Pregunta cómo lo ve y qué cree que se puede hacer. Involúcrale en la solución.
   - Ofrece ayuda: pair programming, más tiempo en las reviews, lo que sea.
3. Seguimiento:
   - No documentes esto en Jira ni en ningún sitio público, esto es privado.
   - Haz seguimiento en las siguientes semanas. Si mejora, reconócelo. Si no mejora, entonces sí toca escalar.

<br>

## Tipo de comunicación: Por propósito y/o función

Todo aquello que lleve un propósito consigo es algo que debes ser capaz de explicar de la forma más clara posible. En estos casos yo tengo varios tips.

✅ Apóyate en la redacción. Trata de escribir lo que quieres comunicar. Escríbelo y revisítalo si es posible
en un par de horas para ver si sigue teniendo coherencia en tu cabeza. **Los textos, al igual que el código, se pueden refactorizar**.

Una vez lo tengas por mano y veas que lo explicas de forma clara para ti mismo, es el momento de actuar.
Primero piensa y empieza a formularte preguntas viendo los puntos que he añadido al principio:

1. ¿Qué propósito es?
   - Esto te ayudará a decidir qué tipo de documento hay que redactar, a quién hay que involucrar, etc.
2. ¿Tengo prisa?
   - Esto es importante. Si etiquetas algo como no urgente entrarás en un feedback loop de pregunta-respuesta.
3. ¿A quién debo involucrar?
   - El público objetivo de tu siguiente comunicado es fundamental para que pienses muy bien cómo vas a hablar. A una persona de marketing no le puedes hablar de tecnicismos; por lo contrario, si no lo haces con alguien técnico le puedes confundir.
4. ¿Cómo dejo constancia de ello?
   - Esto es **MEGA IMPORTANTE** cuando trabajas en remoto. Trata de dejar constancia de absolutamente todo lo que hagas: en Confluence, en Jira o Notion, me da igual, pero no confíes en chats ni en llamadas.

## Tipo de comunicación: Por velocidad y ciclo de feedback

Normalmente la comunicación síncrona siempre es la que funciona mejor, pero cada individuo tiene su trabajo que hacer, así que debes ser responsable y saber cuándo consumir tiempo de la gente. Como acto de respeto (como mínimo) debes prepararte esa interrupción.
Por otro lado, si no es algo urgente o que tú creas que sea difícil de entender, lo mejor es pasar al modo asíncrono: por email, por Slack, etc.

En estos casos yo cómo evalúo cuál es mejor:

1. Comunicación síncrona - la veloz
   - Cuando creo que lo que quiero transmitir o explicar puede causar dudas o incertidumbre. De esta forma reduzco los malentendidos desde el minuto 0.
   - Cuando quiero llevar a una o varias personas a mi terreno y convencerles de que mi solución y/o idea será viable.
2. Comunicación asíncrona - la paralelizable
   - Cuando tengo muy claro cómo comunicar las cosas (que no voy a generar dudas) y veo que en un solo email o mensaje va a quedar todo muy claro.
   - Cuando es una comunicación que no requiere de feedback loop, por ejemplo avisar de que X día no voy a estar para una reunión.

## Tipo de comunicación: Por público, dirección y alcance

Tu target es super importante antes de incluso empezar a pensar qué vas a hacer.
Si hablas con técnicos te puedes apoyar en diagramas técnicos, mientras que con gente no técnica
debes tirar de cosas más conceptuales y abstractas.

> Con gente no técnica intento muchas veces tirar de metáforas, suelen funcionar genial.

Cuando la comunicación es vertical, es decir, vas a tu reporting line directo o incluso más para
arriba y quieres llegar a C-levels o VPs, entonces lo más probable es que te toque tirar de comunicación
asíncrona para no molestar dado que suele ser gente muy ocupada. Como ya he dicho varias veces en este post, trata de revisar los emails varias veces.

# Conclusión

¿Te acuerdas de la retórica griega del principio? Aquellos teatros donde la comunicación decidía destinos.
En remoto no tenemos la presencia física, no tenemos el lenguaje corporal, no tenemos el "¿tienes un momento?" caminando hacia la mesa de alguien.
Tenemos palabras. Y las palabras, bien usadas, son igual de poderosas que los discursos de Córax y Aristóteles.

La diferencia es que ahora no estamos en una plaza pública, estamos en Slack, en Jira, en un Google Meet.
El arte sigue siendo el mismo: pensar antes de comunicar, elegir el canal correcto, adaptar el mensaje a tu audiencia y dejar constancia de todo.

Si algo te llevas de este post que sea esto: **la comunicación no es algo que "simplemente pasa", es algo que se diseña**.
Y en remoto, diseñarla bien es la diferencia entre un proyecto que fluye y uno que se atasca.

> La comunicación funciona para aquellos que trabajan en ella - John Powell
