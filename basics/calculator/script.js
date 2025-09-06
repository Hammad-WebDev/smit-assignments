var input = document.getElementById("input");

function cal(val) {
    if (val === "=" && input.value) {
        input.value = eval(input.value);
    }
    else if (val === "CE") {
        input.value = input.value.slice(0, -1);
    }
    else if (val === "AC") {
        input.value = '';
    }
    else if(val !== "=") {
        input.value += val
    }
}