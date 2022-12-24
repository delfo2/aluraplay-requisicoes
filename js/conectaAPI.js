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
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    })
    const dadosProcessados = dadosPrimarios.json();
    return dadosProcessados;
}

export const conectaApi = {
    carregaDados,
    enviaDados
}