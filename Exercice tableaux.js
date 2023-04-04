//1
let numbers = [1,2,3,4,5,6,7,8,9,10]
//2
let jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
//3
let numbers2 = [2,4,6,8,10]
let sum = 0;
//4
let fruits = ["Pomme","Poire","Banane","Ananas","Grenade"]
//5
let notes = [12,14,16,19,8]
//6
let oiseaux = ["Loriot","Aigle","Pigeon"]
//7
let paysliste = ["France","Angleterre","Allemagne"]
//8
let mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
//9
const listenombrerand = Array(10)
    .fill()
    .map(() => 50 * Math.random());function fonction1(numbers){
}
//10
let strings = ["Phrase numéro 1","L'ananas n'a pas sa place sur la pizza","Supprimez Yuumi du jeu"]

function fonction2(jours){
    return jours[0];
}

function fonction3 (numbers2){
    for (let i = 0; i < numbers2.length; i += 1) {
        sum += numbers2[i];
    }
    return sum;
}

function fonction4 (fruits){
    fruits.push("Orange");
    return fruits
}

function fonction5 (notes){
        var sum = 0;
        notes.forEach(function (item, idx) {
            sum += item;
        });
        // Returning the average of the numbers
        return sum / notes.length;
    }

    function fonction6(oiseaux){
    oiseaux.find(()=> 'Aigle')
    }

    function fonction7(paysliste){
    pays = paysliste.sort();
    return pays
    }

    function fonction8(mois){
    return mois[2];
    }

    function fonction9(listenombrerand){
    valmax = Math.max(...listenombrerand);
    valmin = Math.min(...listenombrerand);
    return valmax+" et "+valmin;
    }

    function fonction10(strings){
        for (let i = 0; i < strings.length; i += 1) {
            numeroIndex = strings.indexOf(Math.max(strings[i].length));
        }
        return strings[numeroIndex];
    }

console.log(fonction1(numbers));
console.log(fonction2(jours));
console.log(fonction3(numbers2));
console.log(fonction4(fruits));
console.log(fonction5(notes));
//console.log(fonction6(oiseaux));
console.log(fonction7(paysliste));
console.log(fonction8(mois));
console.log(fonction9(listenombrerand));
console.log(fonction10(strings));
