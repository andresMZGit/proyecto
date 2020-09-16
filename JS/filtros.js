const mostrar=document.getElementById('btn-a-z'),
    estadoNormal = document.getElementById('normal-prod-medicamentos'),
    filtroAZ=document.getElementById('medi-a-z'),
    filtroZA=document.getElementById('medi-z-a'),
    filtroMenor=document.getElementById('medi-menor'),
    filtroMayor=document.getElementById('medi-mayor'),
    cargando=document.getElementById('gif-carga');

mostrar.addEventListener('click', ()=>{
   
    //cargando.classList.add('active');
    //filtroZA.classList.remove('active');
    //filtroMenor.remove('active');
    //filtroMayor.remove('active');
    
    setTimeout(()=>{ 
        cargando.classList.remove('active'); 
        window.location = ''     
    },2000);
    estadoNormal.classList.remove('active');           
    filtroAZ.classList.add('active');
    
});

