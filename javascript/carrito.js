let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  guardarCarrito();
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total");
  if (!listaCarrito || !totalCarrito) return;

  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
    total += item.precio;
  });
  totalCarrito.textContent = total;
}

const btnVaciar = document.getElementById("vaciar-carrito");
if (btnVaciar) {
  btnVaciar.addEventListener("click", vaciarCarrito);
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();

  const productos = [
    {
      id: 1,
      nombre: "Camisa de Trabajo",
      precio: 20000,
      img: "../image/Camisa-de-trabajo.webp",
    },
    {
      id: 2,
      nombre: "Campera de Abrigo",
      precio: 40000,
      img: "../image/Campera-de-abrigo.jpeg",
    },
    {
      id: 3,
      nombre: "Botas de Seguridad",
      precio: 80000,
      img: "../image/Botas-de-seguridad.JPG",
    },
    {
      id: 4,
      nombre: "Pantalon cargo comun",
      precio: 46000,
      img: "../image/cargo comun.webp",
    },
    { id: 5, nombre: "Ambo sanidad", precio: 60000, img: "../image/ambo.JPG" },
    {
      id: 6,
      nombre: "Pantalon cargo rip stop",
      precio: 56000,
      img: "../image/cargoripstop.webp",
    },
    {
      id: 7,
      nombre: "Pantalon de trabajo",
      precio: 28000,
      img: "../image/pantalon de trabajo.webp",
    },
    {
      id: 8,
      nombre: "Conjunto de seguridad",
      precio: 65000,
      img: "../image/ropa de seguridad.JPG",
    },
    {
      id: 9,
      nombre: "Faldón de cocina",
      precio: 15000,
      img: "../image/fladon.JPG",
    },
    {
      id: 10,
      nombre: "Chaqueta de chef",
      precio: 35000,
      img: "../image/chaqueta de chef.JPG",
    },
  ];

  const contenedorProductos = document.getElementById("productos-container");

  if (contenedorProductos) {
    productos.forEach((producto) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta producto";
      tarjeta.dataset.id = producto.id;
      tarjeta.dataset.nombre = producto.nombre;
      tarjeta.dataset.precio = producto.precio;

      tarjeta.innerHTML = `
        <div class="tarjeta-imagen">
          <img src="${producto.img}" alt="${producto.nombre}" />
        </div>
        <div class="tarjeta-contenido">
          <h3 class="tarjeta-titulo">${producto.nombre}</h3>
          <span class="tarjeta-precio">$${producto.precio}</span>
          <button class="tarjeta-boton agregar-carrito">Agregar al carrito</button>
        </div>
      `;

      contenedorProductos.appendChild(tarjeta);
    });

    contenedorProductos.addEventListener("click", (e) => {
      if (e.target.classList.contains("agregar-carrito")) {
        const tarjeta = e.target.closest(".producto");
        const producto = {
          id: tarjeta.dataset.id,
          nombre: tarjeta.dataset.nombre,
          precio: parseInt(tarjeta.dataset.precio),
        };
        agregarAlCarrito(producto);
      }
    });
  }
});
 function agregarAlCarrito(producto) {
  carrito.push(producto);
  guardarCarrito();
  actualizarCarrito();


  const notificacion = document.createElement("div");
  notificacion.textContent = `${producto.nombre} agregado al carrito`;
  notificacion.style.position = "fixed";
  notificacion.style.top = "20px";
  notificacion.style.right = "20px";
  notificacion.style.backgroundColor = "#007bff";
  notificacion.style.color = "#fff";
  notificacion.style.padding = "10px 20px";
  notificacion.style.borderRadius = "8px";
  notificacion.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
  notificacion.style.zIndex = "1000";
  document.body.appendChild(notificacion);

  setTimeout(() => {
    notificacion.remove();
  }, 2000);

}
