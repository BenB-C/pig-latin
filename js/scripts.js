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

// // 1st version:
// // Returns the pig latin version of a word. Assumes given userText is not the empty string.
// function igpayAtinlay(word) {
//   var firstLetter = word[0];
//
//   if (isVowel(firstLetter) && firstLetter.toLowerCase() !== 'y') {
//     return word + 'way';
//   } else {
//     for (var letterPosition = 1; letterPosition < word.length; letterPosition++) {
//       var currentLetter = word[letterPosition];
//       if (isVowel(currentLetter)) {
//         var previousLetter = word[letterPosition - 1];
//         if (previousLetter === 'q' && currentLetter === 'u') {
//           return word.slice(letterPosition + 1, word.length) + word.slice(0, letterPosition + 1) + 'ay';
//         }
//         return word.slice(letterPosition, word.length) + word.slice(0, letterPosition) + 'ay';
//       }
//     }
//     return word + 'ay';
//   }
//
//   return word;
// }
//
// function isVowel(letter) {
//   var vowelArray = ['a', 'e', 'i', 'o', 'u', 'y'];
//   return vowelArray.includes(letter.toLowerCase())
// }

// Returns the pig latin for a sentence of words seperated by spaces
function pigLatinForSentence(sentence) {
  var words = sentence.split(' ');
  var pigLatinWordsArray = []
  for (var wordPosition = 0; wordPosition < words.length; wordPosition++) {
    pigLatinWordsArray.push(translateToPigLatin(words[wordPosition]));
  }
  return pigLatinWordsArray.join(' ');
}

// Returns the pig latin version of the word using regular expressions
function translateToPigLatin(word) {
  if (word.search(/[^a-z]/i) === 0) {
    // the word starts with a non-alphabetical character, so don't do anything to it
    return word;
  }

  // Find first vowel in the word
  if (word[0] === 'y') {
    // For words beginning with "y", treat "y" as a consonant
    var indexOfFirstVowel = word.search(/[aeiou]/i);
  } else {
    var indexOfFirstVowel = word.search(/[aeiouy]/i);
  }

  var pigLatinWord = "????"; // to be returned

  if (indexOfFirstVowel < 0) {
    // the word does not contain any vowels
    pigLatinWord = word + 'ay';
  } else if (indexOfFirstVowel === 0 && word[0] !== 'y') {
    // the word starts with a vowel (not 'y')
    pigLatinWord = word + 'way';
  } else {
    // the word starts with a consonant (or 'y')
    if (word[indexOfFirstVowel - 1] === 'q' && word[indexOfFirstVowel] === 'u') {
      // consonant part of word contains 'qu'
      indexOfFirstVowel++; // assumes the next letter after 'u' is a vowel
    }

    var consonantPart = word.slice(0, indexOfFirstVowel);
    var vowelPart = word.slice(indexOfFirstVowel);
    pigLatinWord = vowelPart + consonantPart + 'ay';
  }
  return pigLatinWord;
}
