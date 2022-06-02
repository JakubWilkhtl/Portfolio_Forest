$( document ).ready(function() {
             if (localStorage.getItem("pageloadcount")) { $("#Hauptbox").hide();
         }
             localStorage.setItem("Hauptbox", "1");
         });
