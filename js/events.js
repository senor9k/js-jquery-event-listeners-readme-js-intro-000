//define functions here
function getIt(){
  $('p').on('click', function() {
      alert('Hey!');
    });
}
function frameIt(){
  $('img').on('load', function(){
      $('img').addClass('tasty');
    });
}
function pressIt(){
  $("input#typing").on('keydown', function(e) {
    if(e.which == 71){
        alert('G was pressed');
    }
  });
}


$(document).ready(function(){
// call functions here
    getIt()
    frameIt()
    pressIt()
});
