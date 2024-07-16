function fun1(){
    var x=new Date();
    document.getElementsByClassName("hours") [0].innerHTML=x.getHours();
    document.getElementsByClassName("minutes") [0].innerHTML=x.getMinutes();
    document.getElementsByClassName("seconds") [0].innerHTML=x.getSeconds();
}

let one;
function fun4(){
    one = setInterval(fun1,1000);
    console.log("one")
}

function fun3(){
    clearInterval(one)
    console.log("one the way")
}



function timer(){
    let s=0;
    let m=0;
    function secs(){
    var seconds=document.getElementsByClassName("sec") [0];
    if(s<59){
        s=s+1;
    }
    else{
        s=0;
    }
    seconds.innerHTML=s
    }
    setInterval(secs,1000)
    function min(){
        var minutes=document.getElementsByClassName("min")[0];
        if(m<59){
            m=m+1;
        }
        else{
            m=0;
        }
        minutes.innerHTML=m;
    }
    setInterval(min,60000)
}
timer()