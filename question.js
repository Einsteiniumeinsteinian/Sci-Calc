
var display = document.querySelectorAll("span");
var calcInput = [
    "1",
    "2",
    "3",
    "+",
    "-",
];

var test = function(){
    console.log("mad ooo")
};



for(let i = 0; i<calcInput.length; i++){
        let calcInputDisplay = calcInput[i];
        console.log(calcInputDisplay);
        display[0].textContent = calcInputDisplay;
        display[1].textContent = calcInput;
    

 }



 acClear.addEventListener("click", function(){
    calcInput =  [];
    or
    calcInput.splice(0, calcInput.length);


});