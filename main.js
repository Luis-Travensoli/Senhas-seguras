// Seleciona o elemento que exibe o número na tela
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

// Define o valor inicial na tela
numeroSenha.textContent = tamanhoSenha;

// Seleciona os dois botões [-] e [+]
const botoes = document.querySelectorAll('.parametro-senha__botao');

// Vincula as funções aos cliques dos botões correspondentes
botoes[0].onclick = diminuiTamanho; // Botão de menos
botoes[1].onclick = aumentaTamanho; // Botão de mais

// Função para diminuir o tamanho (Limite mínimo: 1)
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha(); // Chama a função para atualizar a senha na tela
}

// Função para aumentar o tamanho (Limite máximo: 20)
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha(); // Chama a função para atualizar a senha na tela
}

// Função temporária para evitar erros no console até você fazer a lógica real
function geraSenha() {
    console.log("Gerando uma nova senha com tamanho: " + tamanhoSenha);
    // Sua lógica de geração de senha entrará aqui futuramente
}