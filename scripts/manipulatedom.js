window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
};

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  });
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.classList.add('tdNode');
  tdNode.appendChild(childNode);
  return tdNode;
}

function createEditButton(i) {
  let button = document.createElement("button");
  button.textContent = "Edit text";
  button.addEventListener('click', function() {
    let parentTd = this.parentNode;
    let input = document.createElement("input");
    input.type = "text";
    input.value = "Cell (" + i + ", 0)"; // Set the current cell coordinates as the value
    parentTd.replaceChild(input, parentTd.firstChild); // Replace the text node with the input

    input.addEventListener('blur', function() {
      parentTd.replaceChild(document.createTextNode(input.value), input);
      parentTd.appendChild(button); // Append the button again
    });

    this.remove(); // Remove the button while editing
  });
  return button;
}

function addTable() {
  const tableNode = document.createElement("table");
  tableNode.id = "editableTable"; // Add an ID to reference the table if needed
  
  for(let i = 0; i < 3; i++) {
    let textNode = document.createTextNode("Cell (" + i + ", 0)");
    let editButton = createEditButton(i);
    let col1 = createTDNode(textNode);
    let col2 = createTDNode(editButton);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  
  document.getElementById("root").appendChild(tableNode);
}
