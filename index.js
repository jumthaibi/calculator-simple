const display = document.getElementById("display")

function add_to_dispaly(input){
    display.value += input;
}

function clear_display(){
    display.value = " ";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}