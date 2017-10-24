/**
 * Created by salim on 28.02.2016.
 */
Number.prototype.format = function(stellenzahl, zeichen)
{
    if(!zeichen)
        zeichen = "0";
    var formatiert = "" + this;
    while(formatiert.length < stellenzahl)
        formatiert = zeichen + formatiert;
    return formatiert;
}

/**
 * Der Eigenschaft format des Objekts Number.prototype wird eine anonyme Methode
 zugewiesen. Damit wird format() zu einer Methode.
 Sie k�nnen einen oder zwei Parameter �bergeben. Der erste Parameter gibt die
 gew�nschte Stellenzahl an. Als Auff�llzeichen wird zun�chst das Zeichen 0 verwendet.
 Falls es einen zweiten Parameter gibt, dann wird dessen Wert als Auff�llzeichen
 �bernommen.
 Auf das Number-Objekt, f�r das die Methode aufgerufen wird, greifen Sie �ber this zu.
 Der Inhalt des Objekts, also die umzuwandelnde Zahl, wird in eine Zeichenkette
 umgewandelt.
 Solange die L�nge dieser Zeichenkette kleiner als die gew�nschte Stellenzahl ist, wird
 das Auff�llzeichen hinzugef�gt. Die aufgef�llte Zeichenkette wird zur�ckgeliefert.
 */
