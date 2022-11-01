const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const servidor = express();
const PORT = process.env.PORT;

servidor.get('/', (req, res)=> {
    res.send('Hola');
})

servidor.get('/si', (req, res)=> {
    res.send('Adios');
})

servidor.listen(PORT, () => {
    console.log(`Esta conectado en la url http://localhost:${PORT}`.bgGreen)
})