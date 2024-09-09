# Proyecto Básico con Servidor HTTP en Node.js

Este proyecto utiliza el módulo http de Node.js para crear un servidor básico que sirve archivos estáticos y maneja errores.

## Instalación
1. Clona el repositorio o crea un nuevo directorio para tu proyecto.

2. Instala Node.js si aún no lo tienes.

3. Crea un archivo llamado server.js y copia el código del servidor HTTP proporcionado.

4. Crea una carpeta public y agrega los archivos index.html y 404.html para la página principal y la página de error 404, respectivamente.

5. Ejecuta el servidor:
node server.js

6. Abre tu navegador y visita:
http://localhost:3000

## Funcionalidades
- Archivos Estáticos: Sirve archivos estáticos (HTML, CSS, JS, imágenes) desde la carpeta public.
- Manejo de Errores: Muestra una página de error 404 si el archivo no se encuentra, y un mensaje de error 500 para otros errores del servidor.

## Estructura de Carpetas

```
├── server.js        # Archivo principal del servidor
├── public/          # Carpeta para archivos estáticos
│   ├── index.html   # Página principal
│   ├── 404.html     # Página de error 404
└── package.json     # (Opcional) Dependencias y configuración del proyecto
```

## Notas
- El servidor detecta la extensión del archivo solicitado y establece el tipo de contenido adecuado.
- Si el archivo solicitado no existe, el servidor devuelve una página 404. Para otros errores, devuelve un mensaje genérico de error del servidor.

## Licencia
Bootcamp 2024