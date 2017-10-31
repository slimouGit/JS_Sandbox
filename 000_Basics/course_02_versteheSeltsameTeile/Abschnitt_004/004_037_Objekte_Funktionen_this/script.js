console.log(this);

//function statement
function a(){
    this.neueVariable = "Hallo";
    console.log(this);
    //console.log(this.neueVariable);
}

//function expression
var b = function(){
    console.log(this);
}

a();

b();

console.log(neueVariable);

var c = {
    name: "Das C-Objekt",
    log: function(){
        
        /**
         * this greift innerhalb dieser Funktion auf das c zu
         * da es eine weitere Funktion innerhalb dieser Funktion gibt
         * und das this dort auf das globale Objekt zugreift
         * umgeht man das, indem man die Variable self mit this deklariert
         */
        var self = this;
        
        self.name = "Updated C-Objekt";
        //console.log(this);   
        
        var setName = function(newName){
            self.name = newName;
        }
        
        setName("schon wieder geupdated von C-Objekt");
        
        console.log(self); 
    }
}

c.log();