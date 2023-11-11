document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("flashdiv");

    function flash() {
      div.style.visibility = "visible";
      console.log("diosjfiosdfa")
      setTimeout(function() {
        div.style.visibility = "hidden";
      }, 3000);
    }
    
    setInterval(flash, 576000);
});


