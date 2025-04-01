import React, { useState } from 'react'

import styles from "./Forms.module.css"

const Forms = () => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome:", nome);
        console.log("Email: ", email);
        console.log("Senha: ", senha);
    }

    const handleName = (e) => {
        console.log(e.target.value);
        setNome(e.target.value);
    }

  return (
    <div>
        <h4>Forms</h4>
        <div>
            <form action="" className={styles.formulario} onSubmit={handleSubmit}>
                {/* Label fora do input, com htmlFor */}
                <label htmlFor="nome">
                    <span>Nome:</span>
                    <input type="text" id="nome" placeholder='Nome' onChange={handleName}/>
                </label>
                
                {/* Label envolvendo o input */}
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name='email' placeholder='E-mail' onChange={(e) => {setEmail(e.target.value)}}/>
                </label>

                <label htmlFor="senha">
                    <span>Senha:</span>
                    <input type="text" name="senha" placeholder='Senha' onChange={(e) => {setSenha(e.target.value)}}/>
                </label>

                <input type="submit" value="Enviar" className={styles.btn} />
            </form>
        </div>
    </div>
  )
}

export default Forms