// Pegando as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

const primeiraUl = document.querySelectorAll('ul');

// Atualiza em Tempo Real ( Não considera Array )
const gridSectionHTML = document.getElementsByClassName('grid-section');

// Estatica ( Usa como Array )
const gridSectionNode = document.querySelectorAll('.grid-section');

//primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

// Transformando em Array
const arrayGrid = Array.from(gridSectionHTML);