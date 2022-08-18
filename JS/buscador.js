const buscador = document.querySelector('#buscador');
const btnBuscador = document.querySelector('.icono__buscador');

let buscadorPiezas = () => {
    if(buscador.value){
        window.location.href = `./pieza.html?search=${buscador.value}`;
    }
}

btnBuscador.addEventListener("click", buscadorPiezas);
buscador.addEventListener("keypress", (evento) => {
    if(evento.key === 'Enter'){
        buscadorPiezas();
    }
});