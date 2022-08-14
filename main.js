let input = document.querySelector(".input");
let inputHistory = document.querySelector(".input-history");
function insert(num) {
  input.textContent = input.textContent + num;
}
function clean() {
  input.textContent = "";
}
function backspace() {
  input.textContent = input.textContent.substring(
    0,
    input.textContent.length - 1
  );
}
function equel() {
  if (input.textContent) {
    {
      inputHistory.textContent = input.textContent;
    }
    input.textContent = eval(inputHistory.textContent);
  } else {
    inputHistory.textContent = "";
  }
}
