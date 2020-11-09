var modeBtn = document.querySelectorAll(".mode-btn");
var DisplayDiv = document.querySelector("#displaydiv")
var btnColor = document.querySelectorAll("BUTTON");
var superScript = document.querySelectorAll(".superscript")
var container = document.getElementsByClassName("container")
var contentStyle = document.getElementById("content")
var styling;
var design = [
    {
        bodyColor: "#4f728e",
        buttonColor: "#8a8604",
        buttonTextColor: "black",
        superScriptColor: "#ff0515",
        inputBackgroundcolor: "#f4ed71",
        equalToBtnColor: "#f4ed71",
        equalTextColor: "black",
        equalToBorderColor: "#5c3d46",
        hoverInBtnColor: "#cac7d7",
        hoverInTextColor: "black",
        borderColor: "#132226",
        DisplayDivBorderColor: "grey",
        borderStyle: "12px"

    },

    {
        
        bodyColor: "#8d2f23",
        buttonColor: "#05acd3",
        buttonTextColor: "#5e240e",
        superScriptColor: "#ff0515",
        inputBackgroundcolor: "#b2f3f7",
        equalToBtnColor: "#2e303e",
        equalTextColor: "blanchedalmond",
        equalToBorderColor: "#5c3d46",
        hoverInBtnColor: "#2e303e",
        hoverInTextColor: "blanchedalmond",
        borderColor: "#132226",
        DisplayDivBorderColor: "grey",
        borderStyle: "12px"

    },

    {
        bodyColor: "#07000e",
        buttonColor: "#eecc8d",
        buttonTextColor: "black",
        superScriptColor: "#8a2c02",
        inputBackgroundcolor: "white",
        equalToBtnColor: "#5c3d46",
        equalTextColor: "white",
        equalToBorderColor: "#5c3d46",
        hoverInBtnColor: "#5c3d46",
        hoverInTextColor: "white",
        borderColor: "#132226",
        DisplayDivBorderColor: "grey",
        borderStyle: "6px"

    },


    {
        bodyColor: "#6465a5",
        buttonColor: "#f28a30",
        buttonTextColor: "black",
        superScriptColor: "white",
        inputBackgroundcolor: "white",
        equalToBtnColor: "#f05837",
        equalTextColor: "white",
        equalToBorderColor: "#04601d",
        hoverInBtnColor: "#583e2e",
        hoverInTextColor: "white",
        borderColor: "#132226",
        DisplayDivBorderColor: "grey",
        borderStyle: "6px"

    },

    {
        bodyColor: "#525b56",
        buttonColor: "#A4978e",
        buttonTextColor: "black",
        superScriptColor: "white",
        inputBackgroundcolor: "white",
        equalToBtnColor: "#583e2e",
        equalTextColor: "white",
        equalToBorderColor: "#04601d",
        hoverInBtnColor: "#583e2e",
        hoverInTextColor: "white",
        borderColor: "#132226",
        DisplayDivBorderColor: "grey",
        borderStyle: "6px"

    },

    {
        bodyColor: "#ebf2ea",
        buttonColor: "#0abda0",
        buttonTextColor: "black",
        superScriptColor: "white",
        inputBackgroundcolor: "white",
        equalToBtnColor: "#04601d",
        equalTextColor: "white",
        equalToBorderColor: "#04601d",
        hoverInBtnColor: "#04601d",
        hoverInTextColor: "white",
        borderColor: "#c10392",
        DisplayDivBorderColor: "grey",
        borderStyle: "6px"

    },

    {
        bodyColor: "#583e2e",
        buttonColor: "#c10392",
        buttonTextColor: "black",
        superScriptColor: "white",
        inputBackgroundcolor: "white",
        equalToBtnColor: "#5c4a72",
        equalTextColor: "white",
        equalToBorderColor: "#5c4a72",
        hoverInBtnColor: "#5c4a72",
        hoverInTextColor: "white",
        borderColor: "#c10392",
        DisplayDivBorderColor: "grey",
        borderStyle: "20px"

    },

    {
        bodyColor: "#888c46",
        buttonColor: "white",
        buttonTextColor: "#075bf7",
        superScriptColor: "#2c7209",
        inputBackgroundcolor: "rgb(166,234,230)",
        equalToBtnColor: "#ba6505",
        equalTextColor: "white",
        equalToBorderColor: "#192e5b",
        hoverInBtnColor: "#ba6505",
        hoverInTextColor: "white",
        borderColor: "#192e5b",
        DisplayDivBorderColor: "grey",
        borderStyle: "5px"
    },

    {
        bodyColor: "indianred",
        buttonColor: "#192e5b",
        buttonTextColor: "rgb(241,249,7)",
        superScriptColor: "rgb(211,91,185)",
        inputBackgroundcolor: "rgb(166,234,230)",
        equalToBtnColor: "rgb(241,249,7)",
        equalTextColor: "#192e5b",
        equalToBorderColor: "#192e5b",
        hoverInBtnColor: "rgb(241,249,7)",
        hoverInTextColor: "#192e5b",
        borderColor: "#192e5b",
        DisplayDivBorderColor: "#192e5b",
        borderStyle: "12px"

    },

    {
        bodyColor: "black",
        buttonColor: "black",
        buttonTextColor: "blanchedalmond",
        superScriptColor: "bisque",
        inputBackgroundcolor: "blanchedalmond",
        equalToBtnColor: "rgb(196, 24, 81)",
        equalTextColor: "black",
        equalToBorderColor: "rgb(196, 24, 81)",
        hoverInBtnColor: "rgb(196, 24, 81)",
        hoverInTextColor: "black",
        borderColor: "#343a40",
        DisplayDivBorderColor: "#343a40",
        borderStyle: "12px"

    }
]

