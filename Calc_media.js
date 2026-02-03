//AddNotas adiciona uma nota ao historico de notas
function AddNotas (valor, orden) {
    let conjuntoN = document.querySelector(".ConjNotas");

    let notas = document.createElement("p");
    notas.innerText = `a nota ${orden} foi: ${valor}`;
    conjuntoN.append(notas);

    return valor;
}

//Calcula a media das notas e escreve o resultado no HTML
function CalcMedia(array) {
    let resultado = 0;
    let soma = 0;

    for(let i=0; i < array.length; i++ ) {
        soma += array[i];
    }

    resultado = (soma / array.length).toFixed(2);

    let exibirResultado = document.querySelector(".Resultado");
    exibirResultado.innerText = resultado;
}

let arrayNotas = []; //Nossa lista de notas;
let quant = 1; //identifica qual é a posição da nota, identifica que ela foi a xº nota a ser adicionada

//Nosso butão de adicionar nota ao conjunto de notas e fazer suas devidas verificações para o input de novas notas
let buttonAdd = document.querySelector(".Adicionar")
buttonAdd.addEventListener("click", ()=> {
    let inputNotas = document.querySelector(".NovaNotas");
    let inputDados = inputNotas.value.trim();
    inputDados = inputDados.replace(",", ".")
    let valorNotas = Number(inputDados);

    if (inputDados == "") {
        alert("Por favor, insira uma nota");
    } else if (Number.isNaN(valorNotas)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.")
    } else if (valorNotas < 0 || valorNotas > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
    } else {
        arrayNotas.push(AddNotas(valorNotas, quant));
        quant += 1;//incrementa a cada nova nota colocada dentro do conjunto de notas
    }
    
})

//Faz uma verificação se tem pelo menos uma nota no conjunto de notas, se sim, então executa a função para calcular a media, e também torna visivel o resultado da media
let buttonCalc = document.querySelector(".CalcMedia")
buttonCalc.addEventListener("click", ()=> {
    if (arrayNotas.length == 0) {
        alert("ensira alguma nota para que possamos calcular sua media")
    } else {
        CalcMedia(arrayNotas);
        let media = document.querySelector(".ContMedia");
        media.classList.replace("ContMedia", "ContMediaOn");
    }
    
})