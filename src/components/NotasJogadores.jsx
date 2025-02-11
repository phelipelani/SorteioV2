

const NotasJogadores = ({ jogadores, notas, onNotaChange }) => {
    return (
        <div className="notas-container">
            {jogadores.map((nome, index) => (
                <div key={nome} className="jogador-nota">
                    <span>{nome}</span>
                    <input
                        type="number"
                        value={notas[nome] || ''}
                        onChange={(e) => onNotaChange(nome, e.target.value)}
                        placeholder="Nota"
                    />
                </div>
            ))}
        </div>
    );
};

export default NotasJogadores;