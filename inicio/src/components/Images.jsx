import React from 'react'
import JuiceWRLD from "../assets/juice wrld.jpg"

const Images = () => {
  return (
    <div>
        <h1>Images</h1>
        <h2>999 shit</h2>
        {/* Imagem na pasta pública */}
        <img src="./juice wrld burn.jpg" alt="Juice Wrld Burn Album" width={600} />
        <img src="./burn.jpg" alt="" />
        {/* Imagem vindo da pasta assets */}
        <img src={JuiceWRLD} alt="" width={500}/>
    </div>
  )
}

export default Images