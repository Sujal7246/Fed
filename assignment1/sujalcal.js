const display=document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value=" ";
}
function calculate(){
    try{
    display.value=eval(display.value)
    }
    catch(error){
        display.value="ERROR";

    }


}
function del(){
    display.value=display.value.toString().slice(0,-1);
}
function percent(input){
    
        var expression = document.getElementById('display').value;
        var percentage = eval(expression) / 100;
        document.getElementById('display').value = percentage;
      }