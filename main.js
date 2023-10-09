function dx1(){
var palavra1 = document.getElementById('palavra1').value;
var palavra2 = document.getElementById('palavra2').value;
const texto = document.querySelector("h2");

if(palavra1.length > palavra2.length){
    texto.innerHTML = "A";
    maxLength=(20);
}
else if(palavra2.length > palavra1.length){
    texto.innerHTML = "B";
    maxLength=(20);
}
}
