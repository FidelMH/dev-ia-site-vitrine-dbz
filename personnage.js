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
        "name": "Vegeta",
        "role": "Prince des Saiyans",
        "description": `L'ancien prince de la planète Vegeta, rival éternel de Goku, déterminé à devenir le guerrier le plus puissant de l'univers.`,
        "img": "img/vegeta.png"
    },
    {
        "name": "Son Gohan",
        "role": "Saiyan métis - Érudit",
        "description": `Fils de Goku, possède le potentiel le plus élevé mais préfère les études aux combats. Devient redoutable quand ses proches sont menacés.`,
        "img": "img/gohan.png"
    },
    {
        "name": "Piccolo",
        "role": "Namek - Mentor",
        "description": `Ancien ennemi devenu allié précieux, mentor de Gohan et stratège de l'équipe. Sa sagesse égale sa puissance au combat.`,
        "img": "img/piccolo.png"
    },
]


let perso_list_elmt = document.getElementById("perso-list")
perso_list.forEach(perso => {

    let perso_elmt = document.createElement("article") // container personnage
    perso_elmt.classList.add("card-perso")

    // Ajout de l'image
    let img = document.createElement("img")
    img.src = perso.img
    img.alt=perso.name
    img.classList.add("img-perso")
    perso_elmt.appendChild(img)
    
    // container pour la partie basse ( nom role description)
    let bottom = document.createElement("div")
    bottom.classList.add("perso-bottom")

    //Nom
    let nom = document.createElement("h2")
    nom.textContent = perso.name

    // role
    let role = document.createElement("div")
    role.textContent = perso.role
    role.classList.add('perso-role')

    // description
    let description = document.createElement("p")
    description.textContent = perso.description
    description.classList.add("perso-description")


    bottom.appendChild(nom)
    bottom.appendChild(role)
    bottom.appendChild(description)
    perso_elmt.appendChild(bottom)


    perso_list_elmt.appendChild(perso_elmt)

});