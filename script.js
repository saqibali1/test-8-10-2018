// write your JS code here


function showText(text){

 document.querySelector(".inputdiv > p ").innerHTML += text;
   console.log(text);
}



function sendMsg(){
 document.querySelector(".inputdiv > p").style.display = "none";
    
    alert("Your Message has been sent");


}