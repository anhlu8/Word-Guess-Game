var phrase = ["appletini", "coding", "javascript"];
var rand = Math.floor(Math.random()*phrase.length);
var word = phrase[rand];
var underScore = [];
var correctGuess = [];
var incorrectGuess = [];


console.log(word);

// To create underscores
var generateUnderscore = function () {
    for(var i=0; i<word.length; i++){
        underScore.push('_');
    };
    return underScore;
};

// 
// 

// To display underscores
document.addEventListener('keyup', function(event){
    generateUnderscore().length = word.length;
    document.getElementById("currentWord").innerHTML = underScore.join(' ');
    if (underScore.join('') == word.toUpperCase()){
        // Need to add wins
    }
})

// To capture users' guess

document.addEventListener('keydown', function(event){
    var keyWord = String.fromCharCode(event.keyCode)
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


