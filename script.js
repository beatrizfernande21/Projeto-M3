// Classe que representa um produto
class Produto {
    constructor(nome, descricao) {
      this.nome = nome;
      this.descricao = descricao;
    }
  }
  
  // Lista onde os produtos serão armazenados
  let produtos = [];
  
  // Função para adicionar um novo produto
  function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
  
    if (!nome || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }
  
    const novoProduto = new Produto(nome, descricao);
    produtos.push(novoProduto); // Adiciona no array
    atualizarLista(); // Atualiza os cards na tela
    limparFormulario(); // Limpa os campos
  }
  
  // Atualiza os cards com os dados cadastrados
  function atualizarLista() {
    const lista = document.getElementById("produtos-lista");
    lista.innerHTML = ""; // Limpa os cards antes de recriar
  
    produtos.forEach((produto, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <button onclick="editarProduto(${index})">Editar</button>
        <button onclick="excluirProduto(${index})">Excluir</button>
      `;
      lista.appendChild(card); // Mostra o card na tela
    });
  }
  
  // Limpa os campos do formulário
  function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
  }
  
  // Remove um produto do array
  function excluirProduto(index) {
    produtos.splice(index, 1);
    atualizarLista();
  }
  
  // Edita um produto já existente
  function editarProduto(index) {
    const novoNome = prompt("Novo nome:", produtos[index].nome);
    const novaDescricao = prompt("Nova descrição:", produtos[index].descricao);
  
    if (novoNome && novaDescricao) {
      produtos[index].nome = novoNome;
      produtos[index].descricao = novaDescricao;
      atualizarLista();
    }
  }