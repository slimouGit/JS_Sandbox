"use strict";

let express = require("express");

let app = express();

app.get("/hallo.html", (req,res)=>{
    res.write("Hallo Welt");
    res.end();
});

app.listen(5000, () => {
    console.log("App wurde gestartet auf localhost:5000");
})