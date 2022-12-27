async function carregaDados () {
    const dadosInicais = await fetch('http://localhost:3000/videos');
    const dadosTratados = await dadosInicais.json();

    return dadosTratados;
}

async function enviaDados (titulo, descricao, url, imagem) {
    const dadosPrimarios = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if(!dadosPrimarios.ok) {
        throw new Error('não foi possível carregar o vídeo AHAHAHAHAHAHAH');
    }

    const dadosProcessados = await dadosPrimarios.json();
    return dadosProcessados;
}

async function buscaVideos (termoDeBusca) {
    const dadosInicais = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const dadosProcessados = dadosInicais.json();
    return dadosProcessados;
}

export const conectaApi = {
    carregaDados,
    enviaDados,
    buscaVideos
}