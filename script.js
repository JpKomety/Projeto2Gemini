let fontScale = 1;

// Ajuste de tamanho da fonte
function changeFontSize(delta) {
  fontScale = Math.min(Math.max(fontScale + delta, 0.8), 1.8);
  document.documentElement.style.setProperty('--font-scale', fontScale);
}

// Modo Alto Contraste
function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}

// Leitura geral por Voz (Web Speech API)
function readPageContent() {
  window.speechSynthesis.cancel();

  const textToRead = document.getElementById('main-content').innerText;
  speakText(textToRead);
}

// Leitura individual de um cartão
function readCard(cardId) {
  window.speechSynthesis.cancel();

  const cardElement = document.getElementById(cardId);
  // Pega o texto do cartão sem o texto do próprio botão
  const title = cardElement.querySelector('h2') ? cardElement.querySelector('h2').innerText : '';
  const text = cardElement.querySelector('p') ? cardElement.querySelector('p').innerText : '';

  speakText(`${title}. ${text}`);
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.9; // Velocidade ligeiramente pausada para clareza
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  window.speechSynthesis.cancel();
}