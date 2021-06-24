const express = require('express');
const path = require('path');

const street = __dirname + '/views'
const Router= express.Router()

Router.get('/', (req, res) => {
    res.render(path.join(street, 'index'))
})
Router.get('/creat-pass', (req, res) => {
    res.render(path.join(street, 'creat-pass'))
})
Router.get('/room', (req, res) => {
    res.render(path.join(street, 'room'))
})
Router.post('/room/:room/:question/:action', (req, res) => {
    res.render(path.join(street, 'example'))
}) // -> os dois pontos quer dizer que eu não sei o que vou passar


module.exports = Router