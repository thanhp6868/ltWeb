function bai1(){
    var s=0;
    for(var i = 1;i<=200;i++){
        s+=i;
    }
    document.write("Tổng các số từ 1 đến 200 là: "+s);
}
function bai2(){
    var s=0;
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
