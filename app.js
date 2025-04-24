// Importamos el framework Express
const express = require('express');

// Importamos el módulo 'path' para trabajar con rutas de archivos
const path = require('path');

// Inicializamos la aplicación Express
const app = express();

// Importamos las rutas que manejarán los formularios de login y registro
const loginRoutes = require('./routes/login');
const registroRoutes = require('./routes/registro');

// Middleware para poder leer los datos enviados en formularios HTML (POST)
app.use(express.urlencoded({ extended: true }));

// Middleware para leer datos enviados en formato JSON (por ejemplo, desde JS)
app.use(express.json());

// -----------------------------------------------
// Configuración de carpetas públicas
// -----------------------------------------------

// Servimos archivos CSS desde la carpeta 'css'
app.use('/css', express.static(path.join(__dirname, 'css')));

// Servimos archivos JavaScript desde la carpeta 'js'
app.use('/js', express.static(path.join(__dirname, 'js')));

// Servimos imágenes (como el logo) desde la carpeta 'imagenes'
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

// Servimos los archivos HTML desde la carpeta 'html'
app.use('/html', express.static(path.join(__dirname, 'html')));

// -----------------------------------------------
// Rutas funcionales para formularios
// -----------------------------------------------

// Ruta POST /login → manejada por controllers/loginController.js
app.use('/login', loginRoutes);

// Ruta POST /registro → manejada por controllers/registroController.js
app.use('/registro', registroRoutes);

// Redirección automática al login si se accede a "/"
app.get('/', (req, res) => {
    res.redirect('/html/login.html');
  });

// -----------------------------------------------
// Levantar el servidor en el puerto 3000
// -----------------------------------------------

const PORT = process.env.PORT || 3000; // Usa el puerto 3000 o uno definido en entorno

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
