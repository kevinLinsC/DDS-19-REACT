import React from 'react'

const Time = ({nome, estado, posicao, campeao}) => {
  return (
    <div>
        <h1>Nome do time: {nome}</h1>
        <h3>Estado do time: {estado}</h3>
        <h3>Posição do time: {posicao}</h3>
        {(campeao && <h3>Este time é muito campeão</h3>)
        ||
        (<h3>Este time não é campeão</h3>)}
    </div>
  )
}

export default Time