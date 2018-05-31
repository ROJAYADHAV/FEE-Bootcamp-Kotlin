function getNumber(evt){
   
      
 var charCode = (evt.which) ? evt.which : event.keyCode  //reflects the typed content
   console.log(charCode);
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




}