
function entrar(){
  let usuario = document.querySelector('#usuario')
  //let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  //let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: null,
    user: null,
    senha: null
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser?.forEach((item) => {
    if(usuario.value == item.userCad || usuario.value == item.emailCad && senha.value == item.senhaCad ){
       
      userValid = {
         email: item.emailCad,
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = './index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  }
  else {
    
    //userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    usuario.value = ""
    
    //senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    senha.value = ""
    msgError.innerHTML = 'Usuário ou senha incorretos'
    
    //alert("A error has occurred")
    usuario.focus()
  }
  
}

addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    entrar()
  }
});

function novaTela(){
  window.open()
}