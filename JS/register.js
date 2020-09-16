var btnAbrir_reg = document.getElementById('registro'),
    overlayReg = document.getElementById('overlay-reg'),
    ventanaReg = document.getElementById('container-reg'),
    btnCerrar_reg = document.getElementById('close-reg')
    
    btnAbrir =  document.getElementById('btn-login');

btnAbrir_reg.addEventListener('click', function(){
    overlayReg.classList.add('active');
    ventanaReg.classList.add("active");
});

btnCerrar_reg.addEventListener('click', function(){
    overlayReg.classList.remove('active');
    ventanaReg.classList.remove("active");
});

//abrir iniciar sesion con el boton 'Inicia Sesion'
btnAbrir.addEventListener('click', function(){
    overlayReg.classList.remove('active');
    ventanaReg.classList.remove('active');
    overlay.classList.add('active');
    ventana.classList.add('active');
});  