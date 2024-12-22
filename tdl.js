let input = document.getElementById("inputbox");
let ul = document.getElementById("task");
let btn = document.getElementById("btn");
let cut = document.querySelector("span");

function add() {
  if (input.value === "") {
    alert("type something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  savedata();
}

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
    f;
  }
});

function savedata() {
  localStorage.setItem("data", ul.innerHTML);
}

function showlist() {
  ul.innerHTML = localStorage.getItem("data");
}
showlist();
