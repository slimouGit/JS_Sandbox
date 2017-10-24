//Polyfill, falls Browser nicht "Object.create" unterstuetzt
if(!Object.create){
    Object.create = function(original){
        if(arguments.length > 1){
            throw new Error("Object.create akteptiert nur einen Parameter");
        }
        
        function F() {};//Function Constructor erschaffen, der nichts tut
        F.prototype = original;//Prototyp auf das Original setzen
        return new F();//neues Objekt erschaffen mit dem Prototypen
    }
}

var person = {
    vorname: "Default",
    nachname: "Default",
    
    greet: function(){
        return "Hi " + this.vorname;
    }
}

//Obejkt auf Basis des ersten Objekts erstellen
var max = Object.create(person);

max.vorname = "Max";
max.nachname = "Mustermann";

console.log(max);

console.log(max.greet());