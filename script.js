function add() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 + n2);
}

function subtract() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 - n2);
}

function multiply() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + n1 * n2;
}

function divide() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  if (n2 === 0) {
    document.getElementById("result").innerText = "Result: infinity";
  } else {
    document.getElementById("result").innerText = "Result: " + n1 / n2;
  }
}
