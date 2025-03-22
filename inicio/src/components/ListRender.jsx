import React from 'react'
import {useState} from "react";

const ListRender = () => {
    const[nomes] = useState(["Jarad Anthony Higgins", "Kendrick Lamar", "Playboi Carti", "Future"]);
    
    const[users] = useState([
    {
        id: 1,
        name: "Jesus",
        number: 25,
    },
    {
        id: 7,
        name: "Cristiano Ronaldo",
        number: 7,
    },
    {
        id: 10,
        name: "Neymar JR",
        number: 10
    },
    ])

    return (
        <div>
            {/*Lista com index de chave */}
            <ul>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>
            
            {/*Lista com id de chave */}
            {users.map((usuario) => (
                <h2 key={usuario.id}>O nome é {usuario.name}, e seu número é {usuario.number}</h2>
            ))}
        </div>
    )
}

export default ListRender