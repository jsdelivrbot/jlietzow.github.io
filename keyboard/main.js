function playC() {
    var noteC = new Audio("media/028.wav");
    noteC.play();
}
function playCS() {
    var noteCS = new Audio("media/029.wav");
    noteCS.play();
}
function playD() {
    var noteD = new Audio("media/030.wav");
    noteD.play();
}
function playEF() {
    var noteEF = new Audio("media/031.wav");
    noteEF.play();
}
function playE() {
    var noteE = new Audio("media/032.wav");
    noteE.play();
}
function playF() {
    var noteF = new Audio("media/033.wav");
    noteF.play();
}
function playFS() {
    var noteFS = new Audio("media/034.wav");
    noteFS.play();
}
function playG() {
    var noteG = new Audio("media/035.wav");
    noteG.play();
}
function playAF() {
    var noteAF = new Audio("media/036.wav");
    noteAF.play();
}
function playA() {
    var noteA = new Audio("media/037.wav");
    noteA.play();
}
function playBF() {
    var noteBF = new Audio("media/038.wav");
    noteBF.play();
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
$("#cSButton").on("click", playCS);
$("#dButton").on("click", playD);
$("#eFButton").on("click", playEF);
$("#eButton").on("click", playE);
$("#fButton").on("click", playF);
$("#fSButton").on("click", playFS);
$("#gButton").on("click", playG);
$("#aFButton").on("click", playAF);
$("#aButton").on("click", playA);
$("#bFButton").on("click", playBF);
$("#bButton").on("click", playB);
$("#c2Button").on("click", playC2);
    
$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    //console.log(event.keyCode);
    if (event.keyCode == 97) {
        $("#cButton").trigger("click");
    }
    if (event.keyCode == 119) {
        $("#cSButton").trigger("click");
    }
    if (event.keyCode == 115) {
        $("#dButton").trigger("click");
    }
    if (event.keyCode == 101) {
        $("#eFButton").trigger("click");
    }
    if (event.keyCode == 100) {
        $("#eButton").trigger("click");
    }
    if (event.keyCode == 102) {
        $("#fButton").trigger("click");
    }
    if (event.keyCode == 116) {
        $("#fSButton").trigger("click");
    }
    if (event.keyCode == 106) {
        $("#gButton").trigger("click");
    }
    if (event.keyCode == 105) {
        $("#aFButton").trigger("click");
    }
    if (event.keyCode == 107) {
        $("#aButton").trigger("click");
    }
    if (event.keyCode == 111) {
        $("#bFButton").trigger("click");
    }
    if (event.keyCode == 108) {
        $("#bButton").trigger("click");
    }
    if (event.keyCode == 59) {
        $("#c2Button").trigger("click");
    }
}
