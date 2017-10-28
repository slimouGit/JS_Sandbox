var people = [
        {
            vorname: "Max",
            nachname: "Mustermann",
            adressen: [
                "Bahnhofsstrasse 1",
                "Lange Strasse 2"
                ]
        },
        {
            vorname: "Julia",
            nachname: "Schmidt",
            adressen: [
                "Milchweg 18",
                "Lange Strasse 3"
                ],
            greet: function(){
                return "Hallo";
            } 
        }
    ];
    
    console.log(people);

console.log(people[0].vorname)
console.log(people[0].adressen[0])

console.log(people[1].greet())
    