function results(value){
   let write =  document.getElementById("wypisz");
   let nowtext = write.innerHTML;
   let newtext = nowtext + value;
   write.innerHTML = newtext;
}
function cleartext(){
    let write = document.getElementById("wypisz");
    write.innerHTML = "";
}