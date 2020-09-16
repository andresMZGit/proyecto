var btnAbrir = document.getElementById('inicio-s'),
    overlay = document.getElementById('overlay-login'),
    ventana = document.getElementById('container-login'),
    btnCerrar = document.getElementById('close-over'),

    btnContraseña = document.getElementById('btn-contraseña'),
    btnAbrir_reg = document.getElementById('btn-register');

btnAbrir.addEventListener('click', function(){
    overlay.classList.add('active');
    ventana.classList.add('active');
});

btnCerrar.addEventListener('click', function(){
    overlay.classList.remove('active');
    ventana.classList.remove('active');
});

//abrir Registrarse con el boton 'Registrate'
btnAbrir_reg.addEventListener('click', function(){
    overlay.classList.remove('active');
    ventana.classList.remove('active');
    overlayReg.classList.add('active');
    ventanaReg.classList.add('active');
});


var btnContraseña = document.getElementById('btn-contraseña'),
    abrirCfm = document.getElementById('btn-recuperar'),    
    overContra = document.getElementById('over-contra'),
    overc2 = document.getElementById('over-c2'),
    ventContra = document.getElementById('container-contra'),
    ventC2 = document.getElementById('container-c2'),
    regresar = document.getElementById('go-login'),
    atras = document.getElementById('btn-atras'),
    volverSend = document.getElementById('send')
    btnCerrarContra = document.getElementById('close-contra'),
    cerraCfm = document.getElementById('btn-cancelar');

//si se olvida la contraseña abre esta ventana emergente
btnContraseña.addEventListener('click', function(){
    overlay.classList.remove('active');
    ventana.classList.remove('active');
    overContra.classList.add('active');
    ventContra.classList.add('active');
});

regresar.addEventListener('click', function(){
    overContra.classList.remove('active');
    ventContra.classList.remove('active');
    overlay.classList.add('active');
    ventana.classList.add('active');
});

btnCerrarContra.addEventListener('click', function(){
    overContra.classList.remove('active');
    ventContra.classList.remove('active');
});

//confirmacion
abrirCfm.addEventListener('click', function(){
    overContra.classList.remove('active');
    ventContra.classList.remove('active');
    overc2.classList.add('active');
    ventC2.classList.add('active');
});

atras.addEventListener('click', function(){
    overc2.classList.remove('active');
    ventC2.classList.remove('active');
    overlay.classList.add('active');
    ventana.classList.add('active');
});

volverSend.addEventListener('click', function(){
    overc2.classList.remove('active');
    ventC2.classList.remove('active');
    overContra.classList.add('active');
    ventContra.classList.add('active');
});

cerraCfm.addEventListener('click', function(){
    overc2.classList.remove('active');
    ventC2.classList.remove('active');
});