const express = require('express');
const path = require('path');
const route = require('./route')


const server = express(); // -> executando o express server
server.use(route)

server.use(express.static('public')) //-> configruando os arquivos 

server.set('view engine', 'ejs' )

server.listen(3000, () => {
    console.log('Autobots bora Rodar!')
})

