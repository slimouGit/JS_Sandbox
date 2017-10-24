var arr = ["Salim", "Welde", "Gaston", "Peta"];


//nicht gut, weil man kann den Prototypen aendern
Array.prototype.myCustomFeature = "Was geht";

//mit der for in Schleife Array ausgeben
for(var prop in arr){
    console.log(prop + ": " + arr[prop]);
}

console.log("-------------------------------");

//mit klassische fro-Schleife ist besser
for(var i = 0; i<arr.length;i++){
    console.log(i + ": " + arr[i]);
}