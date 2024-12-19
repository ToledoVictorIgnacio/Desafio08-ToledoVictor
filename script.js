// Artículos del menú con sus precios
const menu = [
    { nombre: 'Hamburguesa', precio: 8.50 },
    { nombre: 'Pizza', precio: 12.00 },
    { nombre: 'Pollo Frito', precio: 6.50 },
    { nombre: 'Empanada', precio: 5.00 }
];

// Elementos
const formularioPedido = document.getElementById('formularioPedido');
const Confirmar = document.getElementById('confirmacion');
const pedidoDetalles = document.getElementById('pedidoDetalles');
const precioTotal = document.getElementById('precioTotal');

// Envío del formulario
formularioPedido.addEventListener('submit', function(event) {
    event.preventDefault();

    // Datos del formulario
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Validación
    if (!nombre || !direccion || !telefono || !email) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Artículos seleccionados
    const selectedItems = [];
    let total = 0;
    const checkboxes = document.querySelectorAll('.item');
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedItems.push(menu[index].nombre);
            total += menu[index].precio;
        }
    });

    // Si no se seleccionó ningún artículo
    if (selectedItems.length === 0) {
        alert("Selecciona al menos un artículo del menú.");
        return;
    }

    // Mostrar confirmación del pedido
    pedidoDetalles.innerHTML = `
        Nombre: ${nombre} <br>
        Dirección: ${direccion} <br>
        Teléfono: ${telefono} <br>
        Correo: ${email} <br>
        Artículos seleccionados: <br> ${selectedItems.join('<br>')}
    `;

    precioTotal.innerHTML = `Costo Total: $${total.toFixed(2)}`;

    // Mostrar lo confirmado
    Confirmar.style.display = 'block';

    // Borrar datos
    formularioPedido.reset();
});
