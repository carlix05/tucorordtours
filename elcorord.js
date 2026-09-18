/* =========================================================
   EL CORO RD
   JAVASCRIPT PRINCIPAL
   ========================================================= */


/* =========================================================
   SECCIONES DE DESTINOS
   ========================================================= */

const seccionesDestinos = [
    "playas",
    "montanas",
    "cultura",
    "lugares"
];


/* =========================================================
   PLAYAS
   ========================================================= */

const playas = [
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
];


/* =========================================================
   MONTAÑAS
   ========================================================= */

const montanas = [
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
];


/* =========================================================
   CULTURA
   ========================================================= */

const cultura = [
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
];


/* =========================================================
   LUGARES EXCLUSIVOS
   ========================================================= */

const lugares = [
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
];


/* =========================================================
   MOSTRAR Y OCULTAR SECCIONES
   ========================================================= */

function alternarSeccion(id) {

    const contenedor =
        document.getElementById(id);

    const boton =
        document.querySelector(
            `button[aria-controls="${id}"]`
        );


    /* =====================================================
       COMPROBACIÓN DE SEGURIDAD
       ===================================================== */

    if (!contenedor || !boton) {
        return;
    }


    /* =====================================================
       POSICIÓN INICIAL DEL BOTÓN
       ===================================================== */

    const posicionInicial =
        boton.getBoundingClientRect().top;


    /* =====================================================
       COMPROBAR SI YA ESTÁ ABIERTA
       ===================================================== */

    const estaAbierto =
        contenedor.style.display !== "none";


    /* =====================================================
       CERRAR TODAS LAS SECCIONES
       ===================================================== */

    seccionesDestinos.forEach(
        function(seccionId) {

            const seccion =
                document.getElementById(seccionId);

            const botonSeccion =
                document.querySelector(
                    `button[aria-controls="${seccionId}"]`
                );


            if (seccion) {

                seccion.style.display =
                    "none";

            }


            if (botonSeccion) {

                botonSeccion.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       ABRIR LA SECCIÓN SELECCIONADA
       ===================================================== */

    if (!estaAbierto) {

        contenedor.style.display =
            "block";


        boton.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    /* =====================================================
       CONSERVAR LA POSICIÓN DEL BOTÓN
       ===================================================== */

    const posicionFinal =
        boton.getBoundingClientRect().top;


    const diferencia =
        posicionFinal - posicionInicial;


    if (diferencia !== 0) {

        window.scrollBy({
            top: diferencia,
            behavior: "instant"
        });

    }

}


/* =========================================================
   CREAR TARJETAS DE DESTINOS
   ========================================================= */

function crearTarjetas(lista, contenedorId) {

    const galeria =
        document.getElementById(contenedorId);


    /* =====================================================
       SI LA GALERÍA NO EXISTE, SALIMOS
       ===================================================== */

    if (!galeria) {
        return;
    }


    /* =====================================================
       EVITAR DUPLICAR TARJETAS
       ===================================================== */

    if (galeria.children.length > 0) {
        return;
    }


    /* =====================================================
       CREAR CADA TARJETA
       ===================================================== */

    lista.forEach(
        function(elemento) {

            /* ==============================================
               CREAR TARJETA
               ============================================== */

            const tarjeta =
                document.createElement("div");


            /*
               CAMBIO IMPORTANTE:

               Antes:
               playa-card

               Ahora:
               destino-card

               Esto permite que todas las categorías
               utilicen la misma estructura de tarjeta.
            */

            tarjeta.className =
                "destino-card";


            /* ==============================================
               CREAR IMAGEN
               ============================================== */

            const imagen =
                document.createElement("img");


            imagen.src =
                elemento.imagen;


            imagen.alt =
                elemento.nombre;


            imagen.loading =
                "lazy";


            /* ==============================================
               CREAR NOMBRE
               ============================================== */

            const nombre =
                document.createElement("h5");


            nombre.textContent =
                elemento.nombre;


            /* ==============================================
               AGREGAR IMAGEN
               ============================================== */

            tarjeta.appendChild(
                imagen
            );


            /* ==============================================
               AGREGAR NOMBRE
               ============================================== */

            tarjeta.appendChild(
                nombre
            );


            /* ==============================================
               AGREGAR TARJETA A LA GALERÍA
               ============================================== */

            galeria.appendChild(
                tarjeta
            );

        }
    );

}


/* =========================================================
   CARGAR GALERÍA DE PLAYAS
   ========================================================= */

crearTarjetas(
    playas,
    "galeria-playa"
);


/* =========================================================
   CARGAR GALERÍA DE MONTAÑAS
   ========================================================= */

crearTarjetas(
    montanas,
    "galeria-montanas"
);


/* =========================================================
   CARGAR GALERÍA DE CULTURA
   ========================================================= */

crearTarjetas(
    cultura,
    "galeria-cultura"
);


/* =========================================================
   CARGAR GALERÍA DE LUGARES
   ========================================================= */

crearTarjetas(
    lugares,
    "galeria-lugares"
); 