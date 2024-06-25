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
        'ola': 'Olá! Em que posso ajudar?',
        'como voce esta?': 'Estou apenas um bot, mas estou aqui para ajudar você!',
        'adeus': 'Adeus! Tenha um ótimo dia!'
    };

    // Convertendo a entrada do usuário para minúsculas e removendo espaços extras
    const lowerCaseInput = userInput.toLowerCase().trim();

    // Retornando a resposta correspondente ou uma resposta genérica
    return responses[lowerCaseInput] || 'Esta é uma resposta genérica do bot.';
}
