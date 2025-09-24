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
        //Limpiando el campo//
        document.getElementById("amigo").value = "";
        //Aquí vamos a llamar a la función actualizarLista para que una vez que pongamos//
        //clic en agregar amigo, además de limpiar el campo, actualice la lista de HTML//
        actualizarLista() //la estamos llamando porque la definimos y armamos pero no se ejecuta en ningún momento"
        //Indicamos la acción si el campo no cumple con el if, es decir, si está vacío, ya que el if pregunta si tiene un valor//
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

//Implementa una función para actualizar la lista de amigos//
//Crea una función que recorra el array amigos y agregue c/nombre como un elemento "li"//
//dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos//
//1.Obtener el elemento de la lista. Usar document.getElementById() o document.querySelector()//
//para seleccionar la lista donde se mostrarán los amigos//
//2. Limpiar la lista existente. EStablecer lista.innerHTML = "" para//
//asegurarse de que no haya duplicados al actualizar//
//3. Iterar sobre el arreglo: usar un bucle for para recorrer el arreglo amigos//
//y crear elementos de lista "li" para cada título//
//4. Agregar elementos a la lista, para c/amigo, crear un nuevo elemento de lista//
function actualizarLista() {
    //Primero vamos a definir un elemento llamado lista que sea la listaAmigos del HTML.//
    let listaHTML = document.getElementById("listaAmigos");
    //después voy a limpiar la lista del HTML para que cuando recorra mi array de JS y lo pase a mi lista de HTML no se dupliquen los valores//
    listaHTML.innerHTML = "";
    //Ahora con la lista limpia, voy a recorrer el arreglo amigos de js y voy a crear "li" que sería cada uno de los elementos//
    //Estoy usando un for que correrá desde i=0, osea el primer valor de la lista//
    // hasta el valor antes del tamaño de la lista, ya que el primer valor de la lista inicia en 0//
    //pero la longitud la mide contando los elementos desde 1, por éso debemos usar el valor anterior al//
    //largo de la lista, además estoy indicando que va a ir recorriendo elemento por elemento con el ++//
    for (let i=0; i < amigos.length; i++) {
        //Voy a definir un elemento "li" en js, que es el elemento que estoy creando en el HTML llamado "li"//
        let li = document.createElement("li");
        //Ahora voy a asignar al elemento "li" del HTML el valor de la lista de js amigos[i] que le corresponda a la posición i//
        li.textContent = amigos[i];
        //Ahora agrego el elemento li que es el elemento contenido en la lista amigos[] en la posición i, a la lista de HTML//
        listaHTML.appendChild(li);
    }    
    }

    //Ahora hay que crear una función para sortear a un amigo//
    //Se debe validad que la lista no esté vacía//
    //Se debe generar un índice aleatorio usando Math.random() y Math.floor()//
    //Se debe obtener el nombre sorteado usando el índice aleatorio//
    //Se debe mostrar el resultado, actualizar contenido de resultado//
    //usando document.getElementById() e innerHTML para mostrar al amigo sorteado//
    function sortearAmigo() {
        //revisamos si hay amigos en la lista//
        if (amigos.length === 0) {
            //Si no hay amigos mandamos un alert para indicar que no hay amigos//
            alert("No hay amigos para sortear. Agrega al menos un amigo por favor.");
            //En caso de no haber amigos salidmos de la función//
            return;
        }
        //Definimos una posiciónAleatoria dentro de la función//
        let posicionAleatoria = Math.floor(Math.random()*amigos.length);
        //Una vez que tenemos ya una posición aleatoria del índice de la lista, obtenemos el nombre del amigo secreto//
        let amigoSecreto = amigos[posicionAleatoria];
        //una vez que tenemos el valor de nuestro amigo secreto, lo vamos a mostrar en el HTML.//
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${amigoSecreto}</li>`;
    }