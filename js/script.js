function init(){
  
  var input = document.getElementById('entryinput')
  var pressButton = document.getElementById('entrybutton')
  var output = document.getElementById('textoutput')
  
  function alertFunc() {
    //sends the alert
    alert('Indu sree guturu: ' + input.value)
    //changes h2
    output.innerHTML = input.value;
  }
  
  pressButton.addEventListener('click', alertFunc);

}
window.addEventListener('load', init);
