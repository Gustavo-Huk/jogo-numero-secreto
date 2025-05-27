let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;


function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();



function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas++;
    let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1','Acertou!');
        exibirTextoNaTela ('p', 'Você descobriu o número secreto em '+tentativas+' '+palavraTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('h1', 'Quase lá!');
            exibirTextoNaTela ('p', 'O número secreto é menor que '+chute);
        } else {
            exibirTextoNaTela ('h1', 'Quase lá!');
            exibirTextoNaTela ('p', 'O número secreto é maior que '+chute);
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if (quantidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}