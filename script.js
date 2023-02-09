// let vardas = document.querySelectorAll("input")[0];
// let pavarde = document.querySelectorAll("input")[1];
// let amzius = document.querySelectorAll("input")[2];
// let addBtn = document.querySelectorAll("button")[0];
// let removeFirstBtn = document.querySelectorAll("button")[1];
// let removeLastBtn = document.querySelectorAll("button")[2];
// let table = document.querySelector("table");

// addBtn.addEventListener("click", function() {
//   if (!vardas.value || !pavarde.value || !amzius.value) {
//     alert("Please enter all the information!");
//     return;
//   }
//   if (amzius.value <= 0) {
//     alert("Age should be greater than 0!");
//     return;
//   }

//   let row = table.insertRow(-1);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//   let cell3 = row.insertCell(2);
//   cell1.innerHTML = vardas.value;
//   cell2.innerHTML = pavarde.value;
//   cell3.innerHTML = amzius.value;

//   vardas.value = "";
//   pavarde.value = "";
//   amzius.value = "";
// });

// removeFirstBtn.addEventListener("click", function() {
//   table.deleteRow(1);
// });

// removeLastBtn.addEventListener("click", function() {
//   table.deleteRow(-1);
// });

// const inputs = document.querySelectorAll("input");
// const addBtn = document.querySelector("button:first-of-type");
// const removeFirstBtn = document.querySelector("button:nth-of-type(2)");
// const removeLastBtn = document.querySelector("button:nth-of-type(3)");
// const table = document.querySelector("table");

// addBtn.addEventListener("click", function() {
//   let name = inputs[0].value;
//   let surname = inputs[1].value;
//   let age = inputs[2].value;

//   if (!name || !surname || !age) {
//     alert("Please enter all the details");
//     return;
//   }

//   if (age <= 0) {
//     alert("Age must be greater than 0");
//     return;
//   }

//   let row = table.insertRow(-1);
//   let nameCell = row.insertCell(0);
//   let surnameCell = row.insertCell(1);
//   let ageCell = row.insertCell(2);
//   nameCell.innerHTML = name;
//   surnameCell.innerHTML = surname;
//   ageCell.innerHTML = age;

//   inputs[0].value = "";
//   inputs[1].value = "";
//   inputs[2].value = "";
// });

// removeFirstBtn.addEventListener("click", function() {
//   table.deleteRow(1);
// });

// removeLastBtn.addEventListener("click", function() {
//   let rows = table.rows.length;
//   table.deleteRow(rows - 1);
// });


const input1 = document.querySelectorAll("input")[0];
const input2 = document.querySelectorAll("input")[1];
const input3 = document.querySelectorAll("input")[2];
const addButton = document.querySelectorAll("button")[0];
const removeFirstButton = document.querySelectorAll("button")[1];
const removeLastButton = document.querySelectorAll("button")[2];
const table = document.querySelector("table");

addButton.addEventListener("click", function() {
  if (!input1.value || !input2.value || !input3.value) {
    alert("Please enter all the required details");
    return;
  }

  if (input3.value <= 0) {
    alert("Age cannot be less than or equal to zero");
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
