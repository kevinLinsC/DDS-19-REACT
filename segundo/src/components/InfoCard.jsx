import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const InfoCard = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const VoltarHome = () => {
        navigate("/");
    }

  return (
    <div style={{display:"flex"}}>
        <h1>InfoCard do cartão: {id}</h1>
        <button onClick={VoltarHome}>Voltar</button>
    </div>
  )
}

export default InfoCard