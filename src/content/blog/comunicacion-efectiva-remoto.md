---
author: Cristian Estarlich
pubDatetime: 2025-12-15T15:00:00Z
title: Comunicación efectiva trabajando en remoto
postSlug: comunicacion-efectiva-trabajando-en-remoto
featured: false
draft: true
tags:
  - Trabajo remoto
  - Comunicación
  - Desarrollo profesional
description: Consejos y estrategias para mejorar la comunicación efectiva cuando trabajas en remoto.
---

# Introducción

Este post no pretende sentar cátedra de como deben comunicarse las personas.
De hecho desde que empecé a interesarme por dotes comunicativos y en esencia la comunicación humana me di cuenta de que es todo un mundo.
Por mencionar alguno de mis descubrimientos cuando empecé a investigar el tema:

En la antigua grecia a lo sdelincuentes se les juzgava de forma colectiva en una plaza, una persona determinaba cual era la condena frente al cargo por el que se le estaba juzgando y otro trataba de defenderle delante del pueblo. Era el pueblo quien decidía en base a quien hiciese mejor su papel.
Esas dos personas hoy en día son un abogado y un fiscal.
Pero en esos **teatros** porque no hay otra forma de llamarlos, eran teatros que decidian si una persona iba a ver el sol del mañana, la humanidad descubrió el poder de la comunicación: como se puede hablar bien, argumentar mejor, persuadir a las personas, no se trataba de tener simplemente la razón, si no de instrumentalizar la comunicación como un arma.
Córax de Siracusa y su discípulo Tísias (siglo V a. C.), vieron en esto un gran poder y a base de estudio + prueba/error crearon lo que hoy conocemos como **retórica**. Fue muchos años después cuando el grandísimo Aristoteles (siglo IV a. C.) la convirtió en una disciplina formal que los intelectuales de la época estudiaban.
Los principios de la retórica (especialmente en la tradición clásica griega) son las bases que hacen que un discurso sea persuasivo y eficaz.

Cuando descubrí esto me explotó la cabeza, crearon un arte y un procedimiento comunicativo para convencer a las personas de que tienen la razón y que es su forma la correcta de hacer las cosas.
Esto obviamente hoy en día es usado para muchas más cosas de las que creemos puesto que hay muchas evoluciones de la retórica: política, marketing, etc... Pero todo tiene un procedimiento comunicativo muy muy definido.

En nuestro mundo, el de la programación, comunicarse es fundamental y mucho más complicado de lo que lo que pensamos al principio. Muchas veces trabajamos con problemas súper abstractos que hasta nos resulta difícil de trasladar a otro ser humano, por eso usamos diagramas o como lo llamo yo: dibujitos de cajitas, básicamente porque nos resulta prácticamente imposible expresar lo que tenemos en la cabeza con palabras (ahora ya no parece tan fácil comunicarse eh?).
A esto hay que sumarle la barrera humana, el como tu te comunicas y como el resto lo percibe. A veces te vas a comunicar para pedir ayuda, otra para explicar como has resuelto un problema y otra para hacer un cambio en una tarea que va a cambiar el planning las siguientes 2 semanas, hay muchas muchas muchas veces, repito: **muchas veces** en las que una mala comunicacón a llegado a entorpecer proyectos de forma muy notable y otras en las que la comunicación efectiva ha hecho que el proyecto salga a flote incluso antes de lo previsto.

Voy a tratar de daros mi visión de como la comunicación debe ser, para que sea efectiva y encima lo vamos a complicar un poquito dado que este post va a estar enfocado en comunicarse en remoto, que obviamente complica la comunicación **un poquito**.

> “La mayoría de la gente no escucha con la intención de entender, escuchan con el objetivo de contestar” -Stephen Covey

# Decide como comunicarte

> Más vale pensar dos veces que arrepentirse una

En un día de trabajo es prácticamente imposible que no tengas que comunicar absolutamente nada. Que tal vas con tu tarea, si tienes blockers, un meeting al que tienes que asistir, un email que tienes que responder o una discusión técnica en un canal de slack / teams donde está participando medio equipo.
De hecho considero que cuando en 8 horas no has comunicado absolutamente nada, algo está fallando en tu forma de trabajar. La industria del software es team player, si a ti te gusta el single player puedes probar con algun título de Kojima.

Entonces por donde empezar? Como decido como comunicarme?

Para decidirnos los humanos necesitamos opciones así que vamos a hacer un poco de "cirujía" y dissección sobre los distintos tipos de comunicación (Luego iré dando mis tips para cada uno, pero primero quiero mostraros los distintos ámbitos comunicacionales):

## Los típos de comunicación

1. Por propósito y/o función
   - **Operacional**: El día a día: standups, blockers, preguntas técnicas rápidas, coordinación de tareas.
   - **Decisiones técnicas**: RFCs, ADRs (Architecture Decision Records), debates sobre arquitectura o enfoque técnico.
   - **Conocimiento**: Documentación, knowledge sharing sessions, code reviews como herramienta de aprendizaje.
   - **Contexto**: Por qué estamos haciendo algo, objetivos de negocio, prioridades, roadmap.
   - **Relacional**: 1-on-1s, feedback, team building, resolver conflictos.