randomStylePicker()
calcStyles()

modeBtn.forEach (function (mode){
    mode.addEventListener("click", function () {
        randomStylePicker()
        calcStyles()
    })
})

function onHover(x) {
    if (x !== equalToBtn) {
        x.style.background = design[styling].hoverInBtnColor;
        x.style.color = design[styling].hoverInTextColor;
        x.style.borderColor = design[styling].hoverInBtnColor
    }
}
function hoverOut(x) {
    // x.style.background = " black";
    // x.style.color = " blanchedalmond";
    if (x !== equalToBtn) {
        x.style.background = design[styling].buttonColor;
        x.style.color = design[styling].buttonTextColor;
        x.style.borderColor = design[styling].borderColor
    }
}


function calcStyles() {
    contentStyle.style.backgroundColor = design[styling].bodyColor
    // DisplayDiv.style.borderColor = design[styling].DisplayDivBorderColor
    DisplayDiv.style.backgroundColor = design[styling].inputBackgroundcolor
    superScript.forEach(function (superScriptColor) {
        superScriptColor.style.color = design[styling].superScriptColor
    })
    for (let i = 0; i < btnColor.length; i++) {
        if (btnColor[i] === equalToBtn) {
            equalToBtn.style.backgroundColor = design[styling].equalToBtnColor
            equalToBtn.style.color = design[styling].equalTextColor
            equalToBtn.style.borderColor = design[styling].equalToBorderColor
            btnColor[i].style.borderRadius = design[styling].borderStyle
        }
        else {
            btnColor[i].style.backgroundColor = design[styling].buttonColor
            btnColor[i].style.color = design[styling].buttonTextColor
            btnColor[i].style.borderColor = design[styling].borderColor
            btnColor[i].style.borderRadius = design[styling].borderStyle
            // btnColor[i].classList.add("button")
        }
    }


}

function randomStylePicker() {
    let style;
    style = Math.floor(Math.random() * design.length);
    while (styling === style) {
        style = Math.floor(Math.random() * design.length);

    }
    styling = style 

}