import { conectaApi } from "./conectaAPI.js";
import constroiLi from "./mostraVideo.js";

async function buscaVideo (evento) {
    evento.preventDefault();

    const inputTextoUser = document.querySelector('[data-pesquisa="formulario').value;
    const itensEncontrados = await conectaApi.buscaVideos(inputTextoUser);

    const lista = document.querySelector('[data-lista=""]');

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    itensEncontrados.forEach(elemento => {
        lista.appendChild(
            constroiLi(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
        )
    })

    if(itensEncontrados.length === 0) {
        lista.innerHTML = `<h1>não existe um vídeo com esse nome !!!!!</h1>`
    }
}

const botaoPesquisar = document.querySelector('[data-pesquisa="botao"]');

botaoPesquisar.addEventListener('click', evento => buscaVideo(evento));