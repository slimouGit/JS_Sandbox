"use strict";

let http = require("http");

let server = http.createServer((request, response) => {
    console.log("wurde ausgef�hrt!");
    response.write("Hallo Welt");
    response.end();
});

server.listen(5000);