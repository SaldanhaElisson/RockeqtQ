module.exports ={
    index(req, res){
        const roomId = req.params.room;
        const questionId = req.params.question; // se eu quero pegar algum dado pelo formulario uso o "params"
        const action = req.params.action; 
        // pegando os dados
        const password = req.body.password// para pegar um input pelo name. colo o "body". Também precisa colocar o middlware

        console.log(roomId, questionId, action, password)
    }
}