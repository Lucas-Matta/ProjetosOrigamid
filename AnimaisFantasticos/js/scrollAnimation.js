const sections = document.querySelectorAll('.js-scroll');

// Vai fixar a animação em 60% da tela do usuario
const windowHalf = window.innerHeight * 0.6;

function animaScroll(){
    sections.forEach((section) => {
        // Pega as informações da Section, e o top em especifico
        const sectionTop = section.getBoundingClientRect().top;

        const isSectionVisible = (sectionTop - windowHalf) < 0;
        
        if(isSectionVisible){
            section.classList.add('ativo');
        } else {
            section.classList.remove('ativo');
        }
    })
};

animaScroll();

window.addEventListener('scroll', animaScroll);