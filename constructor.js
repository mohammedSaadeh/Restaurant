'use strict';


let formEl=document.getElementById('form');
formEl.addEventListener('submit',submitFun);

function submitFun(sub) {
    sub.preventDefault();
    // console.log(sub)
    let foodName=sub.target.name.value;
    let typeOfFood=sub.target.types.value;
    let price=sub.target.price.value;
    // console.log(foodName,typeOfFood,price)
    const newFood = new generateFood(foodName, typeOfFood, price);
    newFood.render();
}

let countId = 0;

// const menu=[];
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
