const compra= new Bolsa();
const listaCompra = document.querySelector('#lista-productos tbody');
const bolsaPagar = document.getElementById('carrito');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLScompra());

    bolsaPagar.addEventListener('click', (e) => {compra.eliminarProducto(e)});

    compra.calcularValores();

    bolsaPagar.addEventListener('change', (e) => { compra.modificarCantidad(e) });
    bolsaPagar.addEventListener('keyup', (e) => { compra.modificarCantidad(e) });

}