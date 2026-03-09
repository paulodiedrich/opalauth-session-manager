 develop



=======
// Capturando os dados do campo SENHA:
  develop


const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);
 develop
function validaCampo() {
  const campoSenha = document.getElementById("input-senha");
  const valorCampo = parseInt(campoSenha.value, 10);

  console.log(valorCampo % 2 === 0);

  const valorHash = valorCampo ** 2;
  console.log(valorHash);
}



=======
function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);


    console.log(valorCampo % 2 == 0);


    // Simulacao de HASH
    const valorHash = valorCampo**
    console.log(valorHash);


}
develop






