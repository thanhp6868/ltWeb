function bai1() {
    var x = parseInt(document.getElementById("num1"));
    var y = parseInt(document.getElementById("num2"));
    var sodu = x % y;

    if (sodu == 0)
        alert("chia het");
    else alert("Khong chia het" + x);
    document.write(typeof(x));

}