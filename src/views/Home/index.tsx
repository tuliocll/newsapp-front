import React, { useContext } from "react";

import { StateContext } from "../../state/provider/applicationProvider";
import { Types } from "../../state/reducers/userReducer";

import {
  Nav,
  NavContainer,
  NavItem,
  UserContainer,
  UserContent,
  LogoutButton,
} from "./styles";

function Home() {
  const { state, dispatch } = useContext(StateContext);

  function handleLogout() {
    dispatch({
      type: Types.SignOut,
    });
  }

  return (
    <Nav>
      <NavContainer>
        <NavItem to="#">Inicio</NavItem>
        <NavItem to="#">Noticias</NavItem>
        <NavItem to="#">Comentarios</NavItem>
        <NavItem to="#">Ajuda</NavItem>
      </NavContainer>
      <UserContainer>
        Olá, Tulio
        <UserContent>
          <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </UserContent>
      </UserContainer>
    </Nav>
  );
}

export default Home;
