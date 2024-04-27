const tecnologiasImg = [{
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    alt: "asdsadsds",
},
{
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "asdads"
},
{
    src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    alt: "asdads"
}

];

const tecnologiasContainer = document.getElementById("tecnologias__card__img");

tecnologiasImg.forEach(e => {
    const img = document.createElement("img");

    img.src = e.src;
    img.alt = e.alt;
    img.classList.add("tecnologias__img");
    tecnologiasContainer.appendChild(img)

    
});