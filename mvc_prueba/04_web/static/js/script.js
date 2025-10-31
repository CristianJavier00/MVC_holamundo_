const titulo_id = document.getElementById('titulo_id');
const titulo_name = document.getElementsByName('titulo_name');
const titulo_h2 = document.getElementsByTagName('h2');

const boton = document.getElementById('botonMensaje');

boton.addEventListener('click', function(){
    titulo_id.textContent = 'Click';
    titulo_name[0].textContent = 'Click';
    titulo_h2[0].textContent = 'Click';
    titulo_h2[1].textContent = 'Click';
});
