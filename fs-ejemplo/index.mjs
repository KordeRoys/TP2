import fs from 'fs';
/* fs=File System, nos permite modificar, leer, gestionar, etc. archivos 
     para ejecutarla debemos escribir en la terminal (node "nombre del archivo y extension")
     ej: node index.mjs 
     Cambio de prueba commit
*/

// Leer un archivo de manera asíncrona 
/*
fs.readFile('./data/example.txt', 'utf8', (err, data) => { //En este caso esta direccion esta de ejemplo
    if (err) throw err;
    console.log('Contenido del archivo:', data);
});

// Escribir en un nuevo archivo 
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});
*/

// Renombrar un archivo 
function renombrarArchivo() {
  // fs.rename es una funcion asincrona que se utiliza para renombrar un archivo o moverlo a una nueva ubicacion
  // los parametros que necesita son:
  // fs.rename(oldPath, newPath, callback)
  // oldPath es la ruta actual del archivo que queremos renombrar o mover
  // newPath es la nueva ruta o nombre del archivo
  // callback es una funcion que se ejecuta despues de que se complete la operacion (con un posible error como argumento)
  fs.rename("./fs-ejemplo/data/newfile.txt", "./fs-ejemplo/data/renamedfile.txt", (err) => {
    if (err) throw err;
    console.log("Archivo renombrado correctamente");
  });
}
renombrarArchivo();