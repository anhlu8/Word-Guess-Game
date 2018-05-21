var phrase = ["appletini", "bud light", "cryptocurrency & blockchain", "dwarves", "zombie apocalypse"];
var rand = Math.floor(Math.random()*phrase.length);
var word = phrase[rand];
var win = 0;
var phraseLength = 0;
var maxErrors = 15;
var underScore = [];

var generateUnderscore = function () {
    for(var i=0; i<word.length; i++){
        underScore.push('_');
    };
    return underScore;
};


document.addEventListener('keyup', function(event){
    document.getElementById("currentWord").textContent = generateUnderscore;
})
