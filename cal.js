//function that clear values
function erase(){
    document.getElementById('display').value = "";
}

//function to show the numbers being enter
function showValue(num){
    const prevDisplay = document.getElementById('display');
    prevDisplay.value = prevDisplay.value +  num;

}

//function to calculate totals
function total (){
    const calculate = document.getElementById('display');
    calculate.value  = eval(calculate.value);

}