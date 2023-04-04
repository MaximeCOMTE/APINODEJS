//Exercice Functions :
//1
var1=5;
var2=10;
//2,7
const numbers = [1,2,3];
//3
String1 = "APINodeJS"
String2 = "TypeScript"
//4
let strings = [String1,String2];
//5
var numberToWords = require('number-to-words');
//8
String3 = "bonjour je suis Maxime";
const voyellesMaj = String3.replace(/[aeiouy]/gi,function (match) {
    return match.toLocaleUpperCase();
});
//9
const comptage = String3.replace(/[^aeiouy]/gi, "").length;
//10
const consonneMaj = String3.replace(/[bcdfghjklmnpqrstvwxs]/gi, function (match) {
    return match.toLocaleUpperCase();
});




    function fonction1 (var1,var2){
    return var1+var2;
}
function fonction2 (numbers){
    return Math.max(...numbers);
}

function fonction3 (String1){
    return String1.replace(/[aeiou]/gi,'');
}

function fonction4 (strings){
    return strings.sort();
}

function fonction5(var1){
//Besoin de la librairie numbers to word : [npm install number-to-words]
   return  numberToWords.toWords(var1);
}

function fonction7(...numbers){
    numbers.sort();
    numbers.reverse();
    return numbers;
}

function fonction8(String3){
    return voyellesMaj;
}

function fonction9(String3){
        return comptage;
}

function fonction10(String3){
        return consonneMaj
}



console.log(fonction1(var1,var2));
console.log(fonction2(numbers));
console.log(fonction3(String1));
console.log(fonction4(strings));
console.log(fonction5(var1));
console.log(fonction7(numbers));
console.log(fonction8(String3));
console.log(fonction9(String3));
console.log(fonction10(String3));


