// Importar módulos necesarios
const http = require('http');  // Módulo para crear un servidor HTTP
const fs = require('fs');  // Módulo del sistema de archivos para leer y escribir archivos
const path = require('path');  // Módulo para trabajar con rutas de archivos y directorios

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    // Determinar la ruta del archivo solicitado
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // Obtener la extensión del archivo solicitado
    const extname = path.extname(filePath);
    // Establecer el tipo de contenido predeterminado como HTML
    let contentType = 'text/html';

    // Asignar el tipo de contenido según la extensión del archivo
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Leer el archivo solicitado
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {  // Archivo no encontrado
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {  // Otro error del servidor
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {  // Archivo encontrado
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// Definir el puerto en el que el servidor escuchará
const PORT = 3000;
// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
