function results(value){
   let write =  document.getElementById("wypisz");
   let nowtext = write.innerHTML;
   let newtext = nowtext + value;
   write.innerHTML = newtext;
}