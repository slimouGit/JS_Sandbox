//Aufruf der Handler mit Browser-Schrankefunction meinHandler(id, ereignis, funktion){    if(window.addEventListener){        document.getElementById(id).addEventListener(ereignis, funktion, false);    }    else if(window.attachEvent) {        document.getElementById(id).attachEvent("on" + ereignis, funktion);    }};//ENDE meinHandler//-----------------------------------------------------------------------------------//Pattern zum vergeben der Properties fuer die Sichtbarkeitfunction changeVisibility(className, varName){    var varName = document.getElementById(className);    varName.classList.remove("hiddenArea", "noneDisplayed");    varName.classList.add("visibleArea", "heightArea");};//ENDE changeVisibility//---------------------------------------------------------------------------------//Pattern zum vergeben der Properties fuer die Sichtbarkeitfunction hideArea(className, varName){    var varName = document.getElementById(className);    varName.classList.remove("visibleArea", "heightArea");    varName.classList.add("hiddenArea", "noneDisplayed");};//ENDE hideArea//---------------------------------------------------------------------------------function changeClass(idName, varName){    var varName = document.getElementById(idName);    varName.classList.remove("ganzeBreite");    varName.classList.add("halbeBreite");}//---------------------------------------------------------------------------------function changeClassToFullSize(idName, varName){    var varName = document.getElementById(idName);    varName.classList.remove("halbeBreite");    varName.classList.add("ganzeBreite");}