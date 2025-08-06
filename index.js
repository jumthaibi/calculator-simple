const display = document.getElementById("display")
        let val = 0;
function add_to_dispaly(input){
    display.value += input;
}

function add_to_value(input){
    val += input;
}

function clear_val(){
    display.value = " ";
    val = " ";
}

function calculate(){
    try {
        display.value = eval(val);
    } catch (e) {
        display.value = "Error";
    }
}
