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
    for(var i= 0; i< myArray.len; i++)
        document.writeln(myArray[i] + "<BR>")
    
}

