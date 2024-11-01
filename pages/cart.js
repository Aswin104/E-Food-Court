let cartItems=localStorage.getItem('cartItems');
let cartItemsArr=[];
if(cartItems==null){
    cartItemsArr=[];
}
else{
    cartItemsArr=JSON.parse(cartItems);
}

function additem(ele){
    ele=ele.parentElement;
    ele=ele.innerHTML;
    for(var i=0;i<ele.length;i++){
        if(ele[i]=='<'){
            ele=ele.slice(0,i);
            break;
        }
    }
    var itemDetail=ele.split(" ");
    // console.log("food: ",itemDetail);
    var itemName="";
    for(var i=0;i<itemDetail.length-2;i++){
        itemName+=itemDetail[i];
        itemName+=" ";
    }
    var itemPrice=itemDetail[itemDetail.length-2];
    itemPrice=parseInt(itemPrice);
    var item={
        name: itemName,
        price: itemPrice,
        quantity: 1
    }
    var present=false;
    for(var i=0;i<cartItemsArr.length;i++){
        if(cartItemsArr[i].name==itemName){
            present=true;
            cartItemsArr[i].quantity+=1;
            localStorage.setItem('cartItems',JSON.stringify(cartItemsArr));
            break;
        }
    }
    if(!present){
        cartItemsArr.push(item);
        localStorage.setItem('cartItems',JSON.stringify(cartItemsArr));
    }
}