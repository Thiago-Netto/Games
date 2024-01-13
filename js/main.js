import { getAllGames, createGame, deleteGame, updateGame } from "./service.js";

window.onload = () => {
  loadGames();
};

// Refatorado
const loadGames = () => {  
  const dataContainer = document.getElementById("data-container");
  getAllGames().then((resp) => {
    resp.forEach((jogo) => {
      const gamesElement = document.createElement("div");
      gamesElement.innerHTML = 
        `
          <div class="card">
            <h3>${jogo.nota}</h3>
            <i class="fa-regular fa-heart"></i>
            <div class="image">
            <img src="${jogo.img}" alt="${jogo.nome}">
            <img class="blur" src="${jogo.img}" alt="${jogo.nome}">
            </div>
            <div class="text">
            <h2>${jogo.nome}</h2>
            <p>${jogo.resumo}</p>
            <p>R$ ${jogo.preco}</p>
            </div>                
          </div>
        `;
      dataContainer.appendChild(gamesElement);
    });
  });
};

// Refatorado
document.getElementById('btnCreate').addEventListener('click', () => {
  const jogo = {
    nota: 4.2,
    nome: "The Legend of Zelda",
    img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
    resumo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie tempus ex et ultrices. Praesent in faucibus massa, in pellentesque.",
    preco: 100,
  }
  createGame(jogo)
});


// Refatorado
document.getElementById('btnDelete').addEventListener('click', () => {
  const jogo = {
    nota: 4.2,
    nome: "The Legend of Zelda",
    img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
    resumo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie tempus ex et ultrices. Praesent in faucibus massa, in pellentesque.",
    preco: 100,
    id: 8
 }
 deleteGame(jogo)
});

// Refatorado
document.getElementById('btnUpdate').addEventListener('click', () => {
  const jogo = {
    nota: 4.8,
    nome: "The Legend of Zelda: Tears of the kingdom",
    img: "https://iili.io/JulbyqQ.png",
    resumo: "Tears of the Kingdom ocorre alguns anos depois de Breath of the Wild. Link e Zelda partem para explorar uma caverna sob o Castelo de Hyrule, de onde a escuridão, uma substância venenosa, tem vazado e feito as pessoas adoecerem. Lá, eles encontram um mural representando a fundação de Hyrule e um conflito subsequente conhecido como Guerra do Aprisionamento, e decidem se aventurar mais fundo, provocando o despertar de uma múmia que ataca os dois com tristeza.",
    preco: 350,
    id: 8
  }
  updateGame(jogo);
});