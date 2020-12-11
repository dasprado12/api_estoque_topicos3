import { useState } from "react";
import { Container, Label, Button, ButtonC, Input, Title, ErrorMsg } from "./styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import api from "../api";

const CadastroPage = () => {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  // mensagem de erro
  const [msg, setMsg] = useState(null);

  const onSubmit = async (data) => {
    try {
      // data = {email, pwd}

      const response = await api.post("/cadastro", data);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      history.push("/");
    } catch (error) {
      setMsg(error);
    }
  };

  const goToH = () => {
    try {
      history.push("/");

    } catch(error){
      console.log(error)
    }
  }

  return (
    <Container>
      <Title> Cadastre-se </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input name="name" ref={register} />
        <Label>E-mail</Label>
        <Input name="email" ref={register} />
        <Label>Senha</Label>
        <Input name="pwd" ref={register} />
        <p />
        <Button>Cadastrar</Button>
        {msg && <ErrorMsg>{msg}</ErrorMsg>}
      </form>
      <br/>
      <ButtonC onClick={handleSubmit(goToH)}>Log-in</ButtonC>

    </Container>
  );
};

export default CadastroPage;
