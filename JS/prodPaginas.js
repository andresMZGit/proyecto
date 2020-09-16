const paginas = new Bolsa();
const listaProductosAgg = document.querySelector('#productos-agregados tbody');
const deletePro = document.getElementById('capturador');


cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', paginas.leerLSPaginas());

    deletePro.addEventListener('click', (e)=>{paginas.eliminarProducto(e)});

    paginas.calcularValorNeto();
}