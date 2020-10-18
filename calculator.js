
var inputArray = [];
var answerArray = [];
var buttons = document.getElementsByClassName("stateoff");
var inputDisplay = document.querySelector("#inputdisplay");
var answerDisplay = document.querySelector("#answerdisplay");
var equalToBtn = document.querySelector("#equalsign");
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
var sumOfNum = 0;
var conditionalValue;
var anwser = 0;
var groupInputArray;
var groupAnswerArray;
var deletedAnswer;
var didYouDelete = false;


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


equalToBtn.addEventListener("click", function () {
    // Equal to
    if (conditionalValue === 1) {
        equalTo(sumOfNum)
    }
    else if (conditionalValue === 4) {
        groupAnswerArray = answerArray.join("");
        NumberSystemCalc(2)
    }
    else {
        equalTo(1)
        console.log("mummy")
    }
});
// cleaR ALL
acClearBtn.addEventListener("click", function () {
    SpecialInputs("", "", 0)
    avrgNumOn = false;
    BinaryStateOn = false
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
        inputs("^2", "**2")
    }
    else {
        //   off
        // Binary
        BinaryStateOn = !BinaryStateOn
        if (BinaryStateOn) {
            SpecialInputs("bin", "", 4)

        }
        else {
            SpecialInputs("", "", 0)
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


function backSpace() {
    inputArray.pop();
    answerArray.pop();
    groupInputArray = inputArray.join("");
    inputDisplay.textContent = groupInputArray;
    answerDisplay.textContent = "";
    anwser = 0;
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
        anwser = eval(groupAnswerArray) / numberSum
        answerDisplay.textContent = "Ans = " + anwser;
        console.log("i ran")
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
    // for(var i = 0; i < arr.length; i++){
    //     if(arr[i] === "+"){
    // arr[i] = "+";
    //     }
    //     else{
    //         arr[i]+arr[i+1]
    //     }
    // }


    console.log(answer)
    var arrlenght = groupAnswerArray.split("+");
    var x;
    var y;
    var sum;
    for (var i = 0; i < arrlenght.length - 1; i++) {
        var newArrSplit = groupAnswerArray.split("+")
        var newArrJoin = newArrSplit.join("+")
        if (newArrJoin.indexOf("+") != -1) {
            var numbers = newArrJoin.split("+");
            if (answer === 0) {
                x = parseInt(numbers[i], base);
                y = parseInt(numbers[i + 1], base)
                sum = x + y;

            }
            else {
                x = parseInt(answer, base)
                y = parseInt(numbers[i + 1], base)
                sum = x + y

            }
            console.log("x: " + x, "y: " + y, "numbers: " + numbers, "sum: " + sum)
            answer = sum.toString(base)
            newArrSplit.splice(0, 2)
            newArrSplit.unshift(answer)
            console.log("newArrsplit: " + newArrSplit, "arrlength: " + arrlenght)
        }

    }


    // } else if (groupAnswerArray.indexOf("-") != -1) {
    //     var numbers = groupAnswerArray.split("-");
    //     var x = parseInt(numbers[0], base);
    //     var y = parseInt(numbers[1], base);
    //     var sub = x - y;
    //     var ans = sub.toString(base);
    // } else if (groupAnswerArray.indexOf("*") != -1) {
    //     var numbers = groupAnswerArray.split("*");
    //     var x = parseInt(numbers[0], base);
    //     var y = parseInt(numbers[1], base);
    //     var mul = x * y;
    //     var ans = mul.toString(base);
    // } else if (groupAnswerArray.indexOf("/") != -1) {
    //     var numbers = groupAnswerArray.split("/");
    //     var x = parseInt(numbers[0], base);
    //     var y = parseInt(numbers[1], base);
    //     var div = x / y;
    //     var ans = div.toString(base);
    // }
    //     }
    answerDisplay.textContent = "Ans = " + answer;
    console.log(answer)
}

var testArr = ["1", "0", "1", "+", "1", "1", "0", "-", "1", "0", "0", "*", "1", "1", "1"]
var groupAnswerArray = testArr.join("")

for (var i = 0; i < groupAnswerArray.length; i++) {
    var plusSign = groupAnswerArray[i] === "+"
    var minusSign = groupAnswerArray[i] === "-"
    var divideSign = groupAnswerArray[i] === "/"
    var multiplySign = groupAnswerArray[i] === "*"
    var splitSign;
    var cutSplit;
    var removeSplit;
    var minusSplit;

   if (plusSign) {
        if (splitSign === undefined) {
            atUndefined("+", plusSign)
        }
        else{ 
            atElse("+", plusSign)
        }
    }
    if (minusSign) {
        if (splitSign === undefined) {
            atUndefined("-", minusSign)
        }
        else {
         atElse("-", minusSign);
         console.log(groupAnswerArray)
        }
    }

    // if (divideSign) {
    //    if(splitSign === undefined){
    //        atUndefined("/", divideSign)
    //    }
    //    else{
    //        atElse("/", divideSign)
    //    }
    // }
    if (multiplySign) {
        if(splitSign === undefined){
            atUndefined("*", multiplySign)
        }
        else{
            atElse("*", multiplySign)
            console.log("worked")
        }
     }
}


function atUndefined (sign, index){
    splitSign = groupAnswerArray.split(sign)
    splitSign.splice(index, 0, sign)
    cutSplit = splitSign.slice(index - 1, 2)
    console.log(cutSplit, splitSign)
}

function atElse(sign, index){
    splitSign.shift()
    splitSign.shift()
    groupAnswerArray = splitSign.join("")

    splitSign = groupAnswerArray.split(sign)
    splitSign.splice(index, 0, sign)
    removeSplit = splitSign.splice(index - 1, 2)
    cutSplit = cutSplit.concat(removeSplit)  

    console.log(removeSplit, cutSplit, splitSign)
}










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
