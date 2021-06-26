const Database = require('../db/config')
module.exports ={
    
    async index(req, res){
        const db = await Database()
        const roomId = req.params.room;
        const questionId = req.params.question; // se eu quero pegar algum dado pelo formulario uso o "params"
        const action = req.params.action; 
        // pegando os dados
        const password = req.body.password// para pegar um input pelo name. colo o "body". Também precisa colocar o middlware
        
        // verificar se a senha está correta    
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`) 
        
        // marcando como lido ou excluindo as questões
        if(verifyRoom.password == password){
            if(action == "delete"){
                
                await db.run(` DELETE  FROM questions  WHERE  id = ${questionId}`)

            }else if(action == "check"){
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
            }
            res.redirect(`/room/${roomId}`)
        }else{
            res.render(`../src/views/passincorrect`, {roomId:roomId})
        }
       
    },

    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const room = req.params.roomId

        await db.run(`INSERT INTO questions(
            titulo,
            sala,
            read
        )VALUES(
            "${question}",
            ${room},
            0
        )`)

        res.redirect(`/room/${room}`)
    }
}

// quando enviamos um texto para o banco de dados o valo precistar estar entre ""