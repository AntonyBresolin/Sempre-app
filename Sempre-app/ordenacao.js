var colunaBorda = 3;
var tamanhoColuna;
var matrizMae = [];

var btn = document.getElementById('create');

btn.onclick = () => {
    tamanhoColuna = document.getElementById('coluna').value;

    matrizMae = criarMatrizMae(tamanhoColuna);
    console.log(matrizMae);
    console.log("oi")
}

var btn2 = document.getElementById('add');

btn2.onclick = () => {
    adicionarSegmento(matrizMae);
    console.log(matrizMae);
}


// Matriz mãe, que vai guardar os valores de todas as matrizes em uma só
function criarMatrizMae(tamanhoColuna){
    return new Array(tamanhoColuna);
}


function adicionarSegmento(matrizMae) {
    const tamanhoLinha = 5
    let matriz = new Array(tamanhoColuna);
    for (let i = 0; i < tamanhoColuna; i++) {
        matriz[i] = new Array(tamanhoLinha);
    }

    for (let i = 0; i < tamanhoColuna; i++) {
        for (let j = 0; j < tamanhoLinha; j++) {
            if (i === colunaBorda) {
                matriz[i][j] = 9999;
            }
        }
    }

    for (let i = 0; i < tamanhoColuna; i++) {
        for (let j = 0; j < tamanhoLinha; j++) {
            if (matriz[i][j] === 9999) {
            } else {
                matriz[i][j] = Math.floor(Math.random() * 100);
            }
        }
    }

    return matrizMae.push(matriz);
}
