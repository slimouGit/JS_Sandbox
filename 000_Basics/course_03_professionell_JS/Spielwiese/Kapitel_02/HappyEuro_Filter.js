ausgebenThema("HappyEuro Filter");

var id = 0;

var positionen = [
        {
            namePosition: "Gehalt",
            betragPosition: 5768.45,
            artPosition: "Einnahme",
            idPosition: id++
        },
        {
            namePosition: "Miete",
            betragPosition: 800.00,
            artPosition: "Ausgabe",
            idPosition: id++
        },
        {
            namePosition: "Dispo",
            betragPosition: 500.00,
            artPosition: "Einnahme",
            idPosition: id++
        },
        {
            namePosition: "Strom",
            betragPosition: 55.00,
            artPosition: "Ausgabe",
            idPosition: id++
        },
        {
            namePosition: "Fahrkarte",
            betragPosition: 86.50,
            artPosition: "Ausgabe",
            idPosition: id++
        },
        {
            namePosition: "Unity-Media",
            betragPosition: 46.49,
            artPosition: "Ausgabe",
            idPosition: id++
        },
        {
            namePosition: "Gutschein",
            betragPosition: 20.00,
            artPosition: "Einnahme",
            idPosition: id++
        }
    ];
    
    //-----------------------------------------------------------------------------------
    
    //imperative Ausgabe
    console.log("IMPERATIVE FILTERUNG:");
    
    var ausgaben = [];
    var ausgabenGesamt = 0;
    
    for(var i = 0; i<positionen.length;i++){
        if(positionen[i].artPosition === "Ausgabe"){
            ausgaben.push(positionen[i].namePosition + ": " + positionen[i].betragPosition + " Euro");
            ausgabenGesamt += positionen[i].betragPosition;
        }
    };
    console.log("Ausgaben:");
    console.log(ausgaben);
    console.log("------------------------");
    console.log("Gesamt-Ausgaben:");
    console.log(ausgabenGesamt);
    console.log("------------------------");
    
    //-----------------------------------------------------------------------------------
    
    var einnahmen = [];
    var einnahmenGesamt = 0;
    
    for(var i = 0; i<positionen.length;i++){
        if(positionen[i].artPosition === "Einnahme"){
            einnahmen.push(positionen[i].namePosition + ": " + positionen[i].betragPosition + " Euro");
            einnahmenGesamt += positionen[i].betragPosition;
        }
    };
    
    console.log("Einnahmen:");
    console.log(einnahmen);
    console.log("------------------------");
    console.log("Gesamt-Einnahmen:");
    console.log(einnahmenGesamt);
    console.log("------------------------");
    
    //-----------------------------------------------------------------------------------
    
    ausgabenGesamt = parseFloat(ausgabenGesamt);
    einnahmenGesamt = parseFloat(einnahmenGesamt);
    
    var ergebnis = (einnahmenGesamt - ausgabenGesamt);
    
    console.log("Ergebnis:");
    console.log(ergebnis);
    console.log("------------------------");
    
    //-----------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------
    
    
    
    //funktionale Ausgabe
    console.log("FUNKTIONALE FILTERUNG:");
    
    console.log("------------------------");
    
    //das Array positionen wird gefiltert
    var ausgebenAusgaben = positionen.filter(function(ausgabe, index, positionen){
       return ausgabe.artPosition === "Ausgabe"; 
    });
    
    //console.log(ausgebenAusgaben);
    console.log("Ausgaben:");
    var ausgabenGesamt = 0;
    for(var i = 0; i<ausgebenAusgaben.length; i++){
        console.log(ausgebenAusgaben[i].namePosition + ": " + ausgebenAusgaben[i].betragPosition + " Euro" + " (id_"+ausgebenAusgaben[i].idPosition+")");
        //Gesamtausgaben berechnen
        ausgabenGesamt += ausgebenAusgaben[i].betragPosition;
    };
    console.log("------------------------");
    console.log("Gesamt Ausgaben:");
    console.log(ausgabenGesamt + " Euro");
    
    console.log("----------------------------");
    //-----------------------------------------------------------------------------------
    
    //das Array positionen wird gefiltert
    var ausgebenEinnahmen = positionen.filter(function(einnahme, index, positionen){
        return einnahme.artPosition === "Einnahme";
    });
    
    console.log("Einnahmen:");
    var einnahmenGesamt = 0;
    for(var i = 0; i<ausgebenEinnahmen.length; i++){
        console.log(ausgebenEinnahmen[i].namePosition + ": " + ausgebenEinnahmen[i].betragPosition + " Euro" + " (id_"+ausgebenEinnahmen[i].idPosition+")");
        //Gesamteinnahmen berechnen
        einnahmenGesamt += ausgebenEinnahmen[i].betragPosition;
    };
    console.log("------------------------");
    console.log("Gesamt Einnahmen:");
    console.log(einnahmenGesamt + " Euro");
    
    console.log("------------------------");
    
    console.log("Ergebnis:");
    
    console.log(einnahmenGesamt-ausgabenGesamt + " Euro");
    