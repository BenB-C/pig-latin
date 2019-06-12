$(document).ready(function() {
  $("#pigLatin").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    if (userInput === '') {
      $("#error").show();
      $("#result").hide();
    } else {
      var pigLatinText = pigLatinForSentence(userInput);
      $("#result").show();
      $("#error").hide();
      $("#plainText").text(userInput);
      $("#pigLatinText").text(pigLatinText);
    }
  });
});

// Returns the pig latin version of a word. Assumes given userText is not the empty string.
function igpayAtinlay(userText) {
  var word = userText;
  var firstLetter = word[0];

  if (isVowel(firstLetter) && firstLetter.toLowerCase() !== 'y') {
    return word + 'way';
  } else {
    for (var letterPosition = 1; letterPosition < word.length; letterPosition++) {
      var currentLetter = word[letterPosition];
      if (isVowel(currentLetter)) {
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

function isVowel(letter) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'y'];
  return vowelArray.includes(letter.toLowerCase())
}

// Returns the pig latin for a sentence of words seperated by spaces
function pigLatinForSentence(sentence) {
  var words = sentence.split(' ');
  var pigLatinWordsArray = []
  for (var wordPosition = 0; wordPosition < words.length; wordPosition++) {
    pigLatinWordsArray.push(igpayAtinlay(words[wordPosition]));
  }
  return pigLatinWordsArray.join(' ');
}
