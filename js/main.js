
var space = " ";
var pos = 0;
var msg = "William Watson - Portfolio.";

window.setInterval(function(){
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
    pos++;
    if (pos > msg.length) pos = 0;
  }, 500);

function projectSelect(element) {
    var partA = document.getElementById("partA");
    var partB = document.getElementById("partB");
    var partC = document.getElementById("partC");

    var buttonA = document.getElementById("btnA");
    var buttonB = document.getElementById("btnB");
    var buttonC = document.getElementById("btnC");

    switch (element) {
        case 'partA':
            partA.style.display = "block";
            partB.style.display = "none";
            partC.style.display = "none";

            buttonA.style.textDecoration = "underline";
            buttonB.style.textDecoration = "none";
            buttonC.style.textDecoration = "none";
    
            break;

        case 'partB':
            partB.style.display = "block";
            partA.style.display = "none";
            partC.style.display = "none";

            buttonB.style.textDecoration = "underline";
            buttonC.style.textDecoration = "none";
            buttonA.style.textDecoration = "none";
            
            break;

        case 'partC':
            partC.style.display = "block";
            partA.style.display = "none";
            partB.style.display = "none";

            buttonC.style.textDecoration = "underline";
            buttonA.style.textDecoration = "none";
            buttonB.style.textDecoration = "none";
            
            break;
    }
}