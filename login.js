let allUsers=localStorage.getItem('allUsers');
let allUsersArr=[];
if(allUsers==null){
    allUsersArr=[
        {
            name: "admin",
            email: "admin@gmail.com",
            pass: "admin"
        }
    ];
}
else{
    allUsersArr=JSON.parse(allUsers);
}




// allusers=[
//     {
//         name: "admin",
//         email: "admin@gmail.com",
//         pass: "admin"
//     }
// ];


function verifyUser(){

    console.log(allUsersArr);
    var emailInput=document.getElementById('emailInput').value; 
    var passInput=document.getElementById('passInput').value;

    var found=false;
    var passwordToMatch;
    for(var i=0;i<allUsersArr.length;i++){
        if(allUsersArr[i].email==emailInput){
            found=true;
            passwordToMatch=allUsersArr[i].pass;
            break;
        }
    }
    
    if(!found){
        alert("email not registered!!");
        return false;
    }
    if(passwordToMatch!=passInput){
        alert("wrong password entered!!");
        return false
    }

}


function addUser(){
    var nameInput=document.getElementById('nameInput').value;
    var emailInput=document.getElementById('emailInput').value; 
    var passInput=document.getElementById('passInput').value;

    var newuser={
        name: nameInput,
        email: emailInput,
        pass: passInput
    }

    var found=false;
    for(var i=0;i<allUsersArr.length;i++){
        if(allUsersArr[i].email==emailInput){
            found=true;
            break;
        }
    }
    if(found){
        alert("email already registered!!");
        return false;
    }
    else{
        // allusers.push(newuser);
        allUsersArr.push(newuser);
        localStorage.setItem('allUsers',JSON.stringify(allUsersArr));
    }    
}


