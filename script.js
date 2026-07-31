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

// Base de Conhecimento Inteligente da IA (Tópicos Técnicos e Conversas Normais)
const baseConhecimento = {
    // === CONVERSAS NORMAIS / CASUAIS (SMALL TALK) ===
    tudoBem: {
        chaves: /\b(tudo bem|tudo bom|como voce esta|como vai|como estao as coisas|suave|beleza)\b/i,
        resposta: "Tudo ótimo por aqui! Prontinho para codificar e tirar suas dúvidas. E com você, como estão os códigos?"
    },
    quemEvoce: {
        chaves: /\b(quem e voce|quem e tu|seu nome|o que voce e|assistente)\b/i,
        resposta: "Eu sou o assistente virtual do Prof. Lindo! Fui treinado para te ajudar com Node.js, Express e banco de dados enquanto ele corrige os trabalhos."
    },
    elogio: {
        chaves: /\b(inteligente|legal|da hora|top|bom|otimo|incrivel|genio|lindo|gostei|perfeito)\b/i,
        resposta: "Muito obrigado pelo elogio! 😄 Tento dar o meu melhor. O Prof. Lindo me estruturou muito bem!"
    },
    piada: {
        chaves: /\b(piada|conta uma piada|engraçado|rir|descontrair)\b/i,
        resposta: "Por que o desenvolvedor faliu? Porque ele gastou todo o seu dinheiro no *cache*! 🤣"
    },
    despedida: {
        chaves: /\b(tchau|adeus|ate logo|fui|partiu|boa noite|ate amanha)\b/i,
        resposta: "Até mais! Bons estudos por aí e lembre-se de dar um `git commit` antes de dormir!"
    },

    // === MATÉRIAS E SUPORTE TÉCNICO ===
    saudacoes: {
        chaves: /\b(oi|ola|olá|bom dia|boa tarde|ajuda|hello|hey)\b/i,
        resposta: "Olá! Sou o assistente inteligente do Prof. Lindo. Pode mandar sua dúvida sobre Node.js, Express, Bancos de Dados ou Git!"
    },
    bancoDados: {
        chaves: /\b(banco|sql|conectar|database|postgres|mysql|sqlite|mongodb|sequelize|prisma)\b/i,
        resposta: "Para conectar bancos SQL no Node, use ORMs como **Prisma** ou **Sequelize**. Eles gerenciam as conexões de forma segura. Você já configurou o arquivo `.env` com a string de conexão?"
    },
    rotasExpress: {
        chaves: /\b(rota|rotas|get|post|put|delete|endpoint|express|app|middleware)\b/i,
        resposta: "As rotas no Express usam métodos HTTP: `app.get()`, `app.post()`, `app.put()` e `app.delete()`. Lembre-se sempre de retornar uma resposta com `res.json()` ou `res.send()` para não travar a requisição!"
    },
    errosBugs: {
        chaves: /\b(erro|bug|quebrou|travou|falha|crash|not found|undefined|null)\b/i,
        resposta: "Eita! Erros comuns no Node geralmente envolvem esquecer o `await`, esquecer de importar um módulo ou portas ocupadas (EADDRINUSE). O que aparece no console do seu terminal?"
    },
    instalacaoNpm: {
        chaves: /\b(instalar|package|npm|yarn|dependencies|modulo|modulos|package\.json)\b/i,
        resposta: "Para instalar dependências, use `npm install <nome-do-pacote>` no terminal. Verifique se o arquivo `package.json` foi criado na raiz do seu projeto antes de rodar o comando."
    },
    variaveisAmbiente: {
        chaves: /\b(env|dotenv|variavel|ambiente|seguranca|senha|token)\b/i,
        resposta: "Variáveis de ambiente protegem dados sensíveis! Instale o pacote `dotenv` com `npm i dotenv`, crie um arquivo `.env` na raiz e acesse os dados no código usando `process.env.NOME_DA_VARIAVEL`."
    },
    arquiteturaCamadas: {
        chaves: /\b(controller|service|model|mvc|arquitetura|pasta|pastas|estrutura)\b/i,
        resposta: "Separar o projeto em camadas (MVC) ajuda muito! O **Model** cuida dos dados, o **Service** guarda as regras de negócio e o **Controller** lida com as requisições (req) e respostas (res)."
    },
    agradecimento: {
        chaves: /\b(valeu|obrigado|obrigada|vlw|obg|deu certo|resolvido|funcionou)\b/i,
        resposta: "Show de bola! Fico feliz em ajudar. Se surgir qualquer outra dúvida durante o desenvolvimento, é só chamar aqui!"
    }
};

// Resposta padrão caso a IA não entenda
const respostaPadrao = "Não consegui identificar palavras-chave conhecidas. Tente perguntar sobre 'banco', 'rotas', 'erros' ou mande um 'tudo bem' para conversarmos!";

// Função principal de envio
function enviarMensagem() {
    const input = document.getElementById("chatInputField");
    const textoMensagem = input.value.trim();

    if (textoMensagem === "") return;

    // 1. Renderiza a mensagem do aluno na tela
    criarMensagemHTML(textoMensagem, "aluno", "Você");
    input.value = ""; // Limpa a barra de digitação

    // 2. Processa e exibe a resposta da IA após 800ms
    setTimeout(() => {
        const respostaIA = processarRespostaIA(textoMensagem);
        criarMensagemHTML(respostaIA, "professor", "Prof. Lindo (IA)");
    }, 800);
}

// Algoritmo de busca por RegEx (Varredura ultra veloz)
function processarRespostaIA(mensagemUsuario) {
    for (const categoria in baseConhecimento) {
        if (baseConhecimento[categoria].chaves.test(mensagemUsuario)) {
            return baseConhecimento[categoria].resposta;
        }
    }
    return respostaPadrao;
}

// Injeta as caixas de diálogo dinamicamente no HTML
function criarMensagemHTML(texto, remetente, nomeExibicao) {
    const chatBox = document.getElementById("chatBox");
    const novaMensagem = document.createElement("div");
    
    novaMensagem.className = `mensagem ${remetente}`;
    novaMensagem.innerHTML = `
        <span class="chat-name">${nomeExibicao}</span>
        <p>${texto}</p>
    `;

    chatBox.appendChild(novaMensagem);
    chatBox.scrollTop = chatBox.scrollHeight; // Rola o chat para baixo
}

// Monitora o teclado para disparar o envio com o Enter
function verificarTecla(event) {
    if (event.key === "Enter") {
        enviarMensagem();
    }
}
