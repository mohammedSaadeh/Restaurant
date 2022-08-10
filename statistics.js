'use strict';


var dataArr=[];


function getData() {
  let retarveData = localStorage.getItem("Food"); 
  dataArr = JSON.parse(retarveData); 
  // console.log(dataArr);
  // if (dataArr.length !== 0) {
  //   for (let i = dataArr.length; i < dataArr.length; i++) {
  //     new generateFood(dataArr[i].id,dataArr[i].foodName,dataArr[i].type,dataArr[i].price);
  //   //  console.log(newItem);
  //     menu.render();
  //   }
  // }
}
getData();



var tableEl = document.getElementById("tableMain");

// generateFood.prototype.render = 
function render(obj) {
  let trEl = document.createElement("tr");
  tableEl.appendChild(trEl);

  let tdEl1 = document.createElement("td");
  tdEl1.textContent = obj.id;
  trEl.appendChild(tdEl1);

  let tdEl2 = document.createElement("td");
  tdEl2.textContent = obj.foodName;
  trEl.appendChild(tdEl2);

  let tdEl3 = document.createElement("td");
  tdEl3.textContent = obj.type;
  trEl.appendChild(tdEl3);

  let tdEl4 = document.createElement("td");
  tdEl4.textContent = obj.price;
  trEl.appendChild(tdEl4);
}


for (let i=0;i<dataArr.length; i++){
  render(dataArr[i]);
}

//   let countId = 0;
//   const menu=[];
// function generateFood(foodName,type,price) {
//     this.id = ++countId;
//     this.foodName=foodName;
//     this.type=type;
//     this.price=price;
//     menu.push(this);
// }



// function saveData(data) {
//     let stringObject = JSON.stringify(data);
//     localStorage.setItem("ITEMS", stringObject);
//   }