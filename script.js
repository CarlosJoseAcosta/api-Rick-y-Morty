let ul = document.getElementById("serie");
const url = "https://rickandmortyapi.com/api/character";
let arrayPersonajes = [];
let Estatus = [];
let modal = document.getElementById("modalCoctail");

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
        if(x.status == "Alive"){
            h4.textContent = "✅" + x.status + " " + x.species;
        }else if(x.status == "Dead"){
            h4.textContent = "⚰️" + x.status + " " + x.species;
        }else{
            h4.textContent = "❓" + x.status + " " + x.species;
        }
        p.textContent = "Last know location:";
        p1.textContent = x.location.name;
        p2.textContent = "Originating from:";
        p3.textContent = x.origin.name;
        boton.textContent = "Favorite";
        boton.setAttribute("value", x.status);
        boton.setAttribute("id", x.name);
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
            "border",
            "border-succes",
        );
    })
})

ul.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        let valorBoton = e.target.value;
        let EstatusPersonaje = e.target.id;
        localStorage.setItem("cesta",JSON.stringify(arrayPersonajes));
        if(localStorage.cesta){
            let auxiliar = localStorage.getItem("cesta");
            arrayPersonajes = JSON.parse(auxiliar);
            arrayPersonajes.push(valorBoton);
            console.log(arrayPersonajes);
        }else{
            arrayPersonajes.push(valorBoton);
            localStorage.setItem("cesta",JSON.stringify(arrayPersonajes));
        }
        if(localStorage.Estatus){
            let auxiliar = localStorage.getItem("Estatus");
            Estatus = JSON.parse(auxiliar);
            Estatus.push(EstatusPersonaje);
            console.log(Estatus);
        }else{
            Estatus.push(EstatusPersonaje);
            localStorage.setItem("cesta",JSON.stringify(arrayPersonajes));
            console.log(Estatus);
        }
    }
})
let nose = document.getElementById("cesta");
nose.addEventListener("click", ()=>{
    for(let i = 0; i < arrayPersonajes.length; i++){
        let pCarrito = document.createElement("p");
        pCarrito.textContent = Estatus[i] + "--------------" + arrayPersonajes[i];
        modal.appendChild(pCarrito);
    }
})