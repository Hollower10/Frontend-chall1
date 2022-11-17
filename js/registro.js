const form= document.querySelector("formcontato__form");
const formulario= document.getElementById("btn");
formulario.addEventListener('click', (e) => {
	e.preventDefault();
    
});
function able(){ 
    swal("Good job!", "You are register", "success");
    form.reset();
}
formulario.onclick(able);