function copiarTexto() {
  let textoCopiado = document.getElementById("resposta");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("O resumo foi copiado com sucesso !");
}

function exibirItens() {
  const caixaDeTexto = document.getElementById("caixa-entrada");
  if (caixaDeTexto.value.trim() === "") return;
  document.getElementById("bg-lateral-icone").style.visibility = "hidden";
  document.getElementById("bg-lateral-titulo").style.visibility = "hidden";
  document.getElementById("bg-lateral-texto").style.visibility = "hidden";

  document.getElementById("resposta").style.display = "flex";
  document.getElementById("botao-copiar").style.display = "block";
}

async function resume() {
  const caixaDeTexto = document.getElementById("caixa-entrada");
  if (caixaDeTexto.value.trim() === "") return;
  const texto = document.getElementById("caixa-entrada").value;
  const response = await fetch("http://localhost:3000/resumir", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ texto }),
  });

  const data = await response.json();
  return (document.getElementById("resposta").value = data.resumo);
}
