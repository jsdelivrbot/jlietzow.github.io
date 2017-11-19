function playC() {
    var noteC = new Audio("media/028.wav");
    noteC.play();
}
function playD() {
    var noteD = new Audio("media/030.wav");
    noteD.play();
}
function playE() {
    var noteE = new Audio("media/032.wav");
    noteE.play();
}
function playF() {
    var noteF = new Audio("media/033.wav");
    noteF.play();
}
function playG() {
    var noteG = new Audio("media/035.wav");
    noteG.play();
}
function playA() {
    var noteA = new Audio("media/037.wav");
    noteA.play();
}
function playB() {
    var noteB = new Audio("media/039.wav");
    noteB.play();
}
function playC2() {
    var noteC2 = new Audio("media/040.wav");
    noteC2.play();
}
    
$("#cButton").on("click", playC);
$("#dButton").on("click", playD);
$("#eButton").on("click", playE);
$("#fButton").on("click", playF);
$("#gButton").on("click", playG);
$("#aButton").on("click", playA);
$("#bButton").on("click", playB);
$("#c2Button").on("click", playC2);
    
$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    console.log(event.keyCode);
    if (event.keyCode == 97) {
        $("#cButton").trigger("click");
        $("#cButton").trigger("active");
    }
    if (event.keyCode == 115) {
        $("#dButton").trigger("click");
    }
    if (event.keyCode == 100) {
        $("#eButton").trigger("click");
    }
    if (event.keyCode == 102) {
        $("#fButton").trigger("click");
    }
    if (event.keyCode == 106) {
        $("#gButton").trigger("click");
    }
    if (event.keyCode == 107) {
        $("#aButton").trigger("click");
    }
    if (event.keyCode == 108) {
        $("#bButton").trigger("click");
    }
    if (event.keyCode == 59) {
        $("#c2Button").trigger("click");
    }
}