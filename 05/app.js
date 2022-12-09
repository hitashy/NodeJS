/* Modulo de Timers*/

function mostrarTemas(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(a,b){
    console.log (a+b);
}
setTimeout(sumar, 5000, 13,15);

setImmediate(mostrarTemas, 'Node.js');

setInterval(mostrarTemas, 1500, 'node.js')