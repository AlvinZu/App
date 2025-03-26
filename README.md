<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mirage Gym</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/your-fontawesome-key.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>
    <!-- Pantalla de Registro -->
    <div id="pantallaRegistro" class="pantalla">
        <h1>MIRAGE GYM</h1>
        <p>¿ERES NUEVO? .   CREA TU CUENTA</p>
        <input type="text" id="nombreUsuarioRegistro" placeholder="Nombre de usuario" required>
        <input type="password" id="contrasenaRegistro" placeholder="Contraseña" required>
        <button onclick="registrarUsuario()">REGISTRARME</button>
        <button onclick="mostrarPantalla('pantallaInicioSesion')"style="background: #4caf50;">YA TENGO CUENTA</button>
    </div>

    <!-- Pantalla de Inicio de Sesión -->
    <div id="pantallaInicioSesion" class="pantalla oculto">
        <h1>INICIAR SESIÓN</h1>
      <p>USA TUS CREDENCIALES</p>
        <input type="text" id="nombreUsuarioInicioSesion" placeholder="Nombre de usuario" required>
        <input type="password" id="contrasenaInicioSesion" placeholder="Contraseña" required>
        <button onclick="iniciarSesion()"style="background: #4caf50;">INICIAR SESIÓN</button>
        <button onclick="mostrarPantalla('pantallaRegistro')">REGRESAR</button>
    </div>

    <!-- Pantalla: Elige Intensidad de Rutina -->
    <div id="pantallaIntensidad" class="pantalla oculto">
        <h1>ELIGE LA INTENSIDAD DE TU RUTINA</h1>
        <button onclick="seleccionarIntensidad('basico')" style="background: #4caf50;">BÁSICO</button>
        <button onclick="seleccionarIntensidad('intermedio')" style="background: #ff9800;">INTERMEDIO</button>
        <button onclick="seleccionarIntensidad('avanzado')" style="background: #f44336;">AVANZADO</button>
    </div>

    <!-- Pantalla 2: Selección de Músculos -->
    <div id="pantalla2" class="pantalla oculto">
        <h1>¿QUÉ MÚSCULOS DESEAS ENTRENAR HOY?</h1>
        <div class="musculos" id="contenedorMusculos">
            <!-- Los músculos se generarán dinámicamente -->
        </div>
        <button onclick="mostrarPantalla('pantalla3');" style="background: #4caf50;">GENERAR</button>
        <button onclick="mostrarPantalla('pantallaIntensidad')">ATRÁS</button>
        
        <button onclick="mostrarPantalla('pantalla4')"style="background: #ff9800;">RUTINAS GUARDADAS</button>
      <button onclick="mostrarPantalla('pantallaMejoraExperiencia')" 
            style="background: #FF5733;">
        MEJORA TU EXPERIENCIA
    </button>
    </div>

    <!-- Pantalla 3: Mostrar Ejercicios -->
    <div id="pantalla3" class="pantalla oculto">
        <h1>EJERCICIOS A ENTRENAR</h1>
        <div id="ejercicios"></div>
      <p> NOTA:</p>
        <p>AGREGA UN NOMBRE ANTES DE GUARDAR LA RUTINA</p>
        <input type="text" id="nombreRutina" placeholder="Nombre de la rutina" required>
        <button onclick="guardarRutina()"style="background: #4caf50;">GUARDAR RUTINA</button>
      <button onclick="mostrarReferencias()"style="background: #ff9800;">VER REFERENCIAS DE EJERCICIOS</button>
        <button onclick="mostrarPantalla('pantalla2')">ATRÁS</button>
        <button onclick="cerrarSesion()">CERRAR SESIÓN</button>
    </div>

    <!-- Pantalla 4: Mis Rutinas Guardadas -->
    <div id="pantalla4" class="pantalla oculto">
        <h1>MIS RUTINAS GUARDADAS</h1>
        <div id="rutinasGuardadas"></div>
        <button onclick="cerrarSesion()">CERRAR SESIÓN</button>
     
        <button onclick="mostrarPantalla('pantalla2')">ATRÁS</button>
    </div>
<!-- Pantalla: Referencias de Ejercicios -->
<div id="pantallaReferencias" class="pantalla oculto">
    <h1>REFERENCIAS DE EJERCICIOS</h1>
    <div id="tablaReferencias"></div>
    <button onclick="mostrarPantalla('pantalla3')">ATRÁS</button>
</div>
  
   <!-- Pantalla: Mejora Tu Experiencia -->
<div id="pantallaMejoraExperiencia" class="pantalla oculto">
    <h1>MEJORA TU EXPERIENCIA</h1>
    <div id="pantallamejoraexperiencia"></div>
    <div class="contenedor-mejoras">
        <button onclick="abrirModal('modalRetos')"style="background: #FF5733;">RETOS</button>
        <button onclick="abrirModal('modalSuplementacion')"style="background: #FF5733;">SUPLEMENTACIÓN</button>
        <button onclick="abrirModal('modalNutricion')"style="background: #FF5733;">NUTRICIÓN</button>
      <button onclick="abrirModal('modalListaCompras')"style="background: #FF5733;">LISTA DE COMPRAS</button>
      <!-- Botón para abrir la Calculadora de Calorías -->
<button onclick="abrirModal('modalCalculadoraCalorias')" style="background: #FF5733;">CALCULADORA DE CALORÍAS</button>
    </div>
    
    <button onclick="mostrarPantalla('pantalla2')">ATRÁS</button>
</div>
  <!-- Modales -->
