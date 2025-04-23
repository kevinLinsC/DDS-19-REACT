// Importação dos componentes do Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./Cadastro.module.css";
import Button from "react-bootstrap/Button";

import { editarFuncionario } from "../hooks/useApi";

import { useForm } from "react-hook-form";

const Editar = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Função chamada quando o formulário é enviado com sucesso.
    const onSubmit = (data) => {
        console.log("Dados: ", data);
        editarFuncionario(data);
        alert("Funcionário editado com sucesso.");
        window.location.reload();
    };

    const onError = (errors) => {
        console.log("Erros: ", errors);
    };

    return (
        <div>
            <h1>Editar</h1>
            <form 
                className={styles.formulario} 
                onSubmit={handleSubmit(onSubmit, onError)}
            >

                {/* Id */}
                <FloatingLabel
                    controlId="floatingInputId"
                    label="Id"
                    className="mb-4 w-100"
                >
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        {...register("Id", {
                            required: "O id é obrigatório"
                          })}
                        />
                        {errors.id && <p className={styles.error}>{errors.id.message}</p>}
                </FloatingLabel>

                {/* Nome */}
                <FloatingLabel
                    controlId="floatingInputNome"
                    label="Nome"
                    className="mb-4 w-100"
                >
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        {...register("nome", {
                            required: "O nome é obrigatório",
                            minLength: {
                              value: 2,
                              message: "O nome deve ter pelo menos 2 caracteres",
                            },
                            maxLength: {
                              value: 20,
                              message: "O nome deve ter ate 20 caracteres",
                            },
                            pattern: {
                              value: /^[A-Za-z\s]+$/i,
                              message: "O nome só pode conter letras",
                            },
                          })}
                        />
                        {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
                </FloatingLabel>

                {/* Email */}
                <FloatingLabel
                    controlId="floatingInputEmail"
                    label="Email:"
                    className="mb-4 w-100"
                    >
                    <Form.Control
                        size="sm"
                        type="email"
                        placeholder=""
                        {...register("email", {
                        required: "O email é obrigatório",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Email inválido",
                        },
                        validate: (value) => value.includes("@") || "Email inválido",
                        })}
                    />
                    {errors.email && (
                        <p className={styles.error}>{errors.email.message}</p>
                    )}
                </FloatingLabel>

                {/* Senha */}
                <FloatingLabel
                    controlId="floatingSenha"
                    label="Senha"
                    className="mb-4 w-100"
                    >
                    <Form.Control
                        type="password"
                        placeholder=""
                        {...register("senha", {
                        required: "A senha é obrigatória",
                        minLength: {
                            value: 8,
                            message: "A senha deve ter pelo menos 8 caracteres",
                        },
                        maxLength: {
                            value: 20,
                            message: "A senha deve ter menos de 20 caracteres",
                        },
                        //Comentar essa parte para não validar a senha
                        // pattern: {
                        //   value:
                        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        //   message:
                        //     "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
                        // },
                        })}
                    />
                    {errors.senha && (
                        <p className={styles.error}>{errors.senha.message}</p>
                    )}
                    </FloatingLabel>

                    {/* Caixinha select */}
                    <FloatingLabel
                    controlId="floatingSelects"
                    label="Tipo de usuário"
                    className="mb-4 w-100 text-center"
                    >
                    <Form.Select {...register("tipo")}>
                        <option value="Administrador">Administrador</option>
                        <option value="Funcionário">Funcionário</option>
                        <option value="Gerente">Gerente</option>
                    </Form.Select>
                    {errors.tipo && <p className={styles.error}>{errors.tipo.message}</p>}
                    </FloatingLabel>

                    {/* Submit */}
                    <Button
                        as="input"
                        type="submit"
                        value="Editar"
                        className="mb-4 w-30 mx-auto"
                    />
            </form>
        </div>
    );
}

export default Editar;