document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'user');
        document.getElementById('user-input').value = '';

        // Simulando uma resposta do bot
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            appendMessage(botResponse, 'bot');
        }, 500);
    }
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(userInput) {
    const responses = {
        'bom dia': 'Bom dia! Como posso ajudar você hoje?',
        'olá': 'Olá! Em que posso ajudar?',
        'como você está?': 'Estou apenas um bot, mas estou aqui para ajudar você!',
        'adeus': 'Adeus! Tenha um ótimo dia!',
        'qual é o seu nome?': 'Eu sou um chatbot sem nome específico, mas estou aqui para ajudar!',
        'o que você pode fazer?': 'Posso responder perguntas básicas e ajudar com informações gerais.',
        'que dia é hoje?': 'Hoje é ' + new Date().toLocaleDateString(),
        'que horas são?': 'Agora são ' + new Date().toLocaleTimeString(),
        'qual é a capital do Brasil?': 'A capital do Brasil é Brasília.',
        'quem é o presidente do Brasil?': 'O presidente do Brasil é Luiz Inácio Lula da Silva, desde 1º de janeiro de 2023.',
        'qual é a raiz quadrada de 16?': 'A raiz quadrada de 16 é 4.',
        'me conte uma piada': 'Por que o livro de matemática se suicidou? Porque tinha muitos problemas!'
    };

    // Convertendo a entrada do usuário para minúsculas e removendo espaços extras
    const lowerCaseInput = userInput.toLowerCase().trim();

    // Retornando a resposta correspondente ou uma resposta genérica
    return responses[lowerCaseInput] || 'Desculpe, não entendi sua pergunta. Pode reformular?';
}
