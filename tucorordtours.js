document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       DESTINOS
       ========================================== */

    const destinos = {

        playas: [
            {
                nombre: "Playa Bávaro",
                imagen: "imagenes/playabavaro.jpg"
            },
            {
                nombre: "Playa Rincón",
                imagen: "imagenes/playarincon.jpg"
            },
            {
                nombre: "Playa Macao",
                imagen: "imagenes/playamacao.jpg"
            },
            {
                nombre: "Playa Juanillo",
                imagen: "imagenes/playajuanillo.jpg"
            },
            {
                nombre: "Playa Bahía de las Águilas",
                imagen: "imagenes/playabahialasaguilas.jpg"
            },
            {
                nombre: "Playa Sosúa",
                imagen: "imagenes/playasosua.jpg"
            },
            {
                nombre: "Playa Las Terrenas",
                imagen: "imagenes/playalasterrenas.jpg"
            },
            {
                nombre: "Playa Punta Cana",
                imagen: "imagenes/playapuntacana.jpg"
            },
            {
                nombre: "Playa El Valle",
                imagen: "imagenes/playaelvalle.jpg"
            }
        ],

        montanas: [
            {
                nombre: "Pico Duarte",
                imagen: "imagenes/picoduarte.jpg"
            },
            {
                nombre: "Pico La Pelona",
                imagen: "imagenes/picolapelona.jpg"
            },
            {
                nombre: "Isabel de Torres",
                imagen: "imagenes/isabeldetorres.jpg"
            },
            {
                nombre: "Pico Diego de Ocampo",
                imagen: "imagenes/diego_de_ocampo.png"
            },
            {
                nombre: "Valle del Tetero",
                imagen: "imagenes/valledeltetero.jpg"
            },
            {
                nombre: "Loma Quita Espuela",
                imagen: "imagenes/lomaquintaespuela.jpg"
            },
            {
                nombre: "Sierra de Bahoruco",
                imagen: "imagenes/sierradebahoruco.jpg"
            },
            {
                nombre: "Cordillera Central",
                imagen: "imagenes/cordilleracentral.jpg"
            },
            {
                nombre: "Montaña Redonda",
                imagen: "imagenes/montanaredonda.jpg"
            }
        ],

        cultura: [
            {
                nombre: "Zona Colonial",
                imagen: "imagenes/zonacolonial.jpg"
            },
            {
                nombre: "Merengue",
                imagen: "imagenes/merengue.jpg"
            },
            {
                nombre: "Bachata",
                imagen: "imagenes/bachata.jpg"
            },
            {
                nombre: "Arte dominicano",
                imagen: "imagenes/artesania.jpg"
            },
            {
                nombre: "Tradiciones indígenas",
                imagen: "imagenes/tradicionindigena.webp"
            },
            {
                nombre: "Carnaval dominicano",
                imagen: "imagenes/carnaval.jpg"
            },
            {
                nombre: "Gastronomía dominicana",
                imagen: "imagenes/gastronomiadm.jpg"
            },
            {
                nombre: "Faro a Colón",
                imagen: "imagenes/faroacolon.jpg"
            },
            {
                nombre: "Museos dominicanos",
                imagen: "imagenes/museodominicano.jpg"
            }
        ],

        lugares: [
            {
                nombre: "Casa de Campo",
                imagen: "imagenes/casadecampo.webp"
            },
            {
                nombre: "Marina Cap Cana",
                imagen: "imagenes/marinacapcana.webp"
            },
            {
                nombre: "Altos de Chavón",
                imagen: "imagenes/altosdechavon.webp"
            },
            {
                nombre: "Punta Cana",
                imagen: "imagenes/puntacana.jpg"
            },
            {
                nombre: "Cap Cana",
                imagen: "imagenes/capcana.jpg"
            },
            {
                nombre: "Piantini",
                imagen: "imagenes/piantini.jpg"
            },
            {
                nombre: "Naco",
                imagen: "imagenes/naco.webp"
            },
            {
                nombre: "Malecón de Santo Domingo",
                imagen: "imagenes/malecon.jpg"
            },
            {
                nombre: "BlueMall Santo Domingo",
                imagen: "imagenes/bluemall.jpg"
            }
        ]

    };


    /* ==========================================
       CONFIGURACIÓN DE LAS GALERÍAS
       ========================================== */

    const configuracion = [
        {
            seccion: "playas",
            galeria: "galeria-playa"
        },
        {
            seccion: "montanas",
            galeria: "galeria-montanas"
        },
        {
            seccion: "cultura",
            galeria: "galeria-cultura"
        },
        {
            seccion: "lugares",
            galeria: "galeria-lugares"
        }
    ];


    /* ==========================================
       CREAR TARJETAS DE DESTINOS
       ========================================== */

    function crearTarjetas(lista, galeriaId) {

        const galeria = document.getElementById(galeriaId);

        if (!galeria) {
            console.error(
                "No se encontró la galería:",
                galeriaId
            );

            return;
        }

        galeria.innerHTML = "";


        lista.forEach(function (destino) {

            const tarjeta = document.createElement("div");

            tarjeta.className = "destino-card";


            const imagen = document.createElement("img");

            imagen.src = destino.imagen;

            imagen.alt = destino.nombre;

            imagen.loading = "lazy";


            const titulo = document.createElement("h5");

            titulo.textContent = destino.nombre;


            tarjeta.appendChild(imagen);

            tarjeta.appendChild(titulo);

            galeria.appendChild(tarjeta);

        });

    }


    /* ==========================================
       OCULTAR LAS SECCIONES AL INICIAR
       ========================================== */

    configuracion.forEach(function (item) {

        const seccion =
            document.getElementById(item.seccion);

        if (seccion) {
            seccion.style.display = "none";
        }

    });


    /* ==========================================
       CREAR TODAS LAS GALERÍAS
       ========================================== */

    crearTarjetas(
        destinos.playas,
        "galeria-playa"
    );

    crearTarjetas(
        destinos.montanas,
        "galeria-montanas"
    );

    crearTarjetas(
        destinos.cultura,
        "galeria-cultura"
    );

    crearTarjetas(
        destinos.lugares,
        "galeria-lugares"
    );


    /* ==========================================
       ABRIR / CERRAR DESTINOS
       ========================================== */

    function alternarSeccion(id) {

        const seccion =
            document.getElementById(id);

        const boton =
            document.querySelector(
                'button[aria-controls="' + id + '"]'
            );


        if (!seccion || !boton) {
            console.error(
                "No se encontró la sección o el botón:",
                id
            );

            return;
        }


        const estabaAbierta =
            seccion.style.display === "block";


        /* Cerrar todas las secciones */

        configuracion.forEach(function (item) {

            const otraSeccion =
                document.getElementById(item.seccion);

            const otroBoton =
                document.querySelector(
                    'button[aria-controls="' +
                    item.seccion +
                    '"]'
                );


            if (otraSeccion) {
                otraSeccion.style.display = "none";
            }


            if (otroBoton) {
                otroBoton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });


        /* Si estaba cerrada, abrirla */

        if (!estabaAbierta) {

            seccion.style.display = "block";

            boton.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }


    /* ==========================================
       CONECTAR SOLAMENTE LOS BOTONES DE DESTINOS
       ========================================== */

    configuracion.forEach(function (item) {

        const boton =
            document.querySelector(
                'button[aria-controls="' +
                item.seccion +
                '"]'
            );


        if (boton) {

            boton.addEventListener(
                "click",
                function () {

                    alternarSeccion(
                        item.seccion
                    );

                }
            );

        }

    });


    /* ==========================================
       COMUNIDAD
       ========================================== */

    const botonAbrirComunidad =
        document.getElementById(
            "abrir-comunidad"
        );

    const botonCerrarComunidad =
        document.getElementById(
            "cerrar-comunidad"
        );

    const formularioComunidad =
        document.getElementById(
            "formulario-comunidad"
        );

    const formularioExperiencia =
        document.getElementById(
            "formulario-experiencia"
        );


    /* ==========================================
       ABRIR COMUNIDAD
       ========================================== */

    function abrirComunidad() {

        if (!formularioComunidad) {

            console.error(
                "No se encontró el formulario de Comunidad."
            );

            return;
        }


        formularioComunidad.classList.add(
            "activo"
        );

        formularioComunidad.setAttribute(
            "aria-hidden",
            "false"
        );


        if (botonAbrirComunidad) {

            botonAbrirComunidad.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        formularioComunidad.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* ==========================================
       CERRAR COMUNIDAD
       ========================================== */

    function cerrarComunidad() {

        if (!formularioComunidad) {
            return;
        }


        formularioComunidad.classList.remove(
            "activo"
        );

        formularioComunidad.setAttribute(
            "aria-hidden",
            "true"
        );


        if (botonAbrirComunidad) {

            botonAbrirComunidad.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* ==========================================
       EVENTO PARA ABRIR COMUNIDAD
       ========================================== */

    if (botonAbrirComunidad) {

        botonAbrirComunidad.addEventListener(
            "click",
            abrirComunidad
        );

    }


    /* ==========================================
       EVENTO PARA CERRAR COMUNIDAD
       ========================================== */

    if (botonCerrarComunidad) {

        botonCerrarComunidad.addEventListener(
            "click",
            cerrarComunidad
        );

    }


    /* ==========================================
       ABRIR COMUNIDAD DESDE OTRA PÁGINA
       ========================================== */

    if (window.location.hash === "#comunidad") {

        setTimeout(function () {

            abrirComunidad();

        }, 100);

    }


    /* ==========================================
       CONTROL DE FOTOS
       Máximo 2 fotografías
       ========================================== */

    const selectorFotos =
        document.getElementById(
            "fotos-experiencia"
        );


    if (selectorFotos) {

        selectorFotos.addEventListener(
            "change",
            function () {

                const cantidadFotos =
                    selectorFotos.files.length;


                if (cantidadFotos > 2) {

                    alert(
                        "Puedes seleccionar un máximo de 2 fotos."
                    );


                    selectorFotos.value = "";

                }

            }
        );

    }


    /* ==========================================
       CREAR EFECTO DE ÉXITO
       👍 + CONFETI
       ========================================== */

    function mostrarMensajeExito() {

        const existente =
            document.getElementById(
                "mensaje-exito-comunidad"
            );

        if (existente) {
            existente.remove();
        }


        const pantalla =
            document.createElement("div");

        pantalla.id =
            "mensaje-exito-comunidad";


        pantalla.style.position = "fixed";
        pantalla.style.inset = "0";
        pantalla.style.zIndex = "99999";
        pantalla.style.display = "flex";
        pantalla.style.alignItems = "center";
        pantalla.style.justifyContent = "center";
        pantalla.style.background =
            "rgba(3, 20, 29, 0.72)";
        pantalla.style.backdropFilter =
            "blur(5px)";
        pantalla.style.padding = "20px";
        pantalla.style.boxSizing = "border-box";


        const tarjeta =
            document.createElement("div");

        tarjeta.style.width = "min(90%, 520px)";
        tarjeta.style.padding = "40px 30px";
        tarjeta.style.borderRadius = "28px";
        tarjeta.style.textAlign = "center";
        tarjeta.style.background =
            "linear-gradient(145deg, #03141d, #0a2d39)";
        tarjeta.style.border =
            "1px solid rgba(217, 181, 109, 0.55)";
        tarjeta.style.boxShadow =
            "0 25px 70px rgba(0,0,0,0.40)";
        tarjeta.style.fontFamily =
            '"Trebuchet MS", Arial, sans-serif';


        const pulgar =
            document.createElement("div");

        pulgar.textContent = "👍";
        pulgar.style.fontSize = "72px";
        pulgar.style.lineHeight = "1";
        pulgar.style.marginBottom = "20px";
        pulgar.style.animation =
            "subirPulgar 0.65s ease";


        const titulo =
            document.createElement("h2");

        titulo.textContent =
            "¡Gracias por compartir tu experiencia!";

        titulo.style.margin = "0";
        titulo.style.color = "#ffffff";
        titulo.style.fontSize = "clamp(22px, 5vw, 30px)";
        titulo.style.lineHeight = "1.25";


        const texto =
            document.createElement("p");

        texto.textContent =
            "Tu opinión es muy importante para Tu Coro RD Tours.";

        texto.style.margin =
            "15px 0 0";
        texto.style.color = "#dceff0";
        texto.style.fontSize = "16px";
        texto.style.lineHeight = "1.6";


        tarjeta.appendChild(pulgar);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(texto);

        pantalla.appendChild(tarjeta);

        document.body.appendChild(pantalla);


        /* ==========================================
           ESTILOS DE ANIMACIÓN
           ========================================== */

        if (
            !document.getElementById(
                "estilos-exito-comunidad"
            )
        ) {

            const estilos =
                document.createElement("style");

            estilos.id =
                "estilos-exito-comunidad";

            estilos.textContent = `
                @keyframes subirPulgar {
                    0% {
                        transform: translateY(35px) scale(0.5);
                        opacity: 0;
                    }

                    60% {
                        transform: translateY(-8px) scale(1.12);
                        opacity: 1;
                    }

                    100% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }

                @keyframes confetiCaer {
                    0% {
                        transform: translateY(-20px) rotate(0deg);
                        opacity: 1;
                    }

                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
            `;

            document.head.appendChild(estilos);

        }


        /* ==========================================
           CREAR CONFETI
           ========================================== */

        for (let i = 0; i < 45; i++) {

            const confeti =
                document.createElement("span");

            confeti.textContent =
                i % 2 === 0 ? "✦" : "•";

            confeti.style.position = "fixed";
            confeti.style.left =
                Math.random() * 100 + "vw";
            confeti.style.top =
                "-20px";
            confeti.style.zIndex = "100000";
            confeti.style.fontSize =
                (10 + Math.random() * 18) + "px";
            confeti.style.color =
                i % 3 === 0
                    ? "#18d6c5"
                    : i % 3 === 1
                        ? "#d9b56d"
                        : "#ffffff";

            confeti.style.pointerEvents =
                "none";

            confeti.style.animation =
                "confetiCaer " +
                (2 + Math.random() * 2) +
                "s linear forwards";

            confeti.style.animationDelay =
                (Math.random() * 0.5) + "s";

            pantalla.appendChild(confeti);

        }


        /* ==========================================
           CERRAR MENSAJE
           ========================================== */

        setTimeout(function () {

            pantalla.style.opacity = "0";
            pantalla.style.transition =
                "opacity 0.5s ease";

            setTimeout(function () {

                pantalla.remove();

            }, 500);

        }, 4000);

    }


    /* ==========================================
       ENVÍO DEL FORMULARIO
       ========================================== */

    if (formularioExperiencia) {

        formularioExperiencia.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();


                const fotos =
                    selectorFotos
                        ? selectorFotos.files
                        : [];


                /* ==========================================
                   VERIFICAR MÁXIMO DE FOTOS
                   ========================================== */

                if (fotos.length > 2) {

                    alert(
                        "Puedes seleccionar un máximo de 2 fotos."
                    );

                    return;

                }


                /* ==========================================
                   VERIFICAR TAMAÑO TOTAL DE FOTOS
                   FormSubmit permite hasta 10 MB.
                   ========================================== */

                let tamanioTotal = 0;


                for (
                    let i = 0;
                    i < fotos.length;
                    i++
                ) {

                    tamanioTotal +=
                        fotos[i].size;

                }


                const limite =
                    10 * 1024 * 1024;


                if (tamanioTotal > limite) {

                    alert(
                        "Las fotos seleccionadas superan el límite total de 10 MB. Por favor, selecciona fotos más pequeñas."
                    );

                    return;

                }


                /* ==========================================
                   PREPARAR ENVÍO A FORMSUBMIT
                   ========================================== */

                formularioExperiencia.method =
                    "POST";

                formularioExperiencia.enctype =
                    "multipart/form-data";

                formularioExperiencia.action =
                    "https://formsubmit.co/contacto@tucorord.tours";


                /* ==========================================
                   CREAR IFRAME OCULTO
                   Para que el usuario permanezca
                   dentro de la página.
                   ========================================== */

                let iframeEnvio =
                    document.getElementById(
                        "iframe-envio-comunidad"
                    );


                if (!iframeEnvio) {

                    iframeEnvio =
                        document.createElement(
                            "iframe"
                        );

                    iframeEnvio.id =
                        "iframe-envio-comunidad";

                    iframeEnvio.name =
                        "iframe-envio-comunidad";

                    iframeEnvio.style.display =
                        "none";

                    document.body.appendChild(
                        iframeEnvio
                    );

                }


                formularioExperiencia.target =
                    "iframe-envio-comunidad";


                /* ==========================================
                   CAMPOS INTERNOS DE FORMSUBMIT
                   ========================================== */

                let campoAsunto =
                    formularioExperiencia.querySelector(
                        'input[name="_subject"]'
                    );


                if (!campoAsunto) {

                    campoAsunto =
                        document.createElement(
                            "input"
                        );

                    campoAsunto.type =
                        "hidden";

                    campoAsunto.name =
                        "_subject";

                    formularioExperiencia.appendChild(
                        campoAsunto
                    );

                }


                campoAsunto.value =
                    "Nueva experiencia - Tu Coro RD Tours";


                let campoPlantilla =
                    formularioExperiencia.querySelector(
                        'input[name="_template"]'
                    );


                if (!campoPlantilla) {

                    campoPlantilla =
                        document.createElement(
                            "input"
                        );

                    campoPlantilla.type =
                        "hidden";

                    campoPlantilla.name =
                        "_template";

                    formularioExperiencia.appendChild(
                        campoPlantilla
                    );

                }


                campoPlantilla.value =
                    "table";


                /* ==========================================
                   CAMPO URL DEL SITIO
                   ========================================== */

                let campoUrl =
                    formularioExperiencia.querySelector(
                        'input[name="_url"]'
                    );


                if (!campoUrl) {

                    campoUrl =
                        document.createElement(
                            "input"
                        );

                    campoUrl.type =
                        "hidden";

                    campoUrl.name =
                        "_url";

                    formularioExperiencia.appendChild(
                        campoUrl
                    );

                }


                campoUrl.value =
                    window.location.href;


                /* ==========================================
                   MOSTRAR MENSAJE DE ÉXITO
                   ========================================== */

                mostrarMensajeExito();


                /* ==========================================
                   ENVIAR FORMULARIO REALMENTE
                   ========================================== */

                HTMLFormElement.prototype.submit.call(
                    formularioExperiencia
                );


                /* ==========================================
                   LIMPIAR FORMULARIO DESPUÉS DEL ENVÍO
                   ========================================== */

                setTimeout(function () {

                    formularioExperiencia.reset();

                }, 500);


            }
        );

    }


    /* ==========================================
       MENSAJE DE COMPROBACIÓN
       ========================================== */

    console.log(
        "TucorordTours: JavaScript cargado correctamente."
    );

    console.log(
        "TucorordTours: Comunidad preparada correctamente."
    );

    console.log(
        "TucorordTours: Sistema de envío de experiencias preparado."
    );

});