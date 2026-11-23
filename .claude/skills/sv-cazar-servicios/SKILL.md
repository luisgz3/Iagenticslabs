---
name: sv-cazar-servicios
description: "Busca servicios B2B de IA y automatización que otros ya están vendiendo (agencias, freelancers, snapshots, ofertas 'hecho para vos') y que los clientes ya están pagando o pidiendo. Entrega un radar de nichos y servicios con evidencia de oferta y de demanda, candidatos, observar y descartes. Usar para decidir qué servicio vender y a qué nicho, no para afirmar facturación ajena."
---

# Cazar servicios validados

Adaptado de `pd-cazar-oportunidades` (pack de Claudio Conde) para servicios de agencia en vez de productos digitales.

## Contexto y alcance

Trabajá en este proyecto. Leé `config-negocio.md` de la raíz si existe, y `oportunidades/registro.md` para no repetir nichos ya revisados. El pedido actual y las decisiones vigentes del usuario prevalecen sobre los ejemplos. Si falta una decisión necesaria (mercado, rango de ticket, nichos excluidos), preguntala una sola vez junto con las demás y avanzá con lo independiente.

Usá solo herramientas disponibles y autorizadas (búsqueda web, fetch de páginas, Meta Ad Library vía conector si existe). Sin acceso externo, trabajá con material aportado y marcá lo no comprobado. No contactes a nadie, no compres, no te registres en plataformas, no envíes formularios ni agendes llamadas con competidores para investigar. Una simulación no es una búsqueda real.

## Qué cuenta como validación de un servicio

Un servicio está validado cuando hay evidencia de **las dos puntas**:

- **Oferta (alguien lo vende y lo sostiene):** varios proveedores independientes lo ofrecen para el mismo nicho, con anuncios que siguen activos en el tiempo, página de precios o paquetes, casos de estudio con nombre de cliente, plantillas/snapshots vendidas para ese nicho, o empleos/roles para operarlo.
- **Demanda (alguien lo paga o lo pide):** pedidos con presupuesto en marketplaces de freelance, búsquedas laborales del lado del cliente, preguntas y quejas de dueños del nicho en foros/grupos/Reddit, reseñas de software del nicho que piden lo que el servicio resuelve, consultas de búsqueda con intención de compra.

Solo una punta = **observar**, nunca candidato. Un anuncio activo no prueba ventas; muchos proveedores sin demanda visible puede ser una moda vendida a otros vendedores (cursos de "agencia de IA"). Separá siempre a quién le venden: al dueño del nicho (sirve) o a aspirantes a agencia (no sirve como evidencia de demanda).

## Fuentes y cómo buscarlas

Registrá en cada consulta: fuente, término, país/filtro, fecha y hora, cantidad de resultados realmente leídos. Si la fuente falla o bloquea, frená esa consulta y anotalo; un error no es "cero resultados".

1. **Anuncios de proveedores:** Meta Ad Library (país del mercado, términos como "automatización inmobiliaria", "agente IA WhatsApp clínicas", "CRM para gimnasios"), Google Ads Transparency Center, LinkedIn Ads Library. Anotá antigüedad visible, cuántos anuncios activos tiene el mismo anunciante y a qué destino llevan (agenda de llamada, demo, checkout).
2. **Páginas de proveedores:** abrí la landing de cada uno. Registrá nicho, qué entregan, formato (setup, mensualidad, por resultado), precio si es público, garantía, casos con nombre, stack mencionado. Si el precio está oculto tras una llamada, dejalo "no público"; no lo estimes como dato.
3. **Marketplaces de plantillas y snapshots:** marketplace de GoHighLevel/snapshots por vertical, plantillas de n8n/Make/Zapier por industria, apps de nicho. Que alguien venda una plantilla para un nicho es buena señal de que ese nicho compra el sistema.
4. **Demanda en freelance:** Upwork, Workana, Freelancer, Malt, Fiverr (lado pedidos cuando sea accesible). Buscá proyectos publicados por clientes del nicho, presupuesto, frecuencia y fecha.
5. **Búsquedas laborales del cliente:** LinkedIn Jobs, Indeed, Computrabajo, Bumeran: puestos como "setter", "responsable de CRM", "atención WhatsApp" en empresas del nicho. Es dolor que hoy se resuelve con sueldo.
6. **Voz del dueño del nicho:** Reddit, grupos y foros del sector, reseñas en G2/Capterra/Google Play del software que usa el nicho (quejas sobre lo que el software no hace). Guardá la frase breve y el enlace.
7. **Directorios de agencias:** Clutch, GoodFirms, directorios de partners (HubSpot, Kommo, HighLevel). Cantidad de agencias especializadas por nicho y país.

## Trabajo

1. Definí con el usuario: mercado (países), idioma, rango de ticket (setup y mensualidad), nichos a explorar o excluir, y capacidad real de entrega (qué puede construir IAgentics hoy). Si faltan, proponé una búsqueda inicial acotada (3–6 nichos) y declarala.
2. Por cada nicho, buscá en al menos una fuente de oferta y una de demanda. Agrupá por **servicio + nicho** (ej.: "agente de WhatsApp para calificar leads, inmobiliarias"), no por proveedor. No sumes servicios distintos.
3. Para cada servicio-nicho llená la ficha de puntaje (1 a 5, con la evidencia que lo justifica; sin evidencia = "—", nunca un número supuesto):
   - **Oferta:** proveedores independientes, antigüedad de anuncios, precios públicos.
   - **Demanda:** pedidos, búsquedas laborales, quejas con intención de pago.
   - **Ticket:** cuánto se cobra y si el valor de una venta del cliente lo justifica.
   - **Alcanzabilidad:** si se puede llegar a los dueños (asociaciones, directorios, grupos, base pública).
   - **Encaje:** si IAgentics puede entregarlo con su stack y su método (mapear → sistematizar → medir → IA).
   - **Saturación:** cuántos ya lo ofrecen en el mismo mercado e idioma (mucha saturación baja el puntaje solo si no hay diferenciación posible).
4. Clasificá cada uno: **candidato** (evidencia en las dos puntas y encaje), **observar** (falta una punta o un dato clave), **descartar** (con motivo). Los puntajes son filtros del negocio: no prueban ventas, gasto ni rentabilidad.
5. Para los candidatos, anotá la próxima comprobación concreta que podría descartarlos (ej.: "confirmar si en Argentina los pedidos de Workana superan 10 por trimestre", "hablar con 5 dueños").

## Entrega y comprobación

Guardá en `oportunidades/radar-servicios-AAAA-MM-DD.md`:

- Parámetros de búsqueda y consultas realizadas (fuente, término, filtro, hora, resultados leídos, fallos).
- Tabla resumen: servicio, nicho, mercado, puntajes, clasificación y motivo.
- Una ficha por candidato: proveedores encontrados (enlace, precio/formato, antigüedad), evidencia de demanda (enlace, fecha, frase o presupuesto), qué falta comprobar.
- Descartes con motivo y referencias usadas.
- Cierre: la mejor oportunidad observada, por qué, y la información que todavía podría descartarla.

Agregá una línea por nicho revisado a `oportunidades/registro.md` (fecha, nicho, clasificación, archivo). Antes de entregar, revisá que cada candidato tenga al menos un enlace de oferta y uno de demanda accesibles, y que ningún precio, conteo o facturación esté inventado.

## Pedido de ejemplo

«Buscá qué servicios de IA y automatización se están vendiendo ya a inmobiliarias, clínicas y gimnasios en Argentina y México. Traé evidencia de quién lo vende y de quién lo pide, y decime cuál conviene probar primero.»
