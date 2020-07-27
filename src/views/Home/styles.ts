import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #6c5b7b;
  padding: 0px 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin-left: auto;
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 300;
`;

export const UserContent = styled.div`
  display: none;
  position: absolute;
  background-color: #6c5b7b;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  color: #fff;
`;

export const UserContainer = styled.div`
  margin-left: auto;
  color: #fff;
  &:hover ${UserContent} {
    display: block;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: #fff;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div``;
