const titulo = document.getElementsByName('Saludo');
const boton = document.getElementById('botonMensaje');

boton.addEventListener('click', function(){
    titulo.textContent = 'Hizo un Clic';
});

boton.addEventListener('dblclick', function(){
    titulo.textContent = 'Hizo un doble Clic';
});

boton.addEventListener('mousedown', function(){
    titulo.textContent = 'Esta precionando el boton';
});

boton.addEventListener('mouseout', function(){
    titulo.textContent = 'Salio del boton';
});

boton.addEventListener('contextmenu', function(){
    titulo.textContent = 'no haga eso';
});