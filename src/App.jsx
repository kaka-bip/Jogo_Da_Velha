import { useState } from "react";
import "./App.css";
import { Button } from "./assets/components/button";
import { Menu } from "./assets/pages/Menu";
// import { useState } from "react";

function App() {
  // const  [jogador, setJogador] = useState('X')
  // const [icon, setIcon] = useState('O');

  const [tela, setTela] = useState("menu");
  const [modo, setModo] = useState("");

  const escolherModo = (modoEscolhido) => {
    setModo(modoEscolhido);
    setTela("jogo");
  };

  return (
    <>
      {tela === "menu" ? (
        <Menu onEscolherModo={escolherModo} />
      ) : (
        <Button modo={modo}/>
      )}
    </>
  );
}

export default App;
