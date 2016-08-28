console.log("js is linked!");
//Function to generate word elements in display board//
function getWord(){
  var $theWord = $('#inputBox').val();
  return($theWord);
}
//
//Add Event Listener to input box to remove text and display color in black
$('#inputBox').on('click', function(event) {
  $(this).val("").css('color','black');
});
//
//Add Event Linster to start button
$('#inputBut').on('click',function(event) {
  var $newWord = getWord();
  var wordAry = $newWord.split("");
  $(wordAry).each(function(index, el) {
      var $theChar = $(el);
      var $newDis = $(`<div class = "nD"><p>${el}</p></div>`);
      $('.displayWords').append($newDis);
  });
});
//
//Add Event Linster to keyboard keys
$('div.boardKey').on('click', function(event) {
  var $oldFriend = $(this).text();
  $('div.nD p').each(function(index, el) {
    if(($oldFriend) == $(el).text().toUpperCase()){
      console.log("hello");
      $(el).css('visibility','visible');
    };
  });
  // console.log($(this).text());
});
//

