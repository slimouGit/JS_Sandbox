
function buildFunctions(){
    var arr = [];

    for(var i = 0;i<3;i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }

    return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

//---------------------------------------------

console.log("--------------------------");

//---------------------------------------------

function buildFunctions_2(){
    var arr = [];

    for(var i = 0;i<3;i++){
        arr.push(
            //mittels IIFE neuen execution context erzeugen
            (function(j) {
                return function() {
                    console.log(j);//j gibt es in diesem execution context nicht, es wird im outer execution enviroment gesucht
                    //j ist in function(j)
                    //mit diesem j wurden neue execution contexte erstellt ...}(i)
                }//ENDE return function
            }(i)//ENDE function
            )//ENDE inner function
        )//ENDE push
    }//ENDE for

    return arr;
}//ENDE buildFunctions_2


var fs_2 = buildFunctions_2();

fs_2[0]();
fs_2[1]();
fs_2[2]();