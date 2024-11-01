var payment=localStorage.getItem('totalPrice');

let elem=document.getElementById('show-pay');

elem.innerHTML=`Successfully paid : ₹${payment}`;