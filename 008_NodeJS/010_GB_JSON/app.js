"use strict";

//Gaestebuchklasse einbinden
let GuestbookEntry = require("./src/GuestbookEntry");

//JSON einbinden
let fs = require("fs");

let express = require("express"); //templates einbinden npm install express
let bodyParser = require("body-parser"); //gesendete Variablen entgegennehmen npm install body-parser

//Daten lesen
fs.readFile("./cars.json", "utf-8", (err, data) =>{
    if(err) throw err;
    let dataParsed = JSON.parse(data);

    //Daten umwandeln in Liste von Eintraegen
    let entries = [];
    for(let entry of dataParsed){
        entries.push(new GuestbookEntry(entry.title, entry.content));
    }

    //Server starten
    let app = express();
    app.set("view engine", "ejs");
    app.set("views", "./views");

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static("./public"));

    app.get("/index", (req,res)=>{
        res.render("index", {
            entries : entries
        });
    });

    app.post("/guestbook/new", (req, res) => {
        //die beiden Eigenschaften title & content holen
        let title = req.body.title;
    let content = req.body.content;

    //Gaestebucheintrag erzeugen
    let newEntry = new GuestbookEntry(title, content);

    //Eintrag dem Array hinzufuegen
    entries.push(newEntry);

    //an Index-Seite weiterleiten
    res.redirect("/index");
    });

    app.listen(5000, () => {
        console.log("App wurde gestartet auf localhost:5000");
    })
});
