import { useState } from "react";
import { Container, Label, Button, Input, Title, ErrorMsg } from "./styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import api from "../api";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  // mensagem de erro
  const [msg, setMsg] = useState(null);

  const onSubmit = async (data) => {
    try {
      // data = {email, pwd}
      const response = await api.post("/session", data);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      history.push("/home");
    } catch (error) {
      setMsg(error);
    }
  };

  return (
    <Container>
      <Title> Bem vindo </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>E-mail</Label>
        <Input name="email" ref={register} />
        <Label>Senha</Label>
        <Input name="pwd" ref={register} />
        <p />
        <Button>LOGIN</Button>
        {msg && <ErrorMsg>{msg}</ErrorMsg>}
      </form>
    </Container>
  );
};

export default LoginPage;
