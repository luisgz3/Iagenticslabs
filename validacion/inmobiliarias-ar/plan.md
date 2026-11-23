# Plan de validación — Inmobiliarias Argentina

Skill: `sv-validar-servicio`. Preparado el 2026-11-23. **Nada de esto se envió ni se ejecutó.**

Basado en `oportunidades/radar-servicios-2026-11-23.md` y `oportunidades/inmobiliarias-competencia.md`.

## 1. Qué queremos aprender

**Hipótesis:** las inmobiliarias argentinas medianas, con 5 o más asesores y pagando al menos un portal, pagan por un sistema que ordene la atención de consultas encima de su Tokko (respuesta inmediata, reparto, seguimiento y panel por portal y asesor), aunque ya existan bots baratos.

**Unidad de decisión:** el nicho más la oferta piloto. Se cambia una sola variable por tanda.

**Preguntas que tiene que contestar:**
1. ¿Responden y aceptan una llamada de 20 minutos?
2. ¿Reconocen el problema de coordinación y control, o creen que ya lo resolvieron con un bot o con Tokko?
3. ¿Pagan un piloto? ¿A qué precio?

## 2. A quién contactar

**Criterios (todos con dato público):**
- Inmobiliaria con **5 o más asesores** visibles en su web o en Instagram. Las de 1–4 personas son el mercado de Propio: descartadas.
- Publica en Zonaprop o Argenprop con **30 o más propiedades activas**.
- Tiene WhatsApp comercial visible.
- Bonus: tarda más de 1 hora en responder a una consulta encubierta (ver punto 3).

**Zona:** una sola ciudad en la primera tanda, para comparar entre pares y poder ofrecer una reunión presencial. Hay que elegirla (ver decisiones pendientes).

**Fuentes:**
- Listados de Zonaprop o Argenprop filtrados por zona: la ficha de cada aviso muestra la inmobiliaria.
- Web e Instagram de cada inmobiliaria.
- Padrón público del colegio de corredores de la provincia, para confirmar matrícula.
- Google Maps (cantidad de reseñas como señal de tamaño).

**Cantidad:** 40 inmobiliarias. Se guarda solo el nombre comercial, la web, el canal comercial y la fuente. No se guardan datos personales de asesores.

**Cómo se arma:** se puede hacer a mano en unas 2 horas. También la puedo armar yo, habilitando en el entorno los sitios de los portales (zonaprop.com.ar ya está; faltaría argenprop.com) y respetando sus términos de uso: sin scraping masivo, solo lectura de avisos públicos.

## 3. Consulta encubierta (diagnóstico antes de contactar)

Para 15 de las 40 inmobiliarias, hacer **una consulta normal** por una propiedad real publicada, desde Zonaprop y por WhatsApp. Anotar:
- Día y hora de la consulta.
- Tiempo hasta la primera respuesta.
- Si preguntaron algo para calificar (presupuesto, plazo, forma de pago).
- Si hubo seguimiento a las 48 horas.

**Reglas:**
- Una sola consulta por inmobiliaria.
- Un interés real y genérico ("¿sigue disponible? ¿se puede visitar?").
- No agendar visitas falsas ni hacerles perder tiempo de asesor.
- En la llamada de venta se cuenta qué se midió y cómo: el dato se muestra como diagnóstico, no como engaño.

Registro en `estado.md`.

## 4. Mensajes

Canal principal: WhatsApp comercial y, como alternativa, email. Siempre se dice quién escribe y por qué, y se ofrece no volver a escribir.

**Variante A (con dato de la consulta encubierta):**
> Hola, ¿cómo están? Soy Luis, de IAgentics. Trabajo con inmobiliarias ordenando cómo se atienden las consultas de portales y WhatsApp. El martes consulté por el depto de [calle] en Zonaprop y la primera respuesta llegó a las [X] horas. Es lo normal en el rubro, pero el mismo interesado suele escribirle a 5 o 6 inmobiliarias. ¿Les sirve que les muestre en 20 minutos dónde se les están yendo esas consultas? Si no les interesa, me dicen y no escribo más.

**Variante B (sin dato, sobre el control):**
> Hola, soy Luis, de IAgentics. Una pregunta corta: ¿saben hoy cuántas consultas de Zonaprop terminan en visita, y cuál de sus asesores las convierte mejor? Ayudamos a inmobiliarias con varios asesores a tener eso medido y conectado con Tokko, sin cambiar de sistema. ¿Les interesa verlo en una llamada de 20 minutos?

