/**
 * Created by salim on 06.08.2016.
 */

//---------------------------------------------------------------------------------

//Pattern zum vergeben der Properties fuer die Sichtbarkeit
function changeVisibility(className, varName){
    var varName = document.getElementById(className);
    varName.classList.remove("hiddenArea");
    varName.classList.add("visibleArea", "heightArea");
};//ENDE changeVisibility

//---------------------------------------------------------------------------------