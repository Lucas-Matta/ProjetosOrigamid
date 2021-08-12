const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();

    // Pega o atributo do href
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    // Forma alternativa do Scroll Suave
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    });

    // Segunda forma do Scroll Suave
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}   


linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
});