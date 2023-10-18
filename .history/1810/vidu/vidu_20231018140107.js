function testreturn(x) {
    var i = 0;
    while (i < 6) {
        if (i == 3)
            break
        i++
    }
    document.write(i * x);
    return (i * x);
}

function arraytest() {
    myArray = new Array(3);
    myArray[0] = "Ha Noi";
    myArray[1] = "TP Da Nang";
    myArray[2] = "TP Ho Chi Minh";
    for (var i in myArray)
        document.writeln(myArray[i] + "<BR>")

}
function arraytest2() {
    a = new Array("a", "b", "c");
    a1 = a.join(); // gán "a,b,c" vào a1
    a2 = a.join(","); // gán "a,b,c" vào a2
    a3 = a.join("+"); // gán "a+b+c" vào a1
    document.writeln(a1 + "<BR>");
    document.writeln(a2 + "<BR>");
    document.writeln(a3 + "<BR>");
}
function concat_VD() {
    num1 = [1, 2, 3];
    num2 = [4, 5, 6];
    num3 = [7, 8, 9];
    a4 = [a, b, c, d];
    a = num1.concat(num2, num3,a4);
    for (var i in a)
        document.writeln(a[i] + "<BR>")
}
