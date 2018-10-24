
// converts word string to array and returns the index of the first vowel
function addAy(inputUserWordArray){
  var vowels = ["a", "e", "i", "o","u"];
  for (var i = 0; i < inputUserWordArray.length; i++ ){
    for(var j = 0; j < vowels.length; j++){
      if (inputUserWordArray[i].indexOf(vowels[j]) !== -1){
        return i;
      }
    }
  }
}

// returns an array of letters that make up a word translated from plain English into Pig Latin
// function sliceWord(splitWord, splitWordIndex) {
//   var splitWordBegin = splitWord.slice(0, splitWordIndex);
//   var splitWordEnd = [];
//   splitWordEnd = splitWord.slice(splitWordIndex);
//   var reverseWordArray = splitWordEnd.concat(splitWordBegin);
//   var pigLatinArray = reverseWordArray.concat("ay");
//   return pigLatinArray;
// }

function sliceWord(splitWord, splitWordIndex) {
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


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputStringEnglish = $("#inputStr").val();
    var inputArrayEnglish = inputStringEnglish.split("");

    if(!parseInt(inputStringEnglish)) {
      var number = addAy(inputArrayEnglish);
      alert(number);
      var pigLatin = sliceWord(inputArrayEnglish, number);
      alert(pigLatin.join(""));
      //$("#position").append("<li>" + number + "</li>");


    } else {
      alert("That is a number! Number Pig Latin coming soon!! :D");
    }


  });
});
