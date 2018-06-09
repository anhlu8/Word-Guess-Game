var phrase = ["appletini", "coding", "javascript"];

var underScore = [];
var correctGuess = [];
var incorrectGuess = [];
var guessesRemaining = 10;
var wins = 0;
var wonTheRound = false;



var generateWord = function(){
    rand = Math.floor(Math.random()*phrase.length);
    word = phrase[rand];
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

var reset = function(){
    guessesRemaining = 10;
    generateWord();
    underScore = [];
    correctGuess = [];
    incorrectGuess = [];
    generateUnderscore();
    wonTheRound = false;
}

// Run function Reset

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

    if (wonTheRound === false){
    guessesRemaining--};

    document.getElementById("lives").innerHTML = guessesRemaining;
    for ( var i = 0; i < word.length; i++){
    if(word[i] == keyWord.toLowerCase()) {
        // correctGuess.push(keyWord);
        underScore[i] = keyWord;
    }
    
    
    } 
    
    // else {
    //     incorrectGuess.push(keyWord);
    // }
})


