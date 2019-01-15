//define functions here
function getIt(){
  $('p').on('click', function() {
      alert('Hey!');
    });
}
function frameIt(){
  $('img').on('click', function() {
      alert('Hey!');
    });
}


$(document).ready(function(){
// call functions here
    getIt()
    frameIt()
});
