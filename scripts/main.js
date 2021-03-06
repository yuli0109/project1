//Variables
var $myCanvas = $('#canvas1');
var wrongGuess = 0; //The count the number of wrong guess
var cGuess = 0; //To check if the input contain correct character
var showUp = 0; //The number of characters displayed
var thisNub = 0; //The length of the word
var aniMay = null; //The setInterval for rop animation
var aniMay2 = null; //The setInterval for head animation
var aniMay3 = null; //The setInterval for body animation
var aniMay4 = null; //The setInterval for left arm animation
var aniMay5 = null; //The setInterval for right arm animation
var aniMay6 = null; //The setInterval for left leg animation
var aniMay7 = null; //The setInterval for right leg animation
var cateFood = ['uni','oyster','pasta','ramen'];//The array for words in food category
var cateCoty = ['france','brazil','iceland','norway'];//The array for words in country category
var cateMovie = ['avatar', 'kingsman','titanic','missionimpossible'];//The array for words in movie category
var cateSinger = ['taylorswift', 'madonna', 'brunomars','adele'];//The array for words in singer category
var cateGame = ['hearthstone','starcraft','overwatch','warcraft'];//The array for words in game category

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

//Add Event Listener to start button
$('#inputBut').on('click',function(event) {
  var $newWord = getWord();
  var wordAry = $newWord.split("");
  $(wordAry).each(function(index, el) {
      var $theChar = $(el);
      var $newDis = $(`<div class = "nD"><p>${el}</p></div>`);
      $('.displayWords').append($newDis);
  });
  $('#inputBox').val("");
  thisNub = wordAry.length;
  $('#cateBar').css('visibility','hidden');
  $('#inputBut').css('visibility','hidden');
});
//

//Add Event Listener to reset button
$('#resetBut').on('click', function(event) {
  $('#canvas1').removeLayers();
  $('div.nD').remove();
  wrongGuess = 0;
  $('div.boardKey').css('visibility','visible');
  $('div.theChar').css('visibility','visible');
  $('#inputBox').val("");
  clearInte();
  $('#cateBar').css('visibility','visible');
  $('#inputBut').css('visibility','visible');
  $('#inputBox').css('visibility','visible');
});
//

//The function to reset the time interval
function clearInte(){
  clearInterval(aniMay);
  clearInterval(aniMay2);
  clearInterval(aniMay3);
  clearInterval(aniMay4);
  clearInterval(aniMay5);
  clearInterval(aniMay6);
  clearInterval(aniMay7);
}
//

//Add Event Listener to select bar change
$('#cateBar').on('change', function(event) {
  var indX = Math.round(3*Math.random());
  if ($(this).val() == 'FOOD') {
    var pickedWord = cateFood[indX];
  }else if ($(this).val() == 'COUNTRY'){
    var pickedWord = cateCoty[indX];
  }else if ($(this).val() == 'MOVIE') {
    var pickedWord = cateMovie[indX];
  }else if ($(this).val() == 'SINGER') {
    var pickedWord = cateSinger[indX];
  }else if ($(this).val() == 'PC GAME') {
    var pickedWord = cateGame[indX];
  }
  if (pickedWord) {
  var wordAry = pickedWord.split("");
  $(wordAry).each(function(index, el) {
      var $theChar = $(el);
      var $newDis = $(`<div class = "nD"><p>${el}</p></div>`);
      $('.displayWords').append($newDis);
  });
  thisNub = wordAry.length;
  $('#inputBut').css('visibility','hidden');
  $('#inputBox').css('visibility','hidden');
  $('#cateBar').css('visibility','hidden');
  }
});
//

//Add Event Listener to keyboard keys
$('div.boardKey').on('click', function(event) {
  cGuess = 0; //Initicalizing the correct guess
  var $oldFriend = $(this).text();
  $('div.nD p').each(function(index, el) {
    if(($oldFriend) == $(el).text().toUpperCase()){
      $(el).css('visibility','visible');
      cGuess +=1;
    }
  });
  $(this).css('visibility','hidden');
  checkCompleted();
  if (cGuess === 0) {  //Judge if the click contains wrong
    makeSomeDraw();
    wrongGuess++;
  }
});
//

//The function will show player2 the answer when they failed
function showAnswer(){
  $('div.nD p').css('visibility','visible');
}
//

//The function that disable further more input if player2 failed
function noMoreInput(){
$('div.boardKey').css('visibility','hidden');
}
//

//The function to check if player2 has completed
function checkCompleted (){
  showUp = 0;
  $('div.nD p').each(function(index, el) {
    if ($(el).css('visibility') == 'visible') {
      showUp++;
    }
  });
  if (showUp == thisNub) {
    $('div.boardKey').css('visibility','hidden');
    $('div.theChar').css('visibility','hidden');
    alert('You are the winner!!!\nClick reset to restart the game!');
  }
}
//

