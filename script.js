// --- SELEÇÃO DE ELEMENTOS DO MODAL ---
let btnAjuda = document.querySelector('.botao-emergencia');
let btnFechar = document.querySelector('.botao-fechar');
let modal = document.querySelector('.modal-ajuda');

// Abrir modal ao clicar no botão de ajuda
btnAjuda.addEventListener('click', function(evento) {
    evento.preventDefault();
    modal.style.display = 'block';
});

// Fechar modal ao clicar no botão de fechar
btnFechar.addEventListener('click', function() {
    modal.style.display = 'none';
});

// --- CONTROLE DE TAMANHO DA FONTE ---
let tamanhoFonteAtual = 22;
const tamanhoMinimo = 16;
const tamanhoMaximo = 36;

let botaoAumentar = document.querySelector('#btn-aumentar');
let botaoDiminuir = document.querySelector('#btn-diminuir');

botaoAumentar.addEventListener('click', function() {
    if (tamanhoFonteAtual < tamanhoMaximo) {
        tamanhoFonteAtual += 2;
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

botaoDiminuir.addEventListener('click', function() {
    if (tamanhoFonteAtual > tamanhoMinimo) {
        tamanhoFonteAtual -= 2;
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

// --- LEITURA DE VOZ EM ALTA ---
let botaoOuvir = document.querySelector('#btn-ouvir');
let estaLendo = false;
let sinteseVoz = window.speechSynthesis;

botaoOuvir.addEventListener('click', function() {
    if (estaLendo) {
        sinteseVoz.cancel();
        estaLendo = false;
        botaoOuvir.textContent = '🔊 Ouvir Página';
        return;
    }

    let textoPagina = document.body.innerText;
    let mensagemVoz = new SpeechSynthesisUtterance(textoPagina);
    mensagemVoz.lang = 'pt-BR';
    mensagemVoz.rate = 0.9;

    mensagemVoz.onend = function() {
        estaLendo = false;
        botaoOuvir.textContent = '🔊 Ouvir Página';
    };

    sinteseVoz.speak(mensagemVoz);
    estaLendo = true;
    botaoOuvir.textContent = '⏹️ Parar Leitura';
});