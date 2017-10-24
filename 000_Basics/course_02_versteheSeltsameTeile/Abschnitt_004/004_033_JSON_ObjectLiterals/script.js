var objectLiteral = {
    vorname: "Marie",
    kannProgrammieren: true
}
/*
{
"vorname": "Marie",
"kannProgrammieren": true
}
*/

//JSON-String ausgeben
console.log(JSON.stringify(objectLiteral));

//Objekt erstellen
var jsonValue = JSON.parse('{"vorname": "Marie", "kannProgrammieren": true }')

//Objekt ausgeben
console.log(jsonValue);