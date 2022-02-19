var listadepecas = ["Amortecedor", "Motor", "Filtro de ar", "Disco de Freio", "Filtro de oleo", "Rolamento", "Cabeçote", "Bico injetor"] //vetor ou array

let peso = 120
if (peso < 100) {
    console.log ("a peça deve pesar no mínimo 100g")
}    else {
    console.log ("A peça tem o peso adequado")
}
// caixa suporta até 10

if (listadepecas.length < 10) {
    console.log ("Cadastro permitido para mais peças")
} else {
    console.log ("Espaço insuficiente para cadastro, lista cheia")
}
// Para cadastrar a peça a mesma deve possuir mais de 3 caracteres

let nomepeca = "Bico injetor"
if (nomepeca.length > 3) { 
    console.log ("nome da peça adequado para cadastro")
} else if (nomepeca.length == 0) {
    console.log ("Nome da peça não pode ser vazio")
} else {
    console.log ("o nome deve possuir mais de 3 caracteres, digite novamente")
}