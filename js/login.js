
const botaoEnviar = document.querySelector("#btn-enviar");

// botaoenviar.addEventListener("click", function() {
//     console.log("TESTE")
// });

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo() {
    // Capturando os dados do campo SENHA:
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);

    // Verificando se a senha é PAR:
    console.log(valorCampo % 2 == 0);

    // Simulação de HASH
    const valorHash = valorCampo ** 2;
    console.log(valorHash);

}