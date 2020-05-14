var items = document.querySelectorAll(".item");
var notify = document.querySelector(".notify");
var saveBtn = document.querySelector(".button");
var itemsTotal = document.querySelector(".items-total");
var itemCount = document.querySelector(".item-count");
var groceryBtn = document.querySelector(".button1");
var listItem = document.querySelector(".list-items");
var finalList = document.getElementById("list");
var headerBtn = document.querySelector(".select-button2");
var getList = document.querySelector(".button3");

var itemsSelected = [];
var i = 0;
while (i < items.length) {
  items[i].onclick = function (e) {
    var itemName = this.querySelector(".item-name").textContent;

    if (this.classList.contains("selected") !== true) {
      this.classList.add("selected");
      itemsSelected.push(itemName);
    } else {
      this.classList.remove("selected");
      itemsSelected = itemsSelected.filter(function (item) {
        return item !== itemName;
      });
    }

    listItem.textContent = itemsSelected[i];
  };
  i++;
}

saveBtn.onclick = function () {
  itemsTotal.textContent = itemsSelected.length + " item(s) saved";
  itemCount.textContent = itemsSelected.length;
  notify.classList.add("active");
  setTimeout(function () {
    notify.classList.remove("active");
  }, 4000);
};

loadEventListeners();
function loadEventListeners() {
  // add event Listener
  saveBtn.addEventListener("click", makeArray);
}

function makeArray(e) {
  if (itemsSelected.length > 0) {
    //create a list element
    var list = document.createElement("ul");

    for (var i = 0; i < itemsSelected.length; i++) {
      //create li
      var item = document.createElement("li");
      // set the contents
      item.appendChild(document.createTextNode(itemsSelected[i]));
      // add to list
      list.appendChild(item);
      listItem.appendChild(list);
    }
  } else {
    console.log("none selected");
  }

  //return constructed list
  return list;
}
groceryBtn.onclick = function () {
  if (finalList.classList.contains("list-active") == true) {
    finalList.classList.remove("list-active");
  }
};

getList.onclick = function () {
  if (finalList.classList.contains("list")) {
    finalList.classList.add("list-active");
  }
};

headerBtn.onclick = function () {
  if (finalList.classList.contains("list")) {
    finalList.classList.add("list-active");
  }
};
