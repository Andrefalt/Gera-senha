//Variables/Variáveis.
var let  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numU = Math.floor(Math.random() * 9) + 1 ;
var numD = Math.floor(Math.random() * 99) + 10 ;
var numC = Math.floor(Math.random() * 999) + 100 ;
var numM = Math.floor(Math.random() * 9999) + 1000 ;
var numMl = Math.floor(Math.random() * 99999) + 10000 ;
var numMll = Math.floor(Math.random() * 999999) + 100000 ;
var letf = Math.floor(Math.random() * let.length);
var letf1 = Math.floor(Math.random() * let.length);
var letf2 = Math.floor(Math.random() * let.length);
var letf3 = Math.floor(Math.random() * let.length);
var letf4 = Math.floor(Math.random() * let.length);
var letf5 = Math.floor(Math.random() * let.length);
var letf6 = Math.floor(Math.random() * let.length);
var letf7 = Math.floor(Math.random() * let.length);
var letr = let[letf];
var letr1 = let[letf1];
var letr2 = let[letf2];
var letr3 = let[letf3];
var letr4 = let[letf4];
var letr5 = let[letf5];
var letr6 = let[letf6];
var letr7 = let[letf7];
var dl1 = letr1 + letr2 ;
var dl2 = letr3 + letr4 ;
var dl3 = letr5 + letr1 ;
//Adjust the number of characters of the password by putting the variables above into the pass variable.
//Ajuste o número de caracteres da senha colocando as variáveis acima na variável pass.
var pass = letr + numU + letr1 + dl2 + numD + letr2 + numC  + dl3 + numM ;

//Shuffle/Embaralhar
pass = pass.split('').sort(() => Math.floor(Math.random() * 100) - 50).join('');

//Program/Programa.

console.log("Gera-senha 1.0");
console.log("Criado por Andrefalt");
console.log("Senha: " + pass);
console.log("Programa criado em 13/12/2020");