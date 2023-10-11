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
function bai4() {
    var a = prompt("Please enter your point: ")
    if (a > 10 || a < 0)
        alert("Diem nhap vao khong hop le");
    else {
        if (a >= 9 && a <= 10)
            alert("gioi");
        else if (a >= 7 && a < 9)
            alert("kha");
        else if (a >= 5 && a < 7)
            alert("trung binh");
        else if (a >= 0 && a < 5)
            alert("yeu");
    }
}
function bai5() {
    var a = prompt("Please enter your point: ")

    switch (a) {
        case "0":
            alert("yeu");
        case "1":
            alert("yeu");
        case "2":
            alert("yeu");
        case "3":
            alert("yeu");
        case "4":
            alert("yeu");
        case "5":
            alert("trung binh");
        case "6":
            alert("trung binh");
        case "7":
            alert("kha");
        case "8":
            alert("kha");
        case "9":
            alert("gioi");
        case "10":
            alert("gioi");
        default:
            alert("Diem nhap vao khong hop le");
    }

}