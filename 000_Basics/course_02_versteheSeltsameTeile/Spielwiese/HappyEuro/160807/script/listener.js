/**
 * Created by salim on 06.08.2016.
 */

window.addEventListener("load", init);

//---------------------------------------------------------------------------------

//die EventListener werden registriert
function init(){
    document.getElementById("buttonEingabe").addEventListener("click", leseEingabe);
    document.getElementById("buttonReload").addEventListener("click", reload);
};//ENDE init