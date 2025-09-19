let perso_list = [
    {
        "name": "Son Goku",
        "role": "Héros principal - Saiyan",
        "description": `Le plus grand défenseur de la Terre, un Saiyan au 
                        cœur pur qui ne cesse de repousser ses limites pour 
                        protéger ses proches et l'univers.`,
        "img": "img/goku.webp"
    },
    {
        "name": "Son Goku",
        "role": "Héros principal - Saiyan",
        "description": `Le plus grand défenseur de la Terre, un Saiyan au 
                        cœur pur qui ne cesse de repousser ses limites pour 
                        protéger ses proches et l'univers.`,
        "img": "img/goku.webp"
    },
]


let perso_list_elmt = document.getElementById("perso-list")
perso_list.forEach(perso => {
    
    let perso_elmt = document.createElement("div")
    let img = document.createElement("img")
    img.src = perso.img
    img.classList.add("img-perso")
    perso_elmt.appendChild(img)
    
    let bottom = document.createElement("div")
    bottom.classList.add("perso-bottom")
    let nom = document.createElement("h2")
    nom.textContent = perso.name
    // perso_elmt.appendChild(nom)

    let role = document.createElement("div")
    role.textContent = perso.role
    // perso_elmt.appendChild(role)

    let description = document.createElement("p")
    description.textContent = perso.description
    bottom.appendChild(nom)
    bottom.appendChild(role)
    bottom.appendChild(description)
    perso_elmt.appendChild(bottom)


    perso_list_elmt.appendChild(perso_elmt)

});