<div id="modalRetos" class="modal oculto">
  <div class="modal-contenido">
    <span class="cerrar" onclick="cerrarModal('modalRetos')">&times;</span>
    <h2>RETOS SEMANALES</h2>
    <ul>
      <li>PIERNAS: 30 Sentadillas continuas con 20kg por lado en barra libre.</li>
      <li>PECHO: 150 Lagartijas en menos de 5 min en cronometro.</li>
      <li>ESPALDA: 25 Dominadas seguidas en barra</li>
      <li>GLUTEOS: 30 Elevaciones de Pelvis en Hiptrust manteniendo 8 segundos cada 10 reps hasta completar las 30 reps con 20kg por lado en la barra.</li>
      <li>ABDOMEN: 2 Min de Plancha en cronometro.</li>
      <li>CARDIO: 120 Burpees en menos de 10 min en cronometro.</li>
    </ul>
  </div>
</div>

<div id="modalSuplementacion" class="modal oculto">
  <div class="modal-contenido">
    <span class="cerrar" onclick="cerrarModal('modalSuplementacion')">&times;</span>
    <h2>SUPLEMENTACIÓN</h2>
    <div class="suplementos-grid">
      <div class="suplemento-item">
        <h3>Proteína de Suero Isolatada</h3>
        <p>De 1 a 2 Tomas diarias</p>
      </div>
      <div class="suplemento-item">
        <h3>Creatina</h3>
        <p>De 5g a 8g Post-Entrenamiento</p>
      </div>
      <div class="suplemento-item">
        <h3>Pre-Entreno</h3>
        <p>1 Toma 15 Min Antes de Entrenar</p>
      </div>
      <div class="suplemento-item">
        <h3>Glucosamina + Colageno</h3>
        <p>1 Toma de 10g Durante el Entrenamiento</p>
      </div>
       <div class="suplemento-item">
        <h3>Omega 3</h3>
        <p>Toma de 1g a 2g Después del Almuerzo</p>
      </div>
    </div>
  </div>
</div>

<div id="modalNutricion" class="modal oculto">
  <div class="modal-contenido">
    <span class="cerrar" onclick="cerrarModal('modalNutricion')">&times;</span>
    <h2>GUÍA NUTRICIONAL</h2>
    <p>Selecciona un día para ver la dieta:</p>
    <select id="diasSemana" class="nutricion-tabs">
      <option value="lunes">Lunes</option>
      <option value="martes">Martes</option>
      <option value="miercoles">Miércoles</option>
      <option value="jueves">Jueves</option>
      <option value="viernes">Viernes</option>
      <option value="sabado">Sábado</option>
      <option value="domingo">Domingo</option>
    </select>
    <div id="dietaDia" class="tab-contenido">
      <!-- La dieta del día seleccionado se mostrará aquí -->
    </div>
  </div>
</div>

  <div id="modalListaCompras" class="modal oculto">
  <div class="modal-contenido">
    <span class="cerrar" onclick="cerrarModal('modalListaCompras')">&times;</span>
    <h2>LISTA DE COMPRAS</h2>
    <div class="suplementos-grid">
      <div class="suplemento-item">
        <h3>COMPRAR:</h3>
        <p>Huevos, Pechuga de pollo, Jamón de pavo, Medallón de Atún, Bistec de Res, Salmón, Tilapia, Queso panela, Camarones. Manzana Verde, Apio, Pepino, Piña, Platano, Naranja, Mango, Aguacate, Espinacas, Zanahorias, Calabacitas, Chayote, Brocoli, Camote. Tortillas, Pan Tostado, Arroz, Avena, Pasta. Leche deslactosada o de almendras, Yogurt Griego, Crema de Cacahuate. Miel, Granola, Almendras, Aceite de Coco o Canoil, Chile en polvo Tajin. Proteina en polvo, Creatina, Colageno + Glucosamina.</p>
      </div>
       
    </div>
  </div>
</div>
  
  <!-- Modal para la Calculadora de Calorías -->
<div id="modalCalculadoraCalorias" class="modal oculto">
  <div class="modal-contenido">
    <span class="cerrar" onclick="cerrarModal('modalCalculadoraCalorias')">&times;</span>
    <h2>CALCULADORA DE CALORÍAS</h2>
    <form id="formularioCalorias">
      <label for="edad">Edad:</label>
      <input type="number" id="edad" placeholder="Ejemplo: 25" required>

      <label for="peso">Peso (kg):</label>
      <input type="number" id="peso" placeholder="Ejemplo: 70" required>

      <label for="altura">Altura (cm):</label>
      <input type="number" id="altura" placeholder="Ejemplo: 170" required>

      <label for="genero">Género:</label>
      <select id="genero" required>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
      </select>

      <label for="actividad">Nivel de Actividad:</label>
      <select id="actividad" required>
        <option value="1.2">Sedentario (poco o ningún ejercicio)</option>
        <option value="1.375">Ligero (ejercicio 1-3 días/semana)</option>
        <option value="1.55">Moderado (ejercicio 3-5 días/semana)</option>
        <option value="1.725">Activo (ejercicio 6-7 días/semana)</option>
        <option value="1.9">Muy Activo (entrenamiento intenso 2 veces/día)</option>
      </select>

      <label for="objetivo">Objetivo:</label>
      <select id="objetivo" required>
        <option value="perder">Perder Grasa</option>
        <option value="ganar">Aumentar Masa Muscular</option>
        <option value="mantener">Mantener Peso</option>
      </select>

      <button type="button" onclick="calcularCalorias()">CALCULAR</button>
    </form>
    <div id="resultadoCalorias"></div>
  </div>
</div>
  
    <script src="script.js"></script> 
</body>
</html>
