// Import stylesheets
import './style.css';

// Write Javascript code!
let html = `<h1>Atividade 2</h1> Welington Fidelis de Sousa </br> </br>`;
let array = ['a', 'b', 'c'];

const resetArray = () => (array = ['a', 'b', 'c']);

html += `Array usado nos métodos abaixo => [${array.toString()}] </br></br>`;

html += `concat(novoArray) => <b>Resultado</b>: ${array.concat([
  'd',
  'e',
  'f',
])} => <b>Resumo do método</b>: Retorna um novo array contendo o anterior unido/concatenado com o novo array. </br></br>`;

html += `filter(funcaoBoolenaComoParametro) => <b>Resultado</b>: ${array.filter(
  (item) => item === 'b'
)} => <b>Resumo do método</b>: Retorna um ou mais itens dentro do array que são aceitos na função booleana (ex.: array[i] === "b"). </br></br>`;

html += `every(funcaoBoolenaComoParametro) => <b>Resultado</b>: ${array.every(
  (item) => typeof item === 'string'
)} => <b>Resumo do método</b>: Retorna true/false se TODOS os itens dentro do array forem aceitos na função booleana (ex.: typeof array[i] === "string"). </br></br>`;

html += `some(funcaoBoolenaComoParametro) => <b>Resultado</b>: ${array.some(
  (item) => item === 'c'
)} => <b>Resumo do método</b>: Retorna true/false se um item dentro do array for aceito na função booleana (ex.: array[i] === "c"). </br></br>`;

array.unshift('d');
html += `unshift(valor) => <b>Resultado</b>: [${array}] => <b>Resumo do método</b>: Inclui o item passado como parâmetro na posição inicial (0) do array. </br></br>`;

resetArray();
array.push('d');
html += `push(valor) => <b>Resultado</b>: [${array}] => <b>Resumo do método</b>: Inclui o item passado como parâmetro na posição final (array.lenght -1) do array. </br></br>`;

resetArray();
html += `join(valor) => <b>Resultado</b>: ${array.join(
  ' - '
)} => <b>Resumo do método</b>: Retorna uma string formada por cada item do array concatenado/unido com o parâmetro passado. </br></br>`;

html += `toString() => <b>Resultado</b>: ${array.toString()} => <b>Resumo do método</b>: Retorna uma string formada por cada item do array, separando os itens por ",". </br></br>`;

html += `indexOf(valor) => <b>Resultado</b>: ${array.indexOf(
  'b'
)} => <b>Resumo do método</b>: Retorna a posição (de 0 à array.lenght -1) do primeiro item que coincidir com o parâmetro passado. Se não encontrar nenhum item que coincida com o parâmetro, o retorno é -1. </br></br>`;

html += `lastIndexOf(valor) => <b>Resultado</b>: ${array.lastIndexOf(
  'b'
)} => <b>Resumo do método</b>: Retorna a posição (de 0 à array.lenght -1) do último item que coincidir com o parâmetro passado. Se não encontrar nenhum item que coincida com o parâmetro, o retorno é -1. </br></br>`;

array.shift();
html += `shift() => <b>Resultado</b>: [${array}] => <b>Resumo do método</b>: Retira o item da posição inicial (0) do array. </br></br>`;

resetArray();
array.pop();
html += `pop() => <b>Resultado</b>: [${array}] => <b>Resumo do método</b>: Retira o item da posição final (array.lenght -1) do array. </br></br>`;

resetArray();
array.splice(0, 1, 'd');
html += `splice(posicao, qntd, valor1, valor2, ...) => <b>Resultado</b>: [${array}] => <b>Resumo do método</b>: Retira os itens partindo da posição passada (parâmetro 1) até antes do número máximo (parâmetro 2). O parâmetro 3 é opcional e se passado (um ou mais parâmetros), este substituirá os itens retirados. </br></br>`;

resetArray();
html += `reduce(funcaoDoisParametros) => <b>Resultado</b>: [${array.reduce(
  (item, acc) => item + ' - ' + acc
)}] => <b>Resumo do método</b>: Pra cada item do array (primeiro parâmetro), uma operação dentro do método é executada e o retorno desta operação é armazenado (segundo parâmetro) e ao fim de todas as operações, é retornado o resultado (segundo parâmetro). </br></br>`;

html += `reduceRight(funcaoDoisParametros) => <b>Resultado</b>: [${array.reduceRight(
  (item, acc) => item + ' - ' + acc
)}] => <b>Resumo do método</b>: Começando do final do array e indo até o começo, pra cada item do array (primeiro parâmetro), uma operação dentro do método é executada e o retorno desta operação é armazenado (segundo parâmetro) e ao fim de todas as operações, é retornado o resultado (segundo parâmetro). </br></br>`;

html += `slice(posicaoInicial, posicaoFinal) => <b>Resultado</b>: [${array.slice(
  0,
  2
)}] => <b>Resumo do método</b>: Retorna um array formado a partir da posição inicial (primeiro parâmetro) e indo até a posição final (segu parâmetro). </br></br>`;

html += `sort() => <b>Resultado</b>: [${array.sort()}] => <b>Resumo do método</b>: Retorna um array ordenado de forma crescente. </br></br>`;

html += `map(funcaoUmParametro) => <b>Resultado</b>: [${array.map(
  (item) => (item += '.')
)}] => <b>Resumo do método</b>: Retorna um array com cada item alterado conforme implemetado dentro do método (ex.: array[i] += "."). </br></br>`;

array.forEach((item, index) => (array[index] = item + '-'));
html += `forEach(funcaoUmParametro) => <b>Resultado</b>: [${array}] => <b>Resumo do método</b>: Percorre o array dando acesso pra cada item e seu index, podendo por exemplo alterar cada posiçao do array (ex.: array[index] = item + "-"). </br></br>`;

const appDiv = document.getElementById('app');
appDiv.innerHTML = html;
