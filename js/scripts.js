$(document).ready(function() {
  $("#pigLatin").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var pigLatinText = igpayAtinlay(userInput);

    $("#result").show();
    $("#plainText").text(userInput);
    $("#pigLatinText").text(pigLatinText);
  });
});

function igpayAtinlay(userText) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];

  var word = userText;
  var firstLetter = word[0];

  if (vowelArray.includes(firstLetter.toLowerCase())) {
    return word + 'way';
  } else {
    for (var letterPosition = 1; letterPosition < word.length; letterPosition++) {
      var currentLetter = word[letterPosition];
      if (vowelArray.includes(currentLetter.toLowerCase())) {
        var previousLetter = word[letterPosition - 1];
        if (previousLetter === 'q' && currentLetter === 'u') {
          return word.slice(letterPosition + 1, word.length) + word.slice(0, letterPosition + 1) + 'ay';
        }
        return word.slice(letterPosition, word.length) + word.slice(0, letterPosition) + 'ay';
      }
    }
    return word + 'ay';
  }

  return userText;
}
