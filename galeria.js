function cambiarEstilo(id){
    var contenedor = document.getElementById("contenedor_imagen" + id);

    contenedor.style.position = "fixed";
    contenedor.style.top = "0";
    contenedor.style.left = "0";
    contenedor.style.width = "100%";
    contenedor.style.minHeight = "100%";
    contenedor.style.background = "rgba(0, 0, 0, 0.8)";
    contenedor.style.display = "flex";
    contenedor.style.alignItems = "center";
    contenedor.style.justifyContent = "center";
    contenedor.style.zIndex = "1"; 

    var imagen = document.getElementById(id);

    imagen.style.filter = "none";
    imagen.style.transform = "scale(1.6)";
    imagen.style.width = "200px";
    imagen.style.height = "auto";
    imagen.style.zIndex = "2";

    var nuevoContenedor = document.getElementById("nuevo_contenedor" + id);
    if (!nuevoContenedor) {
        nuevoContenedor = document.createElement("div");
        nuevoContenedor.id = "nuevo_contenedor" + id;
        nuevoContenedor.style.position = "fixed";
        nuevoContenedor.style.top = "0";
        nuevoContenedor.style.left = "0";
        nuevoContenedor.style.width = "100%";
        nuevoContenedor.style.height = "10%";
        nuevoContenedor.style.background = "rgba(103, 150, 172,0.8)";
        nuevoContenedor.style.display = "flex";
        nuevoContenedor.style.alignItems = "center";
        nuevoContenedor.style.justifyContent = "center";
        nuevoContenedor.style.zIndex = "2";
        document.body.appendChild(nuevoContenedor);

        
    }

    var nuevaImagen = document.createElement("img");
    nuevaImagen.src = "imagenes/circle-xmark-solid.svg";
    nuevaImagen.style.width = "35px";
    nuevaImagen.style.height = "35px";
    nuevaImagen.style.cursor = "pointer";
    nuevoContenedor.appendChild(nuevaImagen);

    nuevaImagen.addEventListener("click", function(){
        nuevoContenedor.remove();

        contenedor.style.width = "200px";
        contenedor.style.height = "auto";
        contenedor.style.maxHeight = "200px";
        contenedor.style.overflow = "hidden";
        contenedor.style.position = "relative";
        contenedor.style.margin = "1px";
        
        imagen.style.transform = "scale(1.2)";
        imagen.style.width = "200px";
        imagen.style.height = "auto";
        imagen.style.zIndex = "0";

        imagen.addEventListener("mouseover", function(){
            imagen.style.filter = "brightness(50%)";
        });
        imagen.addEventListener("mouseout", function(){
            imagen.style.filter = "brightness(100%)";
        });

    });

    

    
}