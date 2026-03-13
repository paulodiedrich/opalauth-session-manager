
//#ISSUE - 1
let nomeUsuario = "opalAuth";
let tentativasLogin = 3;

console.log(`Bem-vindo, ${nomeUsuario}! Você tem ${tentativasLogin} tentativas de login restantes.`);

const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

// Capturando os dados do campo SENHA:
function validaCampo(){
    //Capturando os dados do campo SENHA:
    const campoSenha = document.getElementById("input-senha");
    const valorCampo = Number(campoSenha.value);
     
    //Verifica se o valor é um número válido antes de prosseguir
    if(Number.isNaN(valorCampo)){
        console.log9("Valor de senha inválido.");
        return;
    }

    //Verificando se a senha é PAR:
    console.log("resultado:", valorCampo % 2 == 0);
 
    //Simulação de HASH:
    const valorHash = valorCampo **2;
    console.log("Senha modificada:", valorHash);
}

// #ISSUE - 2
// #ISSUE - 3

// Criação da Base (Pág. 21, 32):
// Criar um Array de Objetos chamado listaUsuarios contendo exatamente 3 usuários:
const listaUsuarios = [
    {
        usuario: "admin",
        senhaOriginal: 2026,
        perfil: "Comandante"
    },
    {
        usuario: "gestor",
        senhaOriginal: 1010,
        perfil: "Supervisor"
    },
    {
        usuario: "aluno",
        senhaOriginal: 5050,
        perfil: "Operador"
    }
];

//  Página de Destino:
//  Criar o arquivo dashboard.html com o código fornecido pelo professor.
//  Teste de Tipo (Pág. 22):
// No console, use console.log(typeof listaUsuarios) e console.table(listaUsuarios) para validar a estrutura.
console.log(typeof listaUsuarios);
console.table(listaUsuarios);
