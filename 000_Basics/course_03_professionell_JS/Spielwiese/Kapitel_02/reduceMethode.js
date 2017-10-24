/**
 * Created by salim on 08.08.2016.
 */

ausgebenThema("reduce()-Methode");

//--------------------------------------------------------------------------------

var interpreten =[
    {
        name: "Nick Cave",
        alben: [
            {
            titel: "Push the Sky Away"
        },
        {
            titel: "No more shall we part"
        }
    ]
    },
    {
        name: "Ben Harper",
        alben: [
            {
            titel: "Live from Mars"
            },
            {
                titel: "The Will to Live"
            }
        ]
    }
];

//--------------------------------------------------------------------------------

console.log("imperative Variante");

var albenAnzahl = 0;
for(var i = 0, l=interpreten.length; i<l; i++){
    albenAnzahl += interpreten[i].alben.length;
}

console.log(albenAnzahl);

//--------------------------------------------------------------------------------

console.log("funktionale Variante");

var albenAnzahl = interpreten.reduce(
    function(ergebnis, interpret, index, interpreten){
        return ergebnis + interpret.alben.length;
    },
    0 //Startpunkt
);

console.log(albenAnzahl);