function Pasta(grain, size, shape) {  
    this.grain = grain;   
    this.size = size;   
    this.shape = shape;   
}  
var spaghetti = new Pasta("wheat", 2, "circle");  
var names = Object.getOwnPropertyNames(spaghetti).filter(CheckKey);
function CheckKey(value){
    debugger
    var firstChar = value.substr(0,1);
    debugger
    console.log(firstChar);
    if(firstChar.toLowerCase() == "s"){
        return true;
    }else return false;
}
function setCookie(){
    document.cookie="name=janu";
}
function getCookie()  
{  
    debugger
    if(document.cookie.length!=0)  
    {  
    alert(document.cookie);  
    }  
    else  
    {  
    alert("Cookie not available");  
    }  
}  