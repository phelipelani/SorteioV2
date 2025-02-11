import { useState, useEffect } from "react";
import ListaJogadores from "./components/ListaJogadores";
import NotasJogadores from "./components/NotasJogadores";
import SorteioButton from "./components/SorteioButton";
import TimesSorteados from "./components/TimesSorteados";
import { validarLista, sorteiarTimes } from "./utils/sorteioUtils";
import { salvarDados, carregarDados } from "./utils/localStorageUtils";
import "./styles/App.css";


const App = () => {
  const [jogadoresFormatados, setJogadoresFormatados] = useState([]);
  const [notas, setNotas] = useState({});
  const [timesSorteados, setTimesSorteados] = useState([]);

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const listaSalva = carregarDados("listaJogadores");
    const notasSalvas = carregarDados("notasJogadores");

    if (listaSalva) setJogadoresFormatados(listaSalva);
    if (notasSalvas) setNotas(notasSalvas);
  }, []);

  // Salvar dados no localStorage sempre que houver alterações
  useEffect(() => {
    salvarDados("listaJogadores", jogadoresFormatados);
  }, [jogadoresFormatados]);

  useEffect(() => {
    salvarDados("notasJogadores", notas);
  }, [notas]);

  const handleValidarLista = (lista) => {
    const listaFormatada = validarLista(lista);
    setJogadoresFormatados(listaFormatada);
  };

  const handleNotaChange = (nome, nota) => {
    setNotas((prevNotas) => ({
      ...prevNotas,
      [nome]: parseInt(nota, 10),
    }));
  };

  const handleSorteio = () => {
    const times = sorteiarTimes(jogadoresFormatados, notas);
    setTimesSorteados(times); // Atualiza o estado com um novo array de times
  };

  return (
    <div className="App">
      <h1>Sorteio de Times</h1>
      <ListaJogadores onValidar={handleValidarLista} />
      {jogadoresFormatados.length > 0 && (
        <>
          <NotasJogadores
            jogadores={jogadoresFormatados}
            notas={notas}
            onNotaChange={handleNotaChange}
          />
          <SorteioButton onClick={handleSorteio} />
        </>
      )}
      {timesSorteados.length > 0 && <TimesSorteados times={timesSorteados} />}
    </div>
  );
};

export default App;
