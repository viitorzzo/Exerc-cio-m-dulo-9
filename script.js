$(document).ready(function() {
    // Evento de submissão do formulário
    $('#form-tarefas').on('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura o valor do campo de texto
        const tarefa = $('#tarefa').val();

        // Verifica se a tarefa não está vazia
        if (tarefa !== '') {
            // Adiciona um novo item à lista
            $('#lista-tarefas').append(`<li>${tarefa}</li>`);

            // Limpa o campo de texto
            $('#tarefa').val('');
        }
    });

    // Evento de clique nos itens da lista para aplicar o efeito de linha
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('feito');
    });
});
