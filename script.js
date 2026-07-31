// Base de Dados Simulada de Chamadas de Frequência
const dadosFrequencia = [
    { data: "27/07/2026", materia: "backend", nome: "Back-End", status: "presenca" },
    { data: "24/07/2026", materia: "inovacao", nome: "Inovação", status: "presenca" },
    { data: "22/07/2026", materia: "banco", nome: "Banco de Dados", status: "falta" },
    { data: "20/07/2026", materia: "backend", nome: "Back-End", status: "presenca" },
    { data: "17/07/2026", materia: "inovacao", nome: "Inovação", status: "falta" },
    { data: "15/07/2026", materia: "banco", nome: "Banco de Dados", status: "presenca" },
    { data: "13/07/2026", materia: "backend", nome: "Back-End", status: "presenca" }
];

// Inicializar a linha do tempo de frequência ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
    filtrarFrequencia('all');
});

// Mecanismo de Filtro de Frequência Diária
function filtrarFrequencia(categoria) {
    const container = document.getElementById("timelineFrequencia");
    container.innerHTML = ""; // Limpa a lista atual

    // Altera o estado ativo dos botões visuais
    const botoes = document.querySelectorAll(".tab-btn");
    botoes.forEach(btn => btn.classList.remove("active"));
    event.currentTarget.classList?.add("active");

    // Filtra os dados
    const dadosFiltrados = categoria === 'all' 
        ? dadosFrequencia 
        : dadosFrequencia.filter(item => item.materia === categoria);

    // Renderiza cada registro em tela
    dadosFiltrados.forEach(item => {
        const itemHTML = `
            <div class="freq-item ${item.status}">
                <div class="freq-info">
                    <h4>${item.nome}</h4>
                    <span>${item.data}</span>
                </div>
                <span class="badge-status">${item.status === 'presenca' ? 'VEIO' : 'FALTOU'}</span>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
}

// Mecanismo Funcional do Chat de Mensagens
function enviarMensagem() {
    const input = document.getElementById("chatInputField");
    const chatBox = document.getElementById("chatBox");
    const textoMensagem = input.value.trim();

    if (textoMensagem === "") return; // Impede o envio de caixas vazias

    // Cria a estrutura visual da nova mensagem do aluno
    const novaMensagem = document.createElement("div");
    novaMensagem.className = "mensagem aluno";
    novaMensagem.innerHTML = `
        <span class="chat-name">Você</span>
        <p>${textoMensagem}</p>
    `;

    // Adiciona e rola o scroll do chat para baixo automaticamente
    chatBox.appendChild(novaMensagem);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Limpa o campo de texto
    input.value = "";

    // Simulação opcional de resposta automática do professor após 1.5 segundos
    setTimeout(() => {
        const respostaProfessor = document.createElement("div");
        respostaProfessor.className = "mensagem professor";
        respostaProfessor.innerHTML = `
            <span class="chat-name">Suporte (Automático)</span>
            <p>Recebi sua dúvida! Analisarei seu código e te respondo em breve.</p>
        `;
        chatBox.appendChild(respostaProfessor);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);
}

// Atalho para enviar mensagem pressionando a tecla 'Enter'
function verificarTecla(event) {
    if (event.key === "Enter") {
        enviarMensagem();
    }
}

// Banco de dados de respostas (Base de Conhecimento da IA)
const bancoRespostas = [
    {
        palavrasChave: ["banco", "sql", "conectar", "database"],
        resposta: "Para conectar um banco SQL no Node.js, você pode usar o **Sequelize** (ORM) ou o driver nativo **pg** (PostgreSQL) / **mysql2**. Você já instalou o pacote via npm?"
    },
    {
        palavrasChave: ["rota", "rotas", "get", "post", "endpoint"],
        resposta: "As rotas no Express são criadas usando `app.get('/rota', callback)` ou `app.post()`. Lembre-se de passar os parâmetros `req` e `res` na função!"
    },
    {
        palavrasChave: ["erro", "bug", "funcionando", "quebrou"],
        resposta: "Vixi! Dá uma olhada no terminal. Qual é a mensagem de erro exata que está aparecendo por aí?"
    },
    {
        palavrasChave: ["oi", "olá", "bom dia", "boa tarde", "ajuda"],
        resposta: "Olá! Sou o assistente do Prof. Lindo. Pode mandar sua dúvida sobre Node.js, Express ou Banco de Dados!"
    }
];

// Resposta padrão caso a IA não entenda
const respostaPadrao = "Não consegui entender muito bem. Tente usar palavras como 'banco', 'rotas' ou 'erro' para eu te ajudar!";

// Função principal para enviar a mensagem do aluno
function enviarMensagem() {
    const input = document.getElementById("chatInputField");
    const textoMensagem = input.value.trim();

    if (textoMensagem === "") return;

    // 1. Renderiza a mensagem do aluno
    criarMensagemHTML(textoMensagem, "aluno", "Você");
    input.value = ""; // Limpa o campo

    // 2. Simula o "Digitando..." do Professor IA após 1 segundo
    setTimeout(() => {
        const respostaIA = processarRespostaIA(textoMensagem);
        criarMensagemHTML(respostaIA, "professor", "Prof. Lindo (IA)");
    }, 1000);
}

// Função que busca a melhor resposta baseada em palavras-chave
function processarRespostaIA(mensagemUsuario) {
    const mensagemMinuscula = mensagemUsuario.toLowerCase();

    for (const item of bancoRespostas) {
        // Verifica se alguma palavra-chave está contida na frase do usuário
        const encontrouPalavra = item.palavrasChave.some(palavra => mensagemMinuscula.includes(palavra));
        if (encontrouPalavra) {
            return item.resposta;
        }
    }
    return respostaPadrao;
}

// Função auxiliar para injetar a mensagem na tela e rolar o chat
function criarMensagemHTML(texto, remetente, nomeExibicao) {
    const chatBox = document.getElementById("chatBox");

    const novaMensagem = document.createElement("div");
    novaMensagem.className = `mensagem ${remetente}`;

    novaMensagem.innerHTML = `
        <span class="chat-name">${nomeExibicao}</span>
        <p>${texto}</p>
    `;

    chatBox.appendChild(novaMensagem);
    
    // Rola o chat para a última mensagem automaticamente
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Permite enviar a mensagem ao pressionar "Enter"
function verificarTecla(event) {
    if (event.key === "Enter") {
        enviarMensagem();
    }
}
