const proyectosImg = [
    {
        src: "https://i.ytimg.com/vi/icczAumbBpc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAZ6LUqXpYEn4MwdxPEV41U7WEYHg",
        alt: "proyecto1",
    }, {
        src: "https://i.ytimg.com/vi/cOUNOi297Mw/maxresdefault.jpg",
        alt: "proyecto2",
    },{
        src: "https://i.ytimg.com/vi/7YDagj3cVAk/maxresdefault.jpg",
        alt: "proyecto3",
    }

];

const proyectosContainer = document.getElementById("mis__proyectos__card__img");


proyectosImg.forEach(proyecto  => {
    const img = document.createElement("img");
    img.src = proyecto.src;
    img.alt = proyecto.alt;
    img.classList.add("proyecto__img")
    proyectosContainer.appendChild(img)
});




