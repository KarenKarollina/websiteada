document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" &&
  document.getElementById("fone").value != ""){  
  alert("Pronto, voce recebera as novidades por email, estamos evoluindo juntas!!")
}
else{
  alert("Preencha seu nome , email e telefone para enviar")
}
}


