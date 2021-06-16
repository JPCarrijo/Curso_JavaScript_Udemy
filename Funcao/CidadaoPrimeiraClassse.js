//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function () { }

//Armazenar em um Array
const array = [function(a,b) {return a + b}]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

//Uma função pode retornar/conter uma função 
function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,4)(5)
const maisSeis = soma(2,4)
maisSeis(5)