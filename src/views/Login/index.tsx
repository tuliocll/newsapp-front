import React, { useState, useContext } from "react";

import { StateContext } from "../../state/provider/applicationProvider";
import { Types } from "../../state/reducers/userReducer";
import { notify } from "react-notify-toast";

import {
  ContentLogin,
  ImageArea,
  LoginArea,
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
  OutlineButton,
  ButtonContainer,
  Title,
  SubTitle,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(StateContext);

  async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (email === "" || password === "") {
        notify.show("Faltando campos", "warning");
        return false;
      }
      const response = await fetch("http://localhost:3333/sessions", {
        method: "POST",
        headers: [
          ["Accept", "application/json"],
          ["Content-Type", "application/json"],
        ],
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status !== 200) {
        notify.show("Usuario ou senha invalidos!", "error");
        return false;
      }

      const user = await response.json();

      dispatch({
        type: Types.SignIn,
        payload: {
          userName: "",
          signed: true,
          token: user.token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContentLogin>
      <ImageArea />

      <LoginArea>
        <Form onSubmit={handleSignIn}>
          <Title>Bem vindo ao News App</Title>
          <SubTitle>
            A maneira mais simples e facil de criar e acompanhar suas noticias
            favoritas
          </SubTitle>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              value={email}
              onChange={(value) => {
                setEmail(value.target.value);
              }}
              type="email"
              placeholder="usuario@exemplo.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <TextInput
              value={password}
              onChange={(value) => {
                setPassword(value.target.value);
              }}
              type="password"
              id="password"
              placeholder="*****"
            />
          </FormGroup>

          <ButtonContainer>
            <Button type="submit" className="pure-button pure-button-primary">
              Entrar
            </Button>
            ou
            <OutlineButton to="/register">Criar conta</OutlineButton>
          </ButtonContainer>
        </Form>
      </LoginArea>
    </ContentLogin>
  );
}

export default Login;
