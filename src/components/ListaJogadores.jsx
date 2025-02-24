import { useState } from "react";


const ListaJogadores = ({ onValidar }) => {
    const [lista, setLista] = useState('');

    const handleChange = (e) => {
        setLista(e.target.value);
    };

    const handleValidar = () => {
        onValidar(lista);
    };

    return (
        <div className="DivImput">
            <textarea
                value={lista}
                onChange={handleChange}
                placeholder="Cole a lista de jogadores aqui..."
            />
            <button onClick={handleValidar}>Validar</button>
        </div>
    );
};

export default ListaJogadores;