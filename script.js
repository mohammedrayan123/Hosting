// var a = 10;
// var b = 20;
// c = a + b;
// console.log(c)

function add() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) + parseInt(b);
    document.getElementById("total").value = c;
}

function sub() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) - parseInt(b);
    document.getElementById("total").value = c;
}

function mul() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) * parseInt(b);
    document.getElementById("total").value = c;
}

function div() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) / parseInt(b);
    document.getElementById("total").value = c;
}