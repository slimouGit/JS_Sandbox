"use strict";

let http = require("http");

let server = http.createServer((request, response) => {
    let url = request.url;
    if(url == "/mimi.html"){
        response.write("Hallo Mimi");
        response.end();
    }else{
        console.log("wurde ausgefuehrt!");
        response.write("Hallo Welt " + url);
        response.end();
    }
});

server.listen(5000);