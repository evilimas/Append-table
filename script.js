
const input1 = document.querySelectorAll("input")[0];
const input2 = document.querySelectorAll("input")[1];
const input3 = document.querySelectorAll("input")[2];
const addButton = document.querySelectorAll("button")[0];
const removeFirstButton = document.querySelectorAll("button")[1];
const removeLastButton = document.querySelectorAll("button")[2];
const table = document.querySelector("table");

addButton.addEventListener("click", function() {
  if (!input1.value || !input2.value || !input3.value) {
    alert("Prasome ivesti reikiama informacija!");
    return;
  }

  if (input3.value <= 0) {
    alert("Amzius negali buti nulis ar maziau!");
    return;
  }

  const newRow = table.insertRow(-1);
  newRow.classList.add("table");

  const nameCell = newRow.insertCell(0);
  const surnameCell = newRow.insertCell(1);
  const ageCell = newRow.insertCell(2);

  nameCell.innerHTML = input1.value;
  surnameCell.innerHTML = input2.value;
  ageCell.innerHTML = input3.value;

  input1.value = "";
  input2.value = "";
  input3.value = "";
});

removeFirstButton.addEventListener("click", function() {
    if (table.rows.length <= 1) {
        alert("Nebera ka trinti!");
        return;
      }
      table.deleteRow(1);
    });

removeLastButton.addEventListener("click", function() {
    if (table.rows.length <= 1) {
        alert("Nebera ka trinti!");
        return;
      }
      table.deleteRow(1);
    });
