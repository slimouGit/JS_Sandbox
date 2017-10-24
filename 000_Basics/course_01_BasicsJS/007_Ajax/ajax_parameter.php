<?php
header("Content-type: text/html; charset=ISO-8859-1");
    if($_GET["pnr"] == 6714) {
        if ($_GET["umfang"] == "alle") {
            echo "6714, Maier, Hans, 3500.00 Euro, geb. 15.03.1962";
        } else {
            echo "6714, Maier, Hans";
        }
    }
    else if($_GET["pnr"] == 81343) {
        if($_GET["umfang"] == "alle") {
            echo "81343, Schmitz, Peter, 3750.00 Euro, geb. 12.04.1958";
        }
        else {
            echo "81343, Schmitz, Peter";
        }
    }
    else if($_GET["pnr"] == 333) {
        if($_GET["umfang"] == "alle") {
            echo "333, Oussayfi, Salim, 5876.00 Euro, geb. 26.04.1980";
        }
        else {
            echo "333, Oussayfi, Salim";
        }
    }
/**
 * Nun zur Datei ajax_parameter.php: Nach dem Senden der Daten stehen hier die beiden
Elemente $_GET["pnr"] und $_GET["umfang"] mit ihren jeweiligen Werten zur
Verfügung. Innerhalb einer Verzweigung wird entschieden, welche Antwort zurückgesendet
wird.
 */
?>