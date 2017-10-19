"use strict";
console.log("Gaestebuch");
let express = require("express"); //templates einbinden npm install express
let bodyParser = require("body-parser"); //gesendete Variablen entgegennehmen npm install body-parser
let GuestbookEntry = require("./src/GuestbookEntry");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));

let entries = [
    new GuestbookEntry("Titel1", "Inhalt1"),
    new GuestbookEntry("Titel2", "Inhalt2")
];

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