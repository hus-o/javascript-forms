$(document).ready(function(){

    $("form").submit(function(){
        let greetings = document.getElementById("greeting").value;
        let msg = document.getElementById("message").value;
        let whichEvent = $('input[name="events"]:checked').val();
        
        
        function checkEvent(whichEvent){
            if(whichEvent === "wedding"){
                return "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            }
            else if (whichEvent === "birthday"){
                return "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            else if (whichEvent === "graduation"){
                return "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            }
            else{
                return ""
            }
        }

        let imgSrc = checkEvent(whichEvent);

        let finalString ="";

        finalString = finalString + "<h1>" + greetings + "</h1><br>";
        finalString = `${finalString} <div class="card"> <img src="${imgSrc}"><p class="centered">${msg}</p></div>`
        console.log(finalString);

        $("form").toggleClass("hideElement");
        //$("#card").toggleClass("hideElement"),
        $("form").after(finalString);

        
        console.log(greetings);
        console.log(msg);
        console.log(whichEvent);
        return false;
    });
});