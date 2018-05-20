var rand = 0;
var word = "";
var phrase = ["appletini", "bud light", "cryptocurrency & blockchain", "dwarves", "zombie apocalypse"];
var win = 0;
var phraseLength = 0;
var maxErrors = 15;
var underScore = [];


function getPhrase (){
    rand = Math.floor(Math.random()*phrase.length);
    word = phrase[rand];
    return word;
};

var generateUnderscore = function () {
    for(var i=0; i<word.length; i++){
        underScore.push('_');
    };
    return underScore;
};

var keyword = document.addEventListener('keyup', function(event) {
    console.log(event);
    if (word.indexOf(keyword) > -1){
    };
});

