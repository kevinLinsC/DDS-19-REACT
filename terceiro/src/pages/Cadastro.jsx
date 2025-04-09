import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"

const Cadastro = () => {
  return (
    <div className="mt-3 w-50 mx-auto">
      <h1>Cadastro</h1>
      {/* Caixinha de nome */}
      <FloatingLabel
        controlId="floatingInputNome"
        label="Nome"
        className="mb-3"
      >
        <Form.Control size='lg' type="text"/>
      </FloatingLabel>

      {/* Caixinha de email */}
      <FloatingLabel
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email"/>
      </FloatingLabel>

      {/* Caixinha de senha */}
      <FloatingLabel
        controlId="floatingInputPassword"
        label="Senha"
        className="mb-3"
      >
        <Form.Control type="password"/>
      </FloatingLabel>

      {/* Caixinha de arquivo */}
      <Form.Group controlId='formFile' className="mb-3">
        <Form.Label>Envie um imagem</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      {/* Caixinha de select */}
      <Form.Select size='lg'>
        <option value="">Escolha uma música</option>
        <option value="Misfit">Misfit</option>
        <option value="KTM Drip">KTM Drip</option>
        <option value="Cuffed">Cuffed</option>
      </Form.Select>
      <Button>Cadastrar</Button>
    </div>
  );
};

export default Cadastro;
