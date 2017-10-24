;(function(global, $){
    
    //'new' wrapper
    var Greetr = function(vorname, nachname, sprache){
        return new Greetr.init(vorname, nachname, sprache);
    }
    
    //Die unterstützten Sprachen. Für andere nicht sichtbar,
    //da wir uns in einer IIFE befinden
    var supportedLangs = ["en", "de"];
    
    var greetings = {
        en: "Hello",
        de: "Hallo"
    }
    
    var formalGreetings = {
        en: "Greetings",
        de: "Grüße"
    }
    
    var logMessages = {
        en: "Logged in",
        de: "Angemeldet"
    }
    
    //Im Prototype befinden sich die Methoden um Arbeitsspeicher zu sparen.
    Greetr.prototype = {
        fullName: function() {
            //this = aufrufendes Objekt
            return this.vorname + " " + this.nachname;
        },
        
        validate: function() {
            //Checkt ob die Sprache unterstützt wird
            //Referenziert das von außen nicht sichtbare "supportedLangs" innerhalb
            //des Closures
            if(supportedLangs.indexOf(this.sprache) === -1){
                throw "Ungültige Sprache";
            }
            //Chainable
            return this;
        },
        
        greeting: function() {
            return greetings[this.sprache] + " " + this.vorname + "!";
        },
        
        formalGreeting: function() {
            return formalGreetings[this.sprache] + ", " + this.fullName();
        },
        
        greet: function(formal){
            var msg;
            
            //Falls formal undefined oder null ist wird es zu "false" coerced
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            //IE hat nur eine Konsole, wenn die Konsole auch offen ist.
            if(console){
                console.log(msg);
            }
            
            //Chainable
            return this;
        },
        
        setLang: function(lang){
            this.sprache = lang;
            this.validate();
            //Chainable
            return this;
        },
        
        log: function(){
            //IE hat nur eine Konsole, wenn die Konsole auch offen ist.
            if(console){
                console.log(logMessages[this.sprache] + ": " + this.fullName());
            }
            //Chainable
            return this;
        },
        
        HTMLGreeting: function(selector, formal){
            if(!$){
                throw "Methode benötig jQuery!";
            }
            
            if(!selector){
                throw "Benötigt jQuery selector als 1. Parameter!";
            }
            
            var msg;
            
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            //Chainable
            return this;
        }
    };
    
    //Hier wird das Objekt erstellt. Erlaubt uns ein neues Objekt zu erstellen
    //ohne new zu benutzen.
    Greetr.init = function(vorname, nachname, sprache){
        var self = this;
        
        self.vorname  = vorname  || "DEFAULT";
        self.nachname = nachname || "DEFAULT";
        self.sprache  = sprache  || "en";
    }
    
    //Trick von jQuery, damit wir das "new" Keyword weglassen können.
    Greetr.init.prototype = Greetr.prototype;
    
    //Zum Global Object hinzufügen, damit anderer Code uns benutzen kann.
    global.Greetr = global.G$ = Greetr;
    
    
}(window, jQuery));