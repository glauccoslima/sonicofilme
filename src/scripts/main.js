// Este evento é disparado quando o HTML é completamente carregado e pronto
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que têm o atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');
    // Seleciona todos os elementos que têm o atributo 'data-faq-question'
    const questions = document.querySelectorAll('[data-faq-question]');

    // Seleciona o elemento com a classe 'hero' e obtém a sua altura
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Adiciona um ouvinte para o evento de rolagem (scroll) da janela
    window.addEventListener('scroll', function() {
        // Obtém a posição atual de rolagem
        const posicaoAtual = window.scrollY;

        // Verifica se a posição atual de rolagem é menor do que a altura da seção hero
        if (posicaoAtual < alturaHero) {
            // Se for, oculta os elementos do cabeçalho (header)
            ocultaElementosDoHeader();
        } else {
            // Se não for, exibe os elementos do cabeçalho
            exibeElementosDoHeader();
        }
    })

    // Para cada botão, adiciona um ouvinte para o evento de clique
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            // Quando um botão é clicado, obtém o valor do atributo 'data-tab-button'
            const abaAlvo = botao.target.dataset.tabButton;
            // Seleciona o elemento com o atributo 'data-tab-id' que corresponda ao valor obtido anteriormente
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            // Esconde todas as abas
            escondeTodasAbas();
            // Mostra a aba que corresponde ao botão clicado
            aba.classList.add('shows__list--is-active');
            // Remove a classe ativa de todos os botões
            removeBotaoAtivo();
            // Adiciona a classe ativa ao botão clicado
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Para cada elemento de pergunta, adiciona um ouvinte para o evento de clique
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

// Adiciona a classe 'header--is-hidden' ao cabeçalho, fazendo com que ele seja ocultado
function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

// Remove a classe 'header--is-hidden' do cabeçalho, fazendo com que ele seja exibido
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}
// Alterna a classe 'faq__questions__item--is-open' no elemento pai da pergunta clicada
// Isso faz com que a resposta associada seja exibida ou ocultada
function abreOuFechaResposta(elemento) {
    // Define a classe a ser alternada
    const classe = 'faq__questions__item--is-open';
    // Obtém o elemento pai do elemento que foi clicado
    const elementoPai = elemento.target.parentNode;
    // Alternar (adicionar se não existir, remover se existir) a classe no elemento pai
    elementoPai.classList.toggle(classe);
}

// Função para remover a classe 'shows__tabs__button--is-active' de todos os botões
// Isso faz com que todos os botões apareçam como inativos
function removeBotaoAtivo() {
    // Seleciona todos os botões que têm o atributo 'data-tab-button'
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Para cada botão, remove a classe 'shows__tabs__button--is-active'
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Função para esconder todas as abas, removendo a classe 'shows__list--is-active'
// Isso faz com que todas as abas apareçam como inativas
function escondeTodasAbas() {
    // Seleciona todos os elementos que têm o atributo 'data-tab-id'
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    // Para cada aba, remove a classe 'shows__list--is-active'
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
