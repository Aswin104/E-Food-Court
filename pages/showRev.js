let feedback=localStorage.getItem('feedback');
let feedbackArr=[];
if(feedback==null){
    feedbackArr=[];
}
else{
    feedbackArr=JSON.parse(feedback);
}

console.log("hello");

let elem=document.getElementById("review-cont");

var insertHTML=`<ul>`;

for(var i=0;i<feedbackArr.length;i++){
    insertHTML+=`
    <li>${feedbackArr[i]}</li>
    `;
}

insertHTML+=`</ul>`;

if(feedbackArr.length==0){
    elem.innerHTML="<h5>No Reviews</h5>";
}
else{
    elem.innerHTML=insertHTML;
}