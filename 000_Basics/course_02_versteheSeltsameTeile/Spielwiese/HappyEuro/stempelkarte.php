<!DOCTYPE html>
<html>
    <head>
        <title>Constuctor</title>
        <meta charset="UTF-8">
        <script>
            
            
            var Wochentage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
            var Monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
            
            var d = new Date();
            
            var wochentag = d.getDay();
            wochentag = Wochentage[wochentag];
            var monatstag = d.getDate();
            var monat = d.getMonth();
            monat = Monate[monat];
            var jahr = d.getFullYear();
            var stunden = d.getHours();
            if(stunden<10){stunden = "0".concat(stunden);}
            var minuten = d.getMinutes();
            if(minuten<10){minuten = "0".concat(minuten);}
            var sekunden = d.getSeconds();
            if(sekunden<10){sekunden = "0".concat(sekunden);}
            
            var volleZeitangabe = wochentag + ", " + monatstag + ". " + monat + " " + jahr + ", " + stunden + ":" + minuten + ":" + sekunden + " Uhr";
            var checkedIn = volleZeitangabe.toString();
            
            
            
            function gebeDatumAus(){
                console.log(volleZeitangabe);
            }
            
            gebeDatumAus();
            
            function Arbeitsbeginn(vorname, nachname, volleZeitangabe){
                this.vorname = vorname;
                this.nachname = nachname;
                this.checkedIn = checkedIn;
            };
            
            Arbeitsbeginn.prototype.getData = function(){
                return this.vorname + " " + this.nachname + "\n" + this.checkedIn;
            }
            
            var arbeiter_001 = new Arbeitsbeginn("Salim", "Oussayfi", checkedIn);
            console.log(arbeiter_001.getData());
            
            
            
        </script>
        
        
        
    </head>
    <body>
        
    </body>
</html>
