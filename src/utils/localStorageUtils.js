export const salvarDados = (chave, dados) => {
    localStorage.setItem(chave, JSON.stringify(dados));
};

export const carregarDados = (chave) => {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
};