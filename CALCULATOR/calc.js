function results(value) {
  let write = document.getElementById("wypisz");
  let nowtext = write.innerHTML;
  let newtext = nowtext + value;
  write.innerHTML = newtext;
}
function cleartext() {
  let write = document.getElementById("wypisz");
  write.innerHTML = "";
}
function operation(value) {
  let write = document.getElementById("wypisz");
  let nowtext = write.innerHTML;
  if (
    nowtext.includes("+") ||
    nowtext.includes("-") ||
    nowtext.includes("*") ||
    nowtext.includes("/")
  ) {
    let result = eval(nowtext);
    write.innerHTML = result + value;
  } else {
    write.innerHTML += value;
  }
}
function pierwiastek() {
  let write = document.getElementById("wypisz");
  let nowtext = parseFloat(write.innerHTML);
  let result = Math.sqrt(nowtext);
  write.innerHTML = result;
}
function potega() {
  let write = document.getElementById("wypisz");
  let nowtext = parseFloat(write.innerHTML);
  let result = Math.pow(nowtext, 2);
  write.innerHTML = result;
}
function proc() {
  let write = document.getElementById("wypisz");
  let nowtext = parseFloat(write.innerHTML);
  let result = nowtext / 100;
  write.innerHTML = result;
}

let history = [];

function addToHistory(expression, result) {
  history.push({ expression: expression, result: result });
}
function displayHistory() {
  let historyContainer = document.getElementById("history");
  historyContainer.innerHTML = "";
  history.forEach((item, index) => {
    let historyItem = document.createElement("p");
    historyItem.textContent = `${item.expression} = ${item.result}`;
    historyContainer.appendChild(historyItem);
  });
}

function rowna() {
  let write = document.getElementById("wypisz");
  let nowtext = write.innerHTML;
  let lastChar = nowtext[nowtext.length - 1];
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    nowtext = nowtext.slice(0, -1);
  }
  let result = eval(nowtext);
  write.innerHTML = result;
  addToHistory(nowtext, result);
  displayHistory();
}
