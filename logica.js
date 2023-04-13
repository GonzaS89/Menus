class Vegetariano {
    constructor(nombre,imagen,descripcion){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

function construirOferta (x){
    const nombre = document.getElementById('nombre')
    nombre.textContent = x.nombre;
    const imagen = document.createElement('IMG');
    imagen.src = x.imagen;

    const foto = document.getElementById('foto')
    foto.appendChild(imagen)

    const descripcion = document.getElementById('descripcion')
    descripcion.textContent = x.descripcion;
}

function construirOferta2 (x){
    const nombre2 = document.getElementById('nombre2')
    nombre2.textContent = x.nombre;
    const imagen2 = document.createElement('IMG');
    imagen2.src = x.imagen;

    const foto2 = document.getElementById('foto2')
    foto2.appendChild(imagen2)

    const descripcion2 = document.getElementById('descripcion2')
    descripcion2.textContent = x.descripcion;
}
function construirOferta3 (x){
    const nombre3 = document.getElementById('nombre3')
    nombre3.textContent = x.nombre;
    const imagen3 = document.createElement('IMG');
    imagen3.src = x.imagen;

    const foto3 = document.getElementById('foto3')
    foto3.appendChild(imagen3)

    const descripcion3 = document.getElementById('descripcion3')
    descripcion3.textContent = x.descripcion;
}

const menu1 = new Vegetariano ('Tamal','Imagenes/tamal.jpg','Comida argentina tipo');

const menu2 = new Vegetariano ('Taco','Imagenes/taco.jpg','Comida mexicana tipo');

const menu3 = new Vegetariano ('Vaca','Imagenes/vaca.jpg','Vacuna');



construirOferta(menu1)
construirOferta2(menu2)
construirOferta3(menu3)








