import React from 'react'
import {useState} from "react";

const Exercicio = () => {
    const[number, setNumber] = useState();
    const[numeros, setNumeros] = useState({});
    return (
        <div>
            <button onClick={() => {
                setNumber(number + 1);
                setNumeros([...numeros, number])
            }}></button>

            <ul>
                {numeros.map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
            
            <button onClick={() => {setNumbers(...numbers, numbers.length + 1)}}>Enviar</button>
        </div>
    )
}

export default Exercicio