var chartype = 0;  //updates with user selection

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

var passlength = 0;

function boxCheck() {
  var symbox = document.getElementById("symchk");
  var numbox = document.getElementById("numchk");
  var symbox = document.getElementById("lowchk");
  var symbox = document.getElementById("capchk");

  if(symbox.checked == true){
      alert("Your function worked!");
  // }else{
      
  // }
}}