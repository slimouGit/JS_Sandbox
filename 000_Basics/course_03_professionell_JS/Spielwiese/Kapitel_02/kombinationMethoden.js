/**
 * Created by salim on 08.08.2016.
 */


ausgebenThema("Kombination-Methode");

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

function istNach2000(album){
    return album.erscheinungsjahr > 2000;
}
function hatAlbumNach2000(interptet){
    return interpreten.alben.filter(isNach2000).length > 0;
};
function alsInterpretenName(interpret){
    return interpret.name;
};

interpreten
    .filter(hatAlbumNach2000)
    .map(alsInterpretenName)
    .forEach(console.log);