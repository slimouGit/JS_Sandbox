/**
 * Created by salim on 25.02.2016.
 */

//--------------------------------------------------------------

/**
 * leeres Array a  wird erzeugt
 * @type {Array}
 */
var a = new Array();

//--------------------------------------------------------------

/**
 * function ergaenzeArray
 * nimmt Wert t entgegen und fuegt ihn an das Array a
 * @param t
 * @param a
 */
function ergaenzeArray(t,a){
    var temp = parseFloat(t);
    a.push(temp);
}

//--------------------------------------------------------------

/**
 * function rechneSumme
 * summiert alle Werte aus Array a und gibt summe zurueck
 * @param a
 * @returns {number}
 */
function rechneSumme(a){
    var sum = 0;
    for (var i = 0; i < a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}

//--------------------------------------------------------------

function cleanArray(a){
    a = [];
}