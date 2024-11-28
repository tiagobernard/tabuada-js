let textoDinamico = document.querySelector('#tabuada');
let erroZero = document.querySelector('#errorZero');
let erroVazio = document.querySelector('#errorVazio')
let tabuada = parseInt(prompt('Digite um número para a tabuada'));

for (let cont = 1; cont <= 10; cont++) {
    let resultado = tabuada * cont;
    if (tabuada > 0) {
        textoDinamico.innerHTML += `<b>${tabuada}</b> x ${cont} = ${resultado} <br>`;
    }
    else if (tabuada === 0) {
        erroVazio.innerHTML = '<a href="teste.html">Clique aqui</a> e digite um número maior que zero.';
        console.log('erro')
    }
    else {
        erroZero.innerHTML = '<a href="teste.html">Clique aqui</a> e digite um número.';
        console.log('erro2')
    }
}
textoDinamico.style.color = 'darkblue'