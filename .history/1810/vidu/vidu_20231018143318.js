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

function arraytest(sort) {
    myArray = new Array(3);
    myArray[0] = "Ha Noi";
    myArray[1] = "Da Nang";
    myArray[2] = "Ho Chi Minh";
    if(sort)
        myArray.sort();
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
    a = new Array ("a","b", "c")
b = new Array (1,2,3)
ab = a.concat(b);
    for (var i in ab)
        document.writeln(ab[i] + ", ");
}
function daochieu(){
    a = new Array("1", "2","3");
    a.reverse();
    for (var i in a)
        document.writeln(a[i] + "<BR>");
}

function hinhTron(){
    var r = parseFloat(document.getElementById("r").value);

    var chuvi = Math.PI *2*r;
    var dientich = Math.PI * r*r;
    
    document.getElementById("ketqua").innerHTML="Chu vi: " + chuvi +"<br>" +"dien tich: "+ dientich;

}

