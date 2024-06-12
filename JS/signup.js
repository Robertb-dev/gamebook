//Código por: Ruan de Oliveira Tolentino
//Quaisquer sinais de incompetência, reporte a ele pelo email: tolentinoruan@gmail.com
//Pedimos compreensão, ele ainda está aprendendo

let email = document.querySelector('#email')
let confirmEmail = document.querySelector('#confirmEmail')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

//let labelNome = document.querySelector('#labelNome')

let usuario = document.querySelector('#usuario')
let labelUser = document.querySelector('#labelUser')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelPassword = document.querySelector('#labelPassword')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let buttonCadastrar = document.querySelector('#buttonCadastrar');

//et msgError = document.querySelector('#msgError')
//let msgSuccess = document.querySelector('#msgSuccess')

email.addEventListener('keyup', () => {
  if(email.value.length <= 3 || (email.value).indexOf('@') <= -1 || (email.value).indexOf('.com') <= -1){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira um email válido'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'display: none')
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }

})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){

    labelUser.setAttribute('style', 'color: red')
    labelUser.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false

  } else {

    labelUser.setAttribute('style', 'display: none')
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true

  }
})

senha.addEventListener('keyup', () => {

  if(senha.value.length <= 5 ){

    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false

  } else if(!(verificarLetrasMinusculas(senha.value))){

    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = '* A senha precisa conter uma letra minúscula'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  
  } else if(!(verificarNumeros(senha.value))){

    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = '* A senha precisa conter um número'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false

  } else {

    labelPassword.setAttribute('style', 'display: none')
    senha.setAttribute('style', 'border-color: green')
    validSenha = true

  }
})

confirmSenha.addEventListener('keyup', () => {

  if (validSenha == false){
      confirmSenha.setAttribute('style', 'border-color: red')
      labelPassword.setAttribute('style', 'color: red')
      labelPassword.innerHTML = ('Senha *Insira uma senha válida')
      senha.setAttribute('style', 'border-color: red')
      

  } else if(senha.value != confirmSenha.value ){

      labelPassword.setAttribute('style', 'display: block')
      labelPassword.setAttribute('style', 'color: red')
      labelPassword.innerHTML = 'Confirmar Senha* As senhas não conferem'
      confirmSenha.setAttribute('style', 'border-color: red')
      validConfirmSenha = false

  } 
  
  else {

      labelPassword.setAttribute('style', 'display: none')
      confirmSenha.setAttribute('style', 'border-color: green')
      validConfirmSenha = true

  }
})

addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    cadastrar()
  }
});

function cadastrar(){
  if(validEmail && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      emailCad: email.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    alert("sucesso")
    // msgSuccess.setAttribute('style', 'display: block')
    //msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    //msgError.setAttribute('style', 'display: none')
    //msgError.innerHTML = ''

    
    setTimeout(()=>{
        window.location.href = './login2.html'
    }, 2000)
  
    
  }else if(validEmail && validUsuario && validSenha && validConfirmSenha == false){
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Insira a confirmação de senha corretamente</strong>'
    labelConfirmSenha.i

  }



   else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente para se cadastrar</strong>'

      labelEmail.setAttribute('style', 'color: red')
      labelEmail.innerHTML = 'Insira um email'
      email.setAttribute('style', 'border-color: red')

      labelUser.setAttribute('style', 'color: red')
      labelUser.innerHTML = 'Insira um usuário'
      usuario.setAttribute('style', 'border-color: red')

      senha.setAttribute('style', 'border-color: red')
      labelPassword.innerHTML = 'Insira uma senha'
      
      labelPassword.setAttribute('style', 'display: block')
      labelPassword.setAttribute('style', 'color: red')
      
      confirmSenha.setAttribute('style', 'border-color: red')

      //msgSuccess.innerHTML = ''
      //msgSuccess.setAttribute('style', 'display: none')
  }
}



function verificarLetrasMinusculas(str) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let resultado = {};
  let resposta = false;
  for (let letra of alfabeto) {
      resultado[letra] = str.includes(letra);
      if(resultado[letra] == true){
        resposta = true;
      }
  }
  return resposta;
}

function verificarNumeros(str) {
  const numeros = '0123456789';
  let resultado = {};
  let resposta = false;
  for (let numero of numeros) {
      resultado[numero] = str.includes(numero);
      if(resultado[numero] == true){
        resposta = true;
      }
  }
  return resposta;
}

