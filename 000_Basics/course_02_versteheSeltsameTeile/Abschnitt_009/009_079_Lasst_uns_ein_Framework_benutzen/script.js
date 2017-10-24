//Bekommt ein neues Objekt (Greetr erlaubt uns das new keyword wegzulassen)
var g = G$("Max", "Mustermann");
//Chainable Methods
g.greet().greet(true).setLang("de").greet(true).log().setLang("en").log();

// Loginbutton Funktionalität
$("#login").click(function() {
    //Erstellt ein neues Greetr Objekt. Wir tun so, als wüssten wir dessen Namen
    var loginGrtr = G$("Salim", "Oussayfi");
    
    $("#logindiv").hide();
    
    //Setzt den HTML Text der Überschrifft in der gewählten Sprache und logt den Login
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});