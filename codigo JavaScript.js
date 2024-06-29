<!--JavaScript-->

document.getElementById('mudar-texto').addEventListener('click', function() {
    var textoPrincipal = document.getElementById('texto-principal');
    textoPrincipal.textContent = 'O texto foi alterado! Você pode clicar no botão novamente para ver esta mensagem mudar.';
});
