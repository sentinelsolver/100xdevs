const outputEl = document.getElementById('output');
let sum=0;

function add(){
        sum+=1
        outputEl.innerHTML=sum;
}

function sub(){
    sum-=1;
    outputEl.innerHTML=sum;
}


