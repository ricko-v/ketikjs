function ketik(text,speed,id,color){
var i = 0;
tulis();
 
 function tulis(){
 var teks = text;
 if(i < teks.length){
 document.getElementById(id).innerHTML += teks.charAt(i);
 document.getElementById(id).style.color = color;
 i++;
 setTimeout(tulis,speed);
 }
 }
}
