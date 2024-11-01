let feedback=localStorage.getItem('feedback');
let feedbackArr=[];
if(feedback==null){
    feedbackArr=[];
}
else{
    feedbackArr=JSON.parse(feedback);
}

function addFeed(){
    var feed=document.getElementById('feed').value;
    feedbackArr.push(feed);
    localStorage.setItem('feedback',JSON.stringify(feedbackArr));
    
    return true;
}
