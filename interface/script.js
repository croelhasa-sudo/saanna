
const formulario = document.getElementById("formPaciente");
const lista = document.getElementById("pacientes");
const mensagem = document.getElementById("mensagem");

async function carregarPacientes() {
    try {
        const resposta = await fetch("/api/pacientes");
        const pacientes = await resposta.json();

        lista.innerHTML = "";

        if (pacientes.length === 0) {
            lista.textContent = "Nenhum paciente cadastrado.";
            return;
        }

        pacientes.forEach(paciente => {
            const item = document.createElement("div");
            item.className = "paciente";

            const informacoes = document.createElement("div");
            const nome = document.createElement("strong");
            const detalhes = document.createElement("p");

            nome.textContent = paciente.nome;
            detalhes.textContent =
                `CPF: ${paciente.cpf} | Telefone: ${paciente.telefone} | Idade: ${paciente.idade}`;

            informacoes.append(nome, detalhes);

            const botao = document.createElement("button");
            botao.textContent = "Excluir";

            botao.addEventListener("click", () => {
                excluirPaciente(paciente.id);
            });

            item.append(informacoes, botao);
            lista.appendChild(item);
        });

    } catch (erro) {
        lista.textContent = "Erro ao carregar pacientes.";
    }
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const paciente = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        idade: document.getElementById("idade").value
    };

    try {
        const resposta = await fetch("/api/pacientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paciente)
        });

        const resultado = await resposta.json();

        mensagem.textContent = resposta.ok
            ? resultado.mensagem
            : resultado.erro;

        if (resposta.ok) {
            formulario.reset();
            carregarPacientes();
        }

    } catch (erro) {
        mensagem.textContent = "Não foi possível conectar ao servidor.";
    }
});

async function excluirPaciente(id) {
    if (!confirm("Deseja realmente excluir este paciente?")) {
        return;
    }

    const resposta = await fetch(`/api/pacientes/${id}`, {
        method: "DELETE"
    });

    const resultado = await resposta.json();

    mensagem.textContent = resultado.mensagem || resultado.erro;

    carregarPacientes();
}

carregarPacientes();