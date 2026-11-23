
const produtos = [
    {
        id: 1,
        nome: "X-Burger",
        categoria: "Hambúrgueres",
        descricao: "Pão, hambúrguer, queijo e molho especial.",
        preco: 20.00,
        icone: "🍔"
    },
    {
        id: 2,
        nome: "X-Bacon",
        categoria: "Hambúrgueres",
        descricao: "Hambúrguer, queijo, bacon e salada.",
        preco: 25.00,
        icone: "🍔"
    },
    {
        id: 3,
        nome: "X-Tudo",
        categoria: "Hambúrgueres",
        descricao: "Hambúrguer completo com vários ingredientes.",
        preco: 30.00,
        icone: "🍔"
    },
    {
        id: 4,
        nome: "Pizza de Calabresa",
        categoria: "Pizzas",
        descricao: "Calabresa, queijo, molho e orégano.",
        preco: 35.00,
        icone: "🍕"
    },
    {
        id: 5,
        nome: "Pizza de Queijo",
        categoria: "Pizzas",
        descricao: "Queijo, molho de tomate e orégano.",
        preco: 32.00,
        icone: "🍕"
    },
    {
        id: 6,
        nome: "Pizza de Frango",
        categoria: "Pizzas",
        descricao: "Frango desfiado, queijo e molho.",
        preco: 38.00,
        icone: "🍕"
    },
    {
        id: 7,
        nome: "Batata Pequena",
        categoria: "Batatas fritas",
        descricao: "Porção individual de batatas fritas.",
        preco: 12.00,
        icone: "🍟"
    },
    {
        id: 8,
        nome: "Batata com Queijo",
        categoria: "Batatas fritas",
        descricao: "Batatas fritas com cobertura de queijo.",
        preco: 18.00,
        icone: "🍟"
    },
    {
        id: 9,
        nome: "Coxinha",
        categoria: "Salgados",
        descricao: "Coxinha tradicional de frango.",
        preco: 7.00,
        icone: "🥟"
    },
    {
        id: 10,
        nome: "Pastel",
        categoria: "Salgados",
        descricao: "Pastel crocante de queijo.",
        preco: 9.00,
        icone: "🥟"
    },
    {
        id: 11,
        nome: "Risole",
        categoria: "Salgados",
        descricao: "Risole recheado de queijo e presunto.",
        preco: 7.00,
        icone: "🥟"
    },
    {
        id: 12,
        nome: "Refrigerante Lata",
        categoria: "Bebidas",
        descricao: "Lata de refrigerante de 350 ml.",
        preco: 6.00,
        icone: "🥤"
    },
    {
        id: 13,
        nome: "Suco Natural",
        categoria: "Bebidas",
        descricao: "Suco natural de frutas de 300 ml.",
        preco: 8.00,
        icone: "🧃"
    },
    {
        id: 14,
        nome: "Água Mineral",
        categoria: "Bebidas",
        descricao: "Garrafa de água de 500 ml.",
        preco: 4.00,
        icone: "💧"
    },
    {
        id: 15,
        nome: "Combo Clássico",
        categoria: "Combos",
        descricao: "X-Burger, batata pequena e refrigerante.",
        preco: 35.00,
        icone: "🍱"
    },
    {
        id: 16,
        nome: "Combo Bacon",
        categoria: "Combos",
        descricao: "X-Bacon, batata e refrigerante.",
        preco: 42.00,
        icone: "🍱"
    },
    {
        id: 17,
        nome: "Combo Família",
        categoria: "Combos",
        descricao: "Dois hambúrgueres, batatas e duas bebidas.",
        preco: 65.00,
        icone: "🍱"
    }
];

const taxaEntrega = 5.00;

let carrinho = [];

let categoriaAtual = "Todos";

const listaProdutos = document.getElementById("listaProdutos");
const itensCarrinho = document.getElementById("itensCarrinho");
const contadorCarrinho = document.getElementById("contadorCarrinho");
const totalProdutos = document.getElementById("totalProdutos");

const subtotalElemento = document.getElementById("subtotal");
const taxaResumo = document.getElementById("taxaResumo");
const totalElemento = document.getElementById("total");

const formulario = document.getElementById("formPedido");

const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

function mostrarProdutos() {

    const filtrados = categoriaAtual === "Todos"
        ? produtos
        : produtos.filter(produto => produto.categoria === categoriaAtual);

    totalProdutos.textContent =
        filtrados.length + (filtrados.length === 1 ? " produto" : " produtos");

    listaProdutos.innerHTML = "";

    filtrados.forEach(produto => {

        const card = document.createElement("article");
        card.className = "produto";

        card.innerHTML = `
            <div class="produto-icone">${produto.icone}</div>

            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <div class="produto-rodape">
                <span class="preco">
                    ${formatarMoeda(produto.preco)}
                </span>

                <button class="botao-adicionar" data-id="${produto.id}">
                    + Adicionar
                </button>
            </div>
        `;

        listaProdutos.appendChild(card);

    });

}

