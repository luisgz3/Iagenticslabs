/* ===== RUBROS (compartido por /ia-para-negocios/ y /diagnostico/) =====
     Para sumar un rubro, copiá un bloque y cambiá los textos.
     id: lo que va en el link del anuncio → ?rubro=ID
     pasos: las 5 etapas del proceso de venta de ese rubro (se muestran en el diagnóstico)
     nivel: b = básico (nivel 1), i = intermedio (nivel 2), a = avanzado (nivel 3) */
  var RUBROS = [
    { id: 'clinicas', pasos: ["Consulta por WhatsApp o IG", "Respuesta con precio", "Reserva del turno", "Recordatorio", "Vuelve por otra sesión"], tipo: 'local', ico: '💆', nombre: 'Clínicas estéticas',
      dolor: ['Turnos que se pierden por contestar tarde', 'Las clientas escriben a varias clínicas a la vez y reservan con la primera que responde. De noche y los fines de semana nadie contesta.'],
      autos: [
        ['Recepcionista de IA en WhatsApp', 'b', 'Responde precios, duración de tratamientos y disponibilidad en segundos, a cualquier hora.', 'Respondés el 100% de las consultas'],
        ['Agenda y recordatorios', 'b', 'Da turnos según tu agenda y manda recordatorio el día anterior con opción de reprogramar.', 'Menos huecos por ausencias'],
        ['Reactivación de clientas', 'i', 'Detecta a quien no vuelve hace 2 o 3 meses y le manda una propuesta para su próximo tratamiento.', 'Ventas a clientas que ya tenés'],
        ['Fotos antes/después y reseñas', 'i', 'Después de cada sesión pide reseña en Google y arma el seguimiento del tratamiento.', 'Más reseñas, más confianza']
      ],
      chat: ['Hola! cuánto sale la depilación láser piernas completas?', 'Hola! 😊 Piernas completas sale $45.000 por sesión, o $200.000 el pack de 6. Tengo turno este jueves 18:00 o sábado 11:00, ¿te reservo?'] },

    { id: 'odontologos', pasos: ["Pide turno", "Respuesta y obra social", "Turno asignado", "Confirmación", "Control a los 6 meses"], tipo: 'local', ico: '🦷', nombre: 'Odontólogos',
      dolor: ['La secretaria vive en el teléfono', 'Turnos, cambios, cancelaciones y "¿atienden mi obra social?" ocupan todo el día, y los pacientes que faltan te dejan horas muertas.'],
      autos: [
        ['Turnos por WhatsApp 24/7', 'b', 'El paciente pide, cambia o cancela su turno solo, según tu agenda real.', 'Libera horas de secretaría'],
        ['Confirmación y lista de espera', 'b', 'Confirma el día anterior y, si alguien cancela, ofrece el hueco a la lista de espera.', 'Agenda siempre llena'],
        ['Controles y limpiezas', 'i', 'Avisa automáticamente cuando toca el control de 6 meses.', 'Pacientes que vuelven solos'],
        ['Presupuestos de tratamientos', 'i', 'Envía el presupuesto explicado y hace seguimiento a quien no respondió.', 'Más tratamientos aceptados']
      ],
      chat: ['Hola necesito turno, me duele una muela', 'Lamento que te duela 😟 Tengo un turno de urgencia hoy a las 17:30 o mañana 9:00. ¿Cuál te queda mejor? ¿Venís por obra social o particular?'] },

    { id: 'inmobiliarias', pasos: ["Consulta por un aviso", "Respuesta y requisitos", "Visita agendada", "Seguimiento post visita", "Aviso de nuevas propiedades"], tipo: 'local', ico: '🏠', nombre: 'Inmobiliarias',
      dolor: ['Cientos de consultas, pocas visitas reales', 'La mayoría pregunta lo mismo ("¿sigue disponible?", "¿aceptan mascotas?") y los agentes pierden el día filtrando curiosos.'],
      autos: [
        ['Asistente que conoce cada propiedad', 'b', 'Responde precio, expensas, requisitos y disponibilidad de cada aviso al instante.', 'Respuesta en segundos'],
        ['Filtro de interesados', 'i', 'Pregunta presupuesto, zona, garantía y fecha de mudanza antes de pasar el contacto.', 'Agentes solo con leads reales'],
        ['Agenda de visitas', 'b', 'Coordina la visita con la agenda del agente y manda la ubicación.', 'Más visitas, menos idas y vueltas'],
        ['Avisos de nuevas propiedades', 'i', 'Cuando entra algo que coincide con lo que buscaba un cliente, le avisa automáticamente.', 'Ventas de contactos viejos']
      ],
      chat: ['Sigue disponible el depto de 2 ambientes en Palermo?', '¡Sí, sigue disponible! Son $650.000 + $90.000 de expensas. Para ver si encaja: ¿para cuándo te mudarías y con qué garantía contás?'] },

    { id: 'gimnasios', pasos: ["Pregunta precios", "Respuesta y clase de prueba", "Alta del socio", "Asistencia y cobro", "Retención del socio"], tipo: 'local', ico: '🏋️', nombre: 'Gimnasios y estudios',
      dolor: ['Altas que no se concretan y bajas que no ves venir', 'Mucha gente pregunta precios y no vuelve, y los socios dejan de venir sin que nadie lo note hasta que no pagan.'],
      autos: [
        ['Respuesta y clase de prueba', 'b', 'Contesta planes, horarios y agenda una clase gratis al instante.', 'Más altas nuevas'],
        ['Reserva de clases y cupos', 'b', 'Los socios reservan por WhatsApp y reciben aviso si se libera un lugar.', 'Clases llenas sin trabajo manual'],
        ['Alerta de abandono', 'i', 'Detecta socios que dejaron de venir y les escribe antes de que se den de baja.', 'Menos bajas'],
        ['Cobros y vencimientos', 'i', 'Avisa vencimientos y manda el link de pago automáticamente.', 'Menos cuotas atrasadas']
      ],
      chat: ['Hola, qué precio tiene el pase libre?', '¡Hola! 💪 El pase libre sale $38.000 por mes. ¿Querés venir a una clase de prueba gratis? Mañana tengo cupo en funcional 19:00.'] },

    { id: 'peluquerias', pasos: ["Pide turno", "Horarios disponibles", "Turno reservado", "Recordatorio", "Próximo corte"], tipo: 'local', ico: '💈', nombre: 'Peluquerías y barberías',
      dolor: ['Atender el teléfono con las manos ocupadas', 'Mientras cortás no podés contestar, y el cliente que no consigue turno rápido se va a la barbería de al lado.'],
      autos: [
        ['Turnos solos por WhatsApp', 'b', 'Muestra horarios libres de cada profesional y reserva sin que toques el celular.', 'Cero turnos perdidos'],
        ['Recordatorio y confirmación', 'b', 'Recuerda el turno y libera el lugar si el cliente no confirma.', 'Menos sillas vacías'],
        ['"Te toca el corte"', 'i', 'A las 3 o 4 semanas le escribe al cliente para su próximo turno.', 'Clientes más frecuentes'],
        ['Reseñas en Google', 'b', 'Pide reseña después de cada servicio.', 'Más clientes nuevos del barrio']
      ],
      chat: ['Tenés turno hoy para corte y barba?', '¡Buenas! ✂️ Hoy tengo libre a las 16:30 con Nico o 18:00 con Fran. Corte + barba sale $15.000. ¿Cuál te reservo?'] },

    { id: 'restaurantes', pasos: ["Pedido o reserva", "Menú y total", "Pedido confirmado", "Entrega o mesa lista", "Vuelve a pedir"], tipo: 'local', ico: '🍽️', nombre: 'Restaurantes y delivery',
      dolor: ['Pedidos y reservas que se pierden en hora pico', 'Entre la cocina y el salón nadie llega a contestar WhatsApp, y los pedidos se toman a mano con errores.'],
      autos: [
        ['Toma de pedidos por WhatsApp', 'b', 'Muestra el menú, toma el pedido completo, calcula el total y pasa la comanda.', 'Pedidos sin errores'],
        ['Reservas de mesa', 'b', 'Reserva según disponibilidad y confirma el mismo día.', 'Salón lleno sin llamadas'],
        ['Promos a clientes frecuentes', 'i', 'Manda promos a quien pidió antes, en los días flojos.', 'Más ventas los días tranquilos'],
        ['Resumen del día', 'a', 'Te manda qué se vendió, qué faltó y qué plato rinde más.', 'Decisiones con números']
      ],
      chat: ['Hacen delivery a Belgrano? quiero 2 milanesas napo con papas', '¡Sí, llegamos! 🛵 2 milanesas napolitanas con papas: $24.000 + envío $2.000. Demora ~40 min. ¿Me pasás la dirección y cómo pagás?'] },

    { id: 'talleres', pasos: ["Consulta o presupuesto", "Precio orientativo", "Ingreso del vehículo", "Aviso de estado", "Próximo service"], tipo: 'local', ico: '🔧', nombre: 'Talleres y servicios técnicos',
      dolor: ['El cliente llama 5 veces para saber si está listo', 'Presupuestos que no se siguen y el teléfono sonando todo el día con "¿ya está mi auto?".'],
      autos: [
        ['Consultas y turnos', 'b', 'Responde qué servicios hacés, precios orientativos y agenda el ingreso.', 'Menos llamadas'],
        ['Avisos de estado', 'i', 'Avisa automáticamente cuando el trabajo está en proceso y cuando está listo.', 'Clientes tranquilos'],
        ['Seguimiento de presupuestos', 'i', 'Si el cliente no aprobó el presupuesto, le escribe a los 2 días.', 'Más trabajos aprobados'],
        ['Recordatorio de service', 'i', 'Avisa cuando toca el próximo service o mantenimiento.', 'Clientes que vuelven']
      ],
      chat: ['Hola, cuánto sale el cambio de aceite y filtros?', '¡Hola! 🔧 Para un auto mediano con aceite sintético sale aprox. $55.000. ¿Qué auto tenés? Te puedo dar turno mañana 9:00 o jueves 14:00.'] },

    { id: 'coaches', pasos: ["Lead del anuncio", "Primera respuesta", "Calificación", "Llamada agendada", "Seguimiento y cierre"], tipo: 'digital', ico: '🎯', nombre: 'Coaches y mentores',
      dolor: ['Leads de anuncios que se enfrían', 'Pagás publicidad, la gente escribe con ganas, y cuando respondés horas después ya perdió el interés. Y tu agenda se llena de curiosos.'],
      autos: [
        ['Setter de IA', 'b', 'Responde al instante a cada lead, explica el programa y hace tus preguntas de calificación.', 'Ningún lead sin respuesta'],
        ['Agenda solo a los que califican', 'i', 'Si el lead encaja, agenda la llamada con vos o tu closer; si no, le ofrece algo más chico.', 'Llamadas con gente lista'],
        ['Seguimiento a los "lo pienso"', 'i', 'Les escribe a los días con casos, respuestas a objeciones y nueva invitación.', 'Más cierres'],
        ['Asistente para alumnos', 'a', 'Responde dudas de tus alumnos con tu propio contenido, 24/7.', 'Menos soporte, mejores resultados']
      ],
      chat: ['vi tu anuncio, de qué se trata la mentoría?', '¡Hola! 🙌 Es un programa de 8 semanas para conseguir tus primeros 10 clientes online. Para ver si te sirve: ¿hoy ya vendés algo o arrancás de cero?'] },

    { id: 'infoproductos', pasos: ["Visita la página", "Dudas antes de comprar", "Checkout", "Bienvenida y onboarding", "Siguiente producto"], tipo: 'digital', ico: '📚', nombre: 'Infoproductos y cursos',
      dolor: ['Muchos visitantes, pocas compras', 'La gente entra a la página de venta, tiene dudas, nadie se las responde y se va. Los carritos abandonados nunca se recuperan.'],
      autos: [
        ['Vendedor de IA en la página y WhatsApp', 'b', 'Responde dudas del curso, precio y formas de pago en el momento de compra.', 'Más conversión'],
        ['Recuperación de carritos', 'b', 'Escribe a quien empezó a pagar y no terminó, con ayuda o un incentivo.', 'Ventas recuperadas'],
        ['Secuencia post-compra', 'i', 'Da la bienvenida, guía al alumno y ofrece el siguiente producto en el momento justo.', 'Más ventas por cliente'],
        ['Soporte automático', 'b', 'Resuelve accesos, contraseñas y dudas frecuentes sin que intervengas.', 'Menos tickets']
      ],
      chat: ['Hola, el curso tiene certificado? se puede pagar en cuotas?', '¡Hola! 😊 Sí, al terminar recibís certificado. Podés pagar en 3 cuotas sin interés con tarjeta. ¿Querés que te mande el link para inscribirte?'] },

    { id: 'tiendas', pasos: ["Pregunta por un producto", "Stock, talle y envío", "Carrito y pago", "Estado del pedido", "Recompra"], tipo: 'digital', ico: '🛒', nombre: 'Tiendas online',
      dolor: ['Preguntas repetidas y carritos abandonados', '"¿Tenés talle M?", "¿cuánto tarda el envío?", "¿dónde está mi pedido?" todo el día, y mucha gente que se va antes de pagar.'],
      autos: [
        ['Atención de preguntas frecuentes', 'b', 'Responde stock, talles, envíos y cambios con la info real de tu tienda.', 'Menos horas de atención'],
        ['Recuperación de carritos', 'b', 'Escribe por WhatsApp a quien no terminó la compra.', 'Ventas recuperadas'],
        ['Seguimiento de pedidos', 'b', '"¿Dónde está mi pedido?" responde solo con el estado del envío.', 'Clientes tranquilos'],
        ['Recompra y recomendaciones', 'i', 'Recomienda productos según lo que compró y avisa reposiciones.', 'Más compras repetidas']
      ],
      chat: ['Hola tenés la remera negra en talle L?', '¡Hola! 🖤 Sí, queda en L. Sale $18.500 y el envío a CABA llega en 24-48 hs. ¿Te paso el link para comprarla?'] },

    { id: 'agencias', pasos: ["Prospecto interesado", "Primera respuesta", "Calificación", "Propuesta y llamada", "Onboarding y reportes"], tipo: 'digital', ico: '📈', nombre: 'Agencias y servicios',
      dolor: ['El tiempo se va en tareas que no facturan', 'Reportes a mano, onboarding de clientes, presupuestos y seguimiento comercial que siempre queda para después.'],
      autos: [
        ['Calificación de prospectos', 'b', 'Responde a los interesados, pregunta presupuesto y necesidad, y agenda la llamada.', 'Pipeline ordenado'],
        ['Reportes automáticos', 'i', 'Arma y envía el reporte mensual a cada cliente con sus números.', 'Horas libres por mes'],
        ['Onboarding de clientes', 'i', 'Pide accesos, materiales y datos con un flujo automático.', 'Arranques más rápidos'],
        ['Cerebro interno', 'a', 'Una IA que conoce todos tus procesos y responde a tu equipo.', 'Menos dependencia de vos']
      ],
      chat: ['Hola, hacen manejo de redes para restaurantes?', '¡Hola! Sí, trabajamos con varios restaurantes 🍝 ¿Hoy publican seguido? ¿Qué buscan principalmente: más reservas, delivery o marca?'] },

    { id: 'profesionales', pasos: ["Consulta inicial", "Filtro y honorarios", "Reunión agendada", "Documentación", "Vencimientos y seguimiento"], tipo: 'digital', ico: '💼', nombre: 'Estudios profesionales',
      dolor: ['Contadores, abogados, psicólogos: consultas sin filtro', 'Consultas que no son tu especialidad, papeles que el cliente nunca manda y vencimientos que hay que recordar uno por uno.'],
      autos: [
        ['Primera atención y filtro', 'b', 'Entiende la consulta, explica honorarios y agenda solo lo que es para vos.', 'Menos tiempo perdido'],
        ['Pedido de documentación', 'i', 'Pide y recuerda los papeles que falta enviar, y los ordena en una carpeta.', 'Expedientes completos'],
        ['Avisos de vencimientos', 'i', 'Avisa a cada cliente sus vencimientos y fechas importantes.', 'Clientes al día'],
        ['Asistente de consultas internas', 'a', 'Responde a tu equipo con tus criterios y documentos.', 'Más casos por persona']
      ],
      chat: ['Hola, necesito hacer mi declaración de ganancias, cuánto cobran?', '¡Hola! La presentación anual arranca en $60.000 según la complejidad. ¿Sos monotributista o empleado en relación de dependencia?'] }
  ];
