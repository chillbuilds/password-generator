
var str = "!@#$%^&*()_+=-[]{}\/?";
var sym = str.split("");

var str = "0123456789";
var num = str.split("");

var str = "abcdefghijklmnopqrstuvwxyz"
var low = str.split("");

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var cap = str.split("");

console.log(sym);
console.log(num);
console.log(low);
console.log(cap);

function lengthCheck(){
  
}

function boxCheck() {
  var symbox = document.getElementById("symchk");
  var numbox = document.getElementById("numchk");
  var lowbox = document.getElementById("lowchk");
  var capbox = document.getElementById("capchk");
  var passLength = document.getElementById("inputLength");

  if(symbox.checked == true || numbox.checked == true || 
    lowbox.checked == true || capbox.checked == true){
    alert("A box is checked")
    }else{
      alert("a box isn't checked")
    }

if(passLength > 7){
  alert("length is acceptable");
}else{
  alert("length is unacceptable")
}
}