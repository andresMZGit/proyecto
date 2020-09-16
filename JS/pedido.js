const bolsa=new Bolsa();
const bolsita=document.getElementById('solo-table');
const productos=document.getElementById('lista-productos');
const listaProductos=document.querySelector('#productos-agregados tbody');
const vaciarElementos=document.getElementById('vaciar-bolsa');
const irApagar=document.getElementById('pagar-productos');


cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>{bolsa.comprarProducto(e)});   

    bolsita.addEventListener('click', (e)=>{bolsa.eliminarProducto(e)}); 
    
    vaciarElementos.addEventListener('click', (e)=>{bolsa.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', bolsa.leerDatosLS());


    //redireccion a la pagina de realizar pago
    irApagar.addEventListener('click', (e)=>{bolsa.realizarCompra(e)});
}