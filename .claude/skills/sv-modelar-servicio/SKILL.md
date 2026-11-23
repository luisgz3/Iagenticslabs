---
name: sv-modelar-servicio
description: "Convierte un servicio-nicho validado en una oferta propia de IAgentics: promesa delimitada, módulos, fases de implementación, alcance, requisitos del cliente, precio de setup y mensualidad, capacidad y margen. Usar después de cazar y validar, sin copiar activos ajenos."
---

# Modelar la oferta de servicio

Adaptado de `pd-modelar-oferta` (pack de Claudio Conde) para servicios con implementación y mensualidad.

## Contexto y alcance

Leé `config-negocio.md`, el radar y la ficha del cliente del nicho si existen. Si falta evidencia de demanda, decilo y marcá la oferta como borrador no validado. No publiques, no cotices a clientes reales ni cambies precios vigentes sin decisión del usuario.

## Trabajo

1. Registrá cómo lo venden los proveedores de referencia: promesa, módulos, formato de cobro, precio visible, garantía, recorrido de venta (anuncio → llamada → propuesta). No supongas lo que no se ve.
2. Definí a quién ayudás, en qué situación y con qué resultado medible (ej.: "responder toda consulta en menos de 1 minuto y saber cuántas visitas sale de cada portal"). La promesa tiene que poder comprobarse con datos del propio sistema.
3. Armá la oferta sobre el método de IAgentics (mapear → sistematizar → medir → potenciar con IA): módulos, entregable de cada uno, fase y semana, qué hace el cliente y qué hacemos nosotros. Lo indispensable para cumplir la promesa va en la oferta base; lo demás, en niveles superiores o complementos.
4. Definí alcance y requisitos: herramientas que se integran o reemplazan, accesos que necesita dar el cliente, límites (cantidad de usuarios, canales, conversaciones de IA), qué queda fuera del alcance.
5. Precio: proponé setup y mensualidad por mercado basados en referencias con fuente, costo de herramientas e IA por cliente, horas de implementación y soporte, y valor para el cliente (una venta o cliente extra). Mostrá supuestos y margen estimado. Sin precios anteriores inventados ni ahorros fabricados. Garantías solo si el negocio puede cumplirlas; sin asesoramiento legal improvisado.
6. Capacidad: cuántos clientes se pueden implementar en paralelo con el equipo actual y qué cuello aparece primero.
7. Diferenciación: qué cambia en utilidad respecto de las referencias (integración con su CRM vertical, panel de métricas, informe a terceros, método). Cambiar nombre y colores no es diferenciación.

## Entrega y comprobación

Guardá `ofertas/<nicho>/oferta.md` con cliente/problema, promesa, módulos y niveles, fases, alcance y exclusiones, requisitos, precio y supuestos, costos y margen, capacidad, referencias y diferencias, pendientes. Agregá la matriz promesa → entregable → métrica que lo comprueba. El usuario debe poder revisarla entera antes de hacer landing, propuesta o anuncios.

## Pedido de ejemplo

«Con el radar y la investigación de inmobiliarias, armá la oferta: qué incluye cada nivel, cuánto cobrar de setup y mensualidad, cuánto nos queda y qué la hace distinta.»
