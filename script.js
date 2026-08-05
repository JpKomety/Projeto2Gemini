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

// Alternar Modo Visual/Surdo (Aumenta o contraste visual e destaca opções de texto)
function toggleDeafMode() {
  document.body.classList.toggle('deaf-mode');
  const active = document.body.classList.contains('deaf-mode');
  alert(active ? "Modo para Surdos ativado! Textos e indicações visuais foram destacados." : "Modo para Surdos desativado.");
}

// Alerta visual de emergência ao clicar no 190
function triggerVisualAlert() {
  const alertBanner = document.getElementById('visual-alert');
  alertBanner.hidden = false;
  setTimeout(() => {
    alertBanner.hidden = true;
  }, 5000);
}

// Ação para Suporte em Libras ou Texto
function openLibrasSupport() {
  alert("Iniciando canal de atendimento por texto / videochamada adaptada em Libras.");
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
  const title = cardElement.querySelector('h2') ? cardElement.querySelector('h2').innerText : '';
  const text = cardElement.querySelector('p') ? cardElement.querySelector('p').innerText : '';

  speakText(`${title}. ${text}`);
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  window.speechSynthesis.cancel();
}