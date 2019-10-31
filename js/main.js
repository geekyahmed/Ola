var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '~!@#$%^&*()_{}+:>?|}<';

var characterNumber = document.getElementById("characterNumber");
var numBox = document.getElementById("number");
var symBox = document.getElementById("symbol");
var submit = document.getElementById("submit");
var password = document.getElementById("password");

submit.addEventListener("click", function(e) {
  var characters = char;
  (numBox.checked) ? characters += num : '';
  (symBox.checked) ? characters += num : '';
  password.value = password(characterNumber.value, characters);
});

function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < 1; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}
