(function(global, $){
    
    var Greetr = function(vorname, nachname, sprache){
        return new Greetr.init(vorname, nachname, sprache);
    }
    
    var supportedLangs = ["en", "de"];
    
    var greetings = {
        en: "Hello",
        de: "Hallo"
    }
    
    var formalGreetings = {
        en: "Greetings",
        de: "Gruesse"
    }
    
    var logMessages = {
        en: "Logged in",
        de: "Angemeldet"
    }
    
    Greetr.prototype = {
        fullName: function(){
            return this.vorname + " " + this.nachname;
        },
        validate: function(){
            if(supportedLangs.indexOf(this.sprache) === -1){
                throw "ungültige Sprache";
            }
            
            return this;
        },
        greeting: function(){
            return greetings[this.sprache] + " " + this.vorname + "!";
        },
        formalGreeting: function(){
            return formalGreetings[this.sprache] + " " + this.fullName() + "!";
        },
        greet: function(formal){
            var msg;
            
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            
            if(console){
                console.log(msg);
            }
            
            return this;
        },
        
        setLang: function(lang){
            this.sprache = lang;
            this.validate();
            return this;
        },
        
        log: function(){
            if(console){
                console.log(logMessages[this.sprache] + ": " + this.fullName());
            }
            return this;
        }
    };
    
    Greetr.init = function(vorname, nachname, sprache){
        var self = this;
        
        self.vorname = vorname || "Default";
        self.nachname = nachname || "Default";
        self.sprache = sprache || "en";
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));