function addItem() {
    var newItemText = document.getElementById("newItem").value;
    if (newItemText.trim() === "") {
      alert("Please enter a valid item!");
      return;
    }
  
    var checklist = document.getElementById("checklist");
    var li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="toggleItem(this)"> <span class="item-text">${newItemText}</span> <button class="remove-btn" onclick="removeItem(this)">✖</button>`;
    checklist.appendChild(li);
  
    document.getElementById("newItem").value = "";
  }
  
  function removeItem(removeButton) {
    var listItem = removeButton.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  
  function toggleItem(checkbox) {
    var listItem = checkbox.parentNode;
    if (checkbox.checked) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }
  }
  