function adicionarProduto(id) {

    const produto = produtos.find(item => item.id === id);

    if (!produto) return;

    const existente = carrinho.find(item => item.id === id);

    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();

}

function alterarQuantidade(id, alteracao) {

    const item = carrinho.find(produto => produto.id === id);

    if (!item) return;

    item.quantidade += alteracao;

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(produto => produto.id !== id);
    }

    atualizarCarrinho();

}

function removerProduto(id) {

    carrinho = carrinho.filter(item => item.id !== id);

    atualizarCarrinho();

}

function atualizarCarrinho() {

    itensCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

        itensCarrinho.innerHTML = `
            <div class="carrinho-vazio">
                <span>🛍️</span>
                <h3>Seu carrinho está vazio</h3>
                <p>Adicione alguns produtos para começar.</p>
            </div>
        `;

    }

    carrinho.forEach(item => {

        const elemento = document.createElement("div");

        elemento.className = "item-carrinho";

        elemento.innerHTML = `
            <div class="item-info">
                <h4>${item.icone} ${item.nome}</h4>
                <p>${formatarMoeda(item.preco)} cada</p>
                <strong>${formatarMoeda(item.preco * item.quantidade)}</strong>
            </div>

            <div class="controles">

                <button data-acao="diminuir" data-id="${item.id}">
                    −
                </button>

                <strong>${item.quantidade}</strong>

                <button data-acao="aumentar" data-id="${item.id}">
                    +
                </button>

                <button class="remover" data-acao="remover" data-id="${item.id}">
                    ×
                </button>

            </div>
        `;

        itensCarrinho.appendChild(elemento);

    });

    calcularTotal();

}

function calcularTotal() {

    const quantidadeTotal = carrinho.reduce(
        (soma, item) => soma + item.quantidade,
        0
    );

    const subtotal = carrinho.reduce(
        (soma, item) => soma + item.preco * item.quantidade,
        0
    );

    const entrega = carrinho.length > 0 ? taxaEntrega : 0;

    const total = subtotal + entrega;

    contadorCarrinho.textContent =
        quantidadeTotal + (quantidadeTotal === 1 ? " item" : " itens");

    subtotalElemento.textContent = formatarMoeda(subtotal);

    taxaResumo.textContent = formatarMoeda(entrega);

    totalElemento.textContent = formatarMoeda(total);

}

listaProdutos.addEventListener("click", function(event) {

    const botao = event.target.closest("[data-id]");

    if (!botao) return;

    adicionarProduto(Number(botao.dataset.id));

});

itensCarrinho.addEventListener("click", function(event) {

    const botao = event.target.closest("[data-acao]");

    if (!botao) return;

    const id = Number(botao.dataset.id);

    const acao = botao.dataset.acao;

    if (acao === "aumentar") {
        alterarQuantidade(id, 1);
    }

    if (acao === "diminuir") {
        alterarQuantidade(id, -1);
    }

    if (acao === "remover") {
        removerProduto(id);
    }

});

document.getElementById("categorias").addEventListener("click", function(event) {

    const botao = event.target.closest("[data-categoria]");

    if (!botao) return;

    categoriaAtual = botao.dataset.categoria;

    document.querySelectorAll(".categoria").forEach(item => {
        item.classList.remove("ativa");
    });

    botao.classList.add("ativa");

    mostrarProdutos();

});

document.getElementById("limparCarrinho").addEventListener("click", function() {

    carrinho = [];

    atualizarCarrinho();

});

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (carrinho.length === 0) {
        alert("Adicione pelo menos um produto ao carrinho.");
        return;
    }

    if (!formulario.reportValidity()) return;

    const nome = document.getElementById("nome").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    const endereco = document.getElementById("endereco").value.trim();

    const pagamento = document.getElementById("pagamento").value;

    const subtotal = carrinho.reduce(
        (soma, item) => soma + item.preco * item.quantidade,
        0
    );

    const total = subtotal + taxaEntrega;

    const listaPedido = carrinho.map(item => {
        return `${item.quantidade}x ${item.nome} - ${formatarMoeda(item.preco * item.quantidade)}`;
    }).join("\n");

    const mensagem =
        "PEDIDO FINALIZADO!\n\n" +
        "CLIENTE\n" +
        "Nome: " + nome + "\n" +
        "Telefone: " + telefone + "\n" +
        "Endereço: " + endereco + "\n\n" +
        "PRODUTOS\n" +
        listaPedido + "\n\n" +
        "Subtotal: " + formatarMoeda(subtotal) + "\n" +
        "Entrega: " + formatarMoeda(taxaEntrega) + "\n" +
        "TOTAL: " + formatarMoeda(total) + "\n\n" +
        "Pagamento: " + pagamento;

    alert(mensagem);

    carrinho = [];

    atualizarCarrinho();

    formulario.reset();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

mostrarProdutos();

atualizarCarrinho();