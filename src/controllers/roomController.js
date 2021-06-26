const Database = require('../db/config')
const path = require('path');
const street = __dirname + '/views'


// minha solução para gerar um id aleatorio
function rand(min = 100000, max  = 999999){
    return Number(Math.floor(Math.random() * (max - min) + min));
}

// solução da nlw para gerar um id aleatorio 
// let roomId 
//     for(var i = 0; i <6; i++){
//         roomId += Math.floor(Math.random() *10).toString()
//     } 



module.exports ={
     async create(req, res){
        try{
            const db = await Database()
            const pass = req.body.password
            let roomId;

            let isRoom = true

        while(isRoom){
             roomId = rand()

            //* verificar se o numero exite da sala exite */

            const roomsExistIds = await db.all(`SELECT id FROM rooms`) // pegar o id no banco
            
           isRoom =  roomsExistIds.some((roomExistId)=>{
                roomExistId === roomId
            })

            if(!isRoom){
                await db.run(`INSERT INTO rooms (
                    id,
                    "password"
                ) VALUES(
                    ${roomId},
                    ${pass}
                )`) // inserindo dados no banco
                   
            }
        }

            await db.close()
            /* ISENRIR A SALAR NO BANCO */
            
            res.redirect(`/room/${roomId}`)

        }catch(e){console.log(e)}
           
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.roomId   
        const questions = await db.all(`SELECT * FROM questions WHERE sala = ${roomId} and read = 0`)// enviando a pergunta de acordo com a sala espeifica no banco de dados
        const questionsRead = await db.all(`SELECT * FROM questions WHERE sala = ${roomId} and read = 1`)
        
        let isQuestion;

        if(questions.length == 0 && questionsRead.length == 0){
            isQuestion = true
        }


        res.render(path.join(street, "../", "../", "views", "room"), {roomId:roomId, questions:questions, questionsRead:questionsRead, isQuestion:isQuestion}) // passando o id e as questões para o ejs
    },

    enter(req, res){
        const roomId = req.body.roomid

        res.redirect(`/room/${roomId}`)
    }
}
// params e query, query usa ? e params é /