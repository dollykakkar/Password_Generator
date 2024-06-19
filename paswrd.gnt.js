let inputBox=document.getElementById("input");
let upper=document.getElementById("upper");
let lower=document.getElementById("lower");
let number=document.getElementById("number");
let symbol=document.getElementById("symbol");
let button=document.getElementById("btn");
let str1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str2="abcdefghijklmnopqurstuvwxyz";
let str3="1234567890";
let str4="~!@#$%^&*`+=_-";
function generate(){
    if(upper.checked)
        {
            let pass=""
        for(let i=0;i<=12;i++){
            let str=Math.floor(Math.random()*str1.length);
            let a=str1[str];
            pass+=a 
          
            console.log(a);
        } 
         inputBox.value =pass;
    }
    else if(lower.checked)
        {
        let pass=""
        for(let i=0;i<=12;i++){
            let str=Math.floor(Math.random()*str2.length);
            let a=str2[str]
            pass+=a
            
            console.log(a);
        } 
        inputBox.value=pass;
    }
    else if(number.value='true'){
        let pass=""
        for(let i=0;i<=8;i++){
            let str=Math.floor(Math.random()*str3.length);
            let a=str3.substring(str,str+1);
            pass+=a
            console.log(a);
        } 
        inputBox.value+=pass;
    }
    else if(symbol.value='true'){
        let pass=""
        for(let i=0;i<=6;i++){
            let str=Math.floor(Math.random()*str4.length);
            let a=str4.substring(str,str+1);
            pass+=a
            console.log(a);
        } 
        inputBox.value+=pass
    }
}
function reset() {
    inputBox.value=("");
}

