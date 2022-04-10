let nick = document.querySelector(".input_name");
let password = document.querySelector(".input_password");
let password_check = document.querySelector(".input_check");
let button = document.querySelector(".button");
let out = document.querySelector(".output");

let array = new Set();
let a = array.add("qwerty");
console.log(a);
let names;
console.log(array.has("qwerty"));
button.addEventListener("click", () => {
  if ((password.value == password_check.value, array.has(nick.value) != true)) {
    
    out.textContent="";
    out.textContent += "Добро пожаловать ";
    array.add(nick.value);

    for (let elements of array) {
      names = elements;
    }
    
    console.log(array.has(names));
  } else if (
    nick.value != "" &&
    password.value != "" &&
    password_check.value != "" &&
    array.has(names) == true
  ) {
    
    out.textContent="";
    out.textContent += "Ник занят или пароли не совпадают ";
  } else {
    alert("Заполните все поля");
  }
});

