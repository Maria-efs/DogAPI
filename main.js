'use strict'

import {pesquisarDog} from "./dog.js"

const criarImg = (endImg) => {
    const img = document.createElement('img')
    img.src = endImg
    return img
}

const carregarImagens = async () => {
    const raca = document.getElementById('raca').value
    const imagens = await pesquisarDog(raca)
    const galeria = document.getElementById('galeria')
    const tagImagens = imagens.map(criarImg)
    galeria.replaceChildren(...tagImagens)
}

//Esse codigo só vai rodar quando a tecla enter for pressionada
//Se evennt for igual a enter, roda a function pesquisar
const handleKeypress = (event) => {
    if (event.key == "Enter"){
        carregarImagens()
    }
}

//Capturando o click de enter do usuario 
document.getElementById('raca').addEventListener('keypress', handleKeypress)

//Keypress é a tecla que for pressionada, pode ser qualquer uma,
    // por isso foi necessario a function para capturar o click em enter
//fetch é uma ferramenta para fazer requisições, ele está entre o JS e as requisições
//API é uma interface, é tudo que está entre uma coisa e outra
//await = espera
//async = programação assincrona, varias coisas acontecendo ao mesmo tempo  