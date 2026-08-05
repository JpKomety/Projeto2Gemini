let tamanhoAtual = 18;
const tamanhoMinimo = 14;
const tamanhoMaximo = 26;

// Aumenta ou diminui a fonte dinamicamente
function alterarTamanhoFonte(variacao) {
  const novoTamanho = tamanhoAtual + variacao;
  if (novoTamanho >= tamanhoMinimo && novoTamanho <= tamanhoMaximo) {
    tamanhoAtual = novoTamanho;
    document.documentElement.style.setProperty('--tamanho-fonte-base', tamanhoAtual + 'px');
  }
}

// Lê todo o conteúdo das dicas
function lerTextoGeral() {
  pararLeitura();
  const texto = document.getElementById('conteudo-principal').innerText;
  executarVoz("Iniciando a leitura do guia. " + texto);
}

// Lê apenas o cartão selecionado
function lerElemento(elemento) {
  pararLeitura();
  const clone = elemento.cloneNode(true);
  const botao = clone.querySelector('button');
  if (botao) botao.remove();
  
  executarVoz(clone.innerText);
}

// Função de síntese de voz nativa
function executarVoz(texto) {
  if ('speechSynthesis' in window) {
    const mensagem = new SpeechSynthesisUtterance(texto);
    mensagem.lang = 'pt-BR';
    mensagem.rate = 0.9; // Velocidade ajustada para facilitar a compreensão
    window.speechSynthesis.speak(mensagem);
  } else {
    alert("Seu navegador não possui suporte para leitura por voz.");
  }
}

// Interrompe a leitura por voz
function pararLeitura() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}