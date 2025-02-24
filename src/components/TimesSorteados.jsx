import { buscarFoto } from "../utils/fotoUtils";

const TimesSorteados = ({ times }) => {
  if (!times || !Array.isArray(times)) {
    return <div>Nenhum time sorteado ainda.</div>;
  }

  return (
    <>
      <h2>Times Sorteados</h2>
      <div className="times-container">
        {times.map((time, index) => (
          <div key={index} className={`time time-${index + 1}`}>
            {" "}
            {/* Classe dinâmica */}
            <h3>Time {index + 1}</h3>
            <ul>
              {time.map((jogador, idx) => {
                if (!jogador?.nome || jogador?.nota == null) {
                  return null;
                }

                const foto = buscarFoto(jogador.nome); // Garante que a foto não seja undefined
                console.log(`Foto do jogador ${jogador.nome}:`, foto); // <-- Aqui o log das fotos

                return (
                  <li className={`carta_time_${index + 1}`} key={idx}>
                    {" "}
                    {/* Classe dinâmica na li */}
                    {foto && ( // Evita erro se a foto não existir
                      <img
                        src={buscarFoto(jogador.nome)}
                        alt={jogador.nome}
                        onError={(e) => {
                          console.error(
                            `Imagem não encontrada: ${e.target.src}`
                          );
                          e.target.src = "/assets/Avulso.png"; // Define a imagem padrão caso ocorra erro
                        }}
                      />
                    )}
                    <span>{jogador.nome}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimesSorteados;
