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
            }
        })
        alert(title + " " + content);
    });

});