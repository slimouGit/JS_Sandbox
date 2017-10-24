"use strict";
console.log("Gaestebuch");
let express = require("express");
let GuestbookEntry = require("./src/GuestbookEntry");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
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
    res.write("Erfolgreich");
    res.end();
});

app.listen(5000, () => {
    console.log("App wurde gestartet auf localhost:5000");
})