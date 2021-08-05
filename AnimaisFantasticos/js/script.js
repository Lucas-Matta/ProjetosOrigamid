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

const animais = document.querySelector('.animais');
console.log('Atributos da classe Animais ' + animais.attributes);


const imgAnimais = document.querySelector('img');

// Pega os atributos
console.log('Imagem: ' + imgAnimais.getAttribute('alt'));
// Troca os atributos
imgAnimais.setAttribute('alt', 'Raposa');
console.log('Imagem: ' + imgAnimais.getAttribute('alt'));

// Verifica se possui algum elemento
const possuiAlt = imgAnimais.hasAttribute('alt');
console.log(possuiAlt);

////////////////////////////////////////////////////////////////////////////////////
///              Dimensões e Distancias                 ///

const listaAnimais = document.querySelector('.animais-list');

// Verifica o tamanho de um elemento
const height = listaAnimais.scrollHeight;

// Verifica a largura de um documento
const width = listaAnimais.clientWidth;

console.log(`Height da lista: ${height} e o width: ${width}`);

const primeiroH2 = document.querySelector('h2');

// Pega a distancia da Esquerda
const leftH2 = primeiroH2.offsetLeft;

// Pega a distancia do topo
const topH2 = primeiroH2.offsetTop;

console.log(`A distancia do H2 para left seria ${leftH2} e a distancia do topo seria ${topH2}`);

console.log(
    // Pega o tamanho da janela sem contar o console
    window.innerWidth,
    // Pega o tamanho da janela contando com o console
    window.outerWidth,
    window.innerHeight,
    window.outerHeight,
)

function somaWidthImages(){
    const img = document.querySelectorAll('img');
    let soma = 0;

    img.forEach((image) => {
        soma += image.offsetWidth;
    });

    console.log(soma)
}

window.onload = () => {
    somaWidthImages();
}

////////////////////////////////////////////////////////////////////////////////////
///             Transversing ( Navegação do DOM )                 ///

const animaisLista = document.querySelectorAll('.animais-list');

// animaisLista.parentElement // Pega o pai
// animaisLista.parentElement.parentElement // Pega o pai do Pai

console.log(listaAnimais.previousElementSibling) // Pega o elemento a cima
console.log(listaAnimais.nextElementSibling)// Pega o elemento abaixo

animaisLista.children // Pega os filhos da lista