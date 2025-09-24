// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creando lista//
let amigos = [];
//Creando función para agregar amigo//
//La función debe://
//Capturar el valor campo entrada con document.getElementVyId ó document.querySelector//
//Validar la entrada, revisar que no esté vacío//
//Si está vacío, debe mandar un alert con mensaje error: "por favor, inserte un nombre."//
//Actualizar el array de amigos, si el valor es válido agregar el elemento a la lista amigos//
//Limpiar el campo de entrada, debe reestablecer en vacío el campo"
function agregarAmigo() {
    //Toma el valor ingresado en el campo y lo asigna a la variable nombreAmigo//
    let nombreAmigo = document.getElementById("amigo").value;
    //Revisión de si está o no vacío//
    if(nombreAmigo !== ""){
        //Si no está vacío, está agregando la entrada a la lista amigos//
        amigos.push(nombreAmigo);
        //Revisión de si está bien hasta agregar a la lista, imprimimos la lista en la consola//
        console.log(amigos);
    }
}