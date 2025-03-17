import React from 'react'

const TemplateExpressions = () => {
    let nome = "Juice WRLD";

    let cantor = {
        nome: "Jarad Anthony Higgins",
        pais: "Estados Unidos",
        idade: 21 
    };

    console.log(cantor.nome)
    return (
        <div>
            <h1>O nome do melhor cantor do mundo é: {nome}</h1>
            <p>O cantor: {cantor.nome}, morava nos {cantor.pais} e tinha {cantor.idade} anos.</p>
        </div>
    )
}

export default TemplateExpressions