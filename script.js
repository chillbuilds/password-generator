var sym = "!@#$%^&*()_+=";
var num = "0123456789";
var low = "abcdefghijklmnopqrstuvwxyz";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordString = "";
var charLength = false;
var boxChecked = false;
var numHolder = 0;
var password = "";
var generateBtn = document.querySelector("#generateButton");
var copyBtn = document.querySelector("#copyButton");
var numEl = document.querySelector("#inputNum");
var symChkEl = document.getElementById("symChk");
var numChkEl = document.getElementById("numChk");
var lowChkEl = document.getElementById("lowChk");
var capChkEl = document.getElementById("capChk");

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
  } else {
    boxChecked = false;
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

  if (boxChecked == true && charLength == true) {
    randomCharacters(passwordString);
    password = randomCharacters(numHolder * 1);
    document.getElementById("password").value = password;
  }

  if (charLength == false) {
    alert("Password Length Must Be Between 8 and 128 Characters");
  }
  if (boxChecked == false) {
    alert("Please Choose Password Criteria");
  }
}

function randomCharacters(letters) {
  var characters = passwordString;
  var result = "";
  for (var i = 0; i < letters; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

function copy() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password Copied To Clipboard");
}

generateBtn.addEventListener("click", generate);

copyBtn.addEventListener("click", copy);

numEl.addEventListener("keyup", numUpdate);

symChkEl.addEventListener("change", boxCheckUpdate);
numChkEl.addEventListener("change", boxCheckUpdate);
lowChkEl.addEventListener("change", boxCheckUpdate);
capChkEl.addEventListener("change", boxCheckUpdate);
