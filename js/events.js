//define functions here
function getIt(){
  $('p').on('click', function() {
      alert('Hey!');
    });
}
function frameIt(){
  $('img').on('click', function() {
//      $('img').addClass('tasty');
      alert('Heyzzzz!');

    });
}


$(document).ready(function(){
// call functions here
    getIt()
    frameIt()
});
