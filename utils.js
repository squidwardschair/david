document.addEventListener("DOMContentLoaded", function () {
  var flashdiv = document.getElementById("flashdiv");
  var firstsection = document.getElementById("firstsection");
  var header = document.getElementById("header");
  function flash() {
    flashdiv.style.visibility = "visible";
    console.log("diosjfiosdfa")
    setTimeout(function () {
      flashdiv.style.visibility = "hidden";
    }, 3000);
  }

  setInterval(flash, 576000);

  if (header.offsetHeight<window.innerHeight) {
    console.log('ya')
    var difference=window.innerHeight-header.offsetHeight
    firstsection.style.marginTop = difference + "px";
  }
});

window.addEventListener("resize", function(event) {
  var firstsection = document.getElementById("firstsection");
  var header = document.getElementById("header");
  if (header.offsetHeight<window.innerHeight) {
    var difference=window.innerHeight-header.offsetHeight
    firstsection.style.marginTop = difference + "px";
  }
});


