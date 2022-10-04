var wordsTyped: number;
var charsTyped: number;
var mistakes: number;

const path: string = "texts.txt";

function getText(): string {
    let text: string = ""; // temp val, used to silence an error

    return text;
}

function getInput(): string {
    let input: string = ""; //temp val, used to silence an error 

    return input;
}

function calcAcc(): number { //returns user's accuracy
    var acc: number;

    let percent = charsTyped / 100;
    acc = 100 - mistakes * percent;    
    
    return acc;
}

function showScore() {

}

