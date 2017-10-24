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
 Sie können einen oder zwei Parameter übergeben. Der erste Parameter gibt die
 gewünschte Stellenzahl an. Als Auffüllzeichen wird zunächst das Zeichen 0 verwendet.
 Falls es einen zweiten Parameter gibt, dann wird dessen Wert als Auffüllzeichen
 übernommen.
 Auf das Number-Objekt, für das die Methode aufgerufen wird, greifen Sie über this zu.
 Der Inhalt des Objekts, also die umzuwandelnde Zahl, wird in eine Zeichenkette
 umgewandelt.
 Solange die Länge dieser Zeichenkette kleiner als die gewünschte Stellenzahl ist, wird
 das Auffüllzeichen hinzugefügt. Die aufgefüllte Zeichenkette wird zurückgeliefert.
 */
