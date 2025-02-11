export const validarLista = (lista) => {
    return lista
        .split('\n')
        .map(line => line.slice(4).trim())
        .filter(nome => nome.trim() !== '');
};

export const embaralharArray = (array) => {
    return array
        .map((item) => ({ item, ordem: Math.random() }))
        .sort((a, b) => a.ordem - b.ordem)
        .map(({ item }) => item);
};

export const sorteiarTimes = (jogadores, notas) => {
    const jogadoresNota10 = embaralharArray(jogadores.filter(nome => notas[nome] === 10));
    const jogadoresNota7 = embaralharArray(jogadores.filter(nome => notas[nome] === 7));
    const jogadoresNota5 = embaralharArray(jogadores.filter(nome => notas[nome] === 5));

    const totalJogadores = jogadores.length;
    const jogadoresPorTime = 5;
    const quantidadeTimes = Math.floor(totalJogadores / jogadoresPorTime);

    const times = Array.from({ length: quantidadeTimes }, () => []);

    // Distribui os jogadores de forma equilibrada
    const distribuirJogadores = (lista, nota) => {
        lista.forEach((jogador, index) => {
            times[index % quantidadeTimes].push({ nome: jogador, nota });
        });
    };

    distribuirJogadores(jogadoresNota10, 10);
    distribuirJogadores(jogadoresNota7, 7);
    distribuirJogadores(jogadoresNota5, 5);

    // Caso sobrem jogadores, distribui entre os times
    const todosJogadores = [...jogadoresNota10, ...jogadoresNota7, ...jogadoresNota5];
    while (todosJogadores.length % jogadoresPorTime !== 0) {
        times[times.length - 1].push({
            nome: todosJogadores.pop(),
            nota: notas[todosJogadores[todosJogadores.length - 1]] || 5
        });
    }

    return times.map(time => embaralharArray(time)); // Mantém aleatoriedade nos times
};