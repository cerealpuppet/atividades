let num1 = 10.5657657665476546;
let num2 = 2.5;

//convertendo numero para string com toString()//
console.log(num1.toString()+num2);
//se eu quiser alterar de modo "permante" number para string com toString//
//---------> num1 = num1.toString();<-----------------//

//se caso eu queira ver a representação binaria do number com toString//
console.log(num1.toString(2));

//para numeros com cvarias casas decimais, usar toFixed()//
console.log(num1.toFixed(2));
//o 2 representa o quanto de casas decimais eu queira mostrar, no caso duas//

//se eu quiser saber se o numero é inteiro ou não, basta usar Number.isInterger(), ele vai retorna true ou false//
console.log(Number.isInteger(num1)); 

//para saber se é NaN, basta usar Number.isNaN()//
let temp = num1 * 'eae';
console.log(Number.isNaN(temp));
