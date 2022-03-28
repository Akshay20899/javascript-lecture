function addition() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) + parseInt(b);
    document.getElementById("answer").value = c;
    document.write(c);
}

function subtraction() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) - parseInt(b);
    document.getElementById("answer").value = c;
    document.write(c);
}

function multiplication() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) * parseInt(b);
    document.getElementById("answer").value = c;
    document.write(c);
}

function division() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) / parseInt(b);
    document.write(c);
    document.getElementById("answer").value = c;
    document.write(c);
}