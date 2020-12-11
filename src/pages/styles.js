import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px 0px 20px 0px;
`;

export const Label = styled.p`
  color: black;
  margin: 0;
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  width: 255px;
  height: 30px;
  background-color: lightgreen;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonC = styled.button.attrs({
  type: "submit",
})`
  width: 255px;
  height: 30px;
  background-color: lightblue;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: black;
  margin-left: ${({ ml }) => ml}px;
`;

export const ErrorMsg = styled.p`
  color: red;
`;
export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:  50%;
`;
