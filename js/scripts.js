// var newstr = userInput.replace(/^./, capitalFirst);
// var finalOutPut = newstr.replace(/.$/, capitalLast);
// alert(finalOutPut);
// var capitalFirstLast;
// var capitalFirst;
// var capitalLast;
// var capitalLastFirst;
// var concatWithInput;
// var  userInput = prompt("Enter Sentence:");
// //function to pick first and last letter of string, capitalise and concat them
// function concatFirstLast(capitalFirst, capitalLast){
//   capitalFirst = userInput.charAt(0).toUpperCase();
//   capitalLast = userInput.charAt(userInput.length-1).toUpperCase();
//   capitalFirstLast = capitalFirst + capitalLast;
//   alert(capitalFirstLast);
// };
// //function to reverse output of function concatFirstLast
// function concatLastFirst(capitalFirstLast){
//   capitalLastFirst = capitalFirstLast.charAt(1) + capitalFirstLast.charAt(0);
//   alert(capitalLastFirst);
// };
// //function calls above functions and concats orignal string with the concatLastFirst output
// function alertLetters(){
//   concatFirstLast(capitalFirst, capitalLast);
//   concatLastFirst(capitalFirstLast);
//   concatWithInput = userInput + capitalLastFirst;
//   alert(concatWithInput);
// };
// //function to concat middle character to the beginning of last output string
//  function concatFront(){
//    var half = userInput.length / 2;
//    halfPosition = parseFloat(half.toFixed());
//    var firstLetter = userInput.charAt(halfPosition);
//    var finalOutPut = firstLetter + concatWithInput;
//    alert(finalOutPut);
//  };
// alertLetters();
// concatFront();


check for vowels in array and replace with dashes
function addAy(inputArrayVowels){
  var vowels = ["a", "e", "i", "o","u"];
  var outputArrayDashes = [];
  for(var i = 0; i <= vowels.length-1; i++){
    for(var j = 0; j <= inputArrayVowels.length-1; j++){
      if (inputArrayVowels[j] === vowels[i] || outputArrayDashes[j] === "-"){
        outputArrayDashes[j] = "-"
      }
      else{
        outputArrayDashes[j] = inputArrayVowels[j];
      }
    }
  }
  $("#ouputStrings").text(outputArrayDashes.join(""));
}


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputStringEnglish = $("#inputStr").val();
    var inputArrayEnglish = inputStringEnglish.split("");

    if(!parseInt(inputStringEnglish)) {
      addAy(inputArrayEnglish);

    } else {
      alert("That is a number! Number Pig Latin coming soon!! :D");
    }


  });
});
