import swal from 'sweetalert';
const formulario= document.querySelector("formcontato__form");
const inputs = document.querySelectorAll("formcontato__input");
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,50}$/, // Letras, numeros, guion y guion_bajo
	Asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	Mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}
const campos = {
	usuario: false,
	Asunto: false,
	correo: false,
	Mensaje: false
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.usuario, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'email');
		break;
		case "asunto":
			validarCampo(expresiones.Asunto, e.target, 'asunto');
			
		case "mensaje":
			validarCampo(expresiones.Mensaje, e.target, 'mensaje');
		break;
	}
}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		
		campos[campo] = true;
	} else {
		
		campos[campo] = false;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    if(campos.usuario && campos.Asunto && campos.correo && campos.Mensaje){
        formulario.reset();
        swal("Good job!", "You clicked the button!", "success");
          
    }else{
        alert("falta")
    }
})
