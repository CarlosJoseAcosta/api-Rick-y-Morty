let ul = document.getElementById("serie");
const url = "https://rickandmortyapi.com/api/character";
let arrayCesta = [];
let precio = [];
// let modal = document.getElementById("modalCoctail");

function creacionDeNodo(e){
    return document.createElement(e);
}
function anadir(e, y){
    return e.appendChild(y);
}

fetch(url)
.then((resp) => resp.json())
.then(function(dato){
    let personajes = dato.results;
    console.log(personajes);
    return personajes.map(function(x){
        let boton = creacionDeNodo('button');
        let div1 = creacionDeNodo("div");
        let img = creacionDeNodo('img');
        let h2 = creacionDeNodo('h2');
        let h4 = creacionDeNodo('h4');
        let p = creacionDeNodo('p');
        let p1 = creacionDeNodo('p');
        let p2 = creacionDeNodo('p');
        let p3 = creacionDeNodo('p');
        let br = creacionDeNodo("br");
        img.src = x.image;
        h2.textContent = x.name;
        h4.textContent = x.status + " " + x.species;
        p.textContent = "Last know location:";
        p1.textContent = x.location.name;
        p2.textContent = "Originating from:";
        p3.textContent = x.origin.name;
        boton.textContent = "Favorite";
        boton.setAttribute("value", x.id);
        anadir(ul, div1);
        anadir(div1, img);
        anadir(div1, h2);
        anadir(div1, h4);
        anadir(div1, p);
        anadir(div1, p1);
        anadir(div1, p2);
        anadir(div1, p3);
        anadir(div1,boton);
        anadir(div1,br);
        div1.classList.add(
            "col",
        );
    })})