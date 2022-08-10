'use strict';



  let countId = 0;
//   const menu=[];
function generateFood(foodName,type,price) {
    this.id = ++countId;
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    // menu.push(this);
}

var tableEl = document.getElementById("tableMain");

generateFood.prototype.render = function () {
  let trEl = document.createElement("tr");
  tableEl.appendChild(trEl);

  let tdEl1 = document.createElement("td");
  tdEl1.textContent = this.id;
  trEl.appendChild(tdEl1);

  let tdEl2 = document.createElement("td");
  tdEl2.textContent = this.foodName;
  trEl.appendChild(tdEl2);

  let tdEl3 = document.createElement("td");
  tdEl3.textContent = this.type;
  trEl.appendChild(tdEl3);

  let tdEl4 = document.createElement("td");
  tdEl4.textContent = this.price;
  trEl.appendChild(tdEl4);
}

function getData() {
    let retarveData = localStorage.getItem("Items"); 
    let dataArr = JSON.parse(retarveData); 
  
    if (dataArr !== null) {
      for (let i = 0; i < dataArr.length; i++) {
        new generateFood(dataArr[i].id,dataArr[i].name,dataArr[i].type,dataArr[i].price);
        generateFood.render();
      }
    }
  }
  getData();

// function saveData(data) {
//     let stringObject = JSON.stringify(data);
//     localStorage.setItem("ITEMS", stringObject);
//   }
  
