let tamanhoAtual = 18;
const tamanhoMinimo = 14;
const tamanhoMaximo = 28;

// Função para alterar o tamanho da fonte da página
function alterarTamanhoFonte(variacao) {
  const novoTamanho = tamanhoAtual + variacao;
  if (novoTamanho >= tamanhoMinimo && novoTamanho <= tamanhoMaximo) {
    tamanhoAtual = novoTamanho;
    document.documentElement.style.setProperty('--tamanho-fonte-base', tamanhoAtual + 'px');
  }
}

// Função para leitura de voz do conteúdo total
function lerTextoGeral() {
  pararLeitura();
  const texto = document.getElementById('conteudo-principal').innerText;
  executarVoz("Iniciando leitura das dicas. " + texto);
}

// Função para ler um cartão específico
function lerElemento(elemento) {
  pararLeitura();
  // Lê apenas o texto do cartão, ignorando o texto do próprio botão
  const clone = elemento.cloneNode(true);
  const botao = clone.querySelector('button');
  if (botao) botao.remove();
  
  executarVoz(clone.innerText);
}

// Função central de sintetizador de voz (SpeechSynthesis)
function executarVoz(texto) {
  if ('speechSynthesis' in window) {
    const mensagem = new SpeechSynthesisUtterance(texto);
    mensagem.lang = 'pt-BR';
    mensagem.rate = 0.9; // Velocidade ligeiramente reduzida para facilitar a compreensão
    window.speechSynthesis.speak(mensagem);
  } else {
    alert("Desculpe, seu navegador não suporta a função de leitura por voz.");
  }
}

// Função para parar a leitura a qualquer momento
function pararLeitura() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}