2. Por velocidad y ciclo de feedback
   - **Síncronas**: Meetings, pair programing, urgencias.
   - **Asíncronas**: Slack, Teams, Confluence, emails.
3. Por dirección alcance
   - **Horizontal**: Entre miembros del equipo
   - **Vertical**: Managers, stakeholders.
   - **Cross-funcional**: con producto, diseño, otros equipos

Esto esta genial Cristian, que guay! Hemos destripado la comunicación un poquito, pero...
![Archer - Como afecta esto a los gorgonitas ](/assets/gorgonitas.jpg)

Cuando debas comunicar algo fíjate en esta enumeración e identifica cual va a ser la forma más efectiva. Voy a poneros un ejemplo de como identificar y ser efectivo:

### **Situación A:**

Tengo una tarea donde estoy integrando un sistema de mailing nuevo que Marketing nos ha pedido, en este mismo no me queda muy claro en que formato quieren ciertos datos para luego hacer sus fantasías marketinianas.

<br>

Como comunico? o mejor aún: que proposito o funcion tiene esto?

    ✅ Aclarar que datos se mandan a un third-party -> Entonces esto es una decisión técnica.

Como debe ser la comunicación? Asíncrona o síncrona?

    ⏳ Es muy urgente? Yo creo que no, puedo ir tirando asta que respondan: comunicación asíncrona.

Quien hay involucrado:

    🫂 Podemos observar que esto va a ser una comunicación cross-funcional, dado que marketing esta involucrado.

Consecuencias de la situación?

    ⛔ Esta en juego tu tarea? Llegado cierto punto no podrás proceder y quedará bloqueada: comunicación operacional.

<br>
<br>

Solución:

1. En el primer ciclo de la comunicación (Hay ciclos si, esto es asíncrono, todo lo asíncrono conlleva ciclos)
   - Se añade un comentario a Jira etiquetando a la persona responsable en marketing para que lo aclare.
   - Como esto tarde o temprano **será un blocker en tu tarea es a su vez también comunicación de tipo operacional**. Se debe trasladar al equipo que estas a la espera de marketing (en la daily suele ser el momento, tal y como se describe en el punto 1.1). No olvides que es cross-funcional, comunicas dentro y fuera del equipo.
2. Segundo ciclo - Marketing te ha respondido y eso ya es tu primera victoria! Te han definido que datos quieren.
   - Se comunica en tus reportes operacionales (daily).
   - Aqui ya tenemos lo que queríamos, decisiones técnicas. Importantisimo documentarlo y que quede constancia de ello. Pide que respondan siempre en el ticket de la tarea y tu luego lo traspasas a tu documentación técnica de confluence, esto es tu salvaguarda, si luego hay males entendidos, tu ya tienes el contrato por escrito.
3. Segundo ciclo Opción B - Marketing no esta entendiendo que puñetas quieres
   - Aquí no dudes jamás, cuando haya dudas o no se te entienda debes saltar a un ciclo de feedback mucho más corto, toca montar un meeting y explicarselo, asegurate que lo han pillado. Luego hablaremos de meetings pero ya te hago un spoiler. Si o si te preparas el meeting, nada de ir "en bolas" y luego se reporta en jira que se ha decidido.

<br>

### Por propósito y/o función

Todo aquello que lleve un propósito consigo es algo que debes ser capaz de explicar de la forma más clara posible, en estos casos yo tengo varios tips.

✅ Apoyate en la redacción, trata de escribir lo que quieres comunicar. Escribelo y revisitalo si es posible en un par de horas para ver si sigue teniendo coherencia en tu cabeza, **los textos al igual que el código se pueden refactorizar**.

Una vez lo tengas por mano y veas que lo explicas de forma clara para ti mismo, es el momento de actuar.
Primero piensa y empieza a formularte preguntas viendo los puntos que he añadido al principio:

1. Que proposito es?
2. Tengo prisa?
3. A quien debo involucrar?
4. Como dejo constancia de ello?

### Por velocidad y ciclo de feedback

Normalmente la comunicación síncrona siempre es la que funciona mejor pero cada individuo tiene su trabajo que hacer así que debes ser responsable y saber cuando consumir tiempo de la gente, como acto de respeto (como mínimo) debes prepararte esa interrupción.
Por otro lado si no es algo urgente o que tu creas que sea dificil de entender, lo mejor es pasar al modo asíncrono por email, por slack, etc...

En estos casos yo como evaluo cual es mejor?

1. Comunicación síncrona
   - Cuando creo que lo que quiero transmitir o explicar puede causar dudas o incertidumbre. De esta forma reduzco los males entendidos desde el minuto 0.
   - Cuando quiero llevar a una o varias personas a mi terreno y convencerles de que mi solución y/o idea será viable.
2. Comunicación asíncrona
   - Cuando tengo muy claro como comunicar las cosas y veo que en un solo email o mensaje va a quedar todo muy claro.
   - Cuando es una comunicación que no requiere de feedback loop, por ejemplo avisar de que X día no voy a estar para una reunión.

## Reuniones - Sois unos pesaos

TBD
