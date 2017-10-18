"use strict";
console.log("Gaestebuch");
let express = require("express");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));

app.get("/index", (req,res)=>{
    res.render("index", {
        title: "42"
    });
});

app.listen(5000, () => {
    console.log("App wurde gestartet auf localhost:5000");
})