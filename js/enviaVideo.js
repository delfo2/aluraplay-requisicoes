import { conectaApi } from "./conectaAPI.js";
const formulario = document.querySelector('[data-formulario="campo"]');

async function enviaVideo (evento) {
    evento.preventDefault();

    const campoLink = document.querySelector('[data-formulario="link"]').value;
    const campoTitulo = document.querySelector('[data-formulario="titulo"]').value;
    const campoImagem = document.querySelector('[data-formulario="imagem"]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.enviaDados(campoTitulo, descricao, campoLink, campoImagem);
    
        window.location.href = '../pages/envio-concluido.html';
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener('submit', evento => enviaVideo(evento));