const abrirBolsa=document.getElementById('look-bolsa2'),
    abrirContenedor=document.getElementById('container-bolsa2'),
    cerrarBolsa=document.getElementById('cerrar-bolsa');

abrirBolsa.addEventListener('click', function(){
    abrirContenedor.classList.add('active');
});

cerrarBolsa.addEventListener('click', function(){
    abrirContenedor.classList.remove('active');
})



