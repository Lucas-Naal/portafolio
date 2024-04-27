document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll(".scroll__animation");
        
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop - window.innerHeight * 0.75) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });

    const sobremiContainer = document.getElementById("sobremi__container");
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) { 
        sobremiContainer.classList.add("scroll__animation");
    }
});
