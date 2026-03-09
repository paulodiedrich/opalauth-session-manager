const botaoEnviar = document.querySelector("#btn-entrar");
botaoEnviar.addEventListener("click",function(){console.log('TESTE')});


function validaCampo(){
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt (campoSenha.value);
}

console.log(valorCampo % 2 == 0);


const valorHash = valorCampo ** 2;
console.log(valorHash);

 feature/tarefa-02-hashing
const botaoEnviar = document.querySelector("#btn-entrar")

//botaoEnviar.addEventListener( "click" , function() {
 //   console.log("TESTE")
//} )

function validaCampo(){
    // Capturando os dados do campo senha:
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt(campoSenha.value);




//Verificando se a senha é par
console.log(valorCampo %2 == 0);

botaoEnviar.addEventListener( "click" , validaCampo());

//simulação de hash

const valorHash = valorCampo**2 ;
console.log(valorHash);

}


const botaoEnviar = document.querySelector("#btn-entrar")

//botaoEnviar.addEventListener( "click", function(){
//    console.log()
// } );


function CampoValida(){
    //capturando os dados do campo SENHA
const CampoSenha = document.getElementById("Input-senha");
let CampoValor = parseInt(CampoSenha.value);


//Verificando se a senha é PAR
console.log(CampoValor % 2 == 0)
}

botaoEnviar.addEventListener( "click", CampoValida());

//Simulação de HASH
const valorHash = CampoValor ** 2;
console.log(valorHash);

// Capturando os dados do campo SENHA:


const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);


    console.log(valorCampo % 2 == 0);


    // Simulacao de HASH
    const valorHash = valorCampo**
    console.log(valorHash);


}



 feature/tarefa-02-hashing





 develop
develop
