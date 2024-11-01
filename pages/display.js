let cartItems = localStorage.getItem("cartItems");
let cartItemsArr = [];
if (cartItems == null) {
  cartItemsArr = [];
} else {
  cartItemsArr = JSON.parse(cartItems);
}

var totalPrice = 0;

let insertHTML = `
<ul>
`;

for (var i = 0; i < cartItemsArr.length; i++) {
  insertHTML += `
    <li>
    ${cartItemsArr[i].name}
    ${cartItemsArr[i].price}
    ${cartItemsArr[i].quantity}
    <button id="${cartItemsArr[i].name}" onclick="deleteItem(this.id) ">Delete</button>
    </li>
    `;
  totalPrice += cartItemsArr[i].price * cartItemsArr[i].quantity;
}

insertHTML += `</ul><br>`;

let insertHTML2 = `<h4>Total Price -> ${totalPrice}</h4> <button> <a href="payment.html" style="all:unset;"> Pay </button>`;

let displayCartField = document.getElementById("displayCartField");
let displayTotalField = document.getElementById("displayTotalField");

if (cartItemsArr.length == 0) {
  localStorage.setItem("totalPrice", 0);
  displayCartField.innerHTML = "<h5>No Items In cart</h5>";
} else {
  localStorage.setItem("totalPrice", totalPrice);
  displayCartField.innerHTML = insertHTML;
  displayTotalField.innerHTML = insertHTML2;
}

function deleteItem(ele) {
  var i = 0;
  for (i = 0; i < cartItemsArr.length; i++) {
    if (cartItemsArr[i].name == ele) {
      break;
    }
  }
  cartItemsArr.splice(i, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
  location.reload();
}
