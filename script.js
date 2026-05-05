// script.js

// Função para mostrar produtos
async function listarProdutos() {
    const res = await fetch('/produtos');
    const produtos = await res.json();

    const div = document.getElementById('produtos-lista');
    div.innerHTML = produtos.map(p => `<p>${p.nome} - R$ ${p.preco}</p>`).join('');
}

// Função para adicionar produto
async function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);

    const res = await fetch('/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, preco })
    });

    if (res.ok) {
        listarProdutos();
        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
    }
}

// Carrega produtos ao iniciar
listarProdutos();