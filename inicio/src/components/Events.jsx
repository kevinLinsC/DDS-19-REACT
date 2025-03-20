import React from 'react'

const Events = () => {
    const teste = (e) => {
        // e = propriedades do evento que chamou a função.
        console.log(e);
        alert("It's me or no one, if you leave I'll take your life away, like you were no one, so tell me you love me.");
    }
  return (
    <div>
        <button onClick={() => {alert("Chasing the lean, rootin my brain")}}>Clica ai pae.</button>
        <button onClick={teste}>Clica pá nois.</button>
    </div>
  )
}

export default Events