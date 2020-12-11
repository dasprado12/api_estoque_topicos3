import { useState } from "react";
import { Container, Label, Button, ButtonC, Input, Title, ErrorMsg } from "./styles";
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
      const response = await api.post("/login", data);
      console.log(response);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      localStorage.setItem("token", response.data.token)
      history.push("/home");
    } catch (error) {
      setMsg(error);
    }
  };

  const goToC = () => {
    try {
      history.push("/cadastro");

    } catch(error){
      console.log(error)
    }
  }

  return (
    <Container>
      <Title> Bem vindo </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>E-mail</Label>
        <Input name="email" ref={register} />
        <Label>Senha</Label>
        <Input name="senha" ref={register} />
        <p />
        <Button>Login</Button>
        <br/>
        <br/>
        {msg && <ErrorMsg>{msg}</ErrorMsg>}
      </form>
        <ButtonC onClick={handleSubmit(goToC)}>Cadastre-se</ButtonC>
    </Container>
  );
};

export default LoginPage;
