let numeroDeCamisteas = []


function escalarJogador() {
    const listaDeJogadores = document.getElementById('listaJogadores')

    let posicaoJogador = document.getElementById('posicaoJogador').value;
    let nomeJogador = document.getElementById('nomeJogador').value;
    let camisetaJogador = document.getElementById('camisetaJogador').value;

    camisetaJogador = parseFloat(camisetaJogador);
    
    if (numeroDeCamisteas.includes(camisetaJogador)) {
        alert('Número de camiseta já utilizado.');
        return;
    } 

    
    numeroDeCamisteas.push(camisetaJogador);


    const dadosJogador =
        "A posição do jogador: " + posicaoJogador + "\n"
        + 'O nome do Jogador: ' + nomeJogador + '\n'
        + 'O número da camiseta: ' + camisetaJogador


    const ul = document.createElement('ul')
    const jogadorLi = document.createElement('li')
    jogadorLi.innerText = dadosJogador;
    jogadorLi.id = 'jogador- ' + camisetaJogador;

    ul.appendChild(jogadorLi)

    if (isNaN(camisetaJogador) ||camisetaJogador === null ){
        alert('Adicione um número válido na opção camiseta')
    } else {


    let confirmacao = confirm('Deseja adicionar o jogador ao time?')

    if (confirmacao === true) {
        listaDeJogadores.appendChild(ul)

        document.getElementById('posicaoJogador').value = "";
        document.getElementById('nomeJogador').value = "";
        document.getElementById('camisetaJogador').value = ""
        console.log(numeroDeCamisteas)
    } else {
        alert('Cancelando informações')
        document.getElementById('posicaoJogador').value = "";
        document.getElementById('nomeJogador').value = "";
        document.getElementById('camisetaJogador').value = ""
        return null;
    }
}
}


// removerCamisetaJogador

function removerJogador() {
    let numeroParaRemover = document.getElementById('removerCamisetaJogador').value;
    numeroParaRemover = parseFloat(numeroParaRemover);

    if (!numeroDeCamisteas.includes(numeroParaRemover)) {
        alert('número não encontrado')
        return;
    }

    numeroDeCamisteas = numeroDeCamisteas.filter(numero => numero !== numeroParaRemover);

    let jogadorParaExcluir = document.getElementById('jogador- ' + numeroParaRemover)

    if (jogadorParaExcluir) {
        jogadorParaExcluir.parentElement.remove();
        alert('O jogador com a camiseta número ' + numeroParaRemover + " foi excluído")
    }



}