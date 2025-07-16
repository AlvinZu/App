const imagenesEjercicios = {
    
};

        // Variables globales
        let ejerciciosGenerados = []; // Variable para almacenar los ejercicios generados temporalmente
        let usuarioAutenticado = null;
        let musculosSeleccionados = [];
        let intensidadSeleccionada = null;
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
// Variables globales para la rutina personalizada
let ejerciciosSeleccionados = [];
 let currentDate = new Date();
 let selectedDate = null;

        // Lista de ejercicios predefinidos
        const ejerciciosPredefinidos = {
            pecho: [
                "Press de banco plano con barra",
                "Press de banco plano con mancuernas",
                "Press inclinado con barra",
                "Press banco inclinado con mancuernas",
                "Press banco declinado con barra",
                "Press banco declinado con mancuernas",
                "Maquina Press en banco inclinado con discos",
                "Maquina de Fondos",
                "Press de pecho en maquina (blanca)",
                "Pec deck (blanco)",
                "Elevacion parado con mancuernas en triangulo al pecho",
                "Cristos con mancuernas en banco inclinado",
                "Cristos con mancuernas en banco declinado",
                "Fondos libres",
                "Pullover con mancuernas",
                "Press de pecho en maquina",
                "Cruce (cross over) en polea alta",
                "Cruce (cross over) en polea baja",
                "Lagartijas con apertura normal"
            ],
            triceps: [
                "Fondos libres",
                "Rompe craneos con barra para triceps (press frances)",
                "(French Press) Extension de triceps parado con polea baja (por atras de la cabeza)",
                "Extension de triceps en polea alta con agarre individual y palma hacia arriba",
                "Extensiones de triceps en polea alta con cuerda (de frente)",
                "Extensiones de triceps en polea alta con barra recta",
                "Extensiones de triceps en polea alta con barra curva (V)",
                "Extension de triceps con barra recta en polea alta con agarre palma hacia arriba",
                "Patada de triceps con mancuernas",
                "Press de banca con agarre cerrado",
                "Patada de triceps con polea baja",
                "Fondos en maquina",
                "Fondos en maquina ARM EXTENSION",
                "Lagartijas diamante"
            ],
            biceps: [
                "Curl con barra recta (Las 21’s)",
                "Curl parado con mancuernas",
                "Curl sentado en banco inclinado con mancuernas",
                "Curl en banco predicador con barra",
                "Curl en banco predicador con mancuerna",
                "Curl con barra Z",
                "Curl concentrado con mancuerna",
                "Curl individual en polea alta",
                "Curl martillo con mancuernas",
                "Curl en polea baja con barra",
                "Curl en polea baja con cuerda",
                "Curl en polea baja con barra z",
                "Curl inverso en polea baja",
                "Curl inverso con barra",
                "Curl araña con barra",
                "Curl en maquina ARM",
                "Curl en maquina con un brazo"
            ],
            espalda: [
                "Dominadas",
                "Jalon al pecho en polea alta agarre abierto",
                "Jalon al pecho en polea alta agarre cerrado palmas hacia ti",
                "Remo con barra al ombligo con agarre prono",
                "Remo con barra al ombligo con agarre supino",
                "Remo con mancuerna",
                "Remo en maquina",
                "Remo sentado en polea baja",
                "Pull down en maquina Rotary",
                "Pull over con barra corta en polea alta",
                "Remo T en aparto agarre abierto",
                "Remo a una mano en polea alta",
                "Pull over acostado en banco con mancuerna",
                "Hiperextensiones"
            ],
            hombro: [
                "Press militar con barra",
                "Press militar con mancuernas",
                "Elevaciones laterales con polea baja",
                "Press Arnold con mancuernas",
                "Press tras nuca con barra",
                "Elevaciones laterales con mancuernas",
                "Elevaciones frontales con mancuernas",
                "Elevaciones frontales con barra en polea baja",
                "Elevaciones frontales con disco",
                "Elevaciones sentado para posteriores con mancuernas",
                "Elevacion al menton con barra",
                "Face pull en polea alta"
            ],
            pierna: [
                "Sentadilla con barra libre",
                "Sentadilla frontal (Goblet) con mancuerna",
                "Prensa de pierna 45 grados (Leg Press)",
                "Silla de Extensiones (Leg Extensions)",
                "Sentadilla bulgara (Bulgarian Split Squat)",
                "Zancadas o Desplantes cortos",
                "Sentadilla hack (Hack Squat)",
                "Step-ups en banco alto con mancuernas o en maquina amarilla",
                "Sentadilla en barra Smith pies juntos (Smith Machine)",
                "Pistol Squat (Sentadilla a una pierna)",
                "Sentadilla en Sissy Squat",
                "Sentadilla Zercher (Zercher Squat)",
                "Sentadilla Jefferson",
                "Prensa horizontal (Sentado)",
                "Prensa vertical pies cerrados",
                "Prensa horizontal (acostado)",
                "Sentadilla Isometrica (Resistencia en pared)",
                "Sentadilla frontal con barra en polea baja"
            ],
            femoral: [
                "Peso muerto con barra Smith",
                "Peso muerto a una pierna con mancuernas",
                "Curl femoral en maquina sentado",
                "Curl femoral en maquina de pie",
                "Curl femoral en maquina acostado",
                "Prensa 45 grados con los pies hasta arriba (talon)",
                "Buenos dias (Good Mornings) con barra corta",
                "Buenos dias (Good Mornings) en maquina hack (perfecta)",
                "Elevacion de cadera a una pierna sobre banco (talon)",
                "Peso muerto con polea baja (agarre cuerda)"
            ],
            gluteo: [
                "Sentadilla con barra libre",
                "Hip thrust con barra",
                "Peso muerto rumano piernas abiertas",
                "Sentadilla sumo con mancuernas o barra",
                "Zancadas o Desplantes largos",
                "Step-ups en maquina o en banco alto con mancuernas",
                "Patada de gluteo en maquina",
                "Patada de gluteo con polea",
                "Abduccion de cadera en maquina",
                "Prensa vertical piernas abiertas",
                "Puente de gluteos con mancuerna a una pierna",
                "Elevaciones laterales de pierna en polea o con disco",
                "Sentadilla bulgara",
                "Sentadilla hack (Perfecta)",
                "Laterales en maquina de piso con discos",
                "Patada en barra Smith",
                "Hiperextension en maquina libre",
                "Extension de gluteos incada con barra Smith",
                "Sentadilla Stripper"
                    ],
           
            entrepierna: [
                "Sentadilla sumo con barra Smith",
                "Prensa horizontal (acostado)",
                "Aduccion en maquina (cerrando las piernas)",
                "Sentadilla sumo con mancuerna",
                "Jalon de pierna lateral con polea baja (aductores)"
              ],
           pantorrilla: [
                "Elevacion de talones en barra smith",
                "Elevacion de talones en prensa",
                "Elevacion de talones en costurera",
                "Elevacion de talones parado a un pie"
              ],
             abdomen: [
                "Crunch acostado o en aparato",
                "Crunch parado con cuerda en polea alta",
                "Elevacion de rodillas en aparato",
                "Elevacion de piernas acostado",
                "Plancha con tiempo de tension",
                "Estiramiento incado con rueda"
            ]
        };
   // Función para registrar usuarios
        function registrarUsuario() {
    // Aplicamos trimEnd() al nombre de usuario para quitar el espacion al final
    const nombreUsuario = document.getElementById("nombreUsuarioRegistro").value.trimEnd();
    const contrasena = document.getElementById("contrasenaRegistro").value;

    if (!nombreUsuario || !contrasena) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const usuarioExistente = usuarios.find(u => u.nombre === nombreUsuario);
    if (usuarioExistente) {
        alert("El nombre de usuario ya está registrado. Intenta con otro.");
        return;
    }

    usuarios.push({ nombre: nombreUsuario, contrasena: contrasena, rutinas: [] });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado exitosamente.");
    mostrarPantalla("pantallaInicioSesion");
}

        // Función para iniciar sesión
        function iniciarSesion() {
            const nombreUsuario = document.getElementById("nombreUsuarioInicioSesion").value.trimEnd();
            const contrasena = document.getElementById("contrasenaInicioSesion").value;

            const usuario = usuarios.find(u => u.nombre === nombreUsuario && u.contrasena === contrasena);
            if (!usuario) {
                alert("Nombre de usuario o contraseña incorrectos.");
                return;
            }

            usuarioAutenticado = usuario;
            /*alert("Inicio de sesión exitoso.");*/
            mostrarPantalla("pantallaIntensidad");
        }

        // Función para seleccionar intensidad
        function seleccionarIntensidad(intensidad) {
            intensidadSeleccionada = intensidad;
           /* alert(`Has seleccionado la intensidad: ${intensidad.toUpperCase()}`);*/
            mostrarPantalla("pantalla2");
        }

        // Función para cambiar de pantalla
        function mostrarPantalla(id) {
    // Ocultar todas las pantallas primero
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.style.display = 'none';
    });

    // Muestra la pantalla deseada
    const pantallaActual = document.getElementById(id);
    if (pantallaActual) {
        pantallaActual.style.display = 'block';
    }

    // --- LÍNEAS NUEVAS ---
    // Agrega un nuevo estado al historial del navegador.
    // Esto hace que el botón/gesto de retroceso funcione.
    const state = { screen: id };
    const title = id; // El título no es muy usado, pero es bueno tenerlo
    const url = `#${id}`; // Cambia la URL para reflejar la pantalla actual
    history.pushState(state, title, url);
    // --- FIN DE LÍNEAS NUEVAS ---

    if (id === "pantalla2") {
        cargarMusculos();
        ejerciciosGenerados = [];
    } else if (id === "pantalla3") {
        mostrarEjercicios();
    } else if (id === "pantalla4") {
        cargarRutinasGuardadas();
    } else if (id === "pantallaMejoraExperiencia") {
        pantallamejoraexperiencia();
    }
}


