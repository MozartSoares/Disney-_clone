document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    //comportamento do cabeçalho
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaHeader()
        } else {
            exibeHeader()
        }
    })

    //comportamento de abas da seção shows
    for(let i = 0 ; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            console.log(abaAlvo)
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is--active')
        })
    }
    //comportamento dos accordions FAQ
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

})

function exibeHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is--hidden')
}

function ocultaHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is--hidden')
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is--open'
    const elementoPai = findClosestParent(elemento.target, 'faq__questions__item')

    elementoPai.classList.toggle(classe)
}

function findClosestParent(element, className) {
    let currentElement = element;

    while (currentElement && !currentElement.classList.contains(className)) {
        currentElement = currentElement.parentNode;
        return currentElement;
    }
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0 ; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active')
    }
}
