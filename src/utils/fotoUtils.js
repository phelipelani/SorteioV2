export const buscarFoto = (nome) => {
    const caminhoImagem = `/assets/${nome}.png`;
    return caminhoImagem; // Sempre retorna o caminho esperado
};