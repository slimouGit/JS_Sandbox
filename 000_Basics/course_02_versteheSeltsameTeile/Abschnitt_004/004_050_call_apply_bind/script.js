var person = {
    vorname: "Salim",
    nachname: "Oussayfi",
    getFullName: function(){
        var fullName = this.vorname + " " + this.nachname;
        return fullName;
    }
};

//----------------------------------------------------------------

//bind

var logName = function(lang1, lang2){
    console.log("Logged 1: " + this.getFullName());

};

var logPersonName = logName.bind(person);
logPersonName();

//----------------------------------------------------------------

var logName = function(lang1, lang2){
    console.log("Logged 2: " + this.getFullName());
}.bind(person);

logName();

//----------------------------------------------------------------

var logName_2 = function(lang1,lang2){
    console.log("Logged 3: " + this.getFullName());

    console.log("Argumente: " + lang1 + " " + lang2);
    console.log("-------------------------");
};

var logPersonName_2 = logName_2.bind(person);
logPersonName_2("de", "en");

//--------------------------------------------------------------

//call

var logName_4 = function(lang1,lang2){
    console.log("Logged 4: " + this.getFullName());

    console.log("Argumente: " + lang1 + " " + lang2);
    console.log("-------------------------");
};

logName_4.call(person, "en", "de");

//------------------------------------------------------------

//apply

var logName_5 = function(lang1,lang2){
    console.log("Logged 5: " + this.getFullName());

    console.log("Argumente: " + lang1 + " " + lang2);
    console.log("-------------------------");
};

logName_5.apply(person, ["de", "en"]); //zusaetzliche Argumente in einem Array mitgeben

//mit IIFE
(function(lang1,lang2){
    console.log("Logged 6: " + this.getFullName());

    console.log("Argumente: " + lang1 + " " + lang2);
    console.log("-------------------------");
}).apply(person, ["de", "en"]);