//The function to decide with step of drawing it is
function makeSomeDraw(){
  if (wrongGuess === 0) {
    drawZero();
  }else if (wrongGuess === 1) {
    drawVbeam();
  }else if (wrongGuess === 2) {
    drawHbeam();
  }else if (wrongGuess === 3) {
    drawRop();
  }else if (wrongGuess ===4) {
    drawHead();
  }else if (wrongGuess === 5) {
    drawBody();
  }else if (wrongGuess === 6){
    drawLarm();
  }else if (wrongGuess === 7) {
    drawRarm();
  }else if (wrongGuess === 8) {
    drawLleg();
  }else if (wrongGuess === 9) {
    drawRleg();
    showAnswer();
    runAnimay();
    aniMay = setInterval(ropAnimation, 2000);
    aniMay2 = setInterval(headAnimation, 2000);
    aniMay3 = setInterval(bodyAnimation, 2000);
    aniMay4 = setInterval(larmAnimation, 2000);
    aniMay5 = setInterval(rarmAnimation, 2000);
    aniMay6 = setInterval(llegAnimation, 2000);
    aniMay7 = setInterval(rlegAnimation, 2000);
    alert('You did not get the word...\nClick reset to restart the game');
  }
};
//

//The function to run animation instantly
function runAnimay(){
  ropAnimation();
  headAnimation();
  bodyAnimation();
  larmAnimation();
  rarmAnimation();
  llegAnimation();
  rlegAnimation();
}
//

//
function drawZero(){
  $myCanvas.drawArc({
    strokeStyle: 'rgb(104, 62, 135)',
    rounded: true,
    layer: true,
    name: 'firstArc',
    strokeWidth: 5,
    x: 100, y: 203,
    radius: 90,
    // start and end angles in degrees
    start: -40, end: 45
  });
}
function drawVbeam(){
  $myCanvas.drawLine({
    strokeStyle: 'rgb(104, 62, 135)',
    rounded: true,
    strokeWidth: 7,
    x1: 100, y1: 110,
    x2: 100, y2: 20,
    layer: true,
    name: 'verticalBeam'
  });
}
function drawHbeam(){
  $myCanvas.drawLine({
    strokeStyle: 'rgb(104, 62, 135)',
    rounded: true,
    strokeWidth: 6,
    x1: 50, y1: 30,
    x2: 280, y2: 30,
    layer: true,
    name: 'hozBeam'
  });
}
function drawRop(){
  $myCanvas.drawLine({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    rounded: true,
    strokeWidth: 3,
    x1: 240, y1: 30,
    x2: 240, y2: 60,
    layer: true,
    name: 'ropLine'
  });
}
function drawHead(){
  $myCanvas.drawArc({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    strokeWidth: 3,
    x: 240, y: 67,
    layer: true,
    name: 'headCir',
    radius: 7
  });
}
function drawBody(){
  $myCanvas.drawLine({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    rounded: true,
    strokeWidth: 4,
    x1: 240, y1: 75,
    x2: 240, y2: 87,
    layer: true,
    name: 'bodyLine'
  });
}
function drawLarm(){
  $myCanvas.drawLine({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    rounded: true,
    strokeWidth: 3,
    x1: 240, y1: 75,
    x2: 227, y2: 83,
    layer: true,
    name: 'leftArm'
  });
}
function drawRarm(){
  $myCanvas.drawLine({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    rounded: true,
    strokeWidth: 3,
    x1: 240, y1: 75,
    x2: 253, y2: 83,
    layer: true,
    name: 'rightArm'
  });
}
function drawLleg(){
  $myCanvas.drawLine({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    rounded: true,
    strokeWidth: 3,
    x1: 240, y1: 87,
    x2: 235, y2: 100,
    layer: true,
    name: 'leftLeg'
  });
}
function drawRleg(){
  $myCanvas.drawLine({
    strokeStyle: 'rgba(173, 162, 169, 0.8)',
    rounded: true,
    strokeWidth: 3,
    x1: 240, y1: 87,
    x2: 245, y2: 100,
    layer: true,
    name: 'rightLeg'
  });
}
function ropAnimation(){
  $myCanvas.animateLayer('ropLine',{
    x1: 240, y1: 30,
    x2: 235, y2: 57,
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x1: 240, y1: 30,
    x2: 245, y2: 57,
    },1000)
  });
}
function headAnimation(){
  $myCanvas.animateLayer('headCir',{
    x: 236, y: 65,
    rotate: 10
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x: 244, y: 65,
    rotate: -10
    },1000)
  });
}
function bodyAnimation(){
  $myCanvas.animateLayer('bodyLine',{
    x1: 236, y1: 74,
    x2: 232, y2: 87,
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x1: 244, y1: 74,
    x2: 248, y2: 87,
    },1000)
  });
}
function larmAnimation(){
  $myCanvas.animateLayer('leftArm',{
    x1: 236, y1: 75,
    x2: 220, y2: 82,
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x1: 244, y1: 75,
    x2: 228, y2: 83,
    },1000)
  });
}
function rarmAnimation(){
  $myCanvas.animateLayer('rightArm',{
    x1: 236, y1: 75,
    x2: 249, y2: 82,
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x1: 244, y1: 75,
    x2: 258, y2: 82,
    },1000)
  });
}
function llegAnimation(){
  $myCanvas.animateLayer('leftLeg',{
    x1: 232, y1: 88,
    x2: 228, y2: 99,
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x1: 248, y1: 88,
    x2: 250, y2: 99,
    },1000)
  });
}
function rlegAnimation(){
  $myCanvas.animateLayer('rightLeg',{
    x1: 232, y1: 88,
    x2: 234, y2: 99,
  },1000,function(layer){
    $(this).animateLayer(layer,{
    x1: 248, y1: 88,
    x2: 258, y2: 99,
    },1000)
  });
}
