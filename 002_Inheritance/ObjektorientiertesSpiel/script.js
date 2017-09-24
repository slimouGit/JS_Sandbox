"use strict";

window.addEventListener('DOMContentLoaded', init);

let inputField = document.getElementById("gamer");

function init(){
    inputField.addEventListener("change", showButton);
    inputField.addEventListener("keyup", showButton);
};

function showButton(){
    if(!(inputField.value)==""){
        document.getElementById("startButton").classList.remove("invisibleButton");
    }else{
        document.getElementById("startButton").classList.add("invisibleButton"); 
    }
}

//--------------------------------------------------------------------------------

class Renderer {

    constructor(element){
        console.log("Constructor Renderer ");
        this.element = element;
        this.setup();
    }

    setup(){
        console.log("Game setup()");
        let box = document.createElement("img");
        box.style.position = "absolute";
        box.style.top = "0px";
        box.style.left = "50px";
        box.style.width = "50px";
        box.style.height = "50px";
        box.setAttribute("id", "box"); 
        box.setAttribute("src", "Tweety.png"); 
        this.element.appendChild(box);
        this.box = box;
    }

    render(position){
        console.log("renderer(position)");
        let topPosition = 0;
        this.box.style.top = position+"px";
    }
}

//--------------------------------------------------------------------------------

class Box {
    constructor(){
        console.log("Constructor Box");
        this.position = 0;
        this.speed = 0;
    }

    runLoop(){
        //console.log("runLoop()");
        this.speed++;
        this.position+=this.speed;
    }

    moveUp(){
        console.log("moveUp()");
        this.speed = -20;
    }
}

//--------------------------------------------------------------------------------

class Greeting {
    congrat(name) {
        alert("Glückwunsch!!! " + name);
    }
}

//--------------------------------------------------------------------------------

class Highscore {
    constructor(){
        console.log("Constructor Highscore");
        this.greeting = new Greeting();
    }

    showHighscore(counter){
        alert("Highscore: " + counter);
        this.greeting.congrat(document.getElementById("gamer").value);
        game.removeChild(document.getElementById("box"));
    }
}

//--------------------------------------------------------------------------------

class Game {
    constructor(element){
        console.log("Constructor Game");
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.highscore = new Highscore();
        this.element = element;
        this.isRunning = true;
        this.setup();
    }

    setup(){
        this.element.addEventListener("click", () => {
            this.box.moveUp();
        }, false);
    }

    start(){
        console.log("Game start()");
        let counter = 0;//Counter fuer Highscore
        let timer = setInterval(() => {

            counter++;

            this.box.runLoop();

            if(this.isRunning==true){
                this.renderer.render(this.box.position);
            }

            if(this.box.position < 0){
                this.isRunning=false;
                clearInterval(timer);
                this.highscore.showHighscore(counter);
            }

            if(this.box.position+50 > this.element.clientHeight){
                this.isRunning=false;
                clearInterval(timer);
                this.highscore.showHighscore(counter);
                console.log(this.element);
                console.log(this.box);
                console.log(game);
            }

        },25);

        console.log(timer);
    }
}

//--------------------------------------------------------------------------------
function startGame(){
    let game = new Game(document.getElementById("game"));
    game.start();
}
