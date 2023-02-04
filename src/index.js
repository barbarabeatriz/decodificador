let texto = document.getElementById("texto").value;
const textoFinal = texto
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");

function criptografar() {

  let criptografado = textoFinal
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  document.getElementById("textoCriptografado").value = criptografado;
}

// function descriptografar() {}
const botaoCriptografar = document.getElementById("botaoCriptografar");
botaoCriptografar.addEventListener("click", criptografar);
