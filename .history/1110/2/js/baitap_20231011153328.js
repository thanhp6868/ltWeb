function bai1() {
    var x = document.getElementById("num1");
    var y = document.getElementById("num2");
    var sodu = x % y;

    if (sodu == 0)
        alert("chia het");
    else alert("Khong chia het" + sodu);

}