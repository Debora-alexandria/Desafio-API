function adicionarTarefa() {
    const input = document.getElementById('tarefaInput');
    const tarefaTexto = input.value.trim();
  
    if (tarefaTexto === '') {
      alert('Por favor, digite uma tarefa.');
      return;
    }
  
    const lista = document.getElementById('listaTarefas');
    const item = document.createElement('li');
    item.textContent = tarefaTexto;
  
    // Botão de remoção
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function () {
      removerTarefa(item);
    };
  
    item.appendChild(botaoRemover);
    lista.appendChild(item);
  
    input.value = '';
  }
  
  function removerTarefa(item) {
    
    item.remove();
  }
  