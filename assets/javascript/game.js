var phrase = ["appletini", "coding", "javascript"];

var underScore = [];
var correctGuess = [];
var incorrectGuess = [];
var guessesRemaining = 13;
var wins = 0;
var wonTheRound = false;
var keyWordArray = [];
var numberOfLetters = document.getElementById('numLetters').innerHTML;


var generateWord = function(){
    rand = Math.floor(Math.random()*phrase.length);
    word = phrase[rand];
    document.getElementById('numLetters').innerHTML = word.length;
}
generateWord();


console.log(word);
// To create underscores
var generateUnderscore = function () {
    for(var i=0; i<word.length; i++){
        underScore.push('_');
    };
    return underScore;
};



// To display underscores
document.addEventListener('keyup', function(event){
    generateUnderscore().length = word.length;
    document.getElementById("currentWord").innerHTML = underScore.join(' ');

    // if (underScore.join('') > word.toUpperCase()){
    //     $("span").empty();
    
    if (underScore.join('') == word.toUpperCase() && wonTheRound === false){
        document.getElementById("wins").innerHTML = ++wins;
        wonTheRound = true;
    }
})

// To capture users' guess

document.addEventListener('keydown', function(event){
    var keyWord = String.fromCharCode(event.keyCode)
    keyWordArray.push(keyWord);
    if (wonTheRound === false){
    guessesRemaining--};

    document.getElementById("lives").innerHTML = guessesRemaining;
    for ( var i = 0; i < word.length; i++){
    if(word[i] == keyWord.toLowerCase()) {
        // correctGuess.push(keyWord);
        underScore[i] = keyWord;
    }
    document.getElementById("alreadyGuessed").innerHTML = keyWordArray.join(' ');
    
    } 
    
    // else {
    //     incorrectGuess.push(keyWord);
    // }
    
    // Run function Reset
    var reset = function(){
        guessesRemaining = 13;
        generateWord();
        underScore = [];
        correctGuess = [];
        incorrectGuess = [];
        generateUnderscore();
        wonTheRound = false;
        keyWordArray = [];
        $("span:not(#wins, #numLetters)").empty();
    }

document.getElementById('resetButton').addEventListener('click', function(){
    reset();
})
})


