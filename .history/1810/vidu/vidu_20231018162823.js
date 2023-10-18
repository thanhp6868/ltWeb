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
    if (sort)
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
    a = new Array("a", "b", "c")
    b = new Array(1, 2, 3)
    ab = a.concat(b);
    for (var i in ab)
        document.writeln(ab[i] + ", ");
}
function daochieu() {
    a = new Array("1", "2", "3");
    a.reverse();
    for (var i in a)
        document.writeln(a[i] + "<BR>");
}

function hinhTron() {
    var r = parseFloat(document.getElementById("r").value);

    var chuvi = Math.PI * 2 * r;
    var dientich = Math.PI * r * r;

    document.getElementById("ketqua").innerHTML = "Chu vi: " + chuvi + "<br>" + "dien tich: " + dientich;

}

function bai1() {
    var x = document.getElementById("bai1_text").value;

    document.getElementById("result_1").innerHTML = "lower case: " + x.toLowerCase() + "<br>" + "uppercase: " + x.toUpperCase() + "<br>" + "4th potion: " + x.substring(3, 4) + "<br>" + "length: " + x.length;
}
function bai2() {
    var time = new Date();
    var today = time.getDate();
    var month = time.getMonth();
    var year = time.getUTCFullYear();
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    document.getElementById("result_2").innerHTML = "today: " + today + "<br>" + "month: " + month + "<br>" + "year: " + year + "<br>" + "time:" + hour + ":" + min + ":" + sec;
}

function bai3(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
var max =x;
    if(max<y) 
        max = y;
    document.getElementById("result_3").innerHTML = "between number1 : "+x+" and number2: "+y +", max is : "+max;
}

function bai5(){
    var time = new Date();
    var hour = time.getHours();
    var str1="";
    if(hour<12)
        str1 ="chao buoi sang";
    else str1="chao buoi chieu";

    document.getElementById("result_5").innerHTML = str1 +". bay gio la: "+ hour+" gio";
}
