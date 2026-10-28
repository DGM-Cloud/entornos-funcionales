export const handler = async (event) => {
  // Solo permitimos peticiones POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);
  const { nombre, documento, correo, tipoBien, tipoReclamo, detalle, pedido } = data;

  // Número de ticket correlativo simulado (basado en la fecha)
  const ticketNumber = `REQ-${Date.now().toString().slice(-6)}`;

  try {
    // Usamos el fetch nativo de Node.js para comunicarnos con Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, // Aquí la variable es 100% segura
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // El dominio en "from" debe estar verificado en Resend
        from: 'Libro de Reclamaciones <legal@entornosfuncionales.pe>',
        // Enviamos el correo a la empresa y una copia exacta al cliente
        to: ['legal@entornosfuncionales.pe', correo],
        subject: `Libro de Reclamaciones - Ticket N° ${ticketNumber}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1E3E62;">Hoja de Reclamación N° ${ticketNumber}</h2>
            <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-PE')}</p>
            <hr />
            <h3>1. Identificación del Consumidor</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Documento:</strong> ${documento}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <h3>2. Detalle de la Reclamación</h3>
            <p><strong>Tipo de Bien:</strong> ${tipoBien}</p>
            <p><strong>Tipo de Solicitud:</strong> ${tipoReclamo}</p>
            <p><strong>Detalle:</strong> ${detalle}</p>
            <p><strong>Pedido:</strong> ${pedido}</p>
            <hr />
            <p style="font-size: 12px; color: #666;">
              * Esta es una copia automática. Entornos Funcionales emitirá una respuesta formal en un plazo máximo de 15 días hábiles conforme a ley.
            </p>
          </div>
        `
      })
    });

    if (!res.ok) throw new Error('Error en la API de Resend');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Reclamo procesado con éxito', ticket: ticketNumber })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Fallo interno al procesar el reclamo' })
    };
  }
};
