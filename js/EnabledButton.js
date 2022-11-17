

document.getElementById("text1").addEventListener("keyup", Habilitar);
document.getElementById("text2").addEventListener("keyup", Habilitar);
document.getElementById("text3").addEventListener("keyup", Habilitar);
document.getElementById("text4").addEventListener("keyup", Habilitar);


function Habilitar(){
    T1= document.getElementById("text1").value;
    T2= document.getElementById("text2").value;
    T3= document.getElementById("text3").value;
    T4= document.getElementById("text4").value;
    val =0;

    if(T1==""){
        val++;
    }
    if(T2==""){
        val++;
    }
    if(T3==""){
        val++;
    }
    if(T4==""){
        val++;
    }
    if(val==0){
        document.getElementById("btn").disabled= false;
     
        
    }else{
        document.getElementById("btn").disabled= true;
    }
}
const form= document.querySelector("formcontato__form");


const formulario= document.getElementById("btn");
formulario.addEventListener("submit", (e)=>{
    e.target=swal("Good job!", "You are register", "success");

});