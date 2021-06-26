const express = require('express');
const path = require('path');
const questionControoler = require('./controllers/questionController')
const RoomControler = require('./controllers/roomController')

const street = __dirname + '/views'
const Router= express.Router()

Router.get('/', (req, res) => {
    res.render(path.join(street, '/index'),{page:'enterRoom'})
})
Router.get('/creat-pass', (req, res) => {
    res.render(path.join(street, '/index'),{page:'creat-pass'})
})
Router.get('/room/:roomId',RoomControler.open) // abrir a sala com o id, aqui estamos passando o id  

// forma para passar os valores da questões para o controller
Router.post('/question/create/:roomId', questionControoler.create) 
Router.post('/question/:room/:question/:action', questionControoler.index) // -> os dois pontos quer dizer que eu não sei o que vou passar
// implicitamente o questionControoler está recebendo res e req


Router.post('/create-room', RoomControler.create)


module.exports = Router