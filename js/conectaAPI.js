async function carregaDados () {
    const dadosInicais = await fetch('http://localhost:3000/videos');
    const dadosTratados = await dadosInicais.json();

    return dadosTratados;
}

export const conectaApi = {
    carregaDados
}