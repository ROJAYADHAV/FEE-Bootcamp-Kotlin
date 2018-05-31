
var result ="";
var display="";
var num="";


localStorage.setItem("result",result);
localStorage.setItem("display",display);
localStorage.setItem("num",num);
function getNumber(evt){
   
      
 var charCode = (evt.which) ? evt.which : event.keyCode  //reflects the typed content
  /* console.log(charCode);
   if (charCode > 31 && (charCode < 42 || charCode > 57)  && charCode==44 && charCode !=61)
      return false;

   return true;
/*if((charCode>41  &&  charCode<58 && charCode!=44 )|| charCode ==61 ||charCode ==13){
       return true;
   }
   else {
       return false;
   }
*/

//document.getElementById("span").innerHTML = String.fromCharCode(charCode);


if(charCode == 13){
    localStorage.display="";
    localStorage.result = eval(localStorage.getItem("result"));
    setVal();

}
else if(charCode == 8){
    localStorage.display=localStorage.getItem("display").slice(0,-1);
    localStorage.result = localStorage.getItem("result").slice(0,-1);
    setVal();
}
else if(charCode == 42 || charCode== 43 || charCode == 45 || charCode ==47){
    localStorage.result = String(eval(localStorage.getItem("result")));
    document.getElementById("value").innerHTML="";
    localStorage.num = localStorage.getItem(result);
    localStorage.result = localStorage.getItem("result")+String.fromCharCode(charCode);
    localStorage.display = localStorage.getItem("display")+String.fromCharCode(charCode);
   // console.log(num);
    //console.log(result);
    setVal();
    
}
else if( charCode>= 48 && charCode<=57){
    localStorage.result = localStorage.getItem("result")+String.fromCharCode(charCode);
    localStorage.display = localStorage.getItem("display")+String.fromCharCode(charCode);
    setVal();
}
else {
    alert("input not valid");
    document.getElementById("value").innerHTML= "";
    setVal();
}

console.log(localStorage.getItem("display")+"d");
console.log(localStorage.getItem("result")+"r");
console.log(localStorage.getItem("num")+"n");
}


function setVal(){
    document.getElementById("span").innerHTML = localStorage.getItem("display");
document.getElementById("value").innerHTML= localStorage.getItem("num");
}