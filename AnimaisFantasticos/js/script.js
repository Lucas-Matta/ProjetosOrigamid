////////////////////////////////////////////////////////////////////////////////////
///                       Manipulando DOM com JavaScript                        ///

//// Pegando as imagens do site ////
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

////////////////////////////////////////////////////////////////////////////////////
///              Manipulando Classes com JavaScript e Atributos                 ///

//// Pegando o Menu ////
const menu = document.querySelector('.menu');

// Mostrando a lista de classes
console.log(menu.classList)

menu.classList.add('azul');
menu.classList.remove('azul');
// Verifica se existe, se não tiver ele coloca, se tiver ele remove
menu.classList.toggle('azul');
menu.classList.toggle('azul');

// Verifica se existe uma classe
console.log(menu.classList.contains('azul'));