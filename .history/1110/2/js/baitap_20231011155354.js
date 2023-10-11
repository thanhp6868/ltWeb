function bai1() {
    var x = prompt("Please enter the first number: ", "");
    var y = prompt("Please enter the second number: ", "");
    if (x % y == 0)
        alert("Chia het");
    else alert("Khong chia het");
}

function bai2() {
    var a = prompt("Please enter the first number: ", "");
    var b = prompt("Please enter the second number: ", "");
    var c = prompt("Please enter the first number: ", "");
    var max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    alert("so lon nhat: " + max);
}
function bai3() {
    var a = prompt("Please enter year: ", "");

    if (a % 4 == 0 && a % 100 == 0 && a % 400 != 0)
        alert(" ko la nam nhuan");
    else alert(" la nam nhuan");
}