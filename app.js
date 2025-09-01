// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creando un array para almacenar los nombres
let listaNombres = [];

/*crear una  funcion para agregar los nombres a la lista de nombres:
* nombre de la funcion
* captar el nombre que se agrega en la pagina
* operación de agregar nombre a lista.
* mostrar la lista en una ul "listaAmigos"*/

function agregarAmigo() {
    
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Ingrese un Nombre");
    }else {
        listaNombres.push(nombre);
        //console.log(listaNombres);
        limpiarCampo();
        mostrarListaAmigos();
    }


}


function limpiarCampo(){
    document.getElementById("amigo").value = "";
}

function mostrarListaAmigos(){
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ''; // Limpia el contenido actual de la lista 
    for (let i = 0; i < listaNombres.length; i++) { let item = document.createElement("li"); 
        item.textContent = listaNombres[i]; lista.appendChild(item);}
    

}

function sortearAmigo() { 
    if (listaNombres.length === 0) { 
        alert("No hay amigos en la lista para sortear."); 
        return; } 
        let numeroSorteado = Math.floor(Math.random() * listaNombres.length); 
        let amigoSorteado = listaNombres[numeroSorteado]; 
        alert("El amigo sorteado es: " + amigoSorteado); 
}
