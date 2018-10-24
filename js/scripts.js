
// converts word string to array and returns the index of the first vowel
function findIndexFirstVowel(inputUserWordArray){
  var vowels = ["a", "e", "i", "o","u", "A", "E", "I", "O","U"];
  for (var i = 0; i < inputUserWordArray.length; i++ ){
    for(var j = 0; j < vowels.length; j++){
      if (inputUserWordArray[i].indexOf(vowels[j]) !== -1){
        return i;
      }
    }
  }
}

// function wordToPigLatin(splitWord, splitWordIndex) {
//   var splitWordBegin = splitWord.slice(0, splitWordIndex);
//   var splitWordEnd = [];
//   splitWordEnd = splitWord.slice(splitWordIndex);
//   var reverseWordArray = splitWordEnd.concat(splitWordBegin);
//   var pigLatinArray = reverseWordArray.concat("ay");
//   return pigLatinArray;
// }


// returns an array of letters that make up a word translated from plain English into Pig Latin with start letters: "qu", "y", and vowels
function wordToPigLatin(splitWord, splitWordIndex) {
  var pigLatinArray = [];
  if (splitWord[0] === "q" && splitWord[1] === "u") {
    splitWordIndex = 2;
  }
  if (splitWordIndex === 0) {
    pigLatinArray = splitWord.concat("way");
  } else {
    pigLatinArray = (splitWord.slice(splitWordIndex)).concat((splitWord.slice(0, splitWordIndex))).concat("ay");
  }
  return pigLatinArray;
}


function sentenceToPigLatin(sentence) {
  var wordArray = sentence.split(" ");
  var sentenceArrayOutput = [];

  wordArray.forEach(function(word){
    var letterArray = word.split("")
    var wordIndex = findIndexFirstVowel(letterArray);
    var pigLatinWord = wordToPigLatin(letterArray, wordIndex);
    word = pigLatinWord.join("");
    sentenceArrayOutput.push(word);
  })

  sentence = sentenceArrayOutput.join(" ");
  return sentence;
}


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputStringEnglish = $("#inputStr").val();


    if(parseInt(inputStringEnglish) || !inputStringEnglish) {
      alert("That is not a valid input! (But Number Pig Latin coming soon!! :D)");
    } else {
      var outputPigLatin = sentenceToPigLatin(inputStringEnglish);
      $("#outputOriginalStrings").text(inputStringEnglish);
      $("#outputPigLatinStrings").text(outputPigLatin);
      $("#result").show();
    }


  });
});
