// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindrome(string) {

    for (var i = 0; i < string.length; i++)  {

        if (string.charAt(i) != string.charAt(string.length-1-i)) {

            return false;
        }
    }

    return true;

}

var word = prompt("Enter a word");

if (palindrome(word)) {

    document.write("Palindrome");
}

else {

    document.write("Not Palindrome");
}