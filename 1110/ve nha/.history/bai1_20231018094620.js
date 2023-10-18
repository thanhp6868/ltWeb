function bai1(){
    var s=0;
    for(var i = 1;i<=200;i++){
        s+=i;
    }
    document.write("Tổng các số từ 1 đến 200 là: "+s);
}
function bai2(){
    var s=1;
    for(var i = 1;i<=300;i+2){
        s*=i;
    }
    document.write("Tích các số lẻ từ 1 đến 300 là: "+s);
}
function bai3(){
    var n = prompt("Nhập vào 1 số: ");
    if(n<2){
        document.write(n+" không là số nguyên tố");
        return;
    }
    else if(n<4){
        document.write(n+" là số nguyên tố");
        return;
    }
    else for(var i=2;i<Math.sqrt(n);i++){
        if(n%i==0){
            document.write(n+" không là số nguyên tố");
            return;
        }
    }
    document.write(n+" là số nguyên tố");
}
function bai4(){
    var x = prompt("Nhập vào x: ");
    var n = prompt("Nhập vào n: ");
    var s=x;
    for(var i=1;i<n;i++){
        s*=x;
    }
    document.write("x^n = "+s);
}
function bai5(){
    var s = "";
    while(s==""){
        var s = prompt("Nhập vào tên của bạn: ");
    }
}
function bai6(){
    document.write("Các năm nhuận từ 1699-2008 là: ");
    for(var i=1699;i<=2008;i++){
        if(i%400==0){
            document.write(i);
        }
        else if(i%100!=0 && i%4==0){
            document.write(i);
        }
    }
}



