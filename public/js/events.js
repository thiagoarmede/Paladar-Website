/*
    Scripts de eventos do website.
    Autor: Thiago Armede.
    02/2018
*/


/********************************************************
**Eventos que conectam items do menu à sessões do site.**
********************************************************/

const menuBtnEncomendas = document.querySelector('.menu-enc');
menuBtnEncomendas.addEventListener('click', () => {
    event.preventDefault(); //previnindo que o link conecte a outra page.

    let sessaoEncomendas = document.querySelector('.sessao-forms');
    sessaoEncomendas.scrollIntoView({
        behavior: 'smooth' 
    });
});

const menuBtnFotos = document.querySelector('.menu-fotos');
menuBtnFotos.addEventListener('click', () => {
    event.preventDefault(); //previnindo que o link conecte a outra page.

    let sessaoFotos = document.querySelector('#quad').children[1];
    console.log(sessaoFotos);
    sessaoFotos.scrollIntoView({
        behavior: 'smooth'
    });
});

const menuSobre = document.querySelector('.menu-sobre');
menuSobre.addEventListener('click', () => {
    event.preventDefault(); //previnindo que o link conecte a outra page.

    let sessaoSobre = document.querySelector('.quem-somos');
    sessaoSobre.scrollIntoView({
        behavior: 'smooth'
    });
});

/* Evento de expansão das imagens da galeria */

const quadimages = document.querySelectorAll("#quad figure");
for (i = 0; i < quadimages.length; i++) {
    quadimages[i].addEventListener('click', function () { 
        this.classList.toggle("expanded"); 
        quad.classList.toggle("full") 
    });
}

