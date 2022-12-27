import { conectaApi } from "./conectaAPI.js";

const lista = document.querySelector('[data-lista=""]');

export default function constroiLi (titulo, descricao, url, imagem) {
    const novaLi = document.createElement('li');
    novaLi.className = 'videos__item';
    novaLi.innerHTML = 
        `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
        `
    return novaLi;
}

async function listaVideo () {
    try {
        const listaApi = await conectaApi.carregaDados();
        listaApi.forEach(element => {
            lista.appendChild(
                constroiLi(element.titulo, element.descricao, element.url, element.imagem)
            )
        })
    } catch {
        lista.innerHTML = `<h1> não foi possível carregar os vídeos</h1>`;
    }
}

listaVideo();