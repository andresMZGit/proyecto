const btnAbrirMenu = document.getElementById('menu-prod'),  
      grid = document.getElementById('grid'),
      categorias = document.getElementById('categorias-menu'),
      sub =document.getElementById('.subcategoria'),
      abrirLista = document.getElementById('contenedor-lista'),      
      buscador = document.getElementById('input-buscador'),
      abrirOverQS = document.getElementById('data-far'),
      quienesSomos = document.getElementById('click-farma');


btnAbrirMenu.addEventListener('mouseover', ()=>{
    grid.classList.add('active');
});

grid.addEventListener('mouseleave', ()=>{
    grid.classList.remove('active');
});

document.querySelectorAll('#menu .categorias a').forEach((dato)=>{
    dato.addEventListener('mouseenter', (d)=>{
        //console.log(d.target.dataset.categoria);
        document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
            //console.log(categoria.dataset.categoria);
            categoria.classList.remove('active');
            if(categoria.dataset.categoria == d.target.dataset.categoria){
                categoria.classList.add('active');
            }
        });
    });
});

buscador.addEventListener('keydown', ()=>{
    abrirLista.classList.add('active');
});

buscador.addEventListener('mouseover', ()=>{
    abrirLista.classList.remove('active');
});

quienesSomos.addEventListener('click', ()=>{
    abrirOverQS.classList.add('active');    
});

abrirOverQS.addEventListener('mouseleave', ()=>{
    abrirOverQS.classList.remove('active');
});
