
var result="";
var display="";
var num="";
 localStorage.setItem("result",result);
 localStorage.setItem("display",display);
 localStorage.setItem("num",num);
 
 
function getNumber(evt){
   
      
 // var charCode = (evt.which) ? evt.which : event.keyCode  //reflects the typed 
// if(!(charCode>=48 && charCode<=57 ||charCode==42||charCode==43||charCode==45||charCode==46||charCode==47))
  //  return false;
 /* // console.log(charCode);
   //if (charCode > 31 && (charCode < 42 || charCode > 57)&&charCode)
    if((charCode>41 && charcode <58)&& charcode!=44)
      return true;
else
   return false;
/*if((charCode>41  &&  charCode<58 && charCode!=44 )|| charCode ==61 ||charCode ==13){
       return true;
   }
   else {
       return false;
   }
*/


/*if(charCode==13){
    console.log(eval(result));
}
else {
var res = String(String.fromCharCode(charCode));
  result = result + res;
  console.log(result);
  document.getElementById("span").innerHTML=result;
  
}*/



}



