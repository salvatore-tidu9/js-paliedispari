// L'utente sceglie pari o dispari.

var evenOdd = prompt("Do you prefer an even or odd number ?");

console.log(evenOdd);

document.write(evenOdd + "<br>") ;


//Inserisce un numero da 1 a 5.

var usrNumber = parseInt(prompt("Enter a number from 1 to 5"));

console.log(usrNumber);

document.write("User Number: " + usrNumber + "<br>");


// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

function RandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

}

var computerNumber = RandomNumber(1,5);

console.log(computerNumber);

document.write("Computer Number: " + computerNumber + "<br>");


// Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)

function numberSum(usrNumber, computerNumber) {

    var result = usrNumber + computerNumber;

    if (result % 2 == 0) {

        document.write("The sum of the two numbers is even: ");
    }

    else if (result % 2 != 0) {

        document.write("The sum of the two numbers is odd: ");
    }

    return result;
}

var sum = numberSum(usrNumber, computerNumber);

console.log(sum);

document.write(sum + "<br>");


// Dichiariamo se l'utente ha vinto.


var usrNumber;

var sum;

if ((usrNumber % 2 == 0) && (sum % 2 == 0)) {

    document.write("The User won !");
}

else if ((usrNumber % 2 == 0) && (sum % 2 != 0)) {

    document.write("The User has lost !");
}

else if ((usrNumber % 2 != 0) && (sum % 2 != 0)) {

    document.write("The User won !");
}

else if ((usrNumber % 2 != 0) && (sum % 2 == 0)) {

    document.write("The User has lost !");
}


















































