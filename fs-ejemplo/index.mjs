import fs from 'fs';
/* fs=File System, nos permite modificar, leer, gestionar, etc. archivos 
     para ejecutarla debemos escribir en la terminal (node "nombre del archivo y extension")
     ej: node index.mjs 
*/

// Leer un archivo de manera asíncrona 
fs.readFile('./data/example.txt', 'utf8', (err, data) => { //En este caso esta direccion esta de ejemplo
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

// Escribir en un nuevo archivo 
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});

// Renombrar un archivo 
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
    if (err) throw err;
    console.log('Archivo renombrado');
}); 
