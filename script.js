let saga_list = [
    {
        "name" :  "Saga Saiyan",
        "description" : `L'arrivée de Vegeta sur Terre
                        et la révélation des origines de Goku`,
         "image" : "img/saga_saiyan.webp"
    },
    {
        "name" :  "Saga Namek",
        "description" : `La quête des Dragon Balls et 
                        l'affrontement contre l'empereur Frieza`,
         "image" : "img/namek_saiyan.jpeg"
    }
]


let saga_list_elt = document.getElementById("saga-list")
console.log(saga_list_elt)

saga_list.forEach(saga => {
    let saga_elmt = document.createElement("div")
    let img_elmt = document.createElement("img")
    img_elmt.src = saga.image
    saga_elmt.appendChild(img_elmt)
    h3_elt = document.createElement("h3")
    h3_elt.textContent = saga.name
    
    saga_elmt.appendChild(h3_elt)
    let p_elmt = document.createElement("p")
    p_elmt.textContent = saga.description
    saga_elmt.appendChild(p_elmt)
    saga_elmt.classList.add("card")
    saga_list_elt.appendChild(saga_elmt)
});
