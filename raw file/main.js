
var inputArray = [];
var answerArray = [];
var buttons = document.getElementsByClassName("stateoff");
var inputDisplay = document.querySelector("#inputdisplay");
var answerDisplay = document.querySelector("#answerdisplay");
var rndBtn = document.querySelector("#rnd-btn")
var equalToBtn = document.querySelector("#equalsign");
var answerBtn = document.getElementById("ans-btn")
var acClearBtn = document.querySelector("#ac");
var avrgNumBtn = document.querySelector("#avrgnum");
var decimalAndCommaBtn = document.querySelector("#decimalandcomma");
var bracketOpenBtn = document.querySelector("#bracketopen");
var bracketCloseBtn = document.querySelector("#bracketclose");
var sinBtn = document.getElementById("sin-btn");
var cosBtn = document.getElementById("cos-btn");
var tanBtn = document.getElementById("tan-btn");
var sinhBtn = document.querySelector("#sinh-btn");
var coshBtn = document.querySelector("#cosh-btn");
var tanhBtn = document.querySelector("#tanh-btn")
var rootsBtn = document.getElementById("roots");
var numberSystemBtn = document.getElementById("number-system-btn");
var backSpaceBtn = document.querySelector("#backkey");
var shiftKeyBtn = document.querySelector("#shiftkey");
var shiftDisplay = document.getElementById("shiftdisplay");
var SpecialDisplay = document.querySelector("#signdisplay")
var stateOn = false;
var avrgNumOn = false;
var BinaryStateOn = false;
var octetStateOn = false;
var sumOfNum = 0;
var conditionalValue;
var answer = 0;
var groupInputArray;
var groupAnswerArray;
var deletedAnswer;
var didYouDelete = false;
var bodyColormode = document.querySelector("body");
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

numericButtonInputs()
// round-off button
rndBtn.addEventListener("click", function () {

    if (stateOn) {
        // pie
        inputs("π", "Math.PI")
    }
    else {
        //   round off
        var roundedNumber = Math.round(answer)
        answerDisplay.textContent = answerDisplay.textContent = "Rnd = " + roundedNumber;

    }
})


// answwer Button
answerBtn.addEventListener("click", function () {
    if (answerDisplay.textContent === "") {
        answerDisplay.textContent = "";
        inputs("Ans", answer)
        console.log("if ran")
    }
    else {
        inputArray = [];
        answerArray = [];
        answerDisplay.textContent = "";
        inputs("Ans", answer)
        console.log("else ran")

    }
})

equalToBtn.addEventListener("click", function () {
    // Equal to
    if (conditionalValue === 1) {
        equalTo(sumOfNum)
    }
    else if (conditionalValue === 4) {
        NumberSystemCalc(2)
    }
    else if (conditionalValue === 8) {
        NumberSystemCalc(8)
    }
    else {
        equalTo(1)
    }
});
// cleaR ALL
acClearBtn.addEventListener("click", function () {
    SpecialInputs("", "", 0)
    avrgNumOn = false;
    BinaryStateOn = false;
    octetStateOn = false;
    didYouDelete = false;
});

//backSpaceBtn
backSpaceBtn.addEventListener("click", function () {

    if (conditionalValue === 1) {
        deletedAnswer = answerArray.pop();
        answerArray.pop();
        sumOfNum--;
        inputArray = [];
        inputDisplay.textContent = "Input;  " + deletedAnswer;
        didYouDelete = true
        if (deletedAnswer === undefined) {
            inputDisplay.textContent = "Input;  ";
        }
    }
    else if (answerArray[answerArray.length - 1] === ")*180/Math.PI)") {
        backSpace()
        conditionalValue = 3;
    }
    else if (answerArray[answerArray.length - 1] === ")*Math.PI / 180)") {
        backSpace()
        conditionalValue = 2;
    }
    else {
        backSpace()
        // conditionalValue = 0
    }

})


avrgNumBtn.addEventListener("click", function () {
    if (stateOn) {
        // average
        avrgNumOn = !avrgNumOn
        if (avrgNumOn) {
            SpecialInputs("avrg", "Input;  ", 1)
        }
        else {
            SpecialInputs("", "", 0)
        }
    }
    else {
        // percentage display
        inputs("%", "*0.01")
    }
})
// calculate rootsBtn 
rootsBtn.addEventListener("click", function () {
    if (stateOn) {
        // square
        inputs("^2", "**2")
    }
    else {
        //   square root
        inputs("√", "**0.5")
    }
})

// Number system
numberSystemBtn.addEventListener("click", function () {
    if (stateOn) {
        // square
        // octal base system
        octetStateOn = !octetStateOn
        if (octetStateOn) {
            SpecialInputs("oct", "", 8)

        }
        else {
            SpecialInputs("", "", 0)
        }
    }
    else {
        //   off
        // Binary
        if (answer === 0) {
            BinaryStateOn = !BinaryStateOn
            if (BinaryStateOn) {
                SpecialInputs("bin", "", 4)

            }
            else {
                SpecialInputs("", "", 0)
            }

        }
        else {
            ans = Number(answer.toString(2))
            answerDisplay.textContent = "Ans = " + ans;
        }
    }
})

decimalAndCommaBtn.addEventListener("click", function () {
    if (stateOn) {
        // comma
        if (inputDisplay.textContent !== "Input;  ") {
            if (didYouDelete === true) {
                commaInputs(deletedAnswer)
                didYouDelete = false
            }
            else {
                commaInputs(groupInputArray)
            }
        }
    }
    else {
        // fullstop
        inputs(".", ".")
    }
})
// sin btn
sinBtn.addEventListener("click", function () {
    if (stateOn) {
        //   on
        inputs("sin-1(", "(Math.asin(")
        conditionalValue = 3;
    }
    else {
        //   off
        inputs("sin(", "Math.sin((")
        conditionalValue = 2;
    }
})
// cos btn
cosBtn.addEventListener("click", function () {
    if (stateOn) {
        //   on
        inputs("cos-1(", "(Math.acos(")
        conditionalValue = 3;
    }
    else {
        //   off
        inputs("cos(", "Math.cos((")
        conditionalValue = 2;
    }
})

// tan btn
tanBtn.addEventListener("click", function () {
    if (stateOn) {
        //   on
        inputs("tan-1(", "(Math.atan(")
        conditionalValue = 3;
    }
    else {
        //   off
        inputs("tan(", "Math.tan((")
        conditionalValue = 2;
    }
})


// sinh btn
sinhBtn.addEventListener("click", function () {
    if (stateOn) {
        //   on
        inputs("sinh-1(", "Math.asinh(")
    }
    else {
        //   off
        inputs("sinh(", "Math.sinh(")
    }
})

// cosh btn
coshBtn.addEventListener("click", function () {
    if (stateOn) {
        //   on
        inputs("cosh-1(", "Math.acosh(")
    }
    else {
        //   off
        inputs("cosh(", "Math.cosh(")
    }
})
// tanh btn
tanhBtn.addEventListener("click", function () {
    if (stateOn) {
        //   on
        inputs("tanh-1(", "Math.atanh(")
    }
    else {
        //   off
        inputs("tanh(", "Math.tanh(")
    }
})

// bracket Open Button
bracketOpenBtn.addEventListener("click", function () {
    inputs("(", "(")
})
// Bracket Close
bracketCloseBtn.addEventListener("click", function () {
    if (conditionalValue === 2) {
        inputs(")", ")*Math.PI / 180)")
        conditionalValue = 0;
    }
    else if (conditionalValue === 3) {
        inputs(")", ")*180/Math.PI)")
        conditionalValue = 0;
    }
    else {
        inputs(")", ")")

    }
})

shiftKeyBtn.addEventListener("click", function () {
    stateOn = !stateOn
    if (stateOn) {
        //   on
        shiftDisplay.textContent = "shft"
    }
    else {
        //   off
        shiftDisplay.textContent = "";
    }
})


function numericButtonInputs() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (inputArray.length < 23) {

                if (Number(inputArray[0]) === 0) {
                    inputDisplay.textContent = "";
                    inputArray = []
                    answerArray = []
                }
                else {

                    if (conditionalValue === 1) {
                        inputArray.push(this.textContent);
                        groupInputArray = inputArray.join("");
                        inputDisplay.textContent = "Input;  " + groupInputArray;
                        didYouDelete = false

                    }
                    else {
                        inputs(this.textContent, this.textContent)
                    }
                }
            }
        });
    }

}

function backSpace() {
    inputArray.pop();
    answerArray.pop();
    groupInputArray = inputArray.join("");
    inputDisplay.textContent = groupInputArray;
    answerDisplay.textContent = "";
    answer = 0;
}

function inputs(inputArrayInputs, answerArrayInput,) {
    inputArray.push(inputArrayInputs)
    groupInputArray = inputArray.join("");
    inputDisplay.textContent = groupInputArray;
    answerArray.push(answerArrayInput);
}


function equalTo(numberSum) {
    try {
        groupAnswerArray = answerArray.join("")
        answer = eval(groupAnswerArray) / numberSum
        answerDisplay.textContent = "Ans = " + answer;
    }
    catch (err) {
        answerDisplay.textContent = "Syntax Error";
    }
}

function SpecialInputs(specialDisplayTextContent, inputdisplayTextcontent, value) {
    inputArray = [];
    answerArray = [];
    SpecialDisplay.textContent = specialDisplayTextContent;
    inputDisplay.textContent = inputdisplayTextcontent;
    answerDisplay.textContent = ""
    answer = 0;
    conditionalValue = value;
};

function commaInputs(input1) {
    answerArray.push("+");
    answerArray.push(input1);
    sumOfNum++;
    inputDisplay.textContent = "Input;  "
    inputArray = [];
}



function NumberSystemCalc(base) {
    splitNumber()
    baseConversionLoop(base)
    try {
        groupAnswerArray = newArray.join("");
        var ans = eval(groupAnswerArray);
        answer = Number(ans.toString(base))
        answerDisplay.textContent = "Ans = " + answer;
    }
    catch (err) {
        answerDisplay.textContent = "Syntax Error";
    }
}


function splitNumber() {
    let joinStr = "";
    answerArray.forEach(val => {
        let numVal = Number(val)
        if (Number.isNaN(numVal)) {
            joinStr += `!${val}!`
        }
        else {
            joinStr += val
        }
    })
    newArray = joinStr.split("!")
}

function baseConversionLoop(base) {
    for (let i = 0; i < newArray.length; i++) {
        let emptyString = newArray[i] === "";
        if (emptyString) {
            newArray.splice(i, 1)
        }
        let val = Number(newArray[i])
        if (Number.isNaN(val) === false) {
            let number = parseInt(newArray[i], base)
            newArray[i] = number.toString()
        }
    }
}


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


















// var testArr = ["1", "0", "1", "+", "1", "1", "0", "-", "1", "0", "0", "*", "1", "1", "1"]
// var groupAnswerArray = testArr.join("")

// for (var i = 0; i < groupAnswerArray.length; i++) {
//     var plusSign = groupAnswerArray[i] === "+"
//     var minusSign = groupAnswerArray[i] === "-"
//     var divideSign = groupAnswerArray[i] === "/"
//     var multiplySign = groupAnswerArray[i] === "*"
//     var splitSign;
//     var cutSplit;
//     var removeSplit;
//     var minusSplit;

//    if (plusSign) {
//         if (splitSign === undefined) {
//             atUndefined("+", plusSign)
//         }
//         else{ 
//             atElse("+", plusSign)
//         }
//     }
//     if (minusSign) {
//         if (splitSign === undefined) {
//             atUndefined("-", minusSign)
//         }
//         else {
//          atElse("-", minusSign);
//          console.log(groupAnswerArray)
//         }
//     }

//     // if (divideSign) {
//     //    if(splitSign === undefined){
//     //        atUndefined("/", divideSign)
//     //    }
//     //    else{
//     //        atElse("/", divideSign)
//     //    }
//     // }
//     if (multiplySign) {
//         if(splitSign === undefined){
//             atUndefined("*", multiplySign)
//         }
//         else{
//             atElse("*", multiplySign)
//             console.log("worked")
//         }
//      }
// }


// function atUndefined (sign, index){
//     splitSign = groupAnswerArray.split(sign)
//     splitSign.splice(index, 0, sign)
//     cutSplit = splitSign.slice(index - 1, 2)
//     console.log(cutSplit, splitSign)
// }

// function atElse(sign, index){
//     splitSign.shift()
//     splitSign.shift()
//     groupAnswerArray = splitSign.join("")

//     splitSign = groupAnswerArray.split(sign)
//     splitSign.splice(index, 0, sign)
//     removeSplit = splitSign.splice(index - 1, 2)
//     cutSplit = cutSplit.concat(removeSplit)  

//     console.log(removeSplit, cutSplit, splitSign)
// }










// function addSign(sign) {
//     // add sign on screen
//     var signs = sign;
//     inputArray.push(signs);
//     groupInputArray = inputArray.join("");
//     inputDisplay.textContent = groupInputArray;
// }
// function replaceSign(signs, representation) {
//     // //  replace % signs in variable
//     // var index = inputArray.findIndex((e1) => e1 === signs);
//     // // replace signs
//     // inputArray[index] = representation;
//     // // get back actual Value
//     // groupInputArray = inputArray.join("");
//     var arr = [];
//     for (var i = 0; i < inputArray.length; i++) {
//         var getIndexes = inputArray.findIndex(
//             (displayinput, getIndexes) => displayinput === signs && getIndexes > i-1,
//         );
//         arr.push(getIndexes);
//         console.log("getIndexes: "+ getIndexes, "arr: " + arr)
//     }
//     //  remove duplicates
//     // convert using set
//     var removeDuplicate = new Set(arr);
//     var index = [...removeDuplicate];
//     // replace signs 
//     // for(j = 0; j<index.length; j++){

//     // }
//     index.forEach(function (n) {
//         inputArray[n] = representation;
//         groupInputArray = inputArray.join("")
//         console.log("groupInputArray: " + concatDisplayInputs, "representation: " + representation, "index: " + index,"displayinput[n]: "+ inputArray[n], "i: "+ inputArray)

//     })


// }


// function reset(){
//     arr = [];
// }


// var maths = 9**0.5;
// console.log(maths)

// var arr = [];
// for(var i = 0; i<ranks.length; i++){
//    var ranks = [1, 5, 7, 8, 10, 7, 7, 7, 7,];
//    var index = ranks.findIndex(
//     (rank, index) => rank === 7 && index > i-1
//   );
// arr.push(index);
//    var test = console.log(index, i, arr);
// }
