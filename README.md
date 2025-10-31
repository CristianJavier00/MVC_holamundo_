# MVC_holamundo_

## Eventos del mouse
**Eventos basicos**

- **click**: Se dispara cuando el usuario hace clic con el botón principal del mouse (generalmente el izquierdo).
- **dblclick**: Se dispara cuando el usuario hace doble clic rápidamente.
- **mousedown**: Se activa cuando el botón del mouse es presionado.
- **mouseup**: Se activa cuando el botón del mouse es liberado.
- **mousemove**: Se dispara cuando el mouse se mueve sobre un elemento.
- **mouseover**: Se activa cuando el puntero del mouse entra en un elemento.
- **mouseout**: Se activa cuando el puntero del mouse sale de un elemento.
- **mouseenter**: Similar a mouseover, pero no se activa al pasar sobre elementos hijos.
- **mouseleave**: Similar a mouseout, pero no se activa al salir hacia elementos hijos.

**Eventos avanzados**

- 10 **contextmenu**: Se dispara cuando el usuario intenta abrir el menú contextual (generalmente clic derecho).
- 11 **wheel**: Se activa cuando el usuario usa la rueda del mouse.
- 12 **dragstart**: Se dispara al comenzar a arrastrar un elemento.
- 13 **drag**: Se activa mientras se arrastra un elemento.
- 14 **dragend**: Se dispara al soltar un elemento arrastrado.

## Maneras de tomar elementos

```html
<body>
    <h1 id="titulo_id">¡HOLA, TITULO!</h1>
    <h1 name="titulo_name">¡Hola, Mundo!</h1>
    <h2>Titulo2</h2>
    <h2>Titulo3</h2>
    <button id="botonMensaje"">Cambiar Mensaje</button>
    <script src="static/js/script.js"></script>
</body>
```


si buscamos un id nos devuelve un valor
si buscamos un name o por tagname nos devuelve un arreglo