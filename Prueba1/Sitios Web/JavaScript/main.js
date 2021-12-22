
//DOM
//querySelector// //querySelectorAll
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})
*/

// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// Recorrerlos.

links.forEach(function(link){
//Agregar un nuevo elemento click a cada uno de ellos -case sensitive

link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");


// Quitarle las clases de animación que ya tiene.
content.classList.remove("fadeInDown");
content.classList.remove("animated");

// Agregar clases para animar su salida fadeOutUp.
content.classList.add("fadeOutUp");
content.classList.add("animated");

    });
});
