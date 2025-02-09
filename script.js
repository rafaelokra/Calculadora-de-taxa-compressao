function calcularTaxa() {
  const cilindrada = parseFloat(document.getElementById("cilindrada").value);
  const volume = parseFloat(document.getElementById("volume").value);

  if (isNaN(cilindrada) || isNaN(volume) || volume <= 0) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  const taxaCompressao = (cilindrada + volume) / volume;
  document.getElementById(
    "resultado"
  ).innerText = `Taxa de Compressão: ${taxaCompressao.toFixed(2)}:1`;
}
