
var pingpong = function(ping) {
  var numberArray = [];
   if (ping > 0) {
      for (var index = 1; index <= ping; index++) {
        numberArray.push(index);
      }
      numberArray.forEach(function(ping) {
        if (ping % 15 === 0) {
          numberArray[ping-1] = 'pingpong';
        } else if (ping % 3 === 0) {
          numberArray[ping-1] = 'ping';
        } else if (ping % 5 === 0) {
          numberArray[ping-1] = 'pong';
        }
      });
  }
  return numberArray;
}

var displayResultList = function(outputArray) {
    $('ul#list').empty();
  outputArray.forEach(function(item) {
    $('ul#list').append('<li>' + item + '</li>');
  });
}

$(document).ready(function() {
  $('form#pingpong').submit(function(event) {
    var ping = $('input#ping').val();

   displayResultList(pingpong(ping));

   event.preventDefault();
  });
});
