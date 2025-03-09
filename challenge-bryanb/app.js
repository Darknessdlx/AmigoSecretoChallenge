// Declaración del arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al arreglo y mostrarlo en la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        mostrarListaAmigos();
        inputAmigo.value = ''; // Limpiar el campo de entrada
    }
}

// Función para mostrar la lista de amigos en el elemento con id 'listaAmigos'
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar y mostrar el resultado en la lista con id 'resultado'
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el resultado actual
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}
