let btnAjuda = document.querySelector('.botao-emergencia'); // ou o seletor que usou para o botão 190
let btnFechar = document.querySelector('.botao-fechar');
let modal = document.querySelector('.modal-ajuda');

// 2. Função para abrir o modal quando clicar no botão de ajuda
btnAjuda.addEventListener('click', function(evento) {
    // Impede que o link tente discar imediatamente se o idoso quiser apenas ler o aviso antes
    evento.preventDefault(); 
    
    // Mostra o modal mudando o estilo de exibição para 'block' ou 'flex'
    modal.style.display = 'block';
});

// 3. Função para fechar o modal quando clicar no botão de fechar
btnFechar.addEventListener('click', function() {
    // Esconde o modal voltando o estilo para 'none'
    modal.style.display = 'none';
});