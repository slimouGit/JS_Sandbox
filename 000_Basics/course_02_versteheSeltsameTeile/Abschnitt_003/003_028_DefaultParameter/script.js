function greet(name){
    console.log(name);
    name = name || "slimou"; // es wird der erste Wert gesucht, der true ergibt
    console.log("Hallo " + name);
}

//greet("slimou");
greet();