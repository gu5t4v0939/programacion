├── /html               --> Contiene las vistas HTML (login, registro, etc.)
│   └── login.html
│
├── /css                --> Estilos CSS usados en las páginas
│   └── login.css
│
├── /js                 --> Lógica en JavaScript para validación del lado cliente
│   └── login.js
│
├── /img                --> Imágenes del sitio web (logo, iconos, etc.)
│   └── logo.png
│
├── /routes             --> Define las rutas que recibe el servidor (por ejemplo, /login)
│   └── login.js
│
├── /controllers        --> Contiene la lógica del backend (controladores)
│   └── loginController.js
│
├── /config             --> Archivos de configuración como la conexión a la base de datos
│   └── db.js
│
├── app.js              --> Archivo principal del servidor Express (punto de entrada)
└── package.json        --> Define las dependencias del proyecto y scripts

Detalles de funcionamiento:
Frontend (Cliente):

HTML: todas las interfaces están en la carpeta /html.

CSS: los estilos personalizados para cada vista están en /css.

JS: validaciones de formularios o interacciones en /js.

Estas vistas se sirven como contenido estático desde app.js.

Backend (Servidor Node.js):

Usa Express para manejar peticiones HTTP.

Las rutas se definen en /routes, y cada una llama a un controlador en /controllers.

La conexión a la base de datos MySQL se define en /config/db.js.