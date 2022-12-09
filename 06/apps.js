const fs = require('fs');


// leer el nombre de archivo
fs.readFileSync('./index.html','utf-8', (err,contenido)=>{
    if(err){
        throw err;
    }else{
        console.log(contenido); 
    }
    console.log('mensaje....')
})

//cambiar el nombre de un archivo
fs.renameSync('./index.html','main.html', (err,)=>{
    if(err){
        throw err;
    }
    console.log('Nombre cambiado exitosamente');
});

// Agregar Contenido al final de un archivo
fs.appendFileSync('./index.html', '<p>Hola Muchachos</p>', (err)=>{
    if(err){
        throw err;
    }
    console.log('actualizado el archivo')
})

//reemplazar todo el contenido del archivo

fs.writeFileSync('./index.html', 'Contenido Nuevo',  (err)=>{
    if(err){
        throw err;
    }
    console.log('contenido reemplazable')
})

//eliminar el nombre de un archivo
fs.unlinkSync('./main.html', (err)=>{
    if(err){
        throw err;
    }
    console.log('archivo eliminado');
})

//los eventos todos son asincronos, entonces para realizar las labores sincronas se debe de colocar al final Sync
/* por ejemplo unlinkSync,  writeFileSync y asi a las demas funciones */