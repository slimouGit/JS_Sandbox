"use strict"

jQuery(document).ready(function($){
    let form = $(".new-entry");

    $(form).submit(function(){
        event.preventDefault();
        let title = $("#title").val();

        let content = $("#content").val();

        //Url angeben, wo die Anfrage hingeschickt werden soll
        $.ajax({
            url: "/guestbook/new",
            method: "POST",
            data: {
                "title": title,
                "content": content
            },
            success: function(data){//ganzer DOM in data
                //response nur in generiertem Div ausgeben
                let div = $.parseHTML("<div></div>");//leeres Div erzeugen
                $(div).html(data);

                //Eintraege finden mit der Klasse entry in eínem (neuen) div
                let newEntries = $(".entry", div);

                //den wrapper-div der Liste in index.ejs waehlen
                $("#guestbook-entries .entry").remove(); //alle Eintraege loeschen
                //alle Eintraege inkl. des Neuen neu eintragen
                newEntries.each(function(i, newEntry){
                    $("#guestbook-entries").append(newEntry);
                });

            }
        })
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    });

});