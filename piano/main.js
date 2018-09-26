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
    
$("#cKey").on("click", playC);
$("#cSKey").on("click", playCS);
$("#dKey").on("click", playD);
$("#eFKey").on("click", playEF);
$("#eKey").on("click", playE);
$("#fKey").on("click", playF);
$("#fSKey").on("click", playFS);
$("#gKey").on("click", playG);
$("#aFKey").on("click", playAF);
$("#aKey").on("click", playA);
$("#bFKey").on("click", playBF);
$("#bKey").on("click", playB);
$("#c2Key").on("click", playC2);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    //console.log(event.keyCode);
    if (event.keyCode == 97) {
        $("#cKey").trigger("click");
    }
    if (event.keyCode == 119) {
        $("#cSKey").trigger("click");
    }
    if (event.keyCode == 115) {
        $("#dKey").trigger("click");
    }
    if (event.keyCode == 101) {
        $("#eFKey").trigger("click");
    }
    if (event.keyCode == 100) {
        $("#eKey").trigger("click");
    }
    if (event.keyCode == 102) {
        $("#fKey").trigger("click");
    }
    if (event.keyCode == 116) {
        $("#fSKey").trigger("click");
    }
    if (event.keyCode == 106) {
        $("#gKey").trigger("click");
    }
    if (event.keyCode == 105) {
        $("#aFKey").trigger("click");
    }
    if (event.keyCode == 107) {
        $("#aKey").trigger("click");
    }
    if (event.keyCode == 111) {
        $("#bFKey").trigger("click");
    }
    if (event.keyCode == 108) {
        $("#bKey").trigger("click");
    }
    if (event.keyCode == 59) {
        $("#c2Key").trigger("click");
    }
}
