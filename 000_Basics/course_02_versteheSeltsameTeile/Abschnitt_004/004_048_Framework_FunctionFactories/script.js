function makeGreeting(language){

    return function(vorname, nachname){


        if(language === "en"){
            console.log("Hello " + vorname + " " + nachname);
        }

        if(language === "de"){
            console.log("Hallo " + vorname + " " + nachname);
        }

        /*
        if(language === "en"){
            return function(vorname, nachname){
                console.log("Hello " + vorname + " " + nachname);
            }
        }

        if(language === "de"){
            return function(vorname, nachname){
                console.log("Hallo " + vorname + " " + nachname);
            }
        }
        */
    }
}

var greetEnglish = makeGreeting("en");
var greetGerman  = makeGreeting("de");

greetEnglish("Daxter", "Torends");
greetGerman("Franz", "Schmidt");