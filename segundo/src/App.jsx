import { useState } from "react";
import "./App.css";
import ShowUserName from "./components/ShowUserName";
import Time from "./components/Time";
import Cantor from "./components/Cantor";

function App() {
  const nj = 10;
  const nome = "Jarad Anthony Higgins";
  const [name] = useState("Juice WRLD");
  const titulo = true;

  const [cantores] = useState([
    {
      id: 0,
      nome: "Juice WRLD",
      estiloMusical: "Todos",
      premiado: true,
    },
    {
      id: 1,
      nome: "Playboi Carti",
      estiloMusical: "Trap/Pop",
      premiado: true,
    },
    {
      id: 2,
      nome: "Trippie Red",
      estiloMusical: "Trap/Pop",
      premiado: false,
    },
  ]);
  return (
    <>
      {/* Renderização de componente com props */}
      {/* <ShowUserName name={nome}/> */}

      {/* Props com desestruturação */}
      {/* <Time nome="Flamengo" estado="RJ" posicao={1} campeao={true}/> */}
      {/* <hr /> */}
      {/* <Time nome="Vasco da Gama" estado="RJ" posicao={20} campeao={false}/> */}
      {/* <hr /> */}
      {/* <Time nome="Fluminense" estado="RJ" posicao={19} cmapeao={false}/> */}
      {/* <hr /> */}

      {/* Renderização de lista e passagem de props para componentes */}
      {/* {
      cantores.map((cantor) => (
        <Cantor id={cantor.id} nome={cantor.nome} estiloMusical={cantor.estiloMusical} premiado={cantor.premiado}/> 
      ))
    } */}

      <h2
        style={
          nj > 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30px" }
            : { color: "red", backgroundColor: "blue", fontSize: "30px" }
        }
      >
        ESTE CSS É DINÂMICO
      </h2>
      <h2
        style={
          nj > 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30px" }
            : { color: "red", backgroundColor: "blue", fontSize: "30px" }
        }
      >
        ESTE CSS TAMBÉM É DINÂMICO
      </h2>

      <h1 className={
        titulo ? "titulo-incrivel" : "texto-paia"
      }
      >Título incrível pra teste</h1>
    </>
  );
}

export default App;
