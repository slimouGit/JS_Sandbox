/**
 * Created by salim on 19.07.2016.
 */

/**
 * Funktion ausgebenThema
 * gibt den Namen des behandelten Thema aus
 * ../lib/nameThema.js
 */
ausgebenThema("bind-Methode");

var button = {
    handler: null,
    //Funktion, die einen Callback-Handler erwartet
    onClick: function(handler){
        this.handler = handler;
    },
    click: function(){
        this.handler();
    }
};

var handler = {
    log: function(){
        console.log("Button geklickt.");
    },
    //Objektmethode, die weiter unten als Callback-Handler registriert wird
    handle: function(){
        this.log();
    }
};

//Registrieren des Callback-Handlers
//button.onClick(handler.handle);//geht nicht
button.onClick(handler.handle.bind(handler));

//Implizites Aktivieren des Callback-Handlers
button.click();