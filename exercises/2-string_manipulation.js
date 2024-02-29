console.log("These are from string sections on Bookmark pg 29:");

//length
let word = "Word";
let length = word.length;
console.log(length);

//index of char in string
let firstchar = word[0];
console.log(firstchar);

//choosing chars in strings
let codeword1 = "This"
let codeword2 = "holds"
let codeword3 = "swords"
console.log(codeword1,codeword2,codeword3);
let secret = codeword1[1] + codeword2[1] + codeword3[1];
console.log(secret);

console.log("These are from Bookmark age 29 too:")
let longstring = "My long string is long";
let cutstring = longstring.slice(3);
console.log(cutstring);
console.log(cutstring.toUpperCase());

let sillystring = "HelLo, hOw ARe yOU?";
console.log(sillystring);
let sillyfirst = sillystring[0];
let sillyrest = sillystring.slice(1);
console.log(sillyfirst.toUpperCase() + sillyrest.toLowerCase());

//page 34
let age = 12;
let accompnied = true;
if (age >= 13) {
    console.log("you are old enough to see the movie")
} else if (age < 13 && accompnied === true) {
    console.log("You are too young but may see the movie bc you are accompanied");
} else {
    console.log("You are too young & not accompanied. You may not see the movie.")
}

//38 completed in console- array manual pushing with indexing
//46 is Math.floor, did in console

let randomwords = ["Hi","we","did","princess","boy","baby","girl"];
let randomindex = Math.floor(Math.random() * randomwords.length);
let randomword = randomwords[randomindex];
console.log("word " + randomindex + ": " + randomword);
//choicemaker from 46ish
let phrases = [
    "Let me think about it.",
    "That's probably not a good idea.",
    "Go for it!",
    "Sources say maybe.",
    "I think so!",
    "Yes!",
    "No...",
]
function choiceMaker() {
    return choice = phrases[Math.floor(Math.random() * phrases.length)];
}