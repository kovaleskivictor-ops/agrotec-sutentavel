function mensagem() {
    alert("O Projeto Agrinho 2026 está focado em educação, cidadania e sustentabilidade!");
}

function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    document.querySelector('form').reset();
}
