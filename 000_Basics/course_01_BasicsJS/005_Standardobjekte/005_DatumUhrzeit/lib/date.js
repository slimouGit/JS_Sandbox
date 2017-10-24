/**
 * Created by salim on 28.02.2016.
 */
Date.prototype.dateFormat = function(formatzeichen)
{
    var wtag = new Array("Sonntag", "Montag", "Dienstag",
        "Mittwoch", "Donnerstag", "Freitag", "Samstag");
    var aus = "";
    for(var i=0; i<formatzeichen.length; i++)
        switch(formatzeichen.charAt(i))
        {
            case "w": aus += wtag[this.getDay()]; break;
            case "d": aus += this.getDate().format(2); break;
            case "M": aus += (this.getMonth()+1).format(2); break;
            case "S": aus += getMonth(); break;
            case "y": aus += this.getFullYear(); break;
            case "h": aus += this.getHours().format(2); break;
            case "m": aus += this.getMinutes().format(2); break;
            case "s": aus += this.getSeconds().format(2); break;
            case "i": aus += this.getMilliseconds(); break;
            default: aus += formatzeichen.charAt(i);
        }
    return aus;
}

/**
 * Der Eigenschaft dateFormat des Objekts Date.prototype wird eine anonyme Methode
 zugewiesen. Damit wird dateFormat() zu einer Methode. Als Parameter �bergeben
 Sie eine Zeichenkette mit den gew�nschten Formatangaben. Diese Zeichenkette wird
 in einer for-Schleife Zeichen f�r Zeichen durchgegangen, um die formatierte Zeitangabe
 zusammenzusetzen und zur�ckzuliefern.

 Als Vorbereitung wird ein Feld mit den ausgeschriebenen deutschen Wochentagen
 erzeugt. Die Methode getDay()des Date-Objekts liefert die Nummer des Wochentags
 zur�ck. Dabei entspricht der Wert 0 dem Sonntag, der Wert 1 entspricht dem Montag
 und so weiter bis zum Wert 6, der dem Samstag entspricht. Diese Werte werden als
 Index f�r das Feld genutzt.

 Auf das Date-Objekt, f�r das die Methode aufgerufen wird, greifen Sie �ber this zu.
 Innerhalb der for-Schleife wird jedes Zeichen mit Hilfe einer switch-Verzweigung
 untersucht. Die verschiedenen Formatzeichen f�hren dabei zu Aufrufen verschiedener
 Methoden des Date-Objekts: getDay(), getDate(), getMonth(), getFullYear(), get-
 Hours(), getMinutes(), getSeconds() und getMilliseconds(). Es sind einige
 Besonderheiten zu beachten:

  Die Methode getMonth() liefert f�r den Januar den Wert 0, f�r den Februar den
 Wert 1 und so weiter. F�r eine Ausgabe in der �blichen Form m�ssen Sie daher
 noch den Wert 1 addieren.

  Die Methode getYear() liefert nur die beiden letzten Ziffern einer Jahreszahl, bei
 einigen Browsern sogar einen falschen Wert. Daher sollten Sie immer getFull-
 Year() nutzen, wie auch hier geschehen.

  F�r einige Werte wird die Methode format() des Number-Objekts aufgerufen, zur
 Ausgabe einer f�hrenden Null.

 Falls ein Zeichen keinem der Formatzeichen entspricht, dann wird es ohne weitere
 Umsetzung direkt zur formatierten Zeitangabe hinzugef�gt. Dies trifft zum Beispiel
 f�r Doppelpunkte, Punkte oder Leerzeichen zu.
 */

//--------------------------------------------------------------------------------------------------------------------

/**
 * Monatsname wird angezeigt
 * @type {Date}
 */
getMonth = function()  {
var d = new Date();
//function getMonth() {
    month = new Array();
    month[0] = "Januar";
    month[1] = "Februar";
    month[2] = "M�rz";
    month[3] = "April";
    month[4] = "Mai";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "August";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "Dezember";

    n = month[d.getMonth()];

    return n;
}

//--------------------------------------------------------------------------------------------------------------------

/**
 *
 * @param jahr
 * @param monat
 * @param tag
 * @param stunde
 * @param minute
 * @param sekunde
 * @returns {Date}
 */
Date.prototype.dateAdd =
    function(jahr, monat, tag, stunde, minute, sekunde)
    {
        var zeit = new Date();
        zeit.setFullYear(this.getFullYear() + jahr);
        zeit.setMonth(this.getMonth() + monat);
        zeit.setDate(this.getDate() + tag);
        zeit.setHours(this.getHours() + stunde);
        zeit.setMinutes(this.getMinutes() + minute);
        zeit.setSeconds(this.getSeconds() + sekunde);
        return zeit;
    }

/**
 * Die Methode dateAdd() bietet Ihnen die M�glichkeit, einen Zeitwert zu einer vorhandenen
 Zeitangabe zu addieren oder davon zu subtrahieren.
 */

/**
 * Der Eigenschaft dateAdd des Objekts Date.prototype wird eine anonyme Methode
 zugewiesen. Damit wird dateAdd() zu einer Methode. Als Parameter werden sechs
 Teilwerte eines Zeitwerts �bergeben. Auf das Date-Objekt, f�r das die Methode aufgerufen
 wird, greifen Sie �ber this zu. Es wird ein zweites Date-Objekt (zeit) erzeugt,
 das am Ende als Ergebnis der Berechnung zur�ckgeliefert wird.
 Das zweite Date-Objekt wird zun�chst mit der aktuellen Systemzeit vorbelegt.
 Anschlie�end werden insgesamt sechs der vordefinierten set-Methoden aufgerufen,
 um die einzelnen Teilwerte f�r das zweite Objekt zu berechnen. Zur Berechnung
 jedes Teilwerts wird zum zugeh�rigen Teilwert des aktuellen Objekts der passende
 Parameter addiert. Falls die Teilwerte zu gro� oder zu klein sind, wird passend umgerechnet.
 Dies tr�fe zum Beispiel f�r eine Angabe wie �10 Minuten oder +50 Tage zu.
 */

