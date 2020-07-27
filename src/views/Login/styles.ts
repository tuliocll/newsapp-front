import styled from "styled-components";
import { Link } from "react-router-dom";

import loginBackgroud from "../../assets/images/login-background.jpg";

export const ContentLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  height: 90vh;
  padding: 20px 200px;
`;

export const ImageArea = styled.div`
  width: 100%;
  background-image: url(${loginBackgroud});
  background-color: #ccc;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #7b7b7b;
`;

export const TextInput = styled.input`
  min-height: 25px;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ccc;
  background: transparent;
  outline: none;
  transition: all 0.4s linear;

  ::placeholder {
    color: #afafaf;
  }

  &:focus {
    border-bottom-color: #6c5b7b;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #6c5b7b;
  border: none;
  color: #fff;
  transition: all 0.4s linear;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 300;
  margin-bottom: 10px;

  &:hover {
    background: #9589a0;
    cursor: pointer;
  }
`;

export const OutlineButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: transparent;
  border: 1px solid #6c5b7b;
  color: #6c5b7b;
  transition: all 0.4s linear;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Roboto";
  font-weight: 300;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    background: #6c5b7b;
    color: #fff;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-family: "Roboto";
  font-weight: 500;
  color: #272727;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 15px;
  margin: 0px;
  color: #7e7e7e;
  margin-bottom: 20px;
`;
