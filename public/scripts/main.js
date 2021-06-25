import Modal from "./modal.js"

const modal = Modal()
//Pegar todos os botões que existe com a class delete
const deleteButtons = document.querySelectorAll('a.delete')
//pegar todos os botões deletes

// pegar todos os botões check
const checkButtons = document.querySelectorAll('a.check')

const modalButton = document.querySelector('.modal-wrapper .buttonForInner');
const modalTitle =  document.querySelector('.modal-wrapper h2')
const modalDescription = document.querySelector('.modal-wrapper p')

console.log(modalTitle)



// =================== abrindo a modal para excluir ===============================
deleteButtons.forEach(button =>{
    // adicionar a escutar
    button.addEventListener('click',(event) =>{
        //pegar a senha é de outra forma
        handleClick(event, false)
        //colocando botão de excluir e a cor vermelha
        
    })

})
// ========================= abrindo a modal para confirma a notificação ==========================
checkButtons.forEach(button =>{
    // adicionar a escutar
    button.addEventListener('click',(event) =>{
        

        handleClick(event)
    })

})

function handleClick(event, check = true){
        // podemos indetifinca onde em qual elemento está acontecendo o evento    
        event.preventDefault()
        const questionId = event.target.dataset.id //-> pegando o numero do id do elemento especifico
        const text =check == true ? ' Marca como lida ': ' Excluir ';
        const  form = document.querySelector(".modal form");
        

        // estou pengando os dados e enviando pelo querystring para ser selecionado no backend(controller)
        const slug = check == true ? 'check': 'delete'
        const roomId = document.querySelector('#room-id').dataset.id // pegando Id da sala
        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
        
        modalTitle.innerHTML = ` ${text} esta pergunta `
        modalDescription.innerHTML = ` Tem certeza  que ${text.toLowerCase()} esta pergunta?`

        modalButton.innerHTML = `${text}, sair`

    
        
        check == true ?modalButton.classList.add('red'):modalButton.classList.remove('red')
        // Abrir modal
        modal.open()
}




