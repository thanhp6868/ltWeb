function bai1() {
    var x = prompt("Please enter the first number: ", "");
    var y = prompt("Please enter the second number: ", "");
    if(x%y == 0)
    alert("Chia het");
    else alert("Khong chia het");
}

function bai2(){
    var a = prompt("Please enter the first number: ", "");
    var b = prompt("Please enter the second number: ", "");
    var c = prompt("Please enter the first number: ", "");
   
    var max = a;
    if(max<b){
        max =b;
    }
    else if(max<c){
        max = c ;
    }
    alert("so lon nhat: "+ max);
}