/*implementando o js na pagina conatato, na parte do formulario*/

/*
 para acessar o dom pode ser por
 tag: getElementByTagName()
 Id: getElementById()
 nome: getElementsByName()
 classe: getElementsByClassName()
 Sletor: querySelector()
*/

let nome = window.document.getElementById('nome') /*o window.document acessa o documento(a estrutura do DOM) no caso o html de contato
o getElementById é para pegar o elemento pelo id, no caso vamos pegar id de nome no input do form */

let email = document.querySelector('#email') /*o seletor do id é #, por isso tem que colocar, se fosse classe (colocaria o .) */

let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

/*Funções*/
/*para validar o nome inserido */
function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'green'
       nomeOk = true
    }
 
}

/*para validar o email inserido */
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
}

/*para ter um limite de caracteres */
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
}

/*para conferir se todo fomulario foi preenchido corretamente */
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

/*passar o mouse em cima do mapa ele da um zoom */
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
 
function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}