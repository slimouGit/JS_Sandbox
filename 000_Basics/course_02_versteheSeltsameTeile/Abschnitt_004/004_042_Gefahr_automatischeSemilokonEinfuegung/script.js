function getPerson(){
    /**
    return      //Syntax-Parser setzt automatisch hinter return ein Semikolon und es wird nichts zurueckgegeben
    {
        vorname: "Salim"
    }
    **/
    //vermeiden indem nach dem return was folgt:
    return { //jetzt rafft er, dass noch ein Objekt folgt
        vorname: "Salim"
    };
}

console.log(getPerson());