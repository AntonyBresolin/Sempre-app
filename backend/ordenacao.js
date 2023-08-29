let colunaBorda;
let tamanhoColuna;
window.onload = function () {
    tamanhoColuna = document.getElementById('coluna').value;;

    colunaBorda = 3;
}

function criarMatrizMae(){
    return new Array(tamanhoColuna);
}


// Matriz mãe, que vai guardar os valores de todas as matrizes em uma só
const matrizMae = criarMatrizMae();
console.log(matrizMae);

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
