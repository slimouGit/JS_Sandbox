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
 zugewiesen. Damit wird dateFormat() zu einer Methode. Als Parameter übergeben
 Sie eine Zeichenkette mit den gewünschten Formatangaben. Diese Zeichenkette wird
 in einer for-Schleife Zeichen für Zeichen durchgegangen, um die formatierte Zeitangabe
 zusammenzusetzen und zurückzuliefern.

 Als Vorbereitung wird ein Feld mit den ausgeschriebenen deutschen Wochentagen
 erzeugt. Die Methode getDay()des Date-Objekts liefert die Nummer des Wochentags
 zurück. Dabei entspricht der Wert 0 dem Sonntag, der Wert 1 entspricht dem Montag
 und so weiter bis zum Wert 6, der dem Samstag entspricht. Diese Werte werden als
 Index für das Feld genutzt.

 Auf das Date-Objekt, für das die Methode aufgerufen wird, greifen Sie über this zu.
 Innerhalb der for-Schleife wird jedes Zeichen mit Hilfe einer switch-Verzweigung
 untersucht. Die verschiedenen Formatzeichen führen dabei zu Aufrufen verschiedener
 Methoden des Date-Objekts: getDay(), getDate(), getMonth(), getFullYear(), get-
 Hours(), getMinutes(), getSeconds() und getMilliseconds(). Es sind einige
 Besonderheiten zu beachten:

  Die Methode getMonth() liefert für den Januar den Wert 0, für den Februar den
 Wert 1 und so weiter. Für eine Ausgabe in der üblichen Form müssen Sie daher
 noch den Wert 1 addieren.

  Die Methode getYear() liefert nur die beiden letzten Ziffern einer Jahreszahl, bei
 einigen Browsern sogar einen falschen Wert. Daher sollten Sie immer getFull-
 Year() nutzen, wie auch hier geschehen.

  Für einige Werte wird die Methode format() des Number-Objekts aufgerufen, zur
 Ausgabe einer führenden Null.

 Falls ein Zeichen keinem der Formatzeichen entspricht, dann wird es ohne weitere
 Umsetzung direkt zur formatierten Zeitangabe hinzugefügt. Dies trifft zum Beispiel
 für Doppelpunkte, Punkte oder Leerzeichen zu.
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
    month[2] = "März";
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
 * Die Methode dateAdd() bietet Ihnen die Möglichkeit, einen Zeitwert zu einer vorhandenen
 Zeitangabe zu addieren oder davon zu subtrahieren.
 */

/**
 * Der Eigenschaft dateAdd des Objekts Date.prototype wird eine anonyme Methode
 zugewiesen. Damit wird dateAdd() zu einer Methode. Als Parameter werden sechs
 Teilwerte eines Zeitwerts übergeben. Auf das Date-Objekt, für das die Methode aufgerufen
 wird, greifen Sie über this zu. Es wird ein zweites Date-Objekt (zeit) erzeugt,
 das am Ende als Ergebnis der Berechnung zurückgeliefert wird.
 Das zweite Date-Objekt wird zunächst mit der aktuellen Systemzeit vorbelegt.
 Anschließend werden insgesamt sechs der vordefinierten set-Methoden aufgerufen,
 um die einzelnen Teilwerte für das zweite Objekt zu berechnen. Zur Berechnung
 jedes Teilwerts wird zum zugehörigen Teilwert des aktuellen Objekts der passende
 Parameter addiert. Falls die Teilwerte zu groß oder zu klein sind, wird passend umgerechnet.
 Dies träfe zum Beispiel für eine Angabe wie –10 Minuten oder +50 Tage zu.
 */

