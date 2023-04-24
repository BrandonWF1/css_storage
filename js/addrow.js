let count=3;


function addRow() {

  var tableBody = document.getElementById("tableBody");
  var newRow = document.createElement("tr");
  var newCell = document.createElement("td");
      newCell.innerHTML=count+1;
  var newInput = document.createElement("input");
  newRow.appendChild(newCell);
  for (var i = 0; i < 2; i++) {
    var newCell = document.createElement("td");
    var newInput = document.createElement("input");
    newRow.appendChild(newCell);
    newCell.appendChild(newInput);
    newInput.setAttribute('name',count+"Input")
  }
  tableBody.appendChild(newRow);
  count= count+1;
}