**Variante C (para quien ya tiene un bot):**
> Hola, vi que ya usan respuesta automática en WhatsApp, bien ahí. ¿El bot les deja el lead cargado en Tokko, asignado a un asesor y con seguimiento? Es lo que más falla después de instalar el bot. Si quieren, les muestro cómo lo resolvemos en 20 minutos.

Prohibido: resultados inventados ("+40% ventas"), urgencia falsa y casos que no existen.

## 5. Guion de la llamada de descubrimiento (20 minutos)

1. **Contexto (2 minutos):** cuántos asesores tienen, qué portales pagan, qué CRM usan y quién decide.
2. **Proceso (6 minutos):**
   - "Cuando entra una consulta de Zonaprop un sábado a las 20 h, ¿qué pasa exactamente?"
   - "¿Quién decide qué asesor la toma?"
   - "¿Dónde queda registrada?"
   - "¿Qué pasa con el que dijo 'lo pienso'?"
3. **Costo del problema (5 minutos):**
   - "¿Cuántas consultas reciben por mes, más o menos?"
   - "¿Cuántas terminan en visita?"
   - "¿Cuánto pagan de portales por mes?"
   - "¿Cuánto les deja en promedio una operación?"
   - Hacer la cuenta con sus números, no con los nuestros.
4. **Intentos previos (3 minutos):** "¿Probaron algún bot, Cliengo o Propio? ¿Qué funcionó y qué no?"
5. **Cierre (4 minutos):** si reconocen el problema, ofrecer el piloto (punto 6). Si no, pedir permiso para escribir en 3 meses y preguntar si conocen a otra inmobiliaria con este problema.

Después de la llamada se registra en `estado.md`: dolor confirmado (sí o no), sus números, objeciones textuales y próximo paso.

## 6. Oferta piloto (hipótesis a probar)

**"Piloto de 30 días: consultas ordenadas y medidas"**

**Incluye:**
- Mapeo del recorrido actual de una consulta (1 reunión).
- Conectar Zonaprop, Argenprop y WhatsApp a su Tokko con reparto automático por asesor.
- Respuesta inmediata con IA (implementando Cliengo o similar; la herramienta la paga el cliente aparte, desde USD 65/mes).
- Seguimiento automático a las 24 y 72 horas.
- Panel semanal con consultas, tiempo de respuesta y visitas, por portal y por asesor.

**Criterio de éxito acordado con el cliente:** tiempo de primera respuesta menor a 5 minutos en el 90% de las consultas, y el 100% de las consultas cargadas y asignadas en Tokko.

**Precio:** **decisión pendiente tuya.** Propuesta para la primera tanda: probar **dos precios** de implementación del piloto, A y B, la mitad de las propuestas con cada uno, más una mensualidad opcional después de los 30 días.
- Referencias: el bot solo cuesta de USD 65 a 334/mes en Cliengo, y Corscan anuncia ARS 120.000/mes. La implementación compleja arranca en unos USD 3.000 según Leadsales.
- El piloto tiene que costar claramente más que "un bot", porque incluye la implementación. Si nadie lo paga a ningún precio, el problema es la oferta, no el precio.

**No prometer:** más ventas ni un porcentaje de cierre. Solo lo que el panel puede comprobar.

## 7. Presupuesto de la prueba

- Prospección: 0 en pauta, solo horas propias (unas 10 horas en total).
- Anuncio a llamada (opcional, segunda tanda): **decisión pendiente tuya**. Sin un límite aprobado no se activa nada.

## 8. Criterios de decisión (proponer y vos elegís)

Sobre 40 inmobiliarias contactadas:

| Resultado | Lectura | Acción |
|---|---|---|
| 2 o más pilotos pagos | Señal fuerte | Armar la landing y la oferta completa (`sv-modelar-servicio`), y escalar a otra ciudad |
| 0 pilotos, pero 5 o más llamadas con dolor confirmado | El problema existe, la oferta o el precio no | Cambiar una variable (precio o alcance) y repetir con 40 más |
| Menos de 3 llamadas | El mensaje o el segmento no funciona | Probar otra variante de mensaje o pasar a clínicas |

Un "me interesa" no cuenta como validación. Un piloto pago sí.

## 9. Decisiones pendientes tuyas

1. **Ciudad** de la primera tanda (CABA, GBA norte, Córdoba, Rosario…).
2. **Precios A y B** del piloto.
3. Si querés que **yo arme la lista de 40** o la armás vos.
4. **Quién hace la consulta encubierta** (vos desde tu teléfono, u otra persona).
