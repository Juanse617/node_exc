const path = require('path');
let ruta = `enviroment/${process.env.ENTORNO}.env`
console.log(process.env.ENTORNO);
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, ruta)
});

module.exports = callback = ()=>{
    let mensaje = `Esta conectado en la url http://localhost:${process.env.port}`;
    switch (process.env.ENTORNO){
        case 'qa':
            console.log(mensaje.bgYellow)
        break;
        case 'development':
            console.log(mensaje.bgBlue)
        break;
        case 'production':
            console.log(mensaje.bgRed)
        break;
        default:
            console.log(mensaje.bgRainbow)
        break;
    }
}