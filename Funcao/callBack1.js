const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`);
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))

/*
const cores = ["Verde", "Amarelo", "Azul", "Branco"]

function imprimir(item, indice) {
    console.log(`${indice + 1}. ${item}`);
}

cores.forEach(imprimir)
imprimir(...cores)

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function tabuada(item) {
    console.log(item * 2);
}

numeros.forEach(tabuada)*/