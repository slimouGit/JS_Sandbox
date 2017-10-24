/**
 * Created by salim on 28.07.2016.
 */

ausgebenThema("filter()-Methode");

//--------------------------------------------------------------------------------

//Array mit verschiedenen Objekten
var alben = [
    {
        titel: "Push the sky Away",
        interpret: "Nick Cave",
        erscheinungsjahr: 2013
    },
    {
        titel: "no more shall we part",
        interpret: "Nick Cave",
        erscheinungsjahr: 2001
    },
    {
        titel: "Live on Mars",
        interpret: "Ben Harper",
        erscheinungsjahr: 2003
    },
    {
        titel: "The will to Live",
        interpret: "Ben Harper",
        erscheinungsjahr: 1997
    }
];

//--------------------------------------------------------------------------------

//imperative Filterung
var vor2000 = [];
for(var i= 0,l=alben.length;i<l;i++){
    if(alben[i].erscheinungsjahr < 2000){
        vor2000.push(alben[i].titel + alben[i].interpret + alben[i].erscheinungsjahr );
    }
}

console.log(vor2000);

//--------------------------------------------------------------------------------

//funktionale Schreibweise zum Filtern
var vor2000_2 = alben.filter(function(album, index, alben){
    return album.erscheinungsjahr < 2000;
});



alben.push(zusatz);

console.log(vor2000_2);