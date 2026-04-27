function calcularIMC() {

  let nome = document.getElementById("nome").value;

  let alturaInput = document.getElementById("altura").value;

  let pesoInput = document.getElementById("peso").value;

  if (nome.trim() === "" || alturaInput === "" || pesoInput === "") {
    alert("⚠️ Preencha todos os campos!");
    return;
  }

  let altura = parseFloat(alturaInput);
  let peso   = parseFloat(pesoInput);

  let alturaMetros = altura / 100;

  let imc = peso / (alturaMetros * alturaMetros);

  let imcArredondado = imc.toFixed(2);

  let classificacao = "";

  if (imc < 16) {
    classificacao = "Baixo peso muito grave";
  } else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave";
  } else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso";
  } else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
  } else if (imc >= 40) {
    classificacao = "Obesidade grau III";
  }

  let mensagem = nome + " possui índice de massa corporal igual a " + imcArredondado + ", sendo classificado como: " + classificacao + ".";

  alert(mensagem);

  document.getElementById("textoResultado").textContent = mensagem;
  document.getElementById("classificacao").textContent = classificacao;
  document.getElementById("resultado").style.display = "block";
}