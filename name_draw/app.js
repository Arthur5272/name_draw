const listaAmigos = [];

window.adicionarAmigo = function () {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  listaAmigos.push(nome);
  input.value = "";
  atualizarLista();
};

function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";
  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    ul.appendChild(li);
  });
}

window.sortearAmigo = function () {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (listaAmigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "A lista está vazia. Adicione nomes antes de sortear.";
    resultado.appendChild(li);
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  const nomeSorteado = listaAmigos[indiceSorteado];

  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${nomeSorteado}`;
  resultado.appendChild(li);
};
