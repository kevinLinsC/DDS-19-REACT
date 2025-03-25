import React from 'react'

const Cantor = (props) => {
  return (
    <div>
        <h1>Nome do artista: {props.nome}</h1>
        <h2>Estilo de música: {props.estiloMusical}</h2>
        {(props.premiado && <h2>Já foi premiado.</h2>)
        ||
        (<h2>Nunca foi premiado.</h2>)
        }
    </div>
  )
}

export default Cantor