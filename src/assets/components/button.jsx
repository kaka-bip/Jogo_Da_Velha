import { useState } from "react";
// import { resume } from "react-dom/server";

export const Button = ({modo}) => {
  const [casas, setCasas] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [jogador, setJogador] = useState("X");
  const [resultado, setResultado] = useState(null);
  const seJogador = () => {
    if (jogador === "X") {
      setJogador("O");
    } else {
      setJogador("X");
    }
  };

  const clicarCasa = (index) => {
    if (casas[index] != null) {
      return;
    }
    
    if(resultado !== null){
      return;
    }

    const novasCasas = [...casas];
    novasCasas[index] = jogador;

    setCasas(novasCasas);
    vencedor(novasCasas);
    seJogador();
  };

  const vencedor = (novasCasas) => {
    if (
      novasCasas[0] === "X" &&
      novasCasas[1] === "X" &&
      novasCasas[2] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[0] === "O" &&
      novasCasas[1] === "O" &&
      novasCasas[2] === "O"
    ) {
      setResultado("O VENCEU");
    } else if (
      novasCasas[3] === "X" &&
      novasCasas[4] === "X" &&
      novasCasas[5] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[3] === "O" &&
      novasCasas[4] === "O" &&
      novasCasas[5] === "O"
    ) {
      setResultado("O VENCEU");
    } else if (
      novasCasas[6] === "X" &&
      novasCasas[7] === "X" &&
      novasCasas[8] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[6] === "O" &&
      novasCasas[7] === "O" &&
      novasCasas[8] === "O"
    ) {
      setResultado("O VENCEU");
    }

    // COLUNA 1: posições 0, 3 e 6
    else if (
      novasCasas[0] === "X" &&
      novasCasas[3] === "X" &&
      novasCasas[6] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[0] === "O" &&
      novasCasas[3] === "O" &&
      novasCasas[6] === "O"
    ) {
      setResultado("O VENCEU");
    }

    // COLUNA 2: posições 1, 4 e 7
    else if (
      novasCasas[1] === "X" &&
      novasCasas[4] === "X" &&
      novasCasas[7] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[1] === "O" &&
      novasCasas[4] === "O" &&
      novasCasas[7] === "O"
    ) {
      setResultado("O VENCEU");
    }

    // COLUNA 3: posições 2, 5 e 8
    else if (
      novasCasas[2] === "X" &&
      novasCasas[5] === "X" &&
      novasCasas[8] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[2] === "O" &&
      novasCasas[5] === "O" &&
      novasCasas[8] === "O"
    ) {
      setResultado("O VENCEU");
    }

    // PRIMEIRA DIAGONAL: posições 0, 4 e 8
    else if (
      novasCasas[0] === "X" &&
      novasCasas[4] === "X" &&
      novasCasas[8] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[0] === "O" &&
      novasCasas[4] === "O" &&
      novasCasas[8] === "O"
    ) {
      setResultado("O VENCEU");
    }

    // SEGUNDA DIAGONAL: posições 2, 4 e 6
    else if (
      novasCasas[2] === "X" &&
      novasCasas[4] === "X" &&
      novasCasas[6] === "X"
    ) {
      setResultado("X VENCEU");
    } else if (
      novasCasas[2] === "O" &&
      novasCasas[4] === "O" &&
      novasCasas[6] === "O"
    ) {
      setResultado("O VENCEU");
    } else if (novasCasas.every((casa) => casa !== null)) {
      setResultado("EMPATE!");
    }

  };

  const reiniciar = () => {
  setCasas([null, null, null, null, null, null, null, null, null]);
  setJogador("X");
  setResultado(null);
  }

  return (
    <>

    <h1>
      {modo === "bot" ? "Contra o Bot" : "Contra um Amigo "}
    </h1>

      <h2>É a vez do jogador {jogador} </h2>
      
      {resultado && <h3>{resultado}</h3> }

      <div className="tabuleiro">
        {casas.map((casa, index) => {
          return (
            <button key={index} onClick={() => clicarCasa(index)}>
              {casa}
            </button>
          );
        })}
      </div>

      <button onClick={reiniciar} className="reiniciar">
        Reiniciar
      </button>
    </>
  );
};