function volverAMejoraExperiencia() {
    document.getElementById("workoutView").style.display = "none";
    document.getElementById("pantallaMejoraExperiencia").style.display = "block";
}


// Variables para controlar la pantalla activa
let pantallaActiva = null;

// Función para abrir modales
function abrirModal(idModal) {
    // Ocultar pantalla activa
    pantallaActiva = document.querySelector('.pantalla:not(.oculto)');
    pantallaActiva.classList.add('oculto');
    
    // Mostrar el modal
    document.getElementById(idModal).classList.remove('oculto');
}

// Función para cerrar modales
function cerrarModal(idModal) {
    // Ocultar el modal
    document.getElementById(idModal).classList.add('oculto');
  // Limpiar los campos del formulario si es el modal de la calculadora
    if (idModal === "modalCalculadoraCalorias") {
        limpiarFormularioCalculadora();
    }
  // Mostrar la pantalla anterior
    if (pantallaActiva) {
        pantallaActiva.classList.remove('oculto');
        pantallaActiva = null;
    }
    
    // Mostrar la pantalla anterior
    if (pantallaActiva) {
        pantallaActiva.classList.remove('oculto');
        pantallaActiva = null;
    }
}

// Para pestañas en nutrición
function mostrarTab(tabId) {
    document.querySelectorAll('.nutricion-tabs button').forEach(btn => {
        btn.style.backgroundColor = '';
    });
    document.querySelectorAll('.tab-contenido').forEach(tab => {
        tab.classList.add('oculto');
    });
    document.getElementById(tabId).classList.remove('oculto');
    event.target.style.backgroundColor = '#4caf50';
}

        // Función para cargar los músculos dinámicamente
        function cargarMusculos() {
            const contenedorMusculos = document.getElementById("contenedorMusculos");
            contenedorMusculos.innerHTML = "";
            Object.keys(ejerciciosPredefinidos).forEach(musculo => {
                const div = document.createElement("div");
                div.className = "musculo";
                div.setAttribute("data-musculo", musculo);
                div.innerHTML = `<i class="fas fa-dumbbell"></i> ${musculo.toUpperCase()}`;
                div.onclick = () => manejarClicMusculo(div);
                contenedorMusculos.appendChild(div);
            });

            // Limpiar selección de músculos previa
            musculosSeleccionados = [];
            document.querySelectorAll(".musculo").forEach(musculo => {
                musculo.classList.remove("seleccionado");
            });
        }

        // Función para manejar el clic en un músculo
        function manejarClicMusculo(musculo) {
            musculo.classList.toggle("seleccionado");
            const musculoData = musculo.getAttribute("data-musculo");

            if (musculo.classList.contains("seleccionado")) {
                musculosSeleccionados.push(musculoData);
            } else {
                musculosSeleccionados = musculosSeleccionados.filter(m => m !== musculoData);
            }
        }

        // Función para mostrar los ejercicios seleccionados en una tabla
        function mostrarEjercicios() {
    const ejerciciosContainer = document.getElementById("ejercicios");
    ejerciciosContainer.innerHTML = "";

    // Limpiar ejercicios generados previamente
    ejerciciosGenerados = [];

    // Crear la tabla
    const table = document.createElement("table");
    table.classList.add("tabla-ejercicios");

    // Encabezado de la tabla
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Músculo</th>
            <th>Ejercicio</th>
            <th>Series</th>
            <th>Reps</th>
        </tr>
    `;
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement("tbody");
    musculosSeleccionados.forEach(musculo => {
        const ejerciciosAleatorios = obtenerEjerciciosAleatorios(musculo);
        ejerciciosGenerados.push(...ejerciciosAleatorios); // Guardar los ejercicios generados
        ejerciciosAleatorios.forEach(ejercicio => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${musculo.toUpperCase()}</td>
                <td>${ejercicio.ejercicio}</td>
                <td>${ejercicio.series}</td>
                <td>${ejercicio.repeticiones}</td>
            `;
            tbody.appendChild(row);
        });
    });
    table.appendChild(tbody);
    ejerciciosContainer.appendChild(table);
}

       // Función para obtener ejercicios aleatorios con series y repeticiones
        function obtenerEjerciciosAleatorios(musculo) {
    const ejercicios = ejerciciosPredefinidos[musculo];
    const maxEjercicios = obtenerMaximoEjercicios(intensidadSeleccionada);
    const seleccionados = new Set();
    while (seleccionados.size < maxEjercicios && seleccionados.size < ejercicios.length) {
        const indiceAleatorio = Math.floor(Math.random() * ejercicios.length);
        seleccionados.add(ejercicios[indiceAleatorio]);
    }
    return Array.from(seleccionados).map(ejercicio => ({
        musculo: musculo, // Agregar el músculo al ejercicio
        ejercicio: ejercicio,
        series: obtenerNumeroAleatorioSeries(intensidadSeleccionada),
        repeticiones: obtenerNumeroAleatorioRepeticiones(intensidadSeleccionada)
    }));
}

        // Función para determinar el máximo de ejercicios según la intensidad
        function obtenerMaximoEjercicios(intensidad) {
            switch (intensidad) {
                case "basico":
                    return obtenerNumeroAleatorio(3, 4); // Entre 3 y 4 ejercicios
                case "intermedio":
                    return 4; // Exactamente 4 ejercicios
                case "avanzado":
                    return obtenerNumeroAleatorio(4, 6); // Entre 4 y 6 ejercicios
                default:
                    return 4;
            }
        }

        // Función para determinar el número de series según la intensidad
        function obtenerNumeroAleatorioSeries(intensidad) {
            switch (intensidad) {
                case "basico":
                    return obtenerNumeroAleatorio(3, 4); // Entre 3 y 4 series
                case "intermedio":
                    return 4; // Exactamente 4 series
                case "avanzado":
                    return obtenerNumeroAleatorio(4, 6); // Entre 4 y 6 series
                default:
                    return 4;
            }
        }

        // Función para determinar el rango de repeticiones según la intensidad
        function obtenerNumeroAleatorioRepeticiones(intensidad) {
            switch (intensidad) {
                case "basico":
                    return obtenerNumeroAleatorio(8, 12); // Entre 8 y 12 repeticiones
                case "intermedio":
                    return obtenerNumeroAleatorio(12, 15); // Entre 12 y 15 repeticiones
                case "avanzado":
                    return obtenerNumeroAleatorio(14, 20); // Entre 14 y 20 repeticiones
                default:
                    return 10;
            }
        }

        // Función para obtener un número aleatorio dentro de un rango
        function obtenerNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Función para guardar una rutina
        function guardarRutina() {
    const nombreRutina = document.getElementById("nombreRutina").value;
    if (!nombreRutina) {
        
        return;
    }

    // Agrupar los ejercicios generados por músculo
    const ejerciciosPorMusculo = {};
    ejerciciosGenerados.forEach(ejercicio => {
        if (!ejerciciosPorMusculo[ejercicio.musculo]) {
            ejerciciosPorMusculo[ejercicio.musculo] = [];
        }
        ejerciciosPorMusculo[ejercicio.musculo].push(ejercicio);
    });

    // Crear la rutina con los ejercicios almacenados
    const rutina = {
        nombre: nombreRutina,
        musculos: musculosSeleccionados,
        ejercicios: musculosSeleccionados.map(musculo => ejerciciosPorMusculo[musculo])
    };

    usuarioAutenticado.rutinas.push(rutina);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    

    // Limpiar los ejercicios generados después de guardar
    ejerciciosGenerados = [];
    // Limpiar el campo del nombre de la rutina
    document.getElementById("nombreRutina").value = "";
    mostrarPantalla("pantalla4");
}

        // Función para cargar las rutinas guardadas del usuario autenticado
        function cargarRutinasGuardadas() {
    const rutinasContainer = document.getElementById("rutinasGuardadas");
    rutinasContainer.innerHTML = "";

    if (!usuarioAutenticado || usuarioAutenticado.rutinas.length === 0) {
        rutinasContainer.innerHTML = `
            <div class="no-rutinas">
                <p>Aún no tienes rutinas guardadas.</p>
                <p>¡Ve y crea la tuya!</p>
            </div>
        `;
        return;
    }

    // Creamos un contenedor para las tarjetas
    const contenedorGrid = document.createElement("div");
    contenedorGrid.className = "grid-rutinas";
    
    usuarioAutenticado.rutinas.forEach((rutina, index) => {
        const divCard = document.createElement("div");
        divCard.className = "rutina-guardada-card";
        
        // Creamos la lista de músculos de la rutina
        const musculosHtml = rutina.musculos.map(m => `<span>${m.toUpperCase()}</span>`).join('');

        divCard.innerHTML = `
            <div class="card-header">
                <h3>${rutina.nombre}</h3>
                <div class="card-musculos">
                    ${musculosHtml}
                </div>
            </div>
            <div class="card-acciones">
                <button class="btn-ver" onclick="mostrarDetallesRutina(${index})">Ver</button>
                <button class="btn-eliminar" onclick="eliminarRutina(${index})">Eliminar</button>
            </div>
        `;
        contenedorGrid.appendChild(divCard);
    });

    rutinasContainer.appendChild(contenedorGrid);
}

// Función para mostrar los detalles de una rutina con una tabla
function mostrarDetallesRutina(index) {
    const rutina = usuarioAutenticado.rutinas[index];
    const rutinasContainer = document.getElementById("rutinasGuardadas");
    rutinasContainer.innerHTML = ""; // Limpiar el contenedor

    // Crear un título para los detalles
    const titulo = document.createElement("h2");
    titulo.textContent = "DETALLES DE LA RUTINA";
    rutinasContainer.appendChild(titulo);

    // Mostrar el nombre de la rutina
    const nombreRutina = document.createElement("p");
    nombreRutina.innerHTML = `<strong>${rutina.nombre}</strong>`;
    rutinasContainer.appendChild(nombreRutina);

    // Mostrar los músculos trabajados
    const musculosTrabajados = document.createElement("p");
    musculosTrabajados.innerHTML = `<strong>Músculos trabajados:</strong> ${rutina.musculos.map(m => m.toUpperCase()).join(", ")}`;
    rutinasContainer.appendChild(musculosTrabajados);

    // Crear la tabla de ejercicios
    const table = document.createElement("table");
    table.classList.add("tabla-ejercicios");

    // Encabezado de la tabla
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Músculo</th>
            <th>Ejercicio</th>
            <th>Series</th>
            <th>Reps</th>
        </tr>
    `;
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement("tbody");
    rutina.ejercicios.forEach((ejerciciosMusculo, i) => {
        ejerciciosMusculo.forEach(ejercicio => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${rutina.musculos[i].toUpperCase()}</td>
                <td>${ejercicio.ejercicio}</td>
                <td>${ejercicio.series}</td>
                <td>${ejercicio.repeticiones}</td>
            `;
            tbody.appendChild(row);
        });
    });
    table.appendChild(tbody);

    // Agregar la tabla al contenedor
    rutinasContainer.appendChild(table);

    // Botón para descargar el PDF
    const botonDescargarPDF = document.createElement("button");
    botonDescargarPDF.textContent = "📥 DESCARGAR PDF";
    botonDescargarPDF.onclick = () => descargarRutinaPDF(index);
    rutinasContainer.appendChild(botonDescargarPDF);

    // Botón para regresar
    const botonVolver = document.createElement("button");
    botonVolver.textContent = "↩️ VOLVER";
    botonVolver.onclick = () => cargarRutinasGuardadas();
    rutinasContainer.appendChild(botonVolver);
}

// Función para mostrar la pantalla de referencias
function mostrarReferencias() {
    const tablaReferencias = document.getElementById("tablaReferencias");
    tablaReferencias.innerHTML = "";

    // Crear la tabla
    const table = document.createElement("table");
    table.classList.add("tabla-ejercicios");

    // Encabezado de la tabla
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Ejercicio</th>
            <th>Videos</th>
        </tr>
    `;
    table.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement("tbody");

    musculosSeleccionados.forEach(musculo => {
        const ejercicios = ejerciciosPredefinidos[musculo];
        ejercicios.forEach(ejercicio => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${ejercicio}</td>
                <td><a href="#" onclick="mostrarImagen('${ejercicio}')">Video</a></td>
            `;
            tbody.appendChild(row);
        });
    });

    table.appendChild(tbody);
    tablaReferencias.appendChild(table);
    mostrarPantalla("pantallaReferencias");
}
// Función para descargar la rutina en PDF con diseño personalizado
function descargarRutinaPDF(index) {
    const rutina = usuarioAutenticado.rutinas[index];

    // Crear una instancia de jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar un logo al PDF
    const logoUrl = "./Images/Logo.jpg"; // Reemplaza con la URL de tu logo
    doc.addImage(logoUrl, "JPEG", 15, 10, 30, 30); // x, y, width, height

    // Título del PDF con estilo
    doc.setFontSize(20);
    doc.setTextColor("#4CAF50"); // Color verde
    doc.text(`Rutina: ${rutina.nombre}`, 60, 20);

    // Subtítulo con estilo
    doc.setFontSize(14);
    doc.setTextColor("#FF5722"); // Color naranja
    doc.text("Mirage Gym Coach - Rutina Personalizada", 60, 30);

    // Músculos trabajados
    doc.setFontSize(12);
    doc.setTextColor("#000000"); // Color negro
    doc.text("Musculos trabajados:", 15, 45);
    doc.text(rutina.musculos.map(m => m.toUpperCase()).join(", "), 15, 50);

    // Encabezado de la tabla
    let yPos = 60; // Posición vertical inicial
    doc.setFontSize(12);
    doc.setTextColor("#FFFFFF"); // Texto blanco
    doc.setFillColor("#4CAF50"); // Fondo verde
    doc.rect(15, yPos - 5, 180, 10, "F"); // Rectángulo de fondo
    doc.text("Musculo", 20, yPos);
    doc.text("Ejercicio", 50, yPos);
    doc.text("Series", 120, yPos);
    doc.text("Repeticiones", 150, yPos);

    // Datos de la tabla
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor("#000000"); // Texto negro
    rutina.ejercicios.forEach((ejerciciosMusculo, i) => {
        ejerciciosMusculo.forEach(ejercicio => {
            const linea = `${rutina.musculos[i].toUpperCase()} | ${ejercicio.ejercicio} | ${ejercicio.series} | ${ejercicio.repeticiones}`;
            doc.text(linea, 20, yPos);
            yPos += 5;

            // Si la posición vertical supera el límite de la página, añadir una nueva página
            if (yPos >= 280) {
                doc.addPage();
                yPos = 20;
            }
        });
    });
    
    // Pie de página
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Color gris
    doc.text("Generado por Mirage Gym Coach", 10, 280);
    // Guardar el PDF
    doc.save(`${rutina.nombre}.pdf`);
}

// Función para mostrar la imagen del ejercicio
function mostrarImagen(nombreEjercicio) {
    const imagenes = {
        "Press de banco plano con barra": "https://youtu.be/ICaZxO7RmKs?si=rGlkXfVnNSK9xvoG",
        "Press de banco plano con mancuernas": "https://youtu.be/5wN-99Fny5Q?si=j5w9fp0LZHFHk1eW",
        "Press inclinado con barra": "https://youtu.be/vUMtItXfO8Y?si=39iLtsngph1uckzD",
        "Press banco inclinado con mancuernas": "https://youtu.be/FGynaNs-0bU?si=O976YbqMCn4emOzf",
        "Press banco declinado con barra": "https://youtu.be/lrkMoax-TSs?si=kn8Pn7hYWbD1A-_9",
        "Press banco declinado con mancuernas": "https://youtu.be/2uWdrii0ZG8?si=J98vvtycD-gSETlW",
        "Maquina Press en banco inclinado con discos": "https://youtu.be/L5DbQ8tTrHM?si=la2kTSGfiIwXr-Im",
        "Maquina de Fondos": "https://youtu.be/rWlW6ArS1Y4?si=30BMRE1u7bZ5l42g",
        "Press de pecho en maquina (blanca)": "https://youtu.be/N7DjfGB8-xY?si=yORdabAIUpcB7aOZ",
        "Pec deck (blanco)": "https://youtube.com/shorts/GdoRBGpGkYA?si=48ORGCvja0uPYBWh",
        "Elevacion parado con mancuernas en triangulo al pecho": "https://youtu.be/UzomR1BZsno?si=UXFQVcNF__25dW1B",
        "Cristos con mancuernas en banco inclinado": "https://youtu.be/tVc3WUzaAFk?si=KrcBo3UuYV7TyQ4l",
        "Cristos con mancuernas en banco declinado": "https://youtu.be/rrqQQ9fg7-k?si=vXx7ACaT7eSSDW6s",
        "Fondos libres": "https://youtube.com/shorts/XGJfFTHEcIs?si=ApUFQ6Irm4r4sxKK",
        "Pullover con mancuernas": "https://youtu.be/qRhCDkJH8Ck?si=iWvOrobjICng7KHB",
        "Press de pecho en maquina": "https://youtube.com/shorts/tBQ081fJHcI?si=4VnR7d9MTrDSO56f",
        "Cruce (cross over) en polea alta": "https://youtube.com/shorts/QEW6RO0O-ak?si=w7RSKgEfTR-A_mSE",
        "Cruce (cross over) en polea baja": "https://youtube.com/shorts/Lro1kYEkkH8?si=jFxgdUYkjfft8jHg",
        "Lagartijas con apertura normal": "https://youtube.com/shorts/SKX9JimnGpg?si=4VfYAPql9VwQqAT8",

        "Fondos libres": "https://youtube.com/shorts/XGJfFTHEcIs?si=qT7ciR1lCbn42eqx",
        "Rompe craneos con barra para triceps (press frances)": "https://youtube.com/shorts/CAUWI4sNPKk?si=E3kug6QVfqem_iEj",
        "(French Press) Extension de triceps parado con polea baja (por atras de la cabeza)": "https://youtube.com/shorts/V-s2JqOdPCQ?si=kEHgvJZvFE_wbGvu",
        "Extension de triceps en polea alta con agarre individual y palma hacia arriba": "https://youtu.be/OaU6IVOif2o?si=sNf3xZebHTdo_JEG",
        "Extensiones de triceps en polea alta con cuerda (de frente)": "https://youtube.com/shorts/X7pe4Laknis?si=prS64poZxVwKv4bK",
        "Extensiones de triceps en polea alta con barra recta": "https://youtube.com/shorts/O0bOBEys5pc?si=4uhD6C3gM_0ZBeZ2",
        "Extensiones de triceps en polea alta con barra curva (V)": "https://youtube.com/shorts/1cH6sRICuQQ?si=CPSpqOxXuiPlFJzH",
        "Extension de triceps con barra recta en polea alta con agarre palma hacia arriba": "https://youtube.com/shorts/Uj5zypMXVcY?si=u69a0iEb4VEC5wgv",
        "Patada de triceps con mancuernas": "https://youtube.com/shorts/8q0bRi6oC4o?si=cKKm-J4pwNDZW70b",
        "Press de banca con agarre cerrado": "https://youtube.com/shorts/1L49Nl3eA9c?si=sk0Cttnhz1RqSpEM",
        "Patada de triceps con polea baja": "https://youtube.com/shorts/35_gCUE3SmM?si=eTAr1_M7knK4fF_I",
        "Fondos en maquina": "https://youtu.be/-tnYdPDikMw?si=1rwns8-XoHUkXyM-",
        "Extensiones de triceps en maquina ARM EXTENSION": "https://youtu.be/2ju_MwZjXKE?si=yZB97qLI1gT8KTZn",
        "Lagartijas diamante": "https://youtube.com/shorts/JA_VpaY-rVg?si=zEwu2oOrWNBEkWGc",

        "Curl con barra recta (Las 21’s)": "https://youtu.be/l0oOf2lftcg?si=qHgJXIxDg8Y3cAG6",
        "Curl parado con mancuernas": "https://youtube.com/shorts/lJyhnJ0rntE?si=NaeRfJYQpFIJlA-c",
        "Curl sentado en banco inclinado con mancuernas": "https://youtube.com/shorts/bzZV5ykbMHw?si=wQcIvc9EFoWJADfi",
        "Curl en banco predicador con barra": "https://youtube.com/shorts/jORZS-evzXA?si=5WgZ3EMF8vAvctQV",
        "Curl en banco predicador con mancuerna": "https://youtube.com/shorts/cN3YQabftnY?si=SL-IVlr9POwQ1G2o",
        "Curl con barra Z": "https://youtube.com/shorts/vU1OJuAWeT8?si=6IjJzg5F8tFPbqdu",
        "Curl concentrado con mancuerna": "https://youtube.com/shorts/NKehjTZEc7s?si=u1CTlvuOtby8ww2M",
        "Curl individual en polea alta": "https://youtu.be/cQPNqxED3V4?si=74WL418xNxSejVpA",
        "Curl martillo con mancuernas": "https://youtube.com/shorts/qScJnRNO6wk?si=E2URx4DrYK5QK3Qr",
        "Curl en polea baja con barra": "https://youtube.com/shorts/s4Pn_Z1vK14?si=nvP7XGjwYEJdCUat",
        "Curl en polea baja con cuerda": "https://youtube.com/shorts/UpNhgP5XPxQ?si=QWHge5JpX4fhng1o",
        "Curl en polea baja con barra z": "https://youtube.com/shorts/CrceTP3WUPA?si=QjtHqBStEwRXkklB",
        "Curl inverso en polea baja": "https://youtube.com/shorts/Z2lOyUSxiGk?si=1xFxpHGYkbl5vmeQ",
        "Curl inverso con barra": "https://youtube.com/shorts/bs_j9S_fyKY?si=nuChWcP4YFZjDw7o",
        "Curl araña con barra": "https://youtube.com/shorts/1MbBr8xkQac?si=5zdyNKwa8-vuFc4F",
        "Curl en maquina ARM": "https://youtube.com/shorts/2McDwlp0vc4?si=9km-OEHVcoM5jHB3",
        "Curl en maquina con un brazo": "https://youtube.com/shorts/D9eRrMqrBOU?si=h7e_Pcgsm3dmxSXC",

        "Dominadas": "https://youtube.com/shorts/fbcJav0cuUU?si=sWQm1Er1i_JY7z4e",
        "Jalon al pecho en polea alta agarre abierto": "https://youtube.com/shorts/W2x6zP9k7SM?si=jJ1b6d3LoLeEDsK-",
        "Jalon al pecho en polea alta agarre cerrado palmas hacia ti": "https://youtube.com/shorts/IzgNS85JHIU?si=9urtqOdh4JS4jcy_",
        "Remo con barra al ombligo con agarre prono": "https://youtube.com/shorts/xyh5wKA5jBs?si=Lp3h7lajhqRJ9OiN",
        "Remo con barra al ombligo con agarre supino": "https://youtube.com/shorts/HAAfkZGLYig?si=6i6m58g4lPoIZgji",
        "Remo con mancuerna": "https://youtube.com/shorts/5QYQqPw_WgA?si=yz5sBqSXb1L2PbDH",
        "Remo en maquina": "https://youtube.com/shorts/4o8scFhoDdE?si=ONlNvEAx3yxL1N2P",
        "Remo sentado en polea baja": "https://youtube.com/shorts/oti5ZoRUsTY?si=TeXLPY6eLDxATJBs",
        "Pull down en maquina Rotary": "https://youtube.com/shorts/4BPIBvWhcQ4?si=_IvFFL6mSQpeCuK7",
        "Pull over con barra corta en polea alta": "https://youtube.com/shorts/EfWJBZJXCjc?si=2bx3ow02GRzghHxW",
        "Remo T en aparto agarre abierto": "https://youtube.com/shorts/uLr8HcW_7ig?si=ZOxFsq9RIW81oS7k",
        "Remo a una mano en polea alta": "https://youtube.com/shorts/tzL15yvHEls?si=Y7i53Tbu36NytzbK",
        "Pull over acostado en banco con mancuerna": "https://youtube.com/shorts/z3LbGHpgI5w?si=brNbL277cbfnpeZ1",
        "Hiperextensiones": "https://youtube.com/shorts/zUgEfZqt3VA?si=9aOh5ebSQirbui_t",

        "Press militar con barra": "https://youtube.com/shorts/895PvlhMpTQ?si=88WWUx9DrA6B_9UM",
        "Press militar con mancuernas": "https://youtube.com/shorts/0434douBSU4?si=TEgoQMzeXP-A7BA8",
        "Elevaciones laterales con polea baja": "https://youtube.com/shorts/-cgLjzq2KEg?si=7NTR7mFaHpJOsXBo",
        "Press Arnold con mancuernas": "https://youtube.com/shorts/kPgy7BhvlSs?si=Kv2zhTUHjSTvvv-z",
        "Press tras nuca con barra": "https://youtube.com/shorts/lgjsva8XsEw?si=pAwDXda2hYhBidEL",
        "Elevaciones laterales con mancuernas": "https://youtube.com/shorts/yDIo5s5V_Rw?si=yGEy70043ijTOkM0",
        "Elevaciones frontales con mancuernas": "https://youtube.com/shorts/_1zyd9e8fLs?si=Kt53keKZMSOSZ2Uc",
        "Elevaciones frontales con barra en polea baja": "https://youtube.com/shorts/AJ147wzeIfQ?si=W33LOSIfyBXbPM1f",
        "Elevaciones frontales con disco": "https://youtube.com/shorts/pzz9n1n_fPk?si=NBa3_bjI4CKuTRE7",
        "Elevaciones sentado para posteriores con mancuernas": "https://youtube.com/shorts/kPn1dUB8KDs?si=vtRSOEv4GtvTU8D6",
        "Elevacion al menton con barra": "https://youtube.com/shorts/UvoxxSDVL4Q?si=cX1iQLJFUTWzDP8G",
        "Face pull en polea alta": "https://youtube.com/shorts/5Yu8DTe4BAQ?si=7Lhw5RDT8QjsjCrN",   

        "Sentadilla con barra libre": "https://youtube.com/shorts/C2aZj1vxJ3s?si=Yp380uA3mcl195-f",
        "Sentadilla frontal (Goblet) con mancuerna": "https://youtube.com/shorts/pSnkNE2TOSQ?si=Q6pZn3FWPZQxY_lE",
        "Prensa de pierna 45 grados (Leg Press)": "https://youtube.com/shorts/NYa0tZCW4fk?si=bNq_Ydq8cDVhA4W0",
        "Silla de Extensiones (Leg Extensions)": "https://youtube.com/shorts/S50jrJDzO4M?si=lNrBDCEvEodGh5kE",
        "Sentadilla bulgara (Bulgarian Split Squat)": "https://youtube.com/shorts/73Wnj4XvqDY?si=-LmvDdAw9tsCQp45",
        "Zancadas o Desplantes cortos": "https://youtube.com/shorts/SE77zWQqWgw?si=Ma-qxdWu-bqyFmLm",
        "Sentadilla hack (Hack Squat)": "https://youtube.com/shorts/_K5qW_sENbg?si=36qVaOcBQUpff2xV",
        "Step-ups en banco alto con mancuernas o en maquina amarilla": "https://youtu.be/6mjOaXAsnEA?si=s3mE_K0-cbfq9mpC",
        "Sentadilla en barra Smith pies juntos (Smith Machine)": "https://youtube.com/shorts/HZqHkLF_qo4?si=wpO4HZ3QD5R1CbIi",
        "Pistol Squat (Sentadilla a una pierna)": "https://youtube.com/shorts/kE_oDiJiXxM?si=CGcOVQ-LXX0n0puD",
        "Sentadilla en Sissy Squat": "https://youtube.com/shorts/ACMVQNOpUKs?si=zxR6oy7WobHlH8qK",
        "Sentadilla Zercher (Zercher Squat)": "https://youtube.com/shorts/3tShRWgZ2Gg?si=bT-cQWaws5UliYTt",
        "Sentadilla Jefferson": "https://youtube.com/shorts/jDLbX0BjjD8?si=knQEkmNdxl5BFmtM",
        "Prensa horizontal (Sentado)": "https://youtube.com/shorts/xpk5mFsXmYA?si=v5cFqWIZaCA56-cD",
        "Prensa vertical pies cerrados": "https://youtube.com/shorts/XpAFhCnga9E?si=LZaCqbnWebP0t_9m",
        "Prensa horizontal (acostado)": "https://youtu.be/IuEKlzNrCGU?si=xmQKxNWJLsmd8ZG2",
        "Sentadilla Isometrica (Resistencia en pared)": "https://youtube.com/shorts/XXYNG3UTRtk?si=JsrR5pz2FOsS_HFE",
        "Sentadilla frontal con barra en polea baja": "https://youtube.com/shorts/5aBKh-6XFRs?si=RiJKMMBK4AU-ygqs",

        "Peso muerto con barra Smith": "https://youtube.com/shorts/8R50OAyGboU?si=PWE5wauuSEvDCjmy",
        "Peso muerto a una pierna con mancuernas": "https://youtube.com/shorts/Jsv-wCUnfPU?si=Vq0LBYD9d6TLhjNo",
        "Curl femoral en maquina sentado": "https://youtube.com/shorts/LgHlATf0ASA?si=HLv1Z51AyHLMLZOB",
        "Curl femoral en maquina de pie": "https://youtube.com/shorts/See2ENDt3ow?si=_N9ydUqRZ-si6ktU",
        "Curl femoral en maquina acostado": "https://youtube.com/shorts/2XEyLwQQNBk?si=O-QsMcvwz2wYeDen",
        "Prensa 45 grados con los pies hasta arriba (talon)": "https://youtube.com/shorts/6qoysy4NNgk?si=MnIFDhEN0cJ5FUwS",
        "Buenos dias (Good Mornings) con barra corta": "https://youtube.com/shorts/mwqMK1FdC5o?si=BjUI-Ee1Q4-4tfMi",
        "Buenos dias (Good Mornings) en maquina hack (perfecta)": "https://youtube.com/shorts/tP7s8TGDz2s?si=wchC6JWnmytlCNgG",
        "Elevacion de cadera a una pierna sobre banco (talon)": "https://youtube.com/shorts/hUJu4s-zc1g?si=kLHvSPIJI3IqAnTV",
        "Peso muerto con polea baja (agarre cuerda)": "https://youtube.com/shorts/cd2A4tYBLDs?si=NMNzi0CSuVG1XPXg",

        "Sentadilla con barra libre": "https://youtube.com/shorts/4Gzv-EjUclo?si=TNnkdlaheoujAABc",
        "Hip thrust con barra": "https://youtube.com/shorts/so_pBQ536h4?si=CHURCLzthqdPSxKU",
        "Peso muerto rumano piernas abiertas": "https://youtube.com/shorts/lp0M9N401Nw?si=vvsUd3PgSfGyzdam",
        "Sentadilla sumo con mancuernas o barra": "https://youtube.com/shorts/8_AZZHsvjh0?si=BQ-Zu-PlK7j53Yux",
        "Zancadas o Desplantes largos": "https://youtube.com/shorts/uBlKEozVp5s?si=xnmktjcBYz5QIb_q",
        "Step-ups en maquina o en banco alto con mancuernas": "https://youtube.com/shorts/33SxKsfQTSk?si=7eelodqYT2Kbmwj3",
        "Patada de gluteo en maquina": "https://youtu.be/h4yLoQWOxAw?si=0Nfz3ZgDGQRjHW4a",
        "Patada de gluteo con polea": "https://youtube.com/shorts/T_xM1hRVYG4?si=sjKFpS8kD55jDNcy",
        "Abduccion de cadera en maquina": "https://youtube.com/shorts/2KkuFEf7aZs?si=9QIA0FWO90rCmEQO",
        "Prensa vertical piernas abiertas": "https://youtube.com/shorts/z9-e61qhNqY?si=ggklGxBefKVc7ieT",
        "Puente de gluteos con mancuerna a una pierna": "https://youtube.com/shorts/Q6xUBQ12Riw?si=LircwT_Rb2WM39NW",
        "Elevaciones laterales de pierna en polea o con disco": "https://youtu.be/evvkg2HYLuA?si=R0iYLxR2UJQw6qMN",
        "Sentadilla bulgara": "https://youtube.com/shorts/gdr87uWIfjA?si=SvnelXCIErh3KHj-",
        "Sentadilla hack (Perfecta)": "https://youtube.com/shorts/YjUPAL7W810?si=qqGvWgDalquWXgrY",
        "Laterales en maquina de piso con discos": "https://",
        "Patada en barra Smith": "https://youtube.com/shorts/JkjHSSsJDrI?si=LHqNIrTyjCHhnfk2",
        "Hiperextension en maquina libre": "https://youtube.com/shorts/kSWEnts_tSo?si=wGnWAK_VoMQCRoYD",
        "Extension de gluteos incada con barra Smith": "https://youtube.com/shorts/mgJ85rbySvY?si=uNSZVoVRdQz-VSrQ",
        "Sentadilla Stripper": "https://youtu.be/n4qkMjAiups?si=VQj6j9Ly_NAubo-L",

        "Sentadilla sumo con barra Smith": "https://youtube.com/shorts/gbk-nhlDeAw?si=fDucypFbtfaFzoz7",
        "Prensa horizontal (acostado)": "https://youtu.be/u9bAZy-Qhsc?si=QqDIvvb3opJTOrcX",
        "Aduccion en maquina (cerrando las piernas)": "https://youtube.com/shorts/2bMHHUdveso?si=wxIbFo79ZhMtZzrJ",
        "Sentadilla sumo con mancuerna": "https://youtube.com/shorts/pt3VPegjG08?si=EN3wFx9n3K5HOb7R",
        "Jalon de pierna lateral con polea baja (aductores)": "https://youtube.com/shorts/h0zDCGLL3r0?si=cnxowDCxbE9P0WpF",
            
        "Crunch acostado o en aparato": "https://youtube.com/shorts/U2Pxw_PLfXc?si=uU9Htvkjtmyjk9pB",
        "Crunch parado con cuerda en polea alta": "https://youtube.com/shorts/VaqRToXzXZY?si=PapF4A4n-R4HS2oC",
        "Elevacion de rodillas en aparato": "https://youtube.com/shorts/AnDFUYtzvDM?si=1q8V6LU2vwtUbDb6",
        "Elevacion de piernas acostado": "https://youtube.com/shorts/pBC7ciQ5BMc?si=VmV6sKfMwhu3Djsb",
        "Plancha con tiempo de tension": "https://youtube.com/shorts/cvl9Mm-efpw?si=11bemEBYZ7Um_XFE",
        "Estiramiento incado con rueda": "https://youtube.com/shorts/hEd3DDtDjIE?si=Doc-FfAvtN0GCjQr",
        "Elevacion de talones en barra smith": "https://youtube.com/shorts/g-YzDXmVokI?si=_2VqiyQa2OaeEv8J",
        "Elevacion de talones en prensa": "https://youtube.com/shorts/n67LekGQlWw?si=BrNGbJeBf2S5psrB",
        "Elevacion de talones en costurera": "https://youtube.com/shorts/jeGHLQoKfPk?si=fBeyW5kuKFUkjWPf",
        "Elevacion de talones parado a un pie": "https://youtu.be/GUBzhO-XSqk?si=0AzYl71OF1OI0N45",
        // Agrega aquí más ejercicios y sus URLs de imágenes
    };

    const urlImagen = imagenes[nombreEjercicio];
    if (urlImagen) {
        window.open(urlImagen, "_blank");
    } else {
        alert("No hay imagen disponible para este ejercicio.");
    }
    
}


        // Función para eliminar una rutina guardada
        function eliminarRutina(index) {
            if (!confirm("¿Estás seguro de que deseas eliminar esta rutina?")) {
                return;
            }

            usuarioAutenticado.rutinas.splice(index, 1);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            cargarRutinasGuardadas();
            alert("Rutina eliminada exitosamente.");
        }

        // Dietas para cada día de la semana
const dietas = {
  lunes: [
    "DESAYUNO: 3 Huevos con Espinacas + 2 Pan Tostado + 1/2 Aguacate.",
    "COLACIÓN: Jugo Verde: Manzana verde + Apio + Pepino + Piña.",
    "COMIDA: 1 Filete de Pechuga de pollo + 3 Tortillas + Vegetales.",
    "COLACIÓN: 1 Toma de Proteína + 1 Toma de Creatina + 1 Taza de Leche o Agua + Fruta.",
    "CENA: 3 Quesadillas de Panela + 1/2 Aguacate.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
    ],
  martes: [
    "DESAYUNO: 1 Toma de Proteína + 1 Toma de Creatina + 1 Taza de Leche o Agua + 2 Pan Tostado con Crema de Cacahuate.",
    "ALMUERZO: 3 Huevos con 1 Rda de Jamón + 3 Tortilas + 1 Porcion de Guacamole.",
    "COMIDA: 1 Medallón de Atún a la Mexicana  + 1/2 Taza de Arroz + 1/2 Aguacate.",
    "COLACIÓN: Fruta Picada + 3 Cdas de Yogurt Griego + 10 Almendras.",
    "CENA: 1 Bistec en Trozos a la Mexicana + 1 Porción de Arroz + 1/2 Aguacate.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
  ],
  miercoles: [
    "DESAYUNO: Hotcakes de Avena + Miel + 1 Cda de Crema de Cacahuate.",
    "COLACIÓN: 1 Toma de Proteína + 1 Toma de Creatina + 1 Taza de Leche o Agua + 1/2 Plátano.",
    "COMIDA: Ensalada de Pollo + Vegetales + 1/2 Aguacate.",
    "COLACIÓN: Fruta Picada + 3 Cdas de Yogurt Griego + 10 Almendras + Granola + Miel.",
    "CENA: Tacos de Pechuga de Pollo a la Plancha + 3 Tortilas + 1/2 Aguacate.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
  ],
  jueves: [
    "DESAYUNO: Chilaquiles: 2 Huevos + 60g de Panela + 3 Tortilas en trozos con salsa+ 1/2 Aguacate.",
    "COLACIÓN: Jugo Verde: Manzana verde + Apio + Pepino + Piña.",
    "COMIDA: Salmón a la Miel + Tortitas de Camote fritas + 1/2 Aguacate .",
    "COLACIÓN: 1 Naranja partida de 4 + 1 Manzana verde picada + chile en polvo tajín.",
    "CENA: Tacos de Tilapia + 2 Tortilas + Verduras Cocidas.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
  ],
  viernes: [
    "DESAYUNO: Hotcakes de Avena + Fruta + Miel + Yogurt Griego.",
    "COLACIÓN: 1 Toma de Proteína + 1 Toma de Creatina + 1 Taza de Leche o Agua + Fruta.",
    "COMIDA: 1 Filete de Res a la Mexicana + 3/4 Taza de Pasta Cocida + 1/2 Aguacate.",
    "COLACIÓN: 1/2 Mango picado + 1/2 taza de piña + chile en polvo tajín.",
    "CENA: 3 Quesadillas de Panela + 1/2 Aguacate.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
  ],
  sabado: [
    "DESAYUNO: 1 Toma de Proteína + 1 Toma de Creatina + 1 Taza de Leche o Agua + Fruta.",
    "ALMUERZO: 3 Huevos + 1 Rebanada de Jamón + 3 Tortilas + 1/2 Aguacate.",
    "COMIDA: Camarones al gusto + 1 Porción de Arroz + 1/2 Aguacate.",
    "CENA: 3 Quesadillas de Panela + 1/2 Aguacate.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
  ],
  domingo: [
    "DESAYUNO: Hotcakes de Avena + Fruta + Miel + Yogurt Griego.",
    "COLACIÓN: 1 Toma de Proteína + 1 Toma de Creatina + 1 Taza de Leche o Agua + Fruta.",
    "COMIDA: Maquis al gusto + 1/2 Aguacate.",
    "CENA: 3 Quesadillas de Panela + 1/2 Aguacate.",
    "RECOMENDACIONES: Recuerda Mantenerte Hidratado y Tomar 1 Toma de Colageno + Glucosamina al día."
  ]
};

// Función para limpiar el formulario de la calculadora
function limpiarFormularioCalculadora() {
    const formulario = document.getElementById("formularioCalorias");
    formulario.reset(); // Restablecer todos los campos
    document.getElementById("resultadoCalorias").innerHTML = ""; // Limpiar el resultado
}

// Función para mostrar la dieta del día seleccionado
function mostrarDietaDia(dia) {
  const dietaDia = document.getElementById("dietaDia");
  dietaDia.innerHTML = "";

  const dieta = dietas[dia];
  if (dieta) {
    const lista = document.createElement("ul");
    dieta.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      lista.appendChild(listItem);
    });
    dietaDia.appendChild(lista);
  } else {
    dietaDia.textContent = "No hay dieta disponible para este día.";
  }
}

// Añadir evento change al menú desplegable
document.getElementById("diasSemana").addEventListener("change", function() {
  const diaSeleccionado = this.value;
  mostrarDietaDia(diaSeleccionado);
});

// Mostrar la dieta del lunes por defecto
mostrarDietaDia("lunes");


function calcularCalorias() {
    // Obtener los valores del formulario
    const edad = document.getElementById("edad").value.trim();
    const peso = document.getElementById("peso").value.trim();
    const altura = document.getElementById("altura").value.trim();
    const genero = document.getElementById("genero").value;
    const actividad = document.getElementById("actividad").value;
    const objetivo = document.getElementById("objetivo").value;

    // Validar que todos los campos estén llenos
    if (!edad || !peso || !altura || !genero || !actividad || !objetivo) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Convertir valores a números
    const edadNum = parseFloat(edad);
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Validar que los valores numéricos sean válidos
    if (isNaN(edadNum) || isNaN(pesoNum) || isNaN(alturaNum)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    // Calcular TMB según género
    let tmb = 0;
    if (genero === "hombre") {
        tmb = 88.362 + (13.397 * pesoNum) + (4.799 * alturaNum) - (5.677 * edadNum);
    } else if (genero === "mujer") {
        tmb = 447.593 + (9.247 * pesoNum) + (3.098 * alturaNum) - (4.330 * edadNum);
    }

    // Ajustar TMB según nivel de actividad
    const caloriasDiarias = tmb * parseFloat(actividad);

    // Ajustar según el objetivo
    let caloriasObjetivo = caloriasDiarias;
    if (objetivo === "perder") {
        caloriasObjetivo = caloriasDiarias - 500; // Déficit de 500 kcal para perder grasa
    } else if (objetivo === "ganar") {
        caloriasObjetivo = caloriasDiarias + 350; // Superávit de 500 kcal para ganar músculo
    }

    // Definir porcentajes de macronutrientes según el objetivo
    let proteinasPorcentaje, carbohidratosPorcentaje, grasasPorcentaje;
    if (objetivo === "perder") {
        proteinasPorcentaje = 0.28; // 28%
        carbohidratosPorcentaje = 0.41; // 41%
        grasasPorcentaje = 0.31; // 31%
    } else if (objetivo === "ganar") {
        proteinasPorcentaje = 0.25; // 28%
        carbohidratosPorcentaje = 0.44; // 41%
        grasasPorcentaje = 0.31; // 31%
    } else {
        proteinasPorcentaje = 0.25; // 26%
        carbohidratosPorcentaje = 0.41; // 44%
        grasasPorcentaje = 0.34; // 30%
    }

    // Calcular macronutrientes en gramos
    const proteinasGramos = ((caloriasObjetivo * proteinasPorcentaje) / 4).toFixed(1); // 1g proteína = 4 kcal
    const carbohidratosGramos = ((caloriasObjetivo * carbohidratosPorcentaje) / 4).toFixed(1); // 1g carbohidrato = 4 kcal
    const grasasGramos = ((caloriasObjetivo * grasasPorcentaje) / 9).toFixed(1); // 1g grasa = 9 kcal

    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultadoCalorias");
    resultadoDiv.innerHTML = `
        <h3>RESULTADO:</h3>
        <p>TMB (Tasa Metabólica Basal): ${tmb.toFixed(2)} kcal</p>
        <p>Calorías Diarias Necesarias: ${caloriasDiarias.toFixed(2)} kcal</p>
        <p>Calorías para tu Objetivo: ${caloriasObjetivo.toFixed(2)} kcal</p>
        <h3>DISTRIBUCIÓN DE MACRONUTRIENTES DIARIOS:</h3>
        <p>💪Proteínas: ${proteinasGramos} g (${(proteinasPorcentaje * 100).toFixed(0)}%)</p>
        <p>🍚Carbohidratos: ${carbohidratosGramos} g (${(carbohidratosPorcentaje * 100).toFixed(0)}%)</p>
        <p>🔥Grasas: ${grasasGramos} g (${(grasasPorcentaje * 100).toFixed(0)}%)</p>
    `;
}

// Función para descargar el catálogo en PDF
function descargarCatalogoPDF() {
    // URL del archivo PDF alojado en línea
    const urlCatalogo = "TU_ENLACE_AQUI"; // Reemplaza con el enlace de tu archivo

    // Crear un enlace temporal para descargar el archivo
    const enlace = document.createElement("a");
    enlace.href = urlCatalogo;
    enlace.download = "Catalogo_Ropa_Deportiva.pdf"; // Nombre del archivo al descargar
    enlace.click();
}


// Mostrar ejercicios disponibles según la categoría seleccionada
document.getElementById("categoriaMuscular").addEventListener("change", function () {
  const categoria = this.value;
  const ejerciciosContainer = document.getElementById("ejerciciosDisponibles");
  ejerciciosContainer.innerHTML = "";

  if (!categoria) return;

  const ejercicios = ejerciciosPredefinidos[categoria];
  ejercicios.forEach(ejercicio => {
    const li = document.createElement("li");
    li.textContent = ejercicio;
    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "➕ Agregar";
    botonAgregar.onclick = () => agregarEjercicioATabla(ejercicio, categoria); // Pasamos el grupo muscular
    li.appendChild(botonAgregar);
    ejerciciosContainer.appendChild(li);
  });
});

// Agregar un ejercicio a la tabla
// Agregar un ejercicio a la tabla con grupo muscular, series y repeticiones
function agregarEjercicioATabla(ejercicio, musculo) {
  // Verificar si el ejercicio ya está en la tabla
  if (ejerciciosSeleccionados.some(item => item.ejercicio === ejercicio)) {
    alert("Este ejercicio ya está en tu rutina.");
    return;
  }

  // Obtener series y repeticiones según la intensidad seleccionada
  const series = obtenerNumeroAleatorioSeries(intensidadSeleccionada);
  const repeticiones = obtenerNumeroAleatorioRepeticiones(intensidadSeleccionada);

  // Crear un objeto con la información del ejercicio
  const ejercicioCompleto = {
    ejercicio: ejercicio,
    musculo: musculo,
    series: series,
    repeticiones: repeticiones
  };

  // Agregar el ejercicio a la lista de ejercicios seleccionados
  ejerciciosSeleccionados.push(ejercicioCompleto);

  // Actualizar la tabla
  actualizarTablaEjercicios();
}

// Actualizar la tabla de ejercicios seleccionados
function actualizarTablaEjercicios() {
  const tbody = document.querySelector("#tablaEjerciciosSeleccionados tbody");
  tbody.innerHTML = "";

  ejerciciosSeleccionados.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.musculo.toUpperCase()}</td>
      <td>${item.ejercicio}</td>
      <td>${item.series}</td>
      <td>${item.repeticiones}</td>
      <td><button onclick="eliminarEjercicio(${index})">Eliminar</button></td>
    `;
    tbody.appendChild(row);
  });
}

// Eliminar un ejercicio de la tabla
function eliminarEjercicio(index) {
  ejerciciosSeleccionados.splice(index, 1);
  actualizarTablaEjercicios();
}

// Función para guardar una rutina personalizada
function guardarRutinaPersonalizada() {
    const nombreRutina = document.getElementById("nombreRutinaPersonalizada").value.trim();
    if (!nombreRutina || ejerciciosSeleccionados.length === 0) {
        alert("Por favor, asigna un nombre a tu rutina y selecciona al menos un ejercicio.");
        return;
    }

    // Crear la estructura de la rutina
    const rutina = {
        nombre: nombreRutina,
        musculos: [], // Array de músculos únicos
        ejercicios: [] // Array de arrays de ejercicios por músculo
    };

    // Agrupar ejercicios por músculo
    const ejerciciosPorMusculo = {};
    ejerciciosSeleccionados.forEach(ejercicio => {
        if (!ejerciciosPorMusculo[ejercicio.musculo]) {
            ejerciciosPorMusculo[ejercicio.musculo] = [];
            rutina.musculos.push(ejercicio.musculo); // Agregar el músculo al array de músculos
        }
        ejerciciosPorMusculo[ejercicio.musculo].push({
            ejercicio: ejercicio.ejercicio,
            series: ejercicio.series,
            repeticiones: ejercicio.repeticiones
        });
    });

    // Convertir el objeto en un array de arrays
    rutina.ejercicios = rutina.musculos.map(musculo => ejerciciosPorMusculo[musculo]);

    // Guardar la rutina
    usuarioAutenticado.rutinas.push(rutina);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Rutina guardada exitosamente.");

    // Limpiar campos
    document.getElementById("nombreRutinaPersonalizada").value = "";
    document.getElementById("categoriaMuscular").value = "";
    document.getElementById("ejerciciosDisponibles").innerHTML = "";
    ejerciciosSeleccionados = [];
    actualizarTablaEjercicios();

    // Redirigir a la pantalla de rutinas guardadas
    mostrarPantalla("pantalla4");
}

// Logica para pantallas de Notas FIT y CALENDARIO 
document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    document.getElementById('currentMonth').textContent = 
        `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
    
    document.getElementById('prevMonth').addEventListener('click', () => changeMonth(-1));
    document.getElementById('nextMonth').addEventListener('click', () => changeMonth(1));
    document.getElementById('backToCalendar').addEventListener('click', showCalendarView);
    document.getElementById('showHistory').addEventListener('click', showHistoryView);
    document.getElementById('backFromHistory').addEventListener('click', () => {
        document.getElementById('historyView').style.display = 'none';
        document.getElementById('calendarView').style.display = 'block';
    });
});

function generateCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    for(let i = 0; i < firstDay.getDay(); i++) {
        calendar.appendChild(createDayElement(''));
    }
    
    for(let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        calendar.appendChild(createDayElement(day, date));
    }
}

function createDayElement(day, date = null) {
    const div = document.createElement('div');
    div.className = 'day';
    if(date) {
        div.textContent = day;
        div.addEventListener('click', () => showWorkoutView(date));
        
        const workouts = getWorkoutsForDate(date);
        if(workouts.length > 0) {
            div.style.backgroundColor = '#c8e6c9';
        }
    }
    return div;
}

function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    document.getElementById('currentMonth').textContent = 
        `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
}

function showWorkoutView(date) {
    selectedDate = date;
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('workoutView').style.display = 'block';
    document.getElementById('workoutDate').textContent = date.toLocaleDateString();
    loadExercises();
}

function showCalendarView() {
    document.getElementById('calendarView').style.display = 'block';
    document.getElementById('workoutView').style.display = 'none';
    document.getElementById('historyView').style.display = 'none';
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function addExercise() {
    const muscleGroup = document.getElementById('muscleGroup').value;
    if(!muscleGroup) {
        alert('Debes seleccionar un grupo muscular');
        return;
    }

    const exercise = {
        muscleGroup: muscleGroup,
        name: document.getElementById('exerciseName').value,
        weight: document.getElementById('exerciseWeight').value,
        series: document.getElementById('exerciseSeries').value,
        reps: document.getElementById('exerciseReps').value,
        timestamp: new Date().getTime()
    };
    
    if(!exercise.name || !exercise.weight || !exercise.series || !exercise.reps) {
        alert('Completa todos los campos del ejercicio');
        return;
    }
    
    const workouts = getWorkoutsForDate(selectedDate);
    workouts.push(exercise);
    localStorage.setItem(selectedDate.toDateString(), JSON.stringify(workouts));
    
    loadExercises();
    clearForm();
}

function loadExercises() {
    const workouts = getWorkoutsForDate(selectedDate);
    const container = document.getElementById('exercisesList');
    container.innerHTML = '';
    
    const groupedExercises = workouts.reduce((groups, exercise) => {
        const group = exercise.muscleGroup;
        if(!groups[group]) groups[group] = [];
        groups[group].push(exercise);
        return groups;
    }, {});
    
    Object.keys(groupedExercises).forEach(group => {
        const groupSection = document.createElement('div');
        groupSection.className = 'muscle-group';
        groupSection.innerHTML = `<h3>${group}</h3>`;
        
        groupedExercises[group].forEach(exercise => {
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise-item';
            exerciseDiv.innerHTML = `
                <strong>${exercise.name}</strong><br>
                Peso: ${exercise.weight} kg<br>
                Serie: ${exercise.series}<br>
                Reps: ${exercise.reps}
                <button class="delete-btn" onclick="deleteExercise(${exercise.timestamp})">Eliminar</button>
            `;
            groupSection.appendChild(exerciseDiv);
        });
        
        container.appendChild(groupSection);
    });
}

function deleteExercise(timestamp) {
    const workouts = getWorkoutsForDate(selectedDate);
    const updatedWorkouts = workouts.filter(ex => ex.timestamp !== timestamp);
    
    if(updatedWorkouts.length > 0) {
        localStorage.setItem(selectedDate.toDateString(), JSON.stringify(updatedWorkouts));
    } else {
        localStorage.removeItem(selectedDate.toDateString());
    }
    
    loadExercises();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function showHistoryView() {
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('historyView').style.display = 'block';
    populateMuscleFilter();
    loadHistory();
}

function populateMuscleFilter() {
    const filter = document.getElementById('historyMuscleFilter');
    filter.innerHTML = '<option value="">Todos los grupos</option>';
    
    const allMuscles = new Set();
    
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedData = localStorage.getItem(key);
        let workouts = [];
        
        try {
            workouts = JSON.parse(storedData) || [];
        } catch {
            continue;
        }
        
        if(Array.isArray(workouts)) {
            workouts.forEach(exercise => {
                if(exercise.muscleGroup) {
                    allMuscles.add(exercise.muscleGroup);
                }
            });
        }
    }
    
    allMuscles.forEach(muscle => {
        const option = document.createElement('option');
        option.value = muscle;
        option.textContent = muscle;
        filter.appendChild(option);
    });
    
    filter.addEventListener('change', loadHistory);
}

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// --- Detector para el gesto de retroceso en IOS ---
// Escucha el evento 'popstate', que se dispara con el gesto/botón de retroceso del navegador.
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.screen) {
        // Oculta todas las pantallas
        document.querySelectorAll('.pantalla').forEach(pantalla => {
            pantalla.style.display = 'none';
        });
        // Muestra la pantalla guardada en el historial sin agregar una nueva entrada
        const pantallaAnterior = document.getElementById(event.state.screen);
        if (pantallaAnterior) {
            pantallaAnterior.style.display = 'block';
        }
    }
});

// NUEVA FUNCIÓN para mostrar/ocultar contraseña
function togglePasswordVisibility(checkboxId, passwordFieldId) {
    const checkbox = document.getElementById(checkboxId);
    const passwordField = document.getElementById(passwordFieldId);
    
    // Si el checkbox está marcado, muestra el texto. Si no, ocúltalo.
    if (passwordField && checkbox) {
        passwordField.type = checkbox.checked ? "text" : "password";
    }
}


function loadHistory() {
    const selectedMuscle = document.getElementById('historyMuscleFilter').value;
    const historyContent = document.getElementById('historyContent');
    historyContent.innerHTML = '';
    
    const allData = [];
    
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedData = localStorage.getItem(key);
        let workouts = [];
        
        try {
            workouts = JSON.parse(storedData) || [];
        } catch {
            continue;
        }
        
        if(Array.isArray(workouts)) {
            workouts.forEach(exercise => {
                if(!selectedMuscle || exercise.muscleGroup === selectedMuscle) {
                    allData.push({
                        date: new Date(key),
                        dateString: key,
                        ...exercise
                    });
                }
            });
        }
    }
    
    allData.sort((a, b) => b.date - a.date);
    
    if(allData.length === 0) {
        historyContent.innerHTML = '<p>No hay registros para este filtro</p>';
        return;
    }
    
    allData.forEach(item => {
      if (isNaN(item.date.getTime())) {
        // Ignorar fechas inválidas
        return;
    }
      
        const div = document.createElement('div');
        div.className = 'history-exercise';
        div.innerHTML = `
            <div class="history-date">${item.date.toLocaleDateString()}</div>
            <strong>${item.muscleGroup} - ${item.name}</strong><br>
            Peso: ${item.weight} kg<br>
            Serie: ${item.series}<br>
            Reps: ${item.reps}
            <button class="delete-btn" onclick="deleteExerciseFromHistory(${item.timestamp}, '${item.dateString}')">Eliminar</button>
        `;
        historyContent.appendChild(div);
    });
}

function deleteExerciseFromHistory(timestamp, dateString) {
    const storedData = localStorage.getItem(dateString);
    let workouts = [];
    
    try {
        workouts = JSON.parse(storedData) || [];
    } catch {
        workouts = [];
    }
    
    const updatedWorkouts = workouts.filter(ex => ex.timestamp !== timestamp);
    
    if(updatedWorkouts.length > 0) {
        localStorage.setItem(dateString, JSON.stringify(updatedWorkouts));
    } else {
        localStorage.removeItem(dateString);
    }
    
    loadHistory();
    if(selectedDate && dateString === selectedDate.toDateString()) {
        loadExercises();
    }
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function getWorkoutsForDate(date) {
    const storedData = localStorage.getItem(date.toDateString());
    try {
        return JSON.parse(storedData) || [];
    } catch {
        return [];
    }
}

function clearForm() {
    document.getElementById('muscleGroup').value = '';
    document.getElementById('exerciseName').value = '';
    document.getElementById('exerciseWeight').value = '';
    document.getElementById('exerciseSeries').value = '';
    document.getElementById('exerciseReps').value = '';
}


        // Función para cerrar sesión
        function cerrarSesion() {
            usuarioAutenticado = null;
            musculosSeleccionados = [];
            document.getElementById("nombreUsuarioInicioSesion").value = "";
            document.getElementById("contrasenaInicioSesion").value = "";
            document.getElementById("ejercicios").innerHTML = "";
            document.getElementById("rutinasGuardadas").innerHTML = "";
            mostrarPantalla("pantallaInicioSesion");
            alert("Sesión cerrada exitosamente.");
        }

        // Inicializar la aplicación
        mostrarPantalla("pantallaInicioSesion");
