// não vai está no projeto, apenas vai inicar o banco 
const Database = require('./config');


const initDb = {
    async init() {
        
        try{

        const db = await Database();
    
        await db.exec(`CREATE TABLE rooms( 
            id INTERGER  PRIMARY KEY ,
            password TEXT)`);// colocar o codigo SQL para criar a tabela

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT,
            sala INT
            )`);

        await db.close() // abriu tem que fechar

        } catch(e){console.log(e)}
      
    }
}

initDb.init();

// comando sqlo maisculo. não, minusculos
// eu vou colocar o nome ds colunas, e eu preciso que tipo de dado está entrando por isso tem o nome interger de inteiro
// PRIMARY KEY estou dizendo que não pode ter o mesmo id (valores iguais)
// AUTOINCREMENT -> gerar atumaticamente com incremeto de 1 e 1

// se eu apagar o banco eu perco os dados
