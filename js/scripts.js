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
  var firstLetter = userText[0];
  if (vowelArray.includes(firstLetter.toLowerCase())) {
    return userText + 'way';
  }


  return userText;
}
