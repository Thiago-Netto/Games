// Importar o arquivo que tem os métodos de exceptions
import { handleErrors } from "./exception.js";

var URL = 'http://localhost:3000/jogos';

export const getAllGames = async () => {
    try {
        //Fazendo solicitação get
        const response = await fetch ( URL );
        
        //Lidando com erros na resposta
        handleErrors(response);

        //converter os dados para json
        return await response.json();
              
    } catch (error) {
        console.log('Error >>>', error);
    }

}; 

export const createGame = async (game) => {
    fetch ( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
    })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

export const deleteGame = async (game) => {
    fetch(URL + `/${game.id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

export const updateGame = async (game) => {
    fetch(URL + `/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((data) => console.log("sucesso: ", data))
      .catch((error) => console.log("Erro: ", error));
  };