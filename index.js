const express = require('express');
const colors = require('colors');
const config = require('./app/config')

const servidor = express();

const port = process.env.port;

servidor.get('/', (req, res)=> {
    res.send('Hola mundo');
})

servidor.listen(port, callback())