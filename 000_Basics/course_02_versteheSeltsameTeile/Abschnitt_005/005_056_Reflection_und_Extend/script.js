var person = {
    vorname: "Default",
    nachname: "Default",
    getFullName: function(){
        return this.vorname + " " + this.nachname;
    }
}

var max = {
    vorname: "Max",
    nachname: "Musterman"
}

//Prototyp setzen
//ABER SO NICHT MACHEN!!!
max.__proto__ = person;

for(var prop in max){
    //alle Properties, auch getFullName
    //console.log(prop);
    
    //nur die Properties von max
    if(max.hasOwnProperty(prop)){
        //nur die Properties
        //console.log(prop);
        
        //mit Wert der Properties
        console.log(prop + ": " + max[prop]);
    }
}

//weitere Objekte erzeugen mit anderen Properties als max
var julia = {
    
    adresse: "Musterstrasse 3",
    
    getFullNameFormal: function(){
        return this.nachname + ", " + this.vorname;
    }
}

var peter = {
    getFirstName: function(){
        return firstname;
    }
}

//Funktion aus underscore.js aufrufen
_.extend(max, julia, peter);//alle Properties aus 2+ Parametern werden an 1. Parameter gegeben

console.log(max);








