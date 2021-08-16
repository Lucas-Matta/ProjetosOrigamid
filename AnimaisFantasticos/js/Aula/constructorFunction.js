// Constructor Function
function Carro(marca, ano, preco){
    this.marca = marca,
    this.ano = ano,
    this.valor = preco
};

const honda = new Carro('Honda', 1990, 15000);

/********************** Aula ****************************/

function Dom(seletor)  {
    this.element = () => {
        return document.querySelector(seletor);
    },
    this.ativar = () => {
        const elementActive = this.element();
        elementActive.classList.add('ativo');
    }
}

/********************* Exercices *****************************/

function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade,
    this.andar = () => {
        return console.log(this.nome + ' Andou!')
    }
}

const pessoa1 = new Pessoa('Joao', '20 anos');
console.log(pessoa1);

const pessoa2 = new Pessoa('Maria', '25 anos');
console.log(pessoa2);

const pessoa3 = new Pessoa('Bruno', '15 anos');
console.log(pessoa3);


function Dom2(seletor){
    const elementList = document.querySelectorAll(seletor);

    this.elements = elementList;
    this.addClass = (classe) => {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClasse = (classe) => {
        elementList.forEach((element) => {
            element.addClass.removeClasse(classe);
        })
    }
}

const listaItens = new Dom2('li');

/**************************************************/