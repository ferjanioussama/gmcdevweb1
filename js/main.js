function makeBold() {
    if (document.getElementById("text").style.fontWeight == "normal")
        document.getElementById("text").style.fontWeight = "bold";
    else
        document.getElementById("text").style.fontWeight = "normal";
}


function makeitalics() {
    if (document.getElementById("text").style.fontStyle == "normal")
        document.getElementById("text").style.fontStyle = "italic";
    else
        document.getElementById("text").style.fontStyle = "normal";

}

function makeunderline() {
    if (document.getElementById("text").style.textDecoration == "none")
        document.getElementById("text").style.textDecoration = "underline";
    else
        document.getElementById("text").style.textDecoration = "none";

}

function makebigger() {
    var usersize = document.getElementById("selectfontsize").value;

    document.getElementById("text").style.fontSize = usersize;

}

function changefont() {
    var userfontfamily = document.getElementById("selectfontfamily").value;
    document.getElementById("text").style.fontFamily = userfontfamily;

}

$(document).ready(function () {
    $('.items button').css("opacity", "0");

    $(".items").mouseenter(function () {
        $("#" + this.id + " button").css("opacity", "1");
    })
    $(".items").mouseleave(function () {
        $("#" + this.id + " button").css("opacity", "0");
    })
});