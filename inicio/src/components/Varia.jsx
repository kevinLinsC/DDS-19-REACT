import React from 'react'
import {useState} from "react";

const Varia = () => {
    // Variaveis padrões do JavaScript
    let algo = "Rex made the beat, so you know I gotta murder it.";
    console.log(algo)

    // Variaveis utilizando o hook useState
    const[musga, setMusga] = useState("Rex made the beat, so you know I gotta murder it.");
    console.log("Minha variável musga: ", musga);

    const[num, setNum] = useState(0);
    const[click, setClick] = useState(10);
    const[preco, setPreco] = useState(50);

    return (
        <div>
            <p>Minha variável: {algo}</p>
            <button onClick={() => {algo = "They act all tough, but in person they be murmuring and mumbling"}}>Seguir</button>

            <p>Valor musga: {musga}</p>
            <button onClick={() => {setMusga("They act all tough, but in person they be murmuring and mumbling")}}>Prosseguir</button>
            <input type="text" name="proxima" />

            <h2>Número: {num}</h2>
            <button onClick={() => {setNum(num + click)}}>Aumentar</button>
            <button onClick={() => {setNum(0)}}>Resetar</button>
            <button onClick={() => {setNum(num - 10)}}>Diminuir</button>
            <button onClick={() => {if (num > 0){setNum(num - preco)}; setPreco(preco + num / 2); setClick(click + 10)}}>Upgrade</button>
        </div>
    )
}

export default Varia