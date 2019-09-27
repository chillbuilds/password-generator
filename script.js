var sym = "!@#$%^&*()_+=-";
var num = "0123456789";
var low = "abcdefghijklmnopqrstuvwxyz";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordString = "";
var charLength = false;
var boxChecked = false;
var numHolder = 0;
var y = 5;
var z = 1;
var password = "";

function numUpdate() {
  var x = document.getElementById("inputNum").value;
  if (x >= 8 && x <= 128) {
    charLength = true;
    numHolder = document.getElementById("inputNum").value;
  } else {
    charLength = false;
    numHolder = document.getElementById("inputNum").value;
  }
  
}

function boxCheckUpdate() {
  var symBox = document.getElementById("symChk");
  var numBox = document.getElementById("numChk");
  var lowBox = document.getElementById("lowChk");
  var capBox = document.getElementById("capChk");

  if (
    symBox.checked == true ||
    numBox.checked == true ||
    lowBox.checked == true ||
    capBox.checked == true
  ) {
    boxChecked = true;
    console.log(boxChecked);
  } else {
    boxChecked = false;
    console.log(boxChecked);
  }
}

function generate() {
  passwordString = "";
  var symBox = document.getElementById("symChk");
  var numBox = document.getElementById("numChk");
  var lowBox = document.getElementById("lowChk");
  var capBox = document.getElementById("capChk");

  if (symBox.checked == true) {
    passwordString = passwordString + sym;
  }
  if (numBox.checked == true) {
    passwordString = passwordString + num;
  }
  if (lowBox.checked == true) {
    passwordString = passwordString + low;
  }
  if (capBox.checked == true) {
    passwordString = passwordString + cap;
  }

if (boxChecked == true && charLength == true){
    randomCharacters(passwordString);
    password = randomCharacters(numHolder * 1);
    document.getElementById("password").value = password;
}

  if (boxChecked == false) {
    alert("Please Choose Password Criteria");
  }
  if(charLength == false){
      alert("Password Length Must Be Between 8 and 128 Characters")
  }
  console.log(password);
}

function randomCharacters(letters) {
  var characters = passwordString;
  var result = '';
  for (var i = 0; i < letters; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
    return result;
}

function copyFunction() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
  alert("Password Copied To Clipboard");
}
