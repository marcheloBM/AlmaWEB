//funcion para enviar whatsApp
function enviarWhatsApp(event){
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const celular = form.celular.value;
    const correo = form.correo.value;
    const mensaje = form.mensaje.value;

    if (!name || !celular || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const textos = `Hola, mi nombre es ${name}. Celular: ${celular}. Correo: ${correo}. Mensaje: ${mensaje}`;
    const url = `https://api.whatsapp.com/send?phone=56985385607&text=${encodeURIComponent(textos)}`;

    window.open(url, "_blank");
}
function enviarCorreo(event){
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const celular = form.celular.value;
    const correo = form.correo.value;
    const mensaje = form.mensaje.value;

    if (!name || !celular || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const destinatario = "alma.enfermeria.spa@gmail.com";
    const asunto = encodeURIComponent("Solicitud de contacto desde la web");
    const cuerpo = encodeURIComponent(
        `Hola, mi nombre es ${name}.\nCelular: ${celular}.\nCorreo: ${correo}.\nMensaje: ${mensaje}`
    );
    const mailtoUrl = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;

    window.location.href = mailtoUrl